<?php

namespace App\Models\Malaysia;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/** Malaysian state / federal territory (table: malaysia_states). */
class State extends Model
{
    protected $table = 'malaysia_states';

    public $timestamps = false;

    protected $fillable = ['name'];

    public function cities(): HasMany
    {
        return $this->hasMany(City::class, 'state_id')->orderBy('name');
    }
}
