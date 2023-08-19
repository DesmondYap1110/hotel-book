<?php

namespace App\Http\Resources;

use App\Currency;


interface BaseResourceInterface {


    /**
     * Return the array that has to be used by toArray function
     *
     * @return  array
     */
    public function getArray($request);


    /**
     * This function only will be run if display type is full display.
     * Works to append more array fields.
     *
     * @param  array  $array
     */
    public function appendArrayForFullDisplay (&$array);

}




?>
