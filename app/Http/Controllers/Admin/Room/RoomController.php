<?php

namespace App\Http\Controllers\Admin\Room;

use App\Datatables\Core\Datatable;
use App\Http\Controllers\Controller;
use App\Models\Hotel;
use Inertia\Inertia;

class RoomController extends Controller
{
    /** Vue page: resources/js/Pages/Rooms/Index.vue */
    public function index()
    {
        return Inertia::render('Rooms/Index', [
            'table'     => Datatable::props('rooms'),
            'hotelsUrl' => route('admin.hotels.index'),
        ]);
    }

    /** Rooms belong to a hotel level - they are added on Hotels › Edit › Rooms tab. */
    public function create()
    {
        $hq = Hotel::hq();

        return $hq ? redirect(route('admin.hotels.edit', $hq).'#rooms') : redirect()->route('admin.hotels.index');
    }
}
