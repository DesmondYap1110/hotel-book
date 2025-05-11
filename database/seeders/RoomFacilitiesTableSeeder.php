<?php

namespace Database\Seeders;


use App\Models\RoomFacility;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoomFacilitiesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        RoomFacility::insert([
            ['category' => 'General', 'name' => 'Free Wi-Fi'],
            ['category' => 'General', 'name' => 'Air Conditioning'],
            ['category' => 'General', 'name' => 'Soundproofing'],
            ['category' => 'General', 'name' => 'Safe'],
            ['category' => 'General', 'name' => 'Wardrobe'],
            ['category' => 'General', 'name' => 'Iron & Ironing Board'],
            ['category' => 'General', 'name' => 'Hairdryer'],
            ['category' => 'Bedroom', 'name' => 'Sofa or Seating Area'],
            ['category' => 'Bedroom', 'name' => 'Desk'],
            ['category' => 'Bedroom', 'name' => 'Flat-screen TV'],
            ['category' => 'Bathroom', 'name' => 'Bathtub'],
            ['category' => 'Bathroom', 'name' => 'Shower'],
            ['category' => 'Bathroom', 'name' => 'Towels'],
            ['category' => 'Kitchen', 'name' => 'Kitchenette'],
            ['category' => 'Kitchen', 'name' => 'Microwave'],
            ['category' => 'Kitchen', 'name' => 'Refrigerator'],
            ['category' => 'Kitchen', 'name' => 'Coffee/Tea Maker'],
            ['category' => 'Dining Room', 'name' => 'Dining Table'],
            ['category' => 'View', 'name' => 'Balcony'],
            ['category' => 'View', 'name' => 'Sea View'],
            ['category' => 'View', 'name' => 'City View'],
        ]);
    }
}
