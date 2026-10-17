<?php

namespace App\Console\Commands;

use App\Services\BookingService;
use Illuminate\Console\Command;

/**
 * Unpaid bookings hold their room for config('payments.hold_minutes').
 * This marks the ones past that time as "expired" (scheduled every minute in Console/Kernel).
 * The room is already free for others as soon as the time passes - this only tidies the status.
 */
class ExpireBookingHolds extends Command
{
    protected $signature = 'bookings:expire';

    protected $description = 'Mark unpaid bookings whose hold time is over as expired';

    public function handle(BookingService $bookings): int
    {
        $count = $bookings->expireHolds();
        $this->info("{$count} booking(s) expired.");

        return self::SUCCESS;
    }
}
