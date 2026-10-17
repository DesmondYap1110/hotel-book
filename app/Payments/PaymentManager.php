<?php

namespace App\Payments;

use InvalidArgumentException;
use RuntimeException;

/**
 * Gives the gateway for this environment (config/payments.php).
 *
 *   app(PaymentManager::class)->gateway()          // the active one (mock or billplz)
 *   app(PaymentManager::class)->gateway('billplz') // a specific one (webhooks: the one that created the bill)
 */
class PaymentManager
{
    public function activeName(): string
    {
        return config('payments.driver');
    }

    public function gateway(?string $name = null): PaymentGateway
    {
        $name ??= $this->activeName();

        // safety net: the fake gateway would let anyone "pay" for free
        if ($name === 'mock' && app()->environment('production')) {
            throw new RuntimeException('The mock payment gateway cannot be used in production.');
        }

        $config = config("payments.gateways.{$name}");
        if (! $config) {
            throw new InvalidArgumentException("Unknown payment gateway [{$name}].");
        }

        return new $config['class']($config);
    }

    public function isMock(): bool
    {
        return $this->activeName() === 'mock';
    }
}
