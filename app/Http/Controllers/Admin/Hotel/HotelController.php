<?php

namespace App\Http\Controllers\Admin\Hotel;

use App\Datatables\Core\Datatable;
use App\Http\Controllers\Controller;
use App\Http\Requests\HotelRequest;
use App\Models\Hotel;
use App\Models\PaymentMethod;
use App\Models\RoomFacility;
use App\Support\TempUpload;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

/**
 * Hotels: one Headquarters + many Branches.
 * Pages: resources/js/Pages/Hotels/Index.vue, Form.vue
 */
class HotelController extends Controller
{
    public function index()
    {
        $hq = Hotel::hq();

        return Inertia::render('Hotels/Index', [
            'table'     => Datatable::props('hotels'),
            'createUrl' => route('admin.hotels.create'),
            'hq'        => $hq ? ['name' => $hq->name, 'editUrl' => route('admin.hotels.edit', $hq), 'branches' => $hq->branches()->count()] : null,
        ]);
    }

    /**
     * One HQ, many branches: the type is never chosen by the user.
     * No HQ yet -> this is the HQ. Otherwise -> a branch of the HQ.
     */
    public function create()
    {
        $hotel = new Hotel([
            'type'            => Hotel::hq() ? Hotel::TYPE_BRANCH : Hotel::TYPE_HQ,
            'status'          => 'active',
            'phones'          => [['label' => 'Main', 'number' => '']],
            // start with the common enabled ones
            'payment_methods' => PaymentMethod::enabled()->whereIn('key', ['visa', 'mastercard', 'duitnow', 'fpx', 'cash'])->pluck('key')->all(),
        ]);

        return $this->form($hotel);
    }

    public function store(HotelRequest $request)
    {
        try {
            $hotel = DB::transaction(function () use ($request) {
                $hotel = Hotel::create($this->attributes($request) + ['slug' => $this->uniqueSlug($request->input('name'))]);
                $this->saveRelations($hotel, $request);

                return $hotel;
            });
        } catch (QueryException $e) {
            // hotels.hq_lock unique index: someone else added the HQ at the same moment
            if (str_contains($e->getMessage(), 'hq_lock')) {
                throw ValidationException::withMessages(['type' => 'A headquarters already exists. Reload the page to add a branch instead.']);
            }
            throw $e;
        }

        return redirect()->route('admin.hotels.index')->with('status', "{$hotel->name} added.");
    }

    public function edit(Hotel $hotel)
    {
        return $this->form($hotel->load('nearbyPlaces', 'facilities'));
    }

    public function update(HotelRequest $request, Hotel $hotel)
    {
        DB::transaction(function () use ($request, $hotel) {
            $hotel->update($this->attributes($request));
            $this->saveRelations($hotel, $request);
        });

        return redirect()->route('admin.hotels.index')->with('status', "{$hotel->name} updated.");
    }

    public function destroy(Request $request, Hotel $hotel)
    {
        // the headquarters is permanent (created by migration) - edit it, never delete it
        if ($hotel->isHeadquarters()) {
            $message = 'The headquarters cannot be deleted. You can edit its details instead.';

            return $request->expectsJson()
                ? response()->json(['message' => $message], 422)
                : back()->withErrors(['hotel' => $message]);
        }

        $photo = $hotel->photo_path;
        $hotel->delete();
        if ($photo) {
            Storage::disk('public')->delete($photo);
        }

        return $request->expectsJson()
            ? response()->json(['message' => 'Hotel deleted.'])
            : redirect()->route('admin.hotels.index')->with('status', 'Hotel deleted.');
    }

    // -----------------------------------------------------------------

    /** Add + Edit share one Vue page. */
    private function form(Hotel $hotel)
    {
        $hq = Hotel::hq();

        return Inertia::render('Hotels/Form', [
            'hotel' => [
                ...$hotel->only([
                    'id', 'type', 'status', 'name', 'brand', 'tagline', 'description', 'star_rating',
                    'legal_name', 'registration_no',
                    'address_line1', 'address_line2', 'city', 'state', 'postcode', 'country',
                    'latitude', 'longitude', 'map_url',
                    'email', 'website', 'reception_hours', 'late_arrival_note',
                    'cancellation_policy', 'house_rules',
                    'parking_fee', 'parking_clearance', 'parking_notes',
                ]),
                'check_in_time'     => $hotel->check_in_time ? substr($hotel->check_in_time, 0, 5) : '',
                'check_out_time'    => $hotel->check_out_time ? substr($hotel->check_out_time, 0, 5) : '',
                'parking_available' => (bool) $hotel->parking_available,
                'phones'            => $hotel->phones ?? [],
                'social_links'      => (object) ($hotel->social_links ?? []),
                'payment_methods'   => $hotel->payment_methods ?? [],
                'facility_ids'      => $hotel->exists ? $hotel->facilities->pluck('id') : [],
                'nearby_places'     => $hotel->exists ? $hotel->nearbyPlaces->map->only('name', 'category', 'distance_km') : [],
                // FilePond list: [] = no photo yet, [{ id: 'current', url }] = existing photo
                'photo'             => $hotel->photo_path ? [['id' => 'current', 'url' => $hotel->photo_url]] : [],
                'photo_placeholder' => '/images/hotel-placeholder.svg',
            ],
            'hq' => $hq ? ['id' => $hq->id, 'name' => $hq->name] : null,
            // hotel switcher under the photo: every hotel, HQ first (small select, uses the type/name indexes)
            'hotels' => Hotel::query()
                ->select(['id', 'type', 'status', 'name', 'brand'])
                ->orderByRaw("type = 'headquarters' desc")
                ->orderBy('name')
                ->get()
                ->map(fn (Hotel $h) => [
                    'id'       => $h->id,
                    'title'    => $h->name,
                    'subtitle' => $h->brand ?: Hotel::TYPES[$h->type],
                    'icon'     => $h->isHeadquarters() ? 'fas fa-building' : 'fas fa-hotel',
                    'tag'      => $h->isHeadquarters() ? 'HQ' : null,
                    'active'   => $h->status === 'active',
                    'url'      => route('admin.hotels.edit', $h),
                ]),
            'options' => [
                'statuses'        => $this->options(Hotel::STATUSES),
                'paymentMethods'  => $this->paymentMethodGroups($hotel),
                'placeCategories' => $this->options(Hotel::PLACE_CATEGORIES),
                'socialNetworks'  => Hotel::SOCIAL_NETWORKS,
                'facilities'      => $this->facilityGroups(),
            ],
            'submitUrl' => $hotel->exists ? route('admin.hotels.update', $hotel) : route('admin.hotels.store'),
            'backUrl'   => route('admin.hotels.index'),
        ]);
    }

