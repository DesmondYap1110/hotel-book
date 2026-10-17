<?php

namespace App\Payments;

/** A verified answer from a gateway: which bill, and was it paid. */
final class PaymentResult
{
    public function __construct(
        public string $gatewayRef,   // the gateway's bill id (payments.gateway_ref)
        public bool $paid,
        public array $payload = [],  // raw data, kept on the payment for support
    ) {
    }
}
