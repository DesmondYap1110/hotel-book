<?php

namespace Database\Seeders;

use App\Models\PaymentMethod;
use Illuminate\Database\Seeder;

/**
 * Payment methods common in Malaysia (Settings › Payment Methods).
 * [key, name, enabled at start]. The key is stored on hotels - never change it.
 */
class PaymentMethodSeeder extends Seeder
{
    public const METHODS = [
        'cards' => [
            ['visa', 'Visa', true],
            ['mastercard', 'Mastercard', true],
            ['amex', 'American Express', false],
            ['unionpay', 'UnionPay', false],
            ['jcb', 'JCB', false],
            ['mydebit', 'MyDebit', false],
        ],
        'online_banking' => [
            ['duitnow', 'DuitNow QR', true],
            ['fpx', 'FPX Online Banking', true],
            ['duitnow_transfer', 'DuitNow Transfer / Bank Transfer', false],
        ],
        'ewallet' => [
            ['tng', "Touch 'n Go eWallet", false],
            ['grabpay', 'GrabPay', false],
            ['boost', 'Boost', false],
            ['shopeepay', 'ShopeePay', false],
            ['mae', 'MAE by Maybank', false],
            ['alipay', 'Alipay+', false],          // tourists
            ['wechatpay', 'WeChat Pay', false],    // tourists
        ],
        'bnpl' => [
            ['atome', 'Atome', false],
            ['grab_paylater', 'Grab PayLater', false],
            ['spaylater', 'SPayLater', false],
        ],
        'cash' => [
            ['cash', 'Cash accepted', true],
        ],
    ];

    public function run()
    {
        foreach (self::METHODS as $category => $methods) {
            foreach ($methods as [$key, $name, $enabled]) {
                if (PaymentMethod::where('key', $key)->exists()) {
                    continue; // keep the admin's name / order / on-off
                }

                PaymentMethod::create([
                    'key'        => $key,
                    'name'       => $name,
                    'category'   => $category,
                    'is_enabled' => $enabled,
                    'sort_order' => (int) PaymentMethod::where('category', $category)->max('sort_order') + 1,
                ]);
            }
        }
    }
}
