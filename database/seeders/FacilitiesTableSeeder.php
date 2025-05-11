<?php

namespace Database\Seeders;

use App\Models\Facility;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FacilitiesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $facilities = [
            // Accommodation
            ['category' => 'Accommodation', 'name' => 'Fitness Center/Gym'],
            ['category' => 'Accommodation', 'name' => 'Swimming Pool'],
            ['category' => 'Accommodation', 'name' => 'Spa/Wellness Center'],
            ['category' => 'Accommodation', 'name' => 'Sauna/Steam Room'],
            // ['category' => 'Accommodation', 'name' => 'Conference Rooms/Meeting Rooms'],
            // ['category' => 'Accommodation', 'name' => 'Business Center'],
            // ['category' => 'Accommodation', 'name' => 'Elevator'],
            ['category' => 'Accommodation', 'name' => 'Parking'],
            ['category' => 'Accommodation', 'name' => 'Beachfront'],
            ['category' => 'Accommodation', 'name' => 'Outdoor Terrace'],


            // Dining & Entertainment
            ['category' => 'Dining & Entertainment', 'name' => 'Restaurants'],
            ['category' => 'Dining & Entertainment', 'name' => 'Bar/Lounge'],
            ['category' => 'Dining & Entertainment', 'name' => 'Nightclub/DJ'],
            // ['category' => 'Dining & Entertainment', 'name' => 'Room Service'],
            ['category' => 'Dining & Entertainment', 'name' => 'Coffee Shop/Café'],

            // Convenience & Accessibility
            // ['category' => 'Convenience & Accessibility', 'name' => 'Shuttle Service (Airport/Local)'],
            ['category' => 'Convenience & Accessibility', 'name' => 'ATM on-site'],
            // ['category' => 'Convenience & Accessibility', 'name' => 'Elevator'],
            // ['category' => 'Convenience & Accessibility', 'name' => 'Laundry Facilities (Self-Service)'],
            ['category' => 'Convenience & Accessibility', 'name' => 'Gift Shop'],
            ['category' => 'Convenience & Accessibility', 'name' => 'Hair Salon/Barber Shop'],
            ['category' => 'Convenience & Accessibility', 'name' => 'Luggage Storage'],
            ['category' => 'Convenience & Accessibility', 'name' => 'Valet Parking'],
            ['category' => 'Convenience & Accessibility', 'name' => 'Accessibility Facilities (e.g., wheelchair ramps, accessible rooms)'],


            // Recreation & Leisure
            ['category' => 'Recreation & Leisure', 'name' => 'Golf Course'],
            ['category' => 'Recreation & Leisure', 'name' => 'Tennis Court'],


            // Family & Kids
            ['category' => 'Family & Kids', 'name' => 'Kids\' Club/Play Area'],
            // ['category' => 'Family & Kids', 'name' => 'Babysitting Services'],
            ['category' => 'Family & Kids', 'name' => 'Family Rooms'],
            ['category' => 'Family & Kids', 'name' => 'Child-Friendly Pools'],
            ['category' => 'Family & Kids', 'name' => 'Playgrounds'],

            // Business & Event
            ['category' => 'Business & Event', 'name' => 'Business Center'],
            ['category' => 'Business & Event', 'name' => 'Meeting Rooms/Conference Rooms'],
            // ['category' => 'Business & Event', 'name' => 'Event Planning & Catering Services'],
            ['category' => 'Business & Event', 'name' => 'Banquet Hall'],
            // ['category' => 'Business & Event', 'name' => 'Wedding Facilities'],

            // Specialty & Luxury
            ['category' => 'Specialty & Luxury', 'name' => 'Private Pool (for suites)'],
            // ['category' => 'Specialty & Luxury', 'name' => 'Butler Service'],
            ['category' => 'Specialty & Luxury', 'name' => 'Helipad'],
            // ['category' => 'Specialty & Luxury', 'name' => 'Personalized Concierge Services'],
            ['category' => 'Specialty & Luxury', 'name' => 'Luxury Lounge/Club Rooms'],
            ['category' => 'Specialty & Luxury', 'name' => 'Private Dining Rooms'],
            ['category' => 'Specialty & Luxury', 'name' => 'VIP Lounge'],
            ['category' => 'Specialty & Luxury', 'name' => 'Private Beach Access (Beachfront)'],
        ];

        // Insert data into the database
        Facility::insert($facilities);
    }
}
