<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Hotel › Rooms tab:  hotel -> many levels (floors) -> many rooms.
 * Each room can be given a room type (Rooms › Room Types).
 *
 * The old rooms table (room_number + room_type_id only) had no hotel, so it is rebuilt.
 */
return new class extends Migration
{
    public function up()
    {
        Schema::create('hotel_levels', function (Blueprint $table) {
            $table->id();
            $table->foreignId('hotel_id')->constrained()->cascadeOnDelete();
            $table->string('name', 50);                              // "Level 1", "Ground Floor"
            $table->unsignedSmallInteger('sort_order')->default(0);
            $table->timestamps();

            $table->index(['hotel_id', 'sort_order']);              // levels of a hotel, in order
        });

        Schema::dropIfExists('rooms');
        Schema::create('rooms', function (Blueprint $table) {
            $table->id();
            $table->foreignId('hotel_id')->constrained()->cascadeOnDelete();
            $table->foreignId('hotel_level_id')->constrained()->cascadeOnDelete();
            $table->foreignId('room_type_id')->nullable()->constrained()->nullOnDelete(); // type can be set later
            $table->string('room_number', 10);
            $table->string('status', 20)->default('available');      // Room::STATUSES
            $table->unsignedSmallInteger('sort_order')->default(0);
            $table->timestamps();

            $table->unique(['hotel_id', 'room_number']);             // "101" only once per hotel
            $table->index(['hotel_level_id', 'sort_order']);        // rooms of a level, in order
            $table->index(['hotel_id', 'status']);                  // e.g. available rooms of a hotel
        });
    }

    public function down()
    {
        Schema::dropIfExists('rooms');
        Schema::create('rooms', function (Blueprint $table) {
            $table->id();
            $table->string('room_number', 10);
            $table->foreignId('room_type_id')->constrained()->cascadeOnDelete();
            $table->timestamps();
        });
        Schema::dropIfExists('hotel_levels');
    }
};
