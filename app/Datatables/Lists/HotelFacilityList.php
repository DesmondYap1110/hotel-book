<?php

namespace App\Datatables\Lists;

use App\Models\HotelFacility;

/** Hotels › Hotel Facilities table (columns etc. in FacilityList). */
class HotelFacilityList extends FacilityList
{
    protected function model(): string
    {
        return HotelFacility::class;
    }

    protected function routeName(): string
    {
        return 'admin.hotel-facilities';
    }
}
