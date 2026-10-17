<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Hotels: one Headquarters (HQ) + many Branches.
 * The old hotels table was never used (empty), so it is rebuilt here.
 */
return new class extends Migration
{
    public function up()
    {
        Schema::dropIfExists('hotels');

        Schema::create('hotels', function (Blueprint $table) {
            $table->id();
            $table->foreignId('parent_id')->nullable()->constrained('hotels')->nullOnDelete(); // branches -> HQ
            $table->string('type', 20)->default('branch');  // headquarters | branch
            $table->string('status', 20)->default('active'); // active | inactive

            // general
            $table->string('name');
            $table->string('slug')->unique();
            $table->string('brand')->nullable();             // e.g. Meriton Suites
            $table->string('tagline')->nullable();
            $table->longText('description')->nullable();
            $table->unsignedTinyInteger('star_rating')->nullable();

            // company / legal (mainly for HQ)
            $table->string('legal_name')->nullable();        // e.g. Meriton Property Services Pty Ltd
            $table->string('registration_no')->nullable();   // ABN / SSM

            // location
            $table->string('address_line1')->nullable();
            $table->string('address_line2')->nullable();
            $table->string('city')->nullable();
            $table->string('state')->nullable();
            $table->string('postcode', 20)->nullable();
            $table->string('country')->nullable();
            $table->decimal('latitude', 10, 7)->nullable();
            $table->decimal('longitude', 10, 7)->nullable();
            $table->string('map_url')->nullable();

            // contact
            $table->string('email')->nullable();
            $table->string('website')->nullable();
            $table->json('phones')->nullable();              // [{label: 'Australia', number: '1800 214 822'}]
            $table->json('social_links')->nullable();        // {instagram: url, facebook: url, ...}

            // stay
            $table->time('check_in_time')->nullable();
            $table->time('check_out_time')->nullable();
            $table->string('reception_hours')->nullable();   // e.g. 24 hours
            $table->text('late_arrival_note')->nullable();
            $table->text('cancellation_policy')->nullable();
            $table->text('house_rules')->nullable();         // visitors, pets, smoking...

            // parking & payment
            $table->boolean('parking_available')->default(false);
            $table->decimal('parking_fee', 8, 2)->nullable(); // per vehicle per night
            $table->decimal('parking_clearance', 4, 2)->nullable(); // metres
            $table->text('parking_notes')->nullable();
            $table->json('payment_methods')->nullable();     // ['visa', 'mastercard', ...]
            $table->boolean('accepts_cash')->default(true);

            $table->timestamps();

            // ---- indexes (match how the app queries) ----
            // Hotel::hq() and "branches of HQ" lookups, list filters by type/status
            $table->index(['type', 'status']);
            // list sorted by name (default sort) and name lookups
            $table->index('name');
            // location filters: country > state > city (left-most prefix also serves country / country+state)
            $table->index(['country', 'state', 'city']);
            // parent_id is indexed by its foreign key; slug by its unique index
        });

        Schema::create('hotel_images', function (Blueprint $table) {
            $table->id();
            $table->foreignId('hotel_id')->constrained()->cascadeOnDelete();
            $table->string('path');
            $table->string('caption')->nullable();
            $table->unsignedSmallInteger('sort_order')->default(0);
            $table->timestamps();

            // "images of hotel X in display order" served from one index (also covers the FK)
            $table->index(['hotel_id', 'sort_order']);
        });

        Schema::create('hotel_nearby_places', function (Blueprint $table) {
            $table->id();
            $table->foreignId('hotel_id')->constrained()->cascadeOnDelete();
            $table->string('name');
            $table->string('category', 30)->default('attraction'); // attraction | transport | dining | hospital | other
            $table->decimal('distance_km', 6, 2)->nullable();
            $table->unsignedSmallInteger('sort_order')->default(0);
            $table->timestamps();

            $table->index(['hotel_id', 'sort_order']);
        });

        // hotel <-> facility (reuses the Facilities catalog)
        Schema::create('hotel_facility', function (Blueprint $table) {
            $table->foreignId('hotel_id')->constrained()->cascadeOnDelete();
            $table->foreignId('room_facility_id')->constrained()->cascadeOnDelete();
            // PK (hotel_id, room_facility_id): "facilities of a hotel" + no duplicates.
            // room_facility_id has its own FK index: "hotels that have facility X".
            $table->primary(['hotel_id', 'room_facility_id']);
        });
    }

    public function down()
    {
        Schema::dropIfExists('hotel_facility');
        Schema::dropIfExists('hotel_nearby_places');
        Schema::dropIfExists('hotel_images');
        Schema::dropIfExists('hotels');

        // original (unused) table
        Schema::create('hotels', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email');
            $table->string('fax');
            $table->string('tel');
            $table->string('registration_no');
            $table->string('address');
            $table->string('city');
            $table->string('state');
            $table->string('postcode');
            $table->longText('description');
            $table->timestamps();
        });
    }
};
