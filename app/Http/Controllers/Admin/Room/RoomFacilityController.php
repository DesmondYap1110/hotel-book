<?php

namespace App\Http\Controllers\Admin\Room;

use App\Datatables\Core\Datatable;
use App\Http\Controllers\Controller;
use App\Models\RoomFacility;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class RoomFacilityController extends Controller
{
    /** Vue page: resources/js/Pages/RoomFacilities/Index.vue (table: app/Datatables/Lists/RoomFacilityList.php) */
    public function index()
    {
        return Inertia::render('RoomFacilities/Index', [
            'table'     => Datatable::props('room-facilities'),
            'createUrl' => route('admin.room-facilities.create'),
        ]);
    }

    /** Vue page: resources/js/Pages/RoomFacilities/Form.vue (used for Add and Edit) */
    public function create()
    {
        return $this->form(new RoomFacility());
    }

    public function store(Request $request)
    {
        RoomFacility::create($this->validated($request));

        return redirect()->route('admin.room-facilities.index')->with('status', 'Facility added.');
    }

    public function edit(RoomFacility $roomFacility)
    {
        return $this->form($roomFacility);
    }

    public function update(Request $request, RoomFacility $roomFacility)
    {
        $roomFacility->update($this->validated($request, $roomFacility));

        return redirect()->route('admin.room-facilities.index')->with('status', 'Facility updated.');
    }

    public function destroy(Request $request, RoomFacility $roomFacility)
    {
        $roomFacility->delete();

        if ($request->expectsJson()) {
            return response()->json(['message' => 'Facility deleted.']);
        }

        return redirect()->route('admin.room-facilities.index')->with('status', 'Facility deleted.');
    }

    private function form(RoomFacility $facility)
    {
        return Inertia::render('RoomFacilities/Form', [
            'facility'   => $facility->only('id', 'name', 'category'),
            'categories' => collect(RoomFacility::CATEGORIES)
                ->map(fn ($label, $value) => ['value' => $value, 'label' => $label])
                ->values(),
            'submitUrl'  => $facility->exists
                ? route('admin.room-facilities.update', $facility)
                : route('admin.room-facilities.store'),
            'backUrl'    => route('admin.room-facilities.index'),
        ]);
    }

    private function validated(Request $request, ?RoomFacility $facility = null): array
    {
        return $request->validate([
            'category' => ['required', Rule::in(array_keys(RoomFacility::CATEGORIES))],
            'name'     => [
                'required', 'string', 'max:100',
                Rule::unique('room_facilities')
                    ->where('category', $request->input('category'))
                    ->ignore($facility?->id),
            ],
        ], [
            'name.unique' => 'This facility already exists in that category.',
        ]);
    }
}
