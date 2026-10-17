<?php

namespace App\Datatables\Filters;

use Illuminate\Database\Eloquent\Builder;

/**
 * Text box filter ("contains").
 *   TextFilter::make('name', 'Name')
 */
class TextFilter extends Filter
{
    public static function make(string $name, string $label): static
    {
        return new static($name, $label);
    }

    public function apply(Builder $query, string $value): void
    {
        $query->where($this->column(), 'like', '%'.addcslashes($value, '%_\\').'%');
    }

    public function toArray(): array
    {
        return ['type' => 'text', 'name' => $this->name, 'label' => $this->label];
    }
}
