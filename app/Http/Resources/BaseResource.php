<?php
/**
 * @Auhtor : Stanley
 */

namespace App\Http\Resources;

use Carbon\Carbon;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Currency;
use App\User;
use App\Country;

class BaseResource extends JsonResource
{

    /**
     * Fields that will be display when display_type = \App\Enumerations\Resource\DisplayType::FILTERED
     *
     * @var  array
     */
    protected $filtered_fields;


    /**
     * Fields that need to be casted to monetary display
     *
     * @var  array
     */
    protected $monetary_fields;


    /**
     * Fields that need to be casted to date display.
     *
     * @var  array
     */
    protected $dates;


    /**
     * storing \App\Currency that is needed to be used for casting monetary display.
     *
     * @var  null | \App\Currency
     */
    protected $default_currency;


    /**
     * Filtered out the ignore fields of an array.
     *
     * @param  array  $array
     * @param  unknow  $ignore
     *
     * @return  array
     *
     */
    public function ignoreArrayFields (array $array, $ignore = null) {
        $result = [];

        if (!isset($ignore) && !is_array($ignore)) {
            $ignore = [];
        }

        foreach ($array as $item) {
            if (!in_array($item, $ignore)) {
                array_push($result, $item);
            }
        }

        return $result;
    }


    /**
     * Copy the fields resrouce value into an passed array or a new array.
     *
     * @param  array  $fields
     * @param  array | null  $array
     *
     * @eeturn  array
     */

    public function copyFieldsFromResource (array $fields, array &$array = null) {

        if (!isset($array) || !is_array($array)) {
            $array = [];
        }

        foreach ($fields as $field) {
            if (isset($this->$field)) {
                $array[$field] = $this->$field;
            }
            else {
                $array[$field] = null;
            }
        }

        return $array;
    }


    /**
     * Check the if the resource need to be filtered
     *
     * @return boolean
     */
    public function isFiltered () {
        return $this->display_type == \App\Enumerations\Resource\DisplayType::FILTERED;
    }


    /**
     * Get $filtered_fields.
     *
     * @return  array
     */
    public function getFilteredFields () {
        if (!is_array($this->filtered_fields)) {
            $this->filtered_fields = [];
        }
        return $this->filtered_fields;
    }


    /**
     * Get an array that only considering the value of filtered fields.
     *
     * @return  array
     */
    public function getFilteredFieldsValue () {
        return $this->copyFieldsFromResource($this->getFilteredFields());
    }


    /**
     * Get monetary fields.
     *
     * @return  array;
     */
    public function getMonetaryFields () {
        if (!is_array($this->monetary_fields)) {
            $this->monetary_fields = [];
        }
        return  $this->monetary_fields;
    }


    /**
     * Get dates field
     *
     * @return  array
     */
    public function getDates () {
        if (!is_array($this->dates)) {
            $this->dates = [];
        }
        return $this->dates;
    }


    /**
     * Process filtered fields
     *
     * @param  array  $array
     */
    public function processFiltered (array &$array) {
        $keys = array_keys($array);
        $filtered_fields = $this->getFilteredFields();

        foreach ($keys as $key) {
            if (!in_array($key, $filtered_fields)) {
                unset($array[$key]);
            }
        }
    }

    /**
     * Process dates field in array to display date
     *
     * @param  array  $array
     */

    public function processDates (array &$array) {
        $dates_fields = $this->getDates();
        $keys = array_keys($array);
        foreach ($keys as $key) {
            if (in_array($key, $dates_fields)) {
                $array[$key] = static::dateDisplay($array[$key]);
            }
        }
    }


    /**
     * Process monetary fields display.
     * currency and monetary_fields must exits.
     *
     * @param array $array
     */
    public function processMonetary (array &$array) {
        $currency = $this->getDefaultCurrency();
        $monetary_fields = $this->getMonetaryFields();
        if (isset($currency) && isset($monetary_fields)) {
            foreach ($monetary_fields as $field) {
                if (array_key_exists($field, $array) && is_numeric($array[$field])) {
                    $array[$field] = static::moneyDisplay($array[$field], $currency);
                }
            }

        }
    }


    /**
     * Get default currency.
     *
     * @return  \App\Currency|NULL
     */
    public function getDefaultCurrency () {
        if (isset($this->default_currency) && $this->default_currency instanceof Currency) {
            return $this->default_currency;
        }
        return null;
    }


    /**
     * Trigger to run child's setDefaultCurrency function
     */
    public function setChildDefaultCurrency () {
        if (method_exists($this, 'setDefaultCurrency')) {
            $this->setDefaultCurrency();
        }
    }


    /**
     *
     * {@inheritDoc}
     * @see \Illuminate\Http\Resources\Json\JsonResource::toArray()
     */
    public function toArray($request) {
        $array = $this->getArray($request);

        if ($this->isFiltered()) {
            $this->processFiltered($array);
        }

        if (!$this->isFiltered()){
            $this->appendArrayForFullDisplay($array);
        }
        $this->setChildDefaultCurrency();
        $this->processMonetary($array);
        $this->processDates($array);

        if (isset($this->policies)) {
            $array['policies'] = $this->policies;
        }

        return $array;
    }


    public function baseToArray ($request) {
        return parent::toArray($request);
    }


    /**
     * Return money display format.
     *
     * @param  float  $amount
     * @param  string  $currency_code
     * @return  boolean
     */
    public static function moneyDisplay (float $amount = null, Currency $currency = null) {
        $array = [];
        $array['unformatted'] = $amount;
        if (isset($currency) && isset($currency->code)) {
           $array['display'] = $currency->code . ' ' . number_format($amount, 2, '.', ',');
        }
        return $array;
    }


    /**
     *  Return date display format.
     *
     * @param  unknown  $date
     * @return unknown|string
     */

    public static function dateDisplay ($date = null) {
        if (isset($date) && gettype($date) == 'object' && get_class($date) == 'Illuminate\Support\Carbon') {
            return  $date->toDateTimeString();
        }
        return $date;
    }


    /**
     * Display minimal information for a User object. [id, name].
     * If null value is passed, return null.
     *
     * @param  \App\User | null  $user
     * @return  array | null
     */
    public static function minimalUserDisplay (User $user = null) {
        if (isset($user)) {
            return [
                'id' => $user->id,
                'name' => $user->name,
            ];
        }
        else {
            return null;
        }
    }


    /**
     * Display minimal information for a Country object. ['id', 'name']
     *
     * @param Country $country
     *
     * @return  array
     */
    public static function minimalCountryDisplay (Country $country) {
        return [
            'id' => $country->id,
            'name' => $country->name,
        ];
    }


    /**
     * Return currency display format.
     * Only display [id,code]
     *
     * @param Currency $currency
     * @return  array
     */
    public static function currencyDisplay (Currency $currency = null) {
        if (isset($currency)) {
            return [
                'id' => $currency->id,
                'code' => $currency->code,
            ];
        }
        return $currency;
    }


    /**
     * Return user data display format.
     * Only display [id,name]
     *
     * @param User $user
     * @return NULL[]|\App\User
     */
    public static function userDisplay (User $user = null) {
        if (isset($user)) {
            return [
                'id' => $user->id,
                'name' => $user->name,
            ];
        }
        return $user;
    }


}





?>
