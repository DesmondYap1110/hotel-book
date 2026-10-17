<?php

namespace App\Datatables\Filters;

use Illuminate\Database\Eloquent\Builder;

/**
 * A field in the table's filter bar. Each filter knows how it looks
 * (toArray) and how it narrows the query (apply).
 */
abstract class Filter
{
    public ?string $field = null; // database column (defaults to name)

    public function __construct(public string $name, public string $label)
    {
    }

    /** Database column to filter on, if it differs from the name. */
    public function field(string $field): static
    {
        $this->field = $field;

        return $this;
    }

    abstract public function apply(Builder $query, string $value): void;

    abstract public function toArray(): array;

    protected function column(): string
    {
        return $this->field ?? $this->name;
    }
}
