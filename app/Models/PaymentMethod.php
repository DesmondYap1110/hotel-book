<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * A way guests can pay (Visa, FPX, Touch 'n Go, Cash...).
 * Managed in Settings › Payment Methods; hotels pick from the enabled ones
 * and store the keys in hotels.payment_methods.
 */
class PaymentMethod extends Model
{
    /** Category key => label, icon (Font Awesome) and colour used on the page. Order = display order. */
    public const CATEGORIES = [
        'cards'          => ['label' => 'Cards',               'icon' => 'far fa-credit-card', 'color' => 'red'],
        'online_banking' => ['label' => 'Online Banking & QR', 'icon' => 'fas fa-university',  'color' => 'blue'],
        'ewallet'        => ['label' => 'E-Wallets',           'icon' => 'fas fa-wallet',      'color' => 'green'],
        'bnpl'           => ['label' => 'Buy Now Pay Later',   'icon' => 'fas fa-calendar-check', 'color' => 'purple'],
        'cash'           => ['label' => 'Cash',                'icon' => 'fas fa-money-bill',  'color' => 'yellow'],
    ];

    protected $fillable = ['key', 'name', 'category', 'logo_path', 'is_enabled', 'sort_order'];

    protected $casts = ['is_enabled' => 'boolean'];

    public function scopeEnabled($query)
    {
        return $query->where('is_enabled', true);
    }

    /** Category order first, then the drag & drop order. */
    public function scopeOrdered($query)
    {
        $categories = "'".implode("','", array_keys(self::CATEGORIES))."'";

        return $query->orderByRaw("FIELD(category, {$categories})")->orderBy('sort_order');
    }

    /** Relative URL so it works on http and https; null = show the category icon. */
    public function getLogoUrlAttribute(): ?string
    {
        return $this->logo_path ? '/storage/'.ltrim($this->logo_path, '/') : null;
    }

    /** How many hotels currently accept this method. */
    public function hotelCount(): int
    {
        return Hotel::whereJsonContains('payment_methods', $this->key)->count();
    }

    /** For Vue: { key, name, category, logo_url, is_enabled, ... } */
    public function toRow(): array
    {
        return [
            'id'         => $this->id,
            'key'        => $this->key,
            'name'       => $this->name,
            'category'   => $this->category,
            'logo_url'   => $this->logo_url,
            'is_enabled' => $this->is_enabled,
        ];
    }

    /** Categories for Vue: [{ key, label, icon, color }] */
    public static function categoryOptions(): array
    {
        return collect(self::CATEGORIES)->map(fn ($c, $key) => ['key' => $key, ...$c])->values()->all();
    }
}
