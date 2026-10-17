<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RoomFacility extends Model
{
    /** Category key => label shown in the admin. Add a category here. */
    public const CATEGORIES = [
        'hotel'    => 'Hotel Services',      // property-wide: pool, gym, 24h desk...
        'bedroom'  => 'Bedroom Amenities',
        'bathroom' => 'Bathroom Amenities',
        'outside'  => 'Outside',
        'luxury'   => 'Luxury Amenities',
        'food'     => 'Food Amenities',
    ];

    protected $fillable = ['name', 'category'];

    public function getCategoryLabelAttribute(): string
    {
        return self::CATEGORIES[$this->category] ?? ucfirst($this->category);
    }
}
