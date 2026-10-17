<?php

namespace App\Http\Controllers\Admin\Hotel;

use App\Datatables\Core\Datatable;
use App\Http\Controllers\Controller;
use Inertia\Inertia;

class HotelController extends Controller
{
    /** Vue page: resources/js/Pages/Hotels/Index.vue */
    public function index()
    {
        return Inertia::render('Hotels/Index', [
            'table'     => Datatable::props('hotels'),
            'createUrl' => route('admin.hotels.create'),
        ]);
    }

    /** Vue page: resources/js/Pages/Hotels/Create.vue */
    public function create()
    {
        return Inertia::render('Hotels/Create');
    }
}
