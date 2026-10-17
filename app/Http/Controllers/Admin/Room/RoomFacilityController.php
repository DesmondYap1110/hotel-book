<?php

namespace App\Http\Controllers\Admin\Room;

use App\Http\Controllers\Admin\Core\FacilityController;
use App\Models\RoomFacility;

/** Rooms › Room Facilities (kettle, hair dryer, minibar...). All the work is in FacilityController. */
class RoomFacilityController extends FacilityController
{
    protected function model(): string
    {
        return RoomFacility::class;
    }

    protected function routeName(): string
    {
        return 'admin.room-facilities';
    }

    protected function title(): string
    {
        return 'Room Facilities';
    }

    protected function listName(): string
    {
        return 'room-facilities';
    }

    protected function example(): string
    {
        return 'e.g. Electric kettle';
    }
}
