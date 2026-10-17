<?php

namespace Database\Seeders;

use App\Models\Hotel;
use App\Models\PaymentMethod;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

/**
 * The Headquarters + one Main Branch, so the system works right away.
 * Edit them in Admin › Hotels. Skipped when an HQ / branch already exists.
 */
class HotelSeeder extends Seeder
{
    public function run()
    {
        // accepted by default: the enabled common methods
        $payments = PaymentMethod::enabled()->whereIn('key', ['visa', 'mastercard', 'duitnow', 'fpx', 'cash'])->pluck('key')->all();

        $hq = Hotel::hq() ?? Hotel::create([
            'type'            => Hotel::TYPE_HQ,
            'status'          => 'active',
            'name'            => 'Clementra Headquarters',
            'slug'            => $this->slug('clementra-headquarters'),
            'brand'           => 'Clementra',
            'description'     => '<p>Head office. Edit this record with your company details.</p>',
            'address_line1'   => 'Head office address',
            'city'            => 'Kuala Lumpur',
            'state'           => 'Wilayah Persekutuan',
            'country'         => 'Malaysia',
            'phones'          => [['label' => 'Main', 'number' => '']],
            'payment_methods' => $payments,
        ]);

        if (! Hotel::where('type', Hotel::TYPE_BRANCH)->exists()) {
            Hotel::create([
                'type'            => Hotel::TYPE_BRANCH,
                'parent_id'       => $hq->id,
                'status'          => 'active',
                'name'            => 'Main Branch',
                'slug'            => $this->slug('main-branch'),
                'brand'           => $hq->brand,
                'description'     => '<p>Default branch. Edit it with the hotel details, or add more branches.</p>',
                'address_line1'   => 'Branch address',
                'city'            => $hq->city,
                'state'           => $hq->state,
                'country'         => $hq->country,
                'phones'          => [['label' => 'Front desk', 'number' => '']],
                'check_in_time'   => '15:00',
                'check_out_time'  => '11:00',
                'reception_hours' => '24 hours',
                'payment_methods' => $payments,
            ]);
        }
    }

    private function slug(string $slug): string
    {
        return Hotel::where('slug', $slug)->exists() ? $slug.'-'.Str::lower(Str::random(4)) : $slug;
    }
}
