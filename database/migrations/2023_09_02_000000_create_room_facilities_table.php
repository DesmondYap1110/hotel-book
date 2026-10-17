<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('room_facilities', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('category', 30);   // key from RoomFacility::CATEGORIES
            $table->timestamps();

            $table->unique(['category', 'name']);
        });

        // Starting data (was hard-coded in resources/js/components/Facilities/Add.vue)
        $defaults = [
            'bedroom'  => ['Complimentary water', 'TV with cable', 'Telephone', 'Hangers', 'Luggage storage',
                           'Air conditioning', 'Minibar', 'Coffee maker', 'Microwave', 'Connectors for laptops',
                           'Coworking spaces'],
            'bathroom' => ['Hair dryer', 'Essentials kit', 'Towels', 'Combs', 'Bathrobes', 'Slippers',
                           'Water heater', 'Bathtub'],
            'outside'  => ['Dining options', 'Recreational activities', 'Swimming pool', 'Sauna',
                           'High speed Wi-Fi', 'Charging stations', 'Gym or fitness center'],
            'luxury'   => ['Spa experience', 'Kids equipment', 'Pet friendliness', 'Car services'],
            'food'     => ['Fresh fruit bowl', 'Welcome champagne bottle', 'Treat'],
        ];

        $now = now();
        $rows = [];
        foreach ($defaults as $category => $names) {
            foreach ($names as $name) {
                $rows[] = ['name' => $name, 'category' => $category, 'created_at' => $now, 'updated_at' => $now];
            }
        }
        DB::table('room_facilities')->insert($rows);
    }

    public function down()
    {
        Schema::dropIfExists('room_facilities');
    }
};
