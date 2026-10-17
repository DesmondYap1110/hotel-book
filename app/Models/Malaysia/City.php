<?php

namespace App\Models\Malaysia;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

/** Malaysian city / town (table: malaysia_cities). */
class City extends Model
{
    protected $table = 'malaysia_cities';

    public $timestamps = false;

    protected $fillable = ['state_id', 'name'];

    public function state(): BelongsTo
    {
        return $this->belongsTo(State::class);
    }

    public function postcodes(): HasMany
    {
        return $this->hasMany(Postcode::class, 'city_id');
    }
}
