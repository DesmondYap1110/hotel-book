<?php

namespace App\Datatables\Filters;

use Illuminate\Database\Eloquent\Builder;

/**
 * Dropdown filter (exact match).
 *   SelectFilter::make('category', 'Category', RoomFacility::CATEGORIES)
 */
class SelectFilter extends Filter
{
    /** @param array<string|int, string> $options value => label */
    public function __construct(string $name, string $label, public array $options)
    {
        parent::__construct($name, $label);
    }

    public static function make(string $name, string $label, array $options): static
    {
        return new static($name, $label, $options);
    }

    public function apply(Builder $query, string $value): void
    {
        // ignore values that are not in the list
        if (array_key_exists($value, $this->options)) {
            $query->where($this->column(), $value);
        }
    }

    public function toArray(): array
    {
        return [
            'type'    => 'select',
            'name'    => $this->name,
            'label'   => $this->label,
            'options' => collect($this->options)
                ->map(fn ($label, $value) => ['value' => (string) $value, 'label' => $label])
                ->values(),
        ];
    }
}
