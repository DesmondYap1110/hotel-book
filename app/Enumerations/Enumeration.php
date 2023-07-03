<?php

namespace App\Enumerations;

use Illuminate\Validation\Rule;

abstract class Enumeration implements EnumerationInterface
{
	public static function imploded($glue = ',')
	{
		return implode($glue, static::get());
	}

	public static function RuleIn()
	{
		return Rule::in(static::get());
	}

	public static function selectOptions()
	{
		// First, map the items value as the key
		$keyed = collect(static::get())->keyBy(static::keyByCallback())->toArray();

		$obj = new static;

		if ($obj instanceof TranslateableEnumeration) {
			$keyed = collect($keyed)->transform(function ($item, $key) use ($obj) {
										// Then translate and transform the value of the items
										return trans($obj->getLangPrefix() . $item);
									})->toArray();
		}

		// Finally return the keyed and translated list
		return $keyed;
	}

	/**
	 * Get a callback to map the key of the enumeration items.
	 *
	 * @return  callable
	 */
	protected static function keyByCallback()
	{
		return function ($value, $key) {
			// Use the value as the item key
			return $value;
		};
	}

    public static function toArray(): array
    {
        $class = new \ReflectionClass(static::class);

        return array_values($class->getConstants());
    }

    /**
     * @return string
     */
    public function __toString(): string
    {
        return implode(',', static::toArray());
    }
}
