<?php

namespace Database\Seeders;

use App\Models\RoomFacility;
use App\Models\RoomType;
use Illuminate\Database\Seeder;

/** Common room types. Only adds the ones missing (by name) - never changes edited ones. */
class RoomTypeSeeder extends Seeder
{
    public const TYPES = [
        ['name' => 'Standard Queen', 'room_prefix' => 'STQ', 'max_adult' => 2, 'max_child' => 1, 'queen_bed' => 1,
            'description' => '<p>Cosy room with one queen bed, work desk and rain shower. Ideal for couples or solo travellers.</p>'],
        ['name' => 'Deluxe King', 'room_prefix' => 'DLK', 'max_adult' => 2, 'max_child' => 2, 'king_bed' => 1,
            'description' => '<p>Spacious room with a king bed, city view, sofa corner and bathtub.</p>'],
        ['name' => 'Twin Room', 'room_prefix' => 'TWN', 'max_adult' => 2, 'max_child' => 1, 'single_bed' => 2,
            'description' => '<p>Two single beds - great for friends or colleagues travelling together.</p>'],
        ['name' => 'Family Suite', 'room_prefix' => 'FAM', 'max_adult' => 4, 'max_child' => 3, 'king_bed' => 1, 'single_bed' => 2,
            'description' => '<p>Separate living area, one king bed plus two single beds. Room for the whole family.</p>'],
    ];

    /** Every type starts with these (Rooms › Room Facilities - RoomFacilitySeeder runs first). */
    private const COMMON_FACILITIES = [
        'Electric kettle', 'Hair dryer', 'Toiletries', 'Towels', 'Free Wi-Fi in all rooms',
        'Air conditioning', 'Coffee / tea maker', 'Free bottled water', 'Daily housekeeping', 'Desk', 'Closet',
    ];

    public function run(): void
    {
        foreach (self::TYPES as $type) {
            $roomType = RoomType::firstOrCreate(['name' => $type['name']], $type + [
                'king_bed'   => 0,
                'queen_bed'  => 0,
                'single_bed' => 0,
            ]);

            // starting facilities, only for a type that has none yet (never undoes admin changes)
            if ($roomType->wasRecentlyCreated || ! $roomType->facilities()->exists()) {
                $roomType->facilities()->syncWithoutDetaching(
                    RoomFacility::whereIn('name', self::COMMON_FACILITIES)->pluck('id')
                );
            }
        }
    }
}
