<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Shared by HotelFacility and RoomFacility: a name in a category.
 * Each child lists its categories in a CATEGORIES constant (key => label).
 */
abstract class Facility extends Model
{
    public const CATEGORIES = [];

    protected $fillable = ['name', 'category'];

    public function getCategoryLabelAttribute(): string
    {
        return static::CATEGORIES[$this->category] ?? ucfirst($this->category);
    }

    /** [{ label, items: [{ id, name }] }] in CATEGORIES order - one query (switch tables in forms). */
    public static function grouped(): array
    {
        $byCategory = static::orderBy('name')->get(['id', 'name', 'category'])->groupBy('category');

        return collect(static::CATEGORIES)
            ->filter(fn ($label, $key) => $byCategory->has($key))
            ->map(fn ($label, $key) => ['label' => $label, 'items' => $byCategory[$key]->map->only('id', 'name')->values()])
            ->values()
            ->all();
    }
}
