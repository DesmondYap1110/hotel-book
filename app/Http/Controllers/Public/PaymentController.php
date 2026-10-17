<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Payments\PaymentManager;
use App\Services\BookingService;
use Illuminate\Http\Request;

/**
 * Where gateways talk back to us.
 *   POST /payments/{gateway}/callback  webhook, server to server (no CSRF - see VerifyCsrfToken)
 *   GET  /payments/{gateway}/return    the customer's browser comes back here
 * Both verify the gateway's signature (inside the gateway class) before changing anything.
 */
class PaymentController extends Controller
{
    public function __construct(private PaymentManager $payments, private BookingService $bookings)
    {
    }

    public function callback(Request $request, string $gateway)
    {
        $result = $this->gatewayOr404($gateway)->fromCallback($request);
        abort_if(! $result, 403, 'Invalid signature');

        $this->bookings->applyResult($gateway, $result);

        return response('OK');
    }

    public function return(Request $request, string $gateway)
    {
        $result = $this->gatewayOr404($gateway)->fromReturn($request);
        abort_if(! $result, 403, 'Invalid signature');

        $payment = $this->bookings->applyResult($gateway, $result);
        abort_if(! $payment, 404);

        $booking = $payment->booking;
        $message = $payment->status === 'paid'
            ? 'Payment received - your booking is confirmed.'
            : 'The payment did not go through. You can try again below.';

        return redirect($booking->guestUrl())->with('status', $message);
    }

    private function gatewayOr404(string $name)
    {
        abort_unless(array_key_exists($name, config('payments.gateways')), 404);

        return $this->payments->gateway($name); // refuses 'mock' in production
    }
}
