<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HotelNearbyPlace extends Model
{
    protected $fillable = ['hotel_id', 'name', 'category', 'distance_km', 'sort_order'];

    protected $casts = ['distance_km' => 'float'];
}
