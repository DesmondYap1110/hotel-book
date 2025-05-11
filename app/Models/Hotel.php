<?php

namespace App\Models;

use App\Models\HotelImage;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hotel extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'address',
        'city',
        'state',
        'country',
        'postal_code',
        'phone_number',
        'website_url',
        'chain_name',
        'policies',
        'cancellation_policies',
        'check_in_from',
        'check_in_until',
        'check_out_from',
        'check_out_until',
        // Do not include 'images' here unless you're storing image paths
    ];

    public function images()
    {
        return $this->hasMany(HotelImage::class);
    }


}
