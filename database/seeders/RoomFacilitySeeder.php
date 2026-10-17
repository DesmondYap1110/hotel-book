<?php

namespace Database\Seeders;

use App\Models\RoomFacility;
use Illuminate\Database\Seeder;

/** In-room facilities (Rooms › Room Facilities), ticked per room type. Category keys: RoomFacility::CATEGORIES. */
class RoomFacilitySeeder extends Seeder
{
    public const FACILITIES = [
        'kitchen'       => ['Electric kettle'],
        'bathroom'      => ['Hair dryer', 'Open air bath privileges', 'Mirror', 'Toiletries', 'Towels'],
        'entertainment' => ['Free Wi-Fi in all rooms', 'Telephone', 'Satellite / cable channels'],
        'comforts'      => ['Air conditioning', 'Wake-up service', 'Slippers'],
        'dining'        => ['Coffee / tea maker', 'Full kitchen', 'Minibar', 'Refrigerator', 'Free bottled water', 'Microwave'],
        'services'      => ['Daily housekeeping'],
        'layout'        => ['Carpeting', 'Tile / marble flooring', 'Wooden / parquet flooring', 'Desk', 'Trash cans',
            'Fold-up bed', 'Window', 'Interconnecting rooms available', 'High floor'],
        'clothing'      => ['Closet', 'Ironing facilities'],
    ];

    public function run()
    {
        foreach (self::FACILITIES as $category => $names) {
            foreach ($names as $name) {
                // unique (category, name) - adds only the missing ones
                RoomFacility::firstOrCreate(['category' => $category, 'name' => $name]);
            }
        }
    }
}
