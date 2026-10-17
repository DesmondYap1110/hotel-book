<?php

namespace App\Models\Malaysia;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/** Malaysian postcode -> city (table: malaysia_postcodes). One postcode can cover several cities. */
class Postcode extends Model
{
    protected $table = 'malaysia_postcodes';

    public $timestamps = false;

    protected $fillable = ['postcode', 'city_id'];

    public function city(): BelongsTo
    {
        return $this->belongsTo(City::class);
    }
}
