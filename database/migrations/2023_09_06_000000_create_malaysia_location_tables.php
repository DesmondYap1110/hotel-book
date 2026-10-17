<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Malaysia states -> cities -> postcodes, used by the address fields
 * (state / city dropdowns + postcode auto-fill). Data: MalaysiaLocationSeeder.
 */
return new class extends Migration
{
    public function up()
    {
        Schema::create('malaysia_states', function (Blueprint $table) {
            $table->id();
            $table->string('name', 60)->unique();         // e.g. Selangor, W.P. Kuala Lumpur
        });

        Schema::create('malaysia_cities', function (Blueprint $table) {
            $table->id();
            $table->foreignId('state_id')->constrained('malaysia_states')->cascadeOnDelete();
            $table->string('name', 100);

            // "cities of a state, A-Z" in one index (also serves the foreign key)
            $table->unique(['state_id', 'name']);
        });

        Schema::create('malaysia_postcodes', function (Blueprint $table) {
            $table->id();
            $table->char('postcode', 5);
            $table->foreignId('city_id')->constrained('malaysia_cities')->cascadeOnDelete();

            // postcode lookup (one postcode can belong to more than one city)
            $table->index('postcode');
            $table->unique(['city_id', 'postcode']);
        });
    }

    public function down()
    {
        Schema::dropIfExists('malaysia_postcodes');
        Schema::dropIfExists('malaysia_cities');
        Schema::dropIfExists('malaysia_states');
    }
};
