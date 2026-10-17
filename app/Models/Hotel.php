<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * A hotel property. The group has ONE headquarters (type = headquarters)
 * and many branches (type = branch, parent_id = the HQ).
 */
class Hotel extends Model
{
    use HasFactory;

    public const TYPE_HQ = 'headquarters';
    public const TYPE_BRANCH = 'branch';

    public const TYPES = [
        self::TYPE_HQ     => 'Headquarters',
        self::TYPE_BRANCH => 'Branch',
    ];

    public const STATUSES = [
        'active'   => 'Active',
        'inactive' => 'Inactive',
    ];

    // Payment methods are managed in Settings › Payment Methods (App\Models\PaymentMethod);
    // hotels.payment_methods stores their keys, e.g. ["visa", "fpx", "cash"].

    public const SOCIAL_NETWORKS = ['facebook', 'instagram', 'linkedin', 'youtube', 'tiktok', 'x'];

    public const PLACE_CATEGORIES = [
        'attraction' => 'Attraction',
        'transport'  => 'Transport',
        'dining'     => 'Dining & Entertainment',
        'hospital'   => 'Hospital',
        'other'      => 'Other',
    ];

    // hq_lock is computed by MySQL (only-one-HQ guard), never written by the app
    protected $guarded = ['id', 'hq_lock'];

    protected $casts = [
        'phones'            => 'array',
        'social_links'      => 'array',
        'payment_methods'   => 'array',
        'parking_available' => 'boolean',
        'star_rating'       => 'integer',
        'latitude'          => 'float',
        'longitude'         => 'float',
        'parking_fee'       => 'float',
        'parking_clearance' => 'float',
    ];

    // ---- relations ----

    public function headquarters(): BelongsTo
    {
        return $this->belongsTo(self::class, 'parent_id');
    }

    public function branches(): HasMany
    {
        return $this->hasMany(self::class, 'parent_id');
    }

    public function nearbyPlaces(): HasMany
    {
        return $this->hasMany(HotelNearbyPlace::class)->orderBy('sort_order');
    }

    public function facilities(): BelongsToMany
    {
        return $this->belongsToMany(RoomFacility::class, 'hotel_facility');
    }

    // ---- helpers ----

    public function isHeadquarters(): bool
    {
        return $this->type === self::TYPE_HQ;
    }

    public static function hq(): ?self
    {
        return static::where('type', self::TYPE_HQ)->first();
    }

    /** Photo URL, or the building placeholder when there is none. Relative so it works on http and https. */
    public function getPhotoUrlAttribute(): string
    {
        return $this->photo_path ? '/storage/'.ltrim($this->photo_path, '/') : '/images/hotel-placeholder.svg';
    }

    /** "43 Herschel Street, Brisbane QLD 4000" */
    public function getFullAddressAttribute(): string
    {
        $cityLine = trim(implode(' ', array_filter([$this->city, $this->state, $this->postcode])));

        return implode(', ', array_filter([$this->address_line1, $this->address_line2, $cityLine, $this->country]));
    }
}
