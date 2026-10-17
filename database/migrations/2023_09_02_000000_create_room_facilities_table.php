<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
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

        // starting data: database/seeders/RoomFacilitySeeder.php
    }

    public function down()
    {
        Schema::dropIfExists('room_facilities');
    }
};
