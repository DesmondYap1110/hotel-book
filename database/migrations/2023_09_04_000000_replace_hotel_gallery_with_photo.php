<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Storage;

/**
 * Hotels now have ONE photo (round avatar on the form) instead of a gallery.
 * The first gallery image of each hotel becomes its photo; the rest are deleted.
 */
return new class extends Migration
{
    public function up()
    {
        Schema::table('hotels', function (Blueprint $table) {
            $table->string('photo_path')->nullable()->after('star_rating');
        });

        if (Schema::hasTable('hotel_images')) {
            $images = DB::table('hotel_images')->orderBy('hotel_id')->orderBy('sort_order')->get()->groupBy('hotel_id');

            foreach ($images as $hotelId => $list) {
                DB::table('hotels')->where('id', $hotelId)->update(['photo_path' => $list->first()->path]);
                Storage::disk('public')->delete($list->slice(1)->pluck('path')->all());
            }

            Schema::drop('hotel_images');
        }
    }

    public function down()
    {
        Schema::create('hotel_images', function (Blueprint $table) {
            $table->id();
            $table->foreignId('hotel_id')->constrained()->cascadeOnDelete();
            $table->string('path');
            $table->string('caption')->nullable();
            $table->unsignedSmallInteger('sort_order')->default(0);
            $table->timestamps();
            $table->index(['hotel_id', 'sort_order']);
        });

        foreach (DB::table('hotels')->whereNotNull('photo_path')->get() as $hotel) {
            DB::table('hotel_images')->insert(['hotel_id' => $hotel->id, 'path' => $hotel->photo_path, 'created_at' => now(), 'updated_at' => now()]);
        }

        Schema::table('hotels', function (Blueprint $table) {
            $table->dropColumn('photo_path');
        });
    }
};
