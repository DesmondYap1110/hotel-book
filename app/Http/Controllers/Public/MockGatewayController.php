<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Models\Payment;
use App\Models\PaymentMethod;
use App\Payments\PaymentManager;
use App\Services\BookingService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;
use Inertia\Inertia;

/**
 * The fake gateway page used on local / staging (config/payments.php).
 * Behaves like a real gateway: shows the bill, the customer "pays" or "fails",
 * then it sends the webhook and redirects the browser to /payments/mock/return.
 * Every URL here is signed and the routes refuse to run in production.
 */
class MockGatewayController extends Controller
{
    public function __construct(private PaymentManager $payments, private BookingService $bookings)
    {
        abort_if(app()->environment('production'), 404);
    }

    public function show(Payment $payment)
    {
        abort_unless($payment->gateway === 'mock', 404);
        $payment->load('booking.hotel', 'booking.customer');
        $booking = $payment->booking;

        // the hotel's accepted methods (Settings › Payment Methods), grouped like a real checkout
        $methods = PaymentMethod::enabled()->ordered()
            ->whereIn('key', $booking->hotel->payment_methods ?? [])
            ->where('category', '!=', 'cash')
            ->get(['key', 'name', 'category', 'logo_path']);

        return Inertia::render('Public/MockGateway', [
            'payment' => [
                'ref'      => $payment->gateway_ref,
                'amount'   => $payment->amount,
                'currency' => $payment->currency,
                'status'   => $payment->status,
            ],
            'merchant'    => $booking->hotel->name,
            'description' => "Booking {$booking->reference} - {$booking->nights} night(s)",
            'payer'       => $booking->customer->only('name', 'email'),
            'methods'     => collect(PaymentMethod::categoryOptions())
                ->map(fn ($cat) => $cat + ['items' => $methods->where('category', $cat['key'])->map(fn ($m) => ['key' => $m->key, 'name' => $m->name, 'logo_url' => $m->logo_url])->values()])
                ->filter(fn ($cat) => $cat['items']->isNotEmpty())->values(),
            'completeUrl' => URL::temporarySignedRoute('mock-gateway.complete', now()->addHour(), ['payment' => $payment->id]),
            'cancelUrl'   => $booking->guestUrl(),
        ]);
    }

    /** outcome = paid | failed. Acts as the gateway: webhook first, then the browser redirect. */
    public function complete(Request $request, Payment $payment)
    {
        abort_unless($payment->gateway === 'mock', 404);
        $data = $request->validate(['outcome' => 'required|in:paid,failed', 'method' => 'nullable|string|max:40']);

        $result = $this->payments->gateway('mock')->fromCallback(new Request(['ref' => $payment->gateway_ref] + $data));
        $this->bookings->applyResult('mock', $result);

        return Inertia::location(URL::temporarySignedRoute('payments.return', now()->addMinutes(10), [
            'gateway' => 'mock',
            'ref'     => $payment->gateway_ref,
            'outcome' => $data['outcome'],
        ]));
    }
}
