<?php

namespace App\Datatables\Lists;

use App\Models\RoomFacility;

/** Rooms › Room Facilities table (columns etc. in FacilityList). */
class RoomFacilityList extends FacilityList
{
    protected function model(): string
    {
        return RoomFacility::class;
    }

    protected function routeName(): string
    {
        return 'admin.room-facilities';
    }
}
