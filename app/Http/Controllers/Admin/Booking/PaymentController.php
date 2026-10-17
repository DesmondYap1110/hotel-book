<?php

namespace App\Http\Controllers\Admin\Booking;

use App\Datatables\Core\Datatable;
use App\Http\Controllers\Controller;
use App\Payments\PaymentManager;
use Inertia\Inertia;

/** Admin › Payments (every attempt at the gateway). Page: Pages/Payments/Index.vue */
class PaymentController extends Controller
{
    public function index(PaymentManager $payments)
    {
        return Inertia::render('Payments/Index', [
            'table'   => Datatable::props('payments'),
            'gateway' => $payments->activeName(),
        ]);
    }
}
