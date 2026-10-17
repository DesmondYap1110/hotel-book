<?php

namespace Database\Seeders;

use App\Models\HotelFacility;
use Illuminate\Database\Seeder;

/** Facilities list (Hotels › Hotel Facilities). Category keys: HotelFacility::CATEGORIES. */
class HotelFacilitySeeder extends Seeder
{
    public const FACILITIES = [
        'hotel' => [
            'Free Wi-Fi', 'Car parking', 'Fitness centre', 'Indoor pool', 'Spa', 'Sauna',
            '24-hour guest services', 'In-suite laundry', 'Opening windows', 'Flat-screen TV',
            'TV streaming', 'Coffee capsule machine', 'Restaurant', 'Bar', 'Airport shuttle',
            'Accessible rooms', 'Meeting rooms',
        ],
        'bedroom' => [
            'Complimentary water', 'TV with cable', 'Telephone', 'Hangers', 'Luggage storage',
            'Air conditioning', 'Minibar', 'Coffee maker', 'Microwave', 'Connectors for laptops',
            'Coworking spaces',
        ],
        'bathroom' => [
            'Hair dryer', 'Essentials kit', 'Towels', 'Combs', 'Bathrobes', 'Slippers',
            'Water heater', 'Bathtub',
        ],
        'outside' => [
            'Dining options', 'Recreational activities', 'Swimming pool', 'Sauna',
            'High speed Wi-Fi', 'Charging stations', 'Gym or fitness center',
        ],
        'luxury' => ['Spa experience', 'Kids equipment', 'Pet friendliness', 'Car services'],
        'food'   => ['Fresh fruit bowl', 'Welcome champagne bottle', 'Treat'],
    ];

    public function run()
    {
        foreach (self::FACILITIES as $category => $names) {
            foreach ($names as $name) {
                // unique (category, name) - adds only the missing ones
                HotelFacility::firstOrCreate(['category' => $category, 'name' => $name]);
            }
        }
    }
}
