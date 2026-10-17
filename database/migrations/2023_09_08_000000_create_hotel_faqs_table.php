<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/** Frequently asked questions per hotel (hotel form › FAQ tab). */
return new class extends Migration
{
    public function up()
    {
        Schema::create('hotel_faqs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('hotel_id')->constrained()->cascadeOnDelete();
            $table->string('question');
            $table->text('answer')->nullable();          // rich text (cleaned by RichText::clean)
            $table->unsignedSmallInteger('sort_order')->default(0);
            $table->timestamps();

            // "FAQs of hotel X in display order" from one index (also covers the foreign key)
            $table->index(['hotel_id', 'sort_order']);
        });
    }

    public function down()
    {
        Schema::dropIfExists('hotel_faqs');
    }
};
