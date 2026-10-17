<?php

/*
|--------------------------------------------------------------------------
| Payment gateway
|--------------------------------------------------------------------------
| Which gateway takes the customer's money is decided by APP_ENV:
|
|   APP_ENV=production   -> billplz (real money)
|   anything else        -> mock    (local / staging: a fake gateway page,
|                                    pick "Paid" or "Failed", no money moves)
|
| PAYMENT_GATEWAY can force one, e.g. PAYMENT_GATEWAY=billplz on staging
| together with BILLPLZ_SANDBOX=true to test the real Billplz sandbox.
| The mock gateway can NEVER run in production (App\Payments\PaymentManager refuses).
*/

$env = env('APP_ENV', 'production');

return [
    'driver' => env('PAYMENT_GATEWAY', $env === 'production' ? 'billplz' : 'mock'),

    'currency' => 'MYR',

    // an unpaid booking holds its room for this long, then expires (bookings:expire)
    'hold_minutes' => (int) env('BOOKING_HOLD_MINUTES', 30),

    'gateways' => [
        'mock' => [
            'class' => App\Payments\Gateways\MockGateway::class,
        ],

        // https://www.billplz.com/api  (v3 bills: FPX online banking, cards, e-wallets)
        'billplz' => [
            'class'          => App\Payments\Gateways\BillplzGateway::class,
            'api_key'        => env('BILLPLZ_API_KEY'),
            'collection_id'  => env('BILLPLZ_COLLECTION_ID'),
            'x_signature'    => env('BILLPLZ_X_SIGNATURE'),   // Billplz › Settings › X Signature Key
            'sandbox'        => (bool) env('BILLPLZ_SANDBOX', $env !== 'production'),
        ],
    ],
];
