<?php

namespace App\Models;

use App\Models\RoomImage;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class RoomType extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'max_adult',
        'max_child',
        'king_bed',
        'queen_bed',
        'single_bed',
        'quantity',
        'facilities',
        'room_prefix',
    ];

    public function roomImages(){
        return $this->hasMany(RoomImage::class);
    }

    public function rooms(){
        return $this->hasMany(Room::class);
    }
}
