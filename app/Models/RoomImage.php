<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * A photo of a room type. `images` holds the file path on the public disk
 * ("room_images/abc.jpg"); old rows hold only the file name (inside room_images/).
 */
class RoomImage extends Model
{
    protected $fillable = ['images', 'room_type_id', 'sort_order'];

    public function roomType(): BelongsTo
    {
        return $this->belongsTo(RoomType::class);
    }

    /** Path on the public disk. */
    public function getPathAttribute(): string
    {
        return str_contains($this->images, '/') ? $this->images : 'room_images/'.$this->images;
    }

    /** Relative URL (works on http and https). */
    public function getUrlAttribute(): string
    {
        return '/storage/'.$this->path;
    }
}
