<?php

namespace App\Http\Controllers\Admin\Room;

use App\Datatables\Core\Datatable;
use App\Http\Controllers\Controller;
use App\Models\RoomType;
use Inertia\Inertia;

class RoomTypeController extends Controller
{
    /** Vue page: resources/js/Pages/RoomTypes/Index.vue */
    public function index()
    {
        return Inertia::render('RoomTypes/Index', [
            'table'     => Datatable::props('room-types'),
            'createUrl' => route('admin.room-types.create'),
        ]);
    }

    /** Vue page: resources/js/Pages/RoomTypes/Show.vue */
    public function show(RoomType $roomType)
    {
        return Inertia::render('RoomTypes/Show', [
            'roomTypeId' => $roomType->id,
        ]);
    }

    /** Vue page: resources/js/Pages/RoomTypes/Create.vue */
    public function create()
    {
        return Inertia::render('RoomTypes/Create');
    }

    /** Vue page: resources/js/Pages/RoomTypes/Edit.vue */
    public function edit(RoomType $roomType)
    {
        return Inertia::render('RoomTypes/Edit', [
            'roomTypeId' => $roomType->id,
            'updateUrl'  => route('room-types.update', ['room_type' => 'room_type_id']),
        ]);
    }
}
