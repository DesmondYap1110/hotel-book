<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * A kind of room (Deluxe King, Twin Room...). Global for all hotels; each hotel sets its own
 * price (hotel_room_rates) and its own rooms (rooms.room_type_id).
 * Form: Rooms › Room Types (Admin\Room\RoomTypeController).
 */
class RoomType extends Model
{
    use HasFactory;

    public const BEDS = [
        'king_bed'   => 'King',
        'queen_bed'  => 'Queen',
        'single_bed' => 'Single',
    ];

    protected $fillable = [
        'name', 'room_prefix', 'description', 'max_adult', 'max_child',
        'king_bed', 'queen_bed', 'single_bed', 'quantity',
    ];

    protected $casts = [
        'max_adult'  => 'integer',
        'max_child'  => 'integer',
        'king_bed'   => 'integer',
        'queen_bed'  => 'integer',
        'single_bed' => 'integer',
    ];

    public function roomImages(): HasMany
    {
        return $this->hasMany(RoomImage::class)->orderBy('sort_order')->orderBy('id');
    }

    public function rooms(): HasMany
    {
        return $this->hasMany(Room::class);
    }

    /** In-room facilities (Rooms › Room Facilities). */
    public function facilities(): BelongsToMany
    {
        return $this->belongsToMany(RoomFacility::class, 'room_type_facility');
    }

    public function hasBookings(): bool
    {
        return Booking::where('room_type_id', $this->id)->exists();
    }

    /** "1 King + 2 Single" */
    public function getBedsLabelAttribute(): string
    {
        return collect(self::BEDS)
            ->filter(fn ($label, $column) => $this->{$column} > 0)
            ->map(fn ($label, $column) => "{$this->{$column}} {$label}")
            ->implode(' + ');
    }
}
