<?php

namespace App\Datatables\Filters;

use Illuminate\Database\Eloquent\Builder;

/**
 * Date picker filter (same day).
 *   DateFilter::make('created_at', 'Created on')
 */
class DateFilter extends Filter
{
    public static function make(string $name, string $label): static
    {
        return new static($name, $label);
    }

    public function apply(Builder $query, string $value): void
    {
        if (preg_match('/^\d{4}-\d{2}-\d{2}$/', $value)) {
            $query->whereDate($this->column(), $value);
        }
    }

    public function toArray(): array
    {
        return ['type' => 'date', 'name' => $this->name, 'label' => $this->label];
    }
}
