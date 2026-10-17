<?php

namespace Database\Seeders;

use App\Models\Hotel;
use App\Models\RoomType;
use Illuminate\Database\Seeder;

/**
 * Demo levels, rooms and prices so the booking site works right after install
 * (local / staging only - real hotels add their own rooms in Hotels › Edit › Rooms).
 * Skips a hotel that already has levels.
 */
class DemoRoomSeeder extends Seeder
{
    // type => price per night (RM)
    private const PRICES = ['Standard Queen' => 189, 'Deluxe King' => 259, 'Twin Room' => 209, 'Family Suite' => 429];

    // level => [room number => type]
    private const LAYOUT = [
        'Level 1' => ['01' => 'Standard Queen', '02' => 'Standard Queen', '03' => 'Twin Room', '04' => 'Twin Room', '05' => 'Deluxe King'],
        'Level 2' => ['01' => 'Deluxe King', '02' => 'Deluxe King', '03' => 'Deluxe King', '04' => 'Family Suite', '05' => 'Family Suite'],
    ];

    public function run(): void
    {
        if (app()->environment('production')) {
            return;
        }

        $types = RoomType::whereIn('name', array_keys(self::PRICES))->pluck('id', 'name');
        if ($types->count() !== count(self::PRICES)) {
            return; // RoomTypeSeeder first
        }

        foreach (Hotel::all() as $hotel) {
            if ($hotel->levels()->exists()) {
                continue;
            }

            $floor = 1;
            foreach (self::LAYOUT as $levelName => $rooms) {
                $level = $hotel->levels()->create(['name' => $levelName, 'sort_order' => $floor - 1]);
                $i = 0;
                foreach ($rooms as $suffix => $typeName) {
                    $hotel->rooms()->create([
                        'hotel_level_id' => $level->id,
                        'room_type_id'   => $types[$typeName],
                        'room_number'    => $floor.$suffix,
                        'status'         => 'available',
                        'sort_order'     => $i++,
                    ]);
                }
                $floor++;
            }

            foreach (self::PRICES as $typeName => $price) {
                $hotel->rates()->updateOrCreate(['room_type_id' => $types[$typeName]], ['price' => $price]);
            }
        }
    }
}
