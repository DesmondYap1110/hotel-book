<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

/**
 * Payment methods become a managed list (Settings › Payment Methods) instead of a
 * hard-coded array. Hotels keep storing the method keys in hotels.payment_methods.
 * "Cash" becomes a normal method, so hotels.accepts_cash is folded into it.
 */
return new class extends Migration
{
    public function up()
    {
        Schema::create('payment_methods', function (Blueprint $table) {
            $table->id();
            $table->string('key', 40)->unique();          // stored on hotels, e.g. 'visa' - never changes
            $table->string('name', 100);
            $table->string('category', 30);               // key from PaymentMethod::CATEGORIES
            $table->string('logo_path')->nullable();
            $table->boolean('is_enabled')->default(true);
            $table->unsignedSmallInteger('sort_order')->default(0);
            $table->timestamps();

            // the page lists methods grouped by category, in sort order
            $table->index(['category', 'sort_order']);
            // the hotel form only shows enabled methods
            $table->index(['is_enabled', 'category', 'sort_order']);
        });

        // starting data: database/seeders/PaymentMethodSeeder.php

        // hotels.accepts_cash -> 'cash' in hotels.payment_methods, then drop the column
        if (Schema::hasColumn('hotels', 'accepts_cash')) {
            foreach (DB::table('hotels')->get(['id', 'payment_methods', 'accepts_cash']) as $hotel) {
                $keys = json_decode($hotel->payment_methods ?? '[]', true) ?: [];
                if ($hotel->accepts_cash && ! in_array('cash', $keys, true)) {
                    $keys[] = 'cash';
                }
                DB::table('hotels')->where('id', $hotel->id)->update(['payment_methods' => json_encode(array_values($keys))]);
            }

            Schema::table('hotels', function (Blueprint $table) {
                $table->dropColumn('accepts_cash');
            });
        }

        // any method a hotel already accepts must be enabled
        $used = DB::table('hotels')->pluck('payment_methods')
            ->flatMap(fn ($json) => json_decode($json ?? '[]', true) ?: [])
            ->unique();
        DB::table('payment_methods')->whereIn('key', $used)->update(['is_enabled' => true]);
    }

    public function down()
    {
        Schema::table('hotels', function (Blueprint $table) {
            $table->boolean('accepts_cash')->default(true);
        });

        foreach (DB::table('hotels')->get(['id', 'payment_methods']) as $hotel) {
            $keys = json_decode($hotel->payment_methods ?? '[]', true) ?: [];
            DB::table('hotels')->where('id', $hotel->id)->update([
                'accepts_cash'    => in_array('cash', $keys, true),
                'payment_methods' => json_encode(array_values(array_diff($keys, ['cash']))),
            ]);
        }

        Schema::dropIfExists('payment_methods');
    }
};
