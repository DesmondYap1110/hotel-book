<?php

/*
|--------------------------------------------------------------------------
| Admin sidebar menu
|--------------------------------------------------------------------------
| Add a page to the sidebar by adding an item here. No Blade changes needed.
|
|   'label'    Text shown in the sidebar
|   'icon'     Font Awesome class
|   'url'      Link (use '#' for "coming soon")
|   'active'   URL pattern(s) that mark this item active, e.g. 'admin/rooms*'
|   'children' Sub items (same keys, icon not needed)
*/

return [
    [
        'label'  => 'Dashboard',
        'icon'   => 'fas fa-tachometer-alt',
        'url'    => '#',
        'active' => 'admin/dashboard*',
    ],
    [
        'label'  => 'Hotels',
        'icon'   => 'fas fa-building',
        'url'    => '/admin/hotels',
        'active' => 'admin/hotels*',
    ],
    [
        'label'    => 'Rooms',
        'icon'     => 'fas fa-bed',
        'children' => [
            ['label' => 'Rooms',           'url' => '/admin/rooms',           'active' => 'admin/rooms*'],
            ['label' => 'Room Types',      'url' => '/admin/room-types',      'active' => 'admin/room-types*'],
            ['label' => 'Room Facilities', 'url' => '/admin/room-facilities', 'active' => 'admin/room-facilities*'],
        ],
    ],
    [
        'label'  => 'Bookings',
        'icon'   => 'fas fa-calendar-alt',
        'url'    => '#',
        'active' => 'admin/bookings*',
    ],
    [
        'label'  => 'Customers',
        'icon'   => 'fas fa-user-friends',
        'url'    => '#',
        'active' => 'admin/customers*',
    ],
    [
        'label'  => 'Payments',
        'icon'   => 'fas fa-money-check-alt',
        'url'    => '#',
        'active' => 'admin/payments*',
    ],
    [
        'label'    => 'Settings',
        'icon'     => 'fas fa-cog',
        'children' => [
            ['label' => 'Payment Methods', 'url' => '/admin/payment-methods', 'active' => 'admin/payment-methods*'],
        ],
    ],
];
