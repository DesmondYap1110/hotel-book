<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

/**
 * Facilities are split in two modules:
 *   Hotels › Hotel Facilities  (was "Room Facilities": pool, gym, parking ...)  hotel_facilities + hotel_facility
 *   Rooms  › Room Facilities   (new: kettle, hair dryer, minibar ...)           room_facilities  + room_type_facility
 *
 * The existing table is RENAMED (data and hotel selections are kept), then the new one is created.
 * room_types.facilities (a JSON list of ids from a hard-coded front-end list) is replaced by the
 * room_type_facility pivot. Room images get a sort order.
 */
return new class extends Migration
{
    public function up()
    {
        // 1. room_facilities -> hotel_facilities (keep rows + every hotel's selection)
        Schema::table('hotel_facility', function (Blueprint $table) {
            $table->dropForeign('hotel_facility_room_facility_id_foreign');
        });
        Schema::rename('room_facilities', 'hotel_facilities');
        DB::statement('ALTER TABLE hotel_facilities RENAME INDEX room_facilities_category_name_unique TO hotel_facilities_category_name_unique, RENAME INDEX room_facilities_name_index TO hotel_facilities_name_index');
        DB::statement('ALTER TABLE hotel_facility RENAME COLUMN room_facility_id TO hotel_facility_id, RENAME INDEX hotel_facility_room_facility_id_foreign TO hotel_facility_hotel_facility_id_foreign');
        Schema::table('hotel_facility', function (Blueprint $table) {
            $table->foreign('hotel_facility_id')->references('id')->on('hotel_facilities')->cascadeOnDelete();
        });

        // 2. new Room Facilities (starting list: database/seeders/RoomFacilitySeeder.php)
        Schema::create('room_facilities', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100);
            $table->string('category', 30);   // key from RoomFacility::CATEGORIES
            $table->timestamps();

            $table->unique(['category', 'name']);
            $table->index('name');
        });

        // 3. which facilities a room type has
        Schema::create('room_type_facility', function (Blueprint $table) {
            $table->foreignId('room_type_id')->constrained()->cascadeOnDelete();
            $table->foreignId('room_facility_id')->constrained()->cascadeOnDelete();
            $table->primary(['room_type_id', 'room_facility_id']);   // + "types that have facility X" via the FK index
        });

        if (Schema::hasColumn('room_types', 'facilities')) {
            Schema::table('room_types', function (Blueprint $table) {
                $table->dropColumn('facilities');
            });
        }

        // 4. images in the order the admin dragged them
        Schema::table('room_images', function (Blueprint $table) {
            $table->unsignedSmallInteger('sort_order')->default(0)->after('images');
            $table->index(['room_type_id', 'sort_order']);
        });
    }

    public function down()
    {
        Schema::table('room_images', function (Blueprint $table) {
            $table->dropIndex(['room_type_id', 'sort_order']);
            $table->dropColumn('sort_order');
        });
        Schema::table('room_types', function (Blueprint $table) {
            $table->json('facilities')->nullable();
        });
        Schema::dropIfExists('room_type_facility');
        Schema::dropIfExists('room_facilities');

        Schema::table('hotel_facility', function (Blueprint $table) {
            $table->dropForeign(['hotel_facility_id']);
        });
        DB::statement('ALTER TABLE hotel_facility RENAME COLUMN hotel_facility_id TO room_facility_id, RENAME INDEX hotel_facility_hotel_facility_id_foreign TO hotel_facility_room_facility_id_foreign');
        DB::statement('ALTER TABLE hotel_facilities RENAME INDEX hotel_facilities_category_name_unique TO room_facilities_category_name_unique, RENAME INDEX hotel_facilities_name_index TO room_facilities_name_index');
        Schema::rename('hotel_facilities', 'room_facilities');
        Schema::table('hotel_facility', function (Blueprint $table) {
            $table->foreign('room_facility_id')->references('id')->on('room_facilities')->cascadeOnDelete();
        });
    }
};