    /** Plain columns from the request. Branches always belong to the HQ. */
    private function attributes(HotelRequest $request): array
    {
        $data = $request->safe()->except(['phones', 'social_links', 'facility_ids', 'nearby_places', 'photo']);

        $data['parent_id'] = $data['type'] === Hotel::TYPE_BRANCH ? Hotel::hq()?->id : null;
        $data['phones'] = array_values(array_filter($request->input('phones', []), fn ($p) => ! empty($p['number'])));
        $data['social_links'] = array_filter($request->input('social_links', []));
        $data['payment_methods'] = $request->input('payment_methods', []);
        $data['parking_available'] = $request->boolean('parking_available');

        return $data;
    }

    /** Facilities, nearby places and the image gallery. */
    private function saveRelations(Hotel $hotel, HotelRequest $request): void
    {
        $hotel->facilities()->sync($request->input('facility_ids', []));

        $hotel->nearbyPlaces()->delete();
        foreach (array_values($request->input('nearby_places', [])) as $i => $place) {
            $hotel->nearbyPlaces()->create([
                'name'        => $place['name'],
                'category'    => $place['category'],
                'distance_km' => $place['distance_km'] ?? null,
                'sort_order'  => $i,
            ]);
        }

        $this->savePhoto($hotel, $request->input('photo', []));
    }

    /**
     * Photo from <ui-file-upload variant="avatar">:
     *   [{ id: 'current' }] -> keep   |   [{ upload: token }] -> replace   |   [] -> remove
     */
    private function savePhoto(Hotel $hotel, array $photo): void
    {
        $entry = $photo[0] ?? null;

        if (($entry['id'] ?? null) === 'current') {
            return; // unchanged
        }

        $old = $hotel->photo_path;
        $new = ! empty($entry['upload'])
            ? TempUpload::claim($entry['upload'], 'public', "hotels/{$hotel->id}")
            : null;

        $hotel->update(['photo_path' => $new]);

        if ($old && $old !== $new) {
            Storage::disk('public')->delete($old);
        }
    }

    private function uniqueSlug(string $name): string
    {
        $slug = $base = Str::slug($name) ?: 'hotel';
        for ($i = 2; Hotel::where('slug', $slug)->exists(); $i++) {
            $slug = "{$base}-{$i}";
        }

        return $slug;
    }

    /**
     * Payment methods for the hotel form, grouped like Settings › Payment Methods:
     * [{ key, label, icon, color, items: [{ key, name, logo_url }] }]
     * Only enabled methods, plus any this hotel already accepts (so nothing is lost).
     */
    private function paymentMethodGroups(Hotel $hotel): array
    {
        $selected = $hotel->payment_methods ?? [];
        $methods = PaymentMethod::ordered()
            ->where(fn ($q) => $q->where('is_enabled', true)->orWhereIn('key', $selected))
            ->get(['key', 'name', 'category', 'logo_path', 'is_enabled']);

        return collect(PaymentMethod::categoryOptions())
            ->map(fn ($cat) => $cat + ['items' => $methods->where('category', $cat['key'])->map(fn ($m) => [
                'key'      => $m->key,
                'name'     => $m->name,
                'logo_url' => $m->logo_url,
                'disabled' => ! $m->is_enabled, // switched off in Settings but still on this hotel
            ])->values()])
            ->filter(fn ($cat) => $cat['items']->isNotEmpty())
            ->values()
            ->all();
    }

    /** Facilities grouped by category ("Hotel Services" first) - one query, grouped in PHP. */
    private function facilityGroups(): array
    {
        $byCategory = RoomFacility::orderBy('name')->get(['id', 'name', 'category'])->groupBy('category');

        return collect(RoomFacility::CATEGORIES)
            ->filter(fn ($label, $key) => $byCategory->has($key))
            ->map(fn ($label, $key) => [
                'label' => $label,
                'items' => $byCategory[$key]->map->only('id', 'name')->values(),
            ])
            ->values()
            ->all();
    }

    private function options(array $map): array
    {
        return collect($map)->map(fn ($label, $value) => ['value' => $value, 'label' => $label])->values()->all();
    }
}
