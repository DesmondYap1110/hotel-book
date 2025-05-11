<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ServicesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $hotel_facilities = [
            // Hotel Facilities
            ['name' => '24-Hour Front Desk'],
            ['name' => 'Concierge Service'],
            ['name' => 'Shuttle Service (Airport/Local)'],
            ['name' => 'Laundry Service'],
            ['name' => 'Currency Exchange'],
            ['name' => 'Luggage Storage'],
            ['name' => 'Valet Parking'],
            ['name' => 'Room Service'],
            ['name' => 'Medical Assistance'],
            ['name' => 'Pet-Friendly Services'],
            ['name' => 'Ticket & Tour Booking'],

        ];

        // Insert data into the database
        Service::insert($hotel_facilities);
    }
}
