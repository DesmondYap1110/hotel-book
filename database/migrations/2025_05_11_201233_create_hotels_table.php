<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hotels', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description')->nullable();
            $table->string('address');
            $table->string('city');
            $table->string('state');
            $table->string('country');
            $table->string('postal_code');
            $table->string('phone_number')->nullable();
            $table->string('website_url')->nullable();
            $table->string('chain_name')->nullable();
            $table->string('registration_no')->nullable();
            $table->text('policies')->nullable();
            $table->text('cancellation_policies')->nullable();
            $table->time('check_in_from')->nullable();
            $table->time('check_in_until')->nullable();
            $table->time('check_out_from')->nullable();
            $table->time('check_out_until')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('hotels');
    }
};
