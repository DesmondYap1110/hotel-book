<?php

namespace App\Enumerations;

use App\Enumerations\Enumeration;

class Decision extends Enumeration
{
    public const enable = 'Enable';
    public const disable = 'Disable';

    /**
     * Get the decision option.
     */
    public static function get()
    {

        return [

            static::enable,
            static::disable,
        ];
    }
}
