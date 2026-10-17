<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/** Room Types form (components/Types/Add.vue) saves room_prefix, but the column was never created. */
return new class extends Migration
{
    public function up()
    {
        if (! Schema::hasColumn('room_types', 'room_prefix')) {
            Schema::table('room_types', function (Blueprint $table) {
                $table->string('room_prefix', 10)->nullable()->after('name');
            });
        }
    }

    public function down()
    {
        Schema::table('room_types', function (Blueprint $table) {
            $table->dropColumn('room_prefix');
        });
    }
};
