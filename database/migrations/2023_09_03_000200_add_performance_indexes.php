<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Indexes for columns the admin tables sort / filter on (app/Datatables/Lists/*).
 * Foreign keys already get an index automatically in MySQL.
 */
return new class extends Migration
{
    public function up()
    {
        // RoomFacilityList: default sort by name. (category filter is served by the unique(category, name) index)
        Schema::table('room_facilities', function (Blueprint $table) {
            $table->index('name');
        });

        // RoomTypeList: sort by name / quantity
        Schema::table('room_types', function (Blueprint $table) {
            $table->index('name');
        });

        // RoomList: sort by room number; room numbers are unique per room type
        Schema::table('rooms', function (Blueprint $table) {
            $table->index('room_number');
            $table->unique(['room_type_id', 'room_number']);
        });
    }

    public function down()
    {
        Schema::table('rooms', function (Blueprint $table) {
            $table->dropUnique(['room_type_id', 'room_number']);
            $table->dropIndex(['room_number']);
        });
        Schema::table('room_types', function (Blueprint $table) {
            $table->dropIndex(['name']);
        });
        Schema::table('room_facilities', function (Blueprint $table) {
            $table->dropIndex(['name']);
        });
    }
};
