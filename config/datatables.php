<?php

/*
|--------------------------------------------------------------------------
| Server-side tables
|--------------------------------------------------------------------------
| name (used in Datatable::props('...') and the URL) => list class.
|
| Only lists registered here can be loaded, so a URL can never ask the
| app to build an arbitrary class.
*/

return [
    'lists' => [
        'room-facilities'  => App\Datatables\Lists\RoomFacilityList::class,
        'hotel-facilities' => App\Datatables\Lists\HotelFacilityList::class,
        'room-types'      => App\Datatables\Lists\RoomTypeList::class,
        'rooms'           => App\Datatables\Lists\RoomList::class,
        'hotels'          => App\Datatables\Lists\HotelList::class,
        'bookings'        => App\Datatables\Lists\BookingList::class,
        'customers'       => App\Datatables\Lists\CustomerList::class,
        'payments'        => App\Datatables\Lists\PaymentList::class,
    ],
];
