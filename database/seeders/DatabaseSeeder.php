<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

/**
 * Starter data so a new install is ready to use.
 *
 *   php artisan migrate --seed      (first install)
 *   php artisan db:seed             (any time - safe to run again)
 *
 * Every seeder only ADDS what is missing. It never overwrites data people
 * changed in the app (passwords, renamed / reordered / disabled items...).
 * Exception: MalaysiaLocationSeeder reloads its reference list (not editable in the app).
 */
class DatabaseSeeder extends Seeder
{
    public function run()
    {
        $this->call([
            AdminUserSeeder::class,      // login: desmondyap64@gmail.com / 123456
            HotelFacilitySeeder::class,  // 50 hotel facilities in 6 categories (Hotels › Hotel Facilities)
            RoomFacilitySeeder::class,   // 30 in-room facilities in 8 categories (Rooms › Room Facilities)
            PaymentMethodSeeder::class,  // 20 Malaysian payment methods
            MalaysiaLocationSeeder::class, // 16 states, 444 cities, 2,933 postcodes (address fields)
            HotelSeeder::class,          // Headquarters + Main Branch (needs payment methods)
            RoomTypeSeeder::class,       // Standard Queen, Deluxe King, Twin Room, Family Suite
            DemoRoomSeeder::class,       // NOT production: 2 levels x 5 rooms + prices per hotel (booking site works at once)
        ]);
    }
}
