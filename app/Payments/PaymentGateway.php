<?php

namespace App\Payments;

use App\Models\Payment;
use Illuminate\Http\Request;

/**
 * What every payment gateway (mock, Billplz, ...) must do.
 *
 * Flow:
 *   1. start()     -> create the bill at the gateway, return where to send the customer
 *   2. customer pays on the gateway page
 *   3. gateway calls our webhook  -> fromCallback()  (server to server, the source of truth)
 *      and sends the customer back -> fromReturn()   (browser, shows the result right away)
 *
 * Both 3s must VERIFY the request really came from the gateway (signature) before trusting it.
 */
interface PaymentGateway
{
    /** Short name saved on payments.gateway, e.g. 'mock', 'billplz'. */
    public function name(): string;

    /** Create the bill. Must set $payment->gateway_ref and return the URL to redirect the customer to. */
    public function start(Payment $payment): string;

    /** Webhook from the gateway. Null when the request is not genuine. */
    public function fromCallback(Request $request): ?PaymentResult;

    /** Customer redirected back from the gateway. Null when the request is not genuine. */
    public function fromReturn(Request $request): ?PaymentResult;
}
