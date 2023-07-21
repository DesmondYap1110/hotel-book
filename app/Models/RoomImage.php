<?php

namespace App\Models;

use App\Models\RoomType;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class RoomImage extends Model
{
    use HasFactory;
    protected $fillable = [
        'images','room_type_id',
    ];

    public function roomType(){
        return $this->belongsTo(RoomType::class);
    }
}
