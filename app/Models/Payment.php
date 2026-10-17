<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/** One attempt to pay a booking at a gateway. A booking can have several (e.g. first try failed). */
class Payment extends Model
{
    public const PENDING = 'pending';
    public const PAID = 'paid';
    public const FAILED = 'failed';

    public const STATUSES = [
        self::PENDING => 'Pending',
        self::PAID    => 'Paid',
        self::FAILED  => 'Failed',
    ];

    public const STATUS_BADGES = [
        self::PENDING => 'warning',
        self::PAID    => 'success',
        self::FAILED  => 'danger',
    ];

    public const GATEWAYS = [
        'mock'    => 'Mock (testing)',
        'billplz' => 'Billplz',
    ];

    protected $guarded = ['id'];

    protected $casts = [
        'amount'  => 'float',
        'payload' => 'array',
        'paid_at' => 'datetime',
    ];

    public function booking(): BelongsTo
    {
        return $this->belongsTo(Booking::class);
    }
}
