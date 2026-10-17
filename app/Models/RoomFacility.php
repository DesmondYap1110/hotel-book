<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsToMany;

/** In-room facility (kettle, hair dryer, minibar...). Rooms › Room Facilities; ticked on the room type form. */
class RoomFacility extends Facility
{
    /** Category key => label. Add a category here. */
    public const CATEGORIES = [
        'kitchen'       => 'Kitchen',
        'bathroom'      => 'Bathroom and Toilets',
        'entertainment' => 'Entertainment',
        'comforts'      => 'Comforts',
        'dining'        => 'Dining, Drinking and Snacking',
        'services'      => 'Services and Conveniences',
        'layout'        => 'Layout and Furnishing',
        'clothing'      => 'Clothing and Laundry',
    ];

    public function roomTypes(): BelongsToMany
    {
        return $this->belongsToMany(RoomType::class, 'room_type_facility');
    }
}
