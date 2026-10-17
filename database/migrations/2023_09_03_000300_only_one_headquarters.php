<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Database-level guarantee: only ONE headquarters.
 * hq_lock is 1 for the HQ and NULL for branches; a unique index allows many
 * NULLs but only one 1. (The form and HotelRequest also check this.)
 */
return new class extends Migration
{
    public function up()
    {
        Schema::table('hotels', function (Blueprint $table) {
            $table->boolean('hq_lock')
                ->nullable()
                ->storedAs("IF(type = 'headquarters', 1, NULL)")
                ->after('type');
            $table->unique('hq_lock');
        });
    }

    public function down()
    {
        Schema::table('hotels', function (Blueprint $table) {
            $table->dropUnique(['hq_lock']);
            $table->dropColumn('hq_lock');
        });
    }
};
