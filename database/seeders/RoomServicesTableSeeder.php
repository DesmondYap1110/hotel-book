<?php

namespace Database\Seeders;

use App\Models\RoomService;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoomServicesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       $room_services = [
            ['name' => '24-Hour Room Service (In-Room Dining)'],
            ['name' => 'Wake-Up Call Service'],
            ['name' => 'In-Room Dining (Meals and Snacks)'],
            ['name' => 'Laundry and Dry-Cleaning Service'],
            ['name' => 'Ironing Service'],
            ['name' => 'Turn-Down Service'],
            ['name' => 'Pillow Menu'],
            ['name' => 'Room Cleaning (Daily Housekeeping)'],
            ['name' => 'Mini-Bar Restocking'],
            ['name' => 'Coffee/Tea Maker Setup and Refill'],
            ['name' => 'Complimentary Bottled Water'],
            ['name' => 'DVD/Video Rental'],
            ['name' => 'Phone and Fax Service'],
            ['name' => 'Luggage Assistance'],
            ['name' => 'Pet-Friendly Room Setup'],
            ['name' => 'Safety Deposit Box Usage'],
        ];

        // Insert data into the database
        RoomService::insert($room_services);
    }
}
