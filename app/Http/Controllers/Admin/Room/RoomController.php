<?php

namespace App\Http\Controllers\Admin\Room;

use App\Datatables\Core\Datatable;
use App\Http\Controllers\Controller;
use Inertia\Inertia;

class RoomController extends Controller
{
    /** Vue page: resources/js/Pages/Rooms/Index.vue */
    public function index()
    {
        return Inertia::render('Rooms/Index', [
            'table'     => Datatable::props('rooms'),
            'createUrl' => route('admin.rooms.create'),
        ]);
    }

    /** Vue page: resources/js/Pages/Rooms/Create.vue */
    public function create()
    {
        return Inertia::render('Rooms/Create');
    }
}
