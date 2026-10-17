<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Booking module:
 *   hotel_room_rates  nightly price of a room type at a hotel (hotel form › Rooms tab)
 *   customers         guests (guest checkout: matched by email)
 *   bookings          one room for a date range; holds the room while unpaid, then confirmed
 *   payments          each attempt to pay a booking at a gateway (mock / billplz)
 */
return new class extends Migration
{
    public function up()
    {
        // "free rooms of type X at hotel Y" (availability + picking a room on every booking)
        Schema::table('rooms', function (Blueprint $table) {
            $table->index(['hotel_id', 'room_type_id', 'status'], 'rooms_hotel_type_status_index');
        });

        Schema::create('hotel_room_rates', function (Blueprint $table) {
            $table->id();
            $table->foreignId('hotel_id')->constrained()->cascadeOnDelete();
            $table->foreignId('room_type_id')->constrained()->cascadeOnDelete();
            $table->decimal('price', 10, 2);                   // per night, MYR
            $table->timestamps();

            $table->unique(['hotel_id', 'room_type_id']);      // one price per type per hotel
        });

        Schema::create('customers', function (Blueprint $table) {
            $table->id();
            $table->string('name', 150);
            $table->string('email', 150)->unique();
            $table->string('phone', 40)->nullable();
            $table->timestamps();
        });

        Schema::create('bookings', function (Blueprint $table) {
            $table->id();
            $table->string('reference', 20)->unique();         // CLM-2610-7KQ4XZ (shown to the guest)
            $table->foreignId('hotel_id')->constrained()->restrictOnDelete();
            $table->foreignId('customer_id')->constrained()->restrictOnDelete();
            $table->foreignId('room_type_id')->constrained()->restrictOnDelete();
            $table->foreignId('room_id')->nullable()->constrained()->nullOnDelete();
            $table->date('check_in');
            $table->date('check_out');
            $table->unsignedSmallInteger('nights');
            $table->unsignedTinyInteger('adults')->default(1);
            $table->unsignedTinyInteger('children')->default(0);
            $table->decimal('price_per_night', 10, 2);         // copied at booking time (rates change later)
            $table->decimal('total_amount', 10, 2);
            $table->char('currency', 3)->default('MYR');
            $table->string('status', 20)->default('pending_payment'); // Booking::STATUSES
            $table->text('special_requests')->nullable();
            $table->timestamp('expires_at')->nullable();       // unpaid hold ends
            $table->timestamp('paid_at')->nullable();
            $table->timestamp('cancelled_at')->nullable();
            $table->timestamps();

            // availability: "is this room taken between these dates?"
            $table->index(['room_id', 'status', 'check_in', 'check_out']);
            $table->index(['hotel_id', 'check_in']);           // admin: arrivals per hotel
            $table->index(['status', 'expires_at']);           // bookings:expire
        });

        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('booking_id')->constrained()->cascadeOnDelete();
            $table->string('gateway', 20);                     // mock | billplz
            $table->string('gateway_ref', 100)->nullable();    // the gateway's bill id
            $table->decimal('amount', 10, 2);
            $table->char('currency', 3)->default('MYR');
            $table->string('status', 20)->default('pending');  // Payment::STATUSES
            $table->string('payment_url', 500)->nullable();
            $table->json('payload')->nullable();               // last verified gateway data
            $table->timestamp('paid_at')->nullable();
            $table->timestamps();

            $table->unique(['gateway', 'gateway_ref']);        // webhook lookup
            $table->index(['status', 'created_at']);
        });
    }

    public function down()
    {
        Schema::dropIfExists('payments');
        Schema::dropIfExists('bookings');
        Schema::dropIfExists('customers');
        Schema::dropIfExists('hotel_room_rates');
        Schema::table('rooms', function (Blueprint $table) {
            $table->dropIndex('rooms_hotel_type_status_index');
        });
    }
};
