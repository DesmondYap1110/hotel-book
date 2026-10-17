<?php

namespace App\Models;

/** Property-wide facility (pool, gym, parking...). Hotels › Hotel Facilities; ticked on the hotel form. */
class HotelFacility extends Facility
{
    /** Category key => label. Add a category here. */
    public const CATEGORIES = [
        'hotel'    => 'Hotel Services',      // property-wide: pool, gym, 24h desk...
        'bedroom'  => 'Bedroom Amenities',
        'bathroom' => 'Bathroom Amenities',
        'outside'  => 'Outside',
        'luxury'   => 'Luxury Amenities',
        'food'     => 'Food Amenities',
    ];
}
