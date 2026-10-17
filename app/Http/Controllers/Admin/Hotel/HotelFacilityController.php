<?php

namespace App\Http\Controllers\Admin\Hotel;

use App\Http\Controllers\Admin\Core\FacilityController;
use App\Models\HotelFacility;

/** Hotels › Hotel Facilities (pool, gym, parking...). All the work is in FacilityController. */
class HotelFacilityController extends FacilityController
{
    protected function model(): string
    {
        return HotelFacility::class;
    }

    protected function routeName(): string
    {
        return 'admin.hotel-facilities';
    }

    protected function title(): string
    {
        return 'Hotel Facilities';
    }

    protected function listName(): string
    {
        return 'hotel-facilities';
    }

    protected function example(): string
    {
        return 'e.g. Rooftop pool';
    }
}
