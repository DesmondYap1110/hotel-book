<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * One room of a hotel, on a level, with an optional room type.
 * Managed on the hotel form › Rooms tab (HotelController::saveRooms).
 */
class Room extends Model
{
    use HasFactory;

    public const STATUSES = [
        'available'      => 'Available',
        'maintenance'    => 'Maintenance',
        'out_of_service' => 'Out of Service',
    ];

    protected $fillable = ['hotel_id', 'hotel_level_id', 'room_type_id', 'room_number', 'status', 'sort_order'];

    public function hotel(): BelongsTo
    {
        return $this->belongsTo(Hotel::class);
    }

    public function level(): BelongsTo
    {
        return $this->belongsTo(HotelLevel::class, 'hotel_level_id');
    }

    public function roomType(): BelongsTo
    {
        return $this->belongsTo(RoomType::class);
    }
}
