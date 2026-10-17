<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/** One question + answer on a hotel's FAQ. */
class HotelFaq extends Model
{
    protected $fillable = ['hotel_id', 'question', 'answer', 'sort_order'];
}
