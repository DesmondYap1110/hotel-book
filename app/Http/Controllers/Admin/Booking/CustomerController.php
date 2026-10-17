<?php

namespace App\Http\Controllers\Admin\Booking;

use App\Datatables\Core\Datatable;
use App\Http\Controllers\Controller;
use Inertia\Inertia;

/** Admin › Customers (guests are created when they book). Page: Pages/Customers/Index.vue */
class CustomerController extends Controller
{
    public function index()
    {
        return Inertia::render('Customers/Index', ['table' => Datatable::props('customers')]);
    }
}
