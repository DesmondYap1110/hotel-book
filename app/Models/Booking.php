<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Str;

/**
 * One room for a stay. Life cycle:
 *   pending_payment --paid--> confirmed --staff--> cancelled
 *          |
 *          +--not paid in time (bookings:expire)--> expired
 *
 * While pending (and not expired) the room is HELD, so two guests can't pay for the same room.
 */
class Booking extends Model
{
    public const PENDING = 'pending_payment';
    public const CONFIRMED = 'confirmed';
    public const CANCELLED = 'cancelled';
    public const EXPIRED = 'expired';

    public const STATUSES = [
        self::PENDING   => 'Pending Payment',
        self::CONFIRMED => 'Confirmed',
        self::CANCELLED => 'Cancelled',
        self::EXPIRED   => 'Expired',
    ];

    /** Badge colour per status (admin tables, guest page). */
    public const STATUS_BADGES = [
        self::PENDING   => 'warning',
        self::CONFIRMED => 'success',
        self::CANCELLED => 'danger',
        self::EXPIRED   => 'muted',
    ];

    protected $guarded = ['id'];

    protected $casts = [
        'check_in'        => 'date',
        'check_out'       => 'date',
        'price_per_night' => 'float',
        'total_amount'    => 'float',
        'expires_at'      => 'datetime',
        'paid_at'         => 'datetime',
        'cancelled_at'    => 'datetime',
    ];

    // ---- relations ----

    public function hotel(): BelongsTo
    {
        return $this->belongsTo(Hotel::class);
    }

    public function customer(): BelongsTo
    {
        return $this->belongsTo(Customer::class);
    }

    public function roomType(): BelongsTo
    {
        return $this->belongsTo(RoomType::class);
    }

    public function room(): BelongsTo
    {
        return $this->belongsTo(Room::class);
    }

    public function payments(): HasMany
    {
        return $this->hasMany(Payment::class)->latest('id');
    }

    // ---- scopes ----

    /**
     * Bookings that block a room: confirmed, or pending and still inside the hold time.
     * Overlap: an existing stay overlaps [checkIn, checkOut) when it starts before we leave
     * and ends after we arrive (check-out day is free for the next guest).
     */
    public function scopeBlocking(Builder $query, string $checkIn, string $checkOut): Builder
    {
        return $query
            ->where('check_in', '<', $checkOut)
            ->where('check_out', '>', $checkIn)
            ->where(fn ($q) => $q->where('status', self::CONFIRMED)
                ->orWhere(fn ($q) => $q->where('status', self::PENDING)->where('expires_at', '>', now())));
    }

    // ---- helpers ----

    public static function newReference(): string
    {
        do {
            $ref = 'CLM-'.now()->format('ym').'-'.strtoupper(Str::random(6));
        } while (static::where('reference', $ref)->exists());

        return $ref;
    }

    public function isPayable(): bool
    {
        return $this->status === self::PENDING && $this->expires_at?->isFuture();
    }

    /** The guest's private link to this booking (signed: can't be guessed from the reference). */
    public function guestUrl(): string
    {
        return URL::signedRoute('booking.show', ['booking' => $this->reference]);
    }

    public function getStatusLabelAttribute(): string
    {
        return self::STATUSES[$this->status] ?? $this->status;
    }
}
