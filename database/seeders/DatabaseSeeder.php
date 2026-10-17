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
 */
class DatabaseSeeder extends Seeder
{
    public function run()
    {
        $this->call([
            AdminUserSeeder::class,      // login: desmondyap64@gmail.com / 123456
            RoomFacilitySeeder::class,   // 50 facilities in 6 categories
            PaymentMethodSeeder::class,  // 20 Malaysian payment methods
            HotelSeeder::class,          // Headquarters + Main Branch (needs payment methods)
        ]);
    }
}
