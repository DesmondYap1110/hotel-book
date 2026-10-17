<?php

namespace App\Http\Controllers\Admin\Room;

use App\Datatables\Core\Datatable;
use App\Http\Controllers\Controller;
use App\Http\Requests\RoomTypeRequest;
use App\Models\RoomFacility;
use App\Models\RoomImage;
use App\Models\RoomType;
use App\Support\TempUpload;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

/**
 * Rooms › Room Types. Pages: resources/js/Pages/RoomTypes/Index.vue, Form.vue
 * A room type is global; each hotel gives it rooms (hotel form › Rooms tab) and a price (Room Prices tab).
 */
class RoomTypeController extends Controller
{
    public function index()
    {
        return Inertia::render('RoomTypes/Index', [
            'table'     => Datatable::props('room-types'),
            'createUrl' => route('admin.room-types.create'),
        ]);
    }

    public function create()
    {
        return $this->form(new RoomType(['max_adult' => 2, 'max_child' => 0, 'queen_bed' => 1, 'king_bed' => 0, 'single_bed' => 0]));
    }

    public function store(RoomTypeRequest $request)
    {
        $type = DB::transaction(function () use ($request) {
            $type = RoomType::create($this->attributes($request));
            $this->saveRelations($type, $request);

            return $type;
        });

        return redirect()->route('admin.room-types.index')->with('status', "{$type->name} added.");
    }

    public function edit(RoomType $roomType)
    {
        return $this->form($roomType->load('facilities:id', 'roomImages'));
    }

    public function update(RoomTypeRequest $request, RoomType $roomType)
    {
        DB::transaction(function () use ($request, $roomType) {
            $roomType->update($this->attributes($request));
            $this->saveRelations($roomType, $request);
        });

        return redirect()->route('admin.room-types.index')->with('status', "{$roomType->name} updated.");
    }

    public function destroy(Request $request, RoomType $roomType)
    {
        // bookings keep their room type (history) - a booked type can't be deleted
        if ($roomType->hasBookings()) {
            $message = "{$roomType->name} has bookings, so it can't be deleted.";

            return $request->expectsJson() ? response()->json(['message' => $message], 422) : back()->withErrors(['room_type' => $message]);
        }

        $paths = $roomType->roomImages->map->path->all();
        $roomType->delete(); // rooms keep existing with no type; prices + facilities links go with it
        Storage::disk('public')->delete($paths);

        return $request->expectsJson()
            ? response()->json(['message' => 'Room type deleted.'])
            : redirect()->route('admin.room-types.index')->with('status', 'Room type deleted.');
    }

    // -----------------------------------------------------------------

    private function form(RoomType $type)
    {
        return Inertia::render('RoomTypes/Form', [
            'roomType' => [
                ...$type->only('id', 'name', 'description', 'max_adult', 'max_child', 'king_bed', 'queen_bed', 'single_bed'),
                'facility_ids' => $type->exists ? $type->facilities->pluck('id') : [],
                // FilePond list: existing photos [{ id, url }]
                'images'       => $type->exists ? $type->roomImages->map(fn (RoomImage $img) => ['id' => $img->id, 'url' => $img->url]) : [],
            ],
            'beds'       => collect(RoomType::BEDS)->map(fn ($label, $column) => ['key' => $column, 'label' => $label])->values(),
            'facilities' => RoomFacility::grouped(),
            'usage'      => $type->exists ? [
                'rooms'  => $type->rooms()->count(),
                'hotels' => DB::table('hotel_room_rates')->where('room_type_id', $type->id)->count(),
            ] : null,
            'submitUrl'  => $type->exists ? route('admin.room-types.update', $type) : route('admin.room-types.store'),
            'backUrl'    => route('admin.room-types.index'),
        ]);
    }

    private function attributes(RoomTypeRequest $request): array
    {
        return $request->safe()->only('name', 'description', 'max_adult', 'max_child', 'king_bed', 'queen_bed', 'single_bed');
    }

    /** Facilities + photos (kept / new / removed, in the dragged order). */
    private function saveRelations(RoomType $type, RoomTypeRequest $request): void
    {
        $type->facilities()->sync($request->input('facility_ids', []));

        $images = array_values($request->input('images', []));
        $keep = array_filter(array_column($images, 'id'));

        $removed = $type->roomImages()->whereNotIn('id', $keep)->get();
        RoomImage::whereIn('id', $removed->pluck('id'))->delete();
        Storage::disk('public')->delete($removed->map->path->all());

        foreach ($images as $i => $image) {
            if (! empty($image['id'])) {
                $type->roomImages()->where('id', $image['id'])->update(['sort_order' => $i]);
            } elseif (! empty($image['upload'])) {
                $type->roomImages()->create([
                    'images'     => TempUpload::claim($image['upload'], 'public', 'room_images'),
                    'sort_order' => $i,
                ]);
            }
        }
    }
}
