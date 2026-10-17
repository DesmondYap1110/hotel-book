<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/** Nightly price of a room type at one hotel. No row = that type is not sold at the hotel. */
class HotelRoomRate extends Model
{
    protected $fillable = ['hotel_id', 'room_type_id', 'price'];

    protected $casts = ['price' => 'float'];

    public function roomType(): BelongsTo
    {
        return $this->belongsTo(RoomType::class);
    }
}
