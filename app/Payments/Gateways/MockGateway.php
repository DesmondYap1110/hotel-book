<?php

namespace App\Payments\Gateways;

use App\Models\Payment;
use App\Payments\PaymentGateway;
use App\Payments\PaymentResult;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Str;

/**
 * Fake gateway for local / staging (never production - see PaymentManager).
 *
 * start() sends the customer to our own "gateway" page (Pages/Public/MockGateway.vue)
 * where they choose Paid / Failed. That page posts back to MockGatewayController,
 * which plays the gateway: it calls the webhook logic, then redirects back - exactly
 * the same path a real gateway takes. All mock URLs are signed, so they can't be forged.
 */
class MockGateway implements PaymentGateway
{
    public function __construct(private array $config = [])
    {
    }

    public function name(): string
    {
        return 'mock';
    }

    public function start(Payment $payment): string
    {
        $payment->gateway_ref = 'MOCK-'.strtoupper(Str::random(12));

        return URL::temporarySignedRoute('mock-gateway.show', now()->addHour(), ['payment' => $payment->id]);
    }

    /** MockGatewayController has already checked the signed URL. */
    public function fromCallback(Request $request): ?PaymentResult
    {
        return $this->result($request);
    }

    public function fromReturn(Request $request): ?PaymentResult
    {
        if (! $request->hasValidSignature()) {
            return null;
        }

        return $this->result($request);
    }

    private function result(Request $request): ?PaymentResult
    {
        $ref = (string) $request->input('ref');

        return $ref === '' ? null : new PaymentResult($ref, $request->input('outcome') === 'paid', $request->only('ref', 'outcome', 'method'));
    }
}
