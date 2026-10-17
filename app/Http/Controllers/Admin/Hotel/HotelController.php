<?php

namespace App\Http\Controllers\Admin\Hotel;

use App\Datatables\Core\Datatable;
use App\Http\Controllers\Controller;
use App\Http\Requests\HotelRequest;
use App\Models\Hotel;
use App\Models\PaymentMethod;
use App\Models\Room;
use App\Models\HotelFacility;
use App\Models\RoomType;
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
        return $this->form($hotel->load('nearbyPlaces', 'facilities', 'faqs', 'levels.rooms', 'rates'));
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
                    'map_url',
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
                // { room_type_id: price } (object so the browser keeps the ids as keys)
                'rates'             => (object) ($hotel->exists ? $hotel->rates->pluck('price', 'room_type_id')->all() : []),
                'levels'            => $hotel->exists ? $hotel->levels->map(fn ($level) => [
                    'id'    => $level->id,
                    'name'  => $level->name,
                    'rooms' => $level->rooms->map->only('id', 'room_number', 'room_type_id', 'status'),
                ]) : [],
                'faqs'              => $hotel->exists ? $hotel->faqs->map->only('question', 'answer') : [],
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
                'facilities'      => HotelFacility::grouped(),
                'roomTypes'       => RoomType::orderBy('name')->get(['id', 'name'])->map(fn ($t) => ['value' => $t->id, 'label' => $t->name]),
                'roomStatuses'    => $this->options(Room::STATUSES),
            ],
            'submitUrl' => $hotel->exists ? route('admin.hotels.update', $hotel) : route('admin.hotels.store'),
            'backUrl'   => route('admin.hotels.index'),
        ]);
    }

    /** Plain columns from the request. Branches always belong to the HQ. */
    private function attributes(HotelRequest $request): array
    {
        $data = $request->safe()->except(['phones', 'social_links', 'facility_ids', 'nearby_places', 'faqs', 'levels', 'rates', 'photo']);

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

        $hotel->faqs()->delete();
        foreach (array_values($request->input('faqs', [])) as $i => $faq) {
            $hotel->faqs()->create([
                'question'   => $faq['question'],
                'answer'     => $faq['answer'] ?? null,
                'sort_order' => $i,
            ]);
        }

        $this->saveRooms($hotel, $request->input('levels', []));
        $this->saveRates($hotel, $request->input('rates', []));

        $this->savePhoto($hotel, $request->input('photo', []));
    }

    /**
     * Levels + rooms from the Rooms tab. Rows are updated in place (not deleted and re-added),
     * so a room keeps its id - bookings will point at it later.
     *   [{ id|null, name, rooms: [{ id|null, room_number, room_type_id, status }] }]
     */
    private function saveRooms(Hotel $hotel, array $levels): void
    {
        $levels = array_values($levels);
        $keepRooms = collect($levels)->flatMap(fn ($l) => array_column($l['rooms'] ?? [], 'id'))->filter()->all();

        // rooms removed in the form -> delete
        $hotel->rooms()->whereNotIn('id', $keepRooms)->delete();

        // rooms whose number changed get a temporary one first, so swapping 101 <-> 102 doesn't hit the unique index
        $current = $hotel->rooms()->pluck('room_number', 'id');
        $renamed = collect($levels)->flatMap(fn ($l) => $l['rooms'] ?? [])
            ->filter(fn ($r) => ! empty($r['id']) && ($current[$r['id']] ?? null) !== $r['room_number'])
            ->pluck('id');
        if ($renamed->isNotEmpty()) {
            $hotel->rooms()->whereIn('id', $renamed)->update(['room_number' => DB::raw("CONCAT('~', id)")]);
        }

        $keepLevels = [];
        foreach ($levels as $i => $data) {
            $level = $this->upsert($hotel->levels(), $data['id'] ?? null, ['name' => $data['name'], 'sort_order' => $i]);
            $keepLevels[] = $level->id;

            foreach (array_values($data['rooms'] ?? []) as $j => $room) {
                $this->upsert($hotel->rooms(), $room['id'] ?? null, [
                    'hotel_level_id' => $level->id,    // a room can move to another level
                    'room_number'    => $room['room_number'],
                    'room_type_id'   => $room['room_type_id'] ?: null,
                    'status'         => $room['status'],
                    'sort_order'     => $j,
                ]);
            }
        }

        // levels removed in the form -> delete last (their rooms were deleted or moved above)
        $hotel->levels()->whereNotIn('id', $keepLevels)->delete();
    }

    /** { room_type_id: price }. Empty price = the type is not sold at this hotel (row removed). */
    private function saveRates(Hotel $hotel, array $rates): void
    {
        $prices = array_filter($rates, fn ($price) => $price !== null && $price !== '');

        $hotel->rates()->whereNotIn('room_type_id', array_keys($prices))->delete();
        foreach ($prices as $typeId => $price) {
            $hotel->rates()->updateOrCreate(['room_type_id' => $typeId], ['price' => round((float) $price, 2)]);
        }
    }

    /** Update the row with this id, or create a new one when id is empty. */
    private function upsert($relation, $id, array $values)
    {
        if ($id) {
            $model = $relation->findOrFail($id);
            $model->update($values);

            return $model;
        }

        return $relation->create($values);
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

    private function options(array $map): array
    {
        return collect($map)->map(fn ($label, $value) => ['value' => $value, 'label' => $label])->values()->all();
    }
}
