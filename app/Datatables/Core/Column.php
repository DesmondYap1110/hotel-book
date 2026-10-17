<?php

namespace App\Datatables\Core;

/**
 * One table column, built with chained calls:
 *
 *   Column::make('name', 'Facility')->sortable()->searchable()
 *   Column::make('image', 'Image')->image()->width('110px')
 *   Column::make('status', 'Status')->badge()->center()
 *   Column::make('action', 'Action')->actions()
 *
 * The key must match a key in the array your list's row() returns.
 */
class Column
{
    public string $type = 'text';          // text | html | image | badge | actions
    public bool $sortable = false;
    public bool $searchable = false;
    public ?string $field = null;          // database column used to sort/search (defaults to key)
    public ?string $align = null;          // null (left) | center | right
    public ?string $width = null;

    public function __construct(public string $key, public string $label)
    {
    }

    public static function make(string $key, string $label): static
    {
        return new static($key, $label);
    }

    /** Let users sort by this column. $field = database column if it differs from the key. */
    public function sortable(?string $field = null): static
    {
        $this->sortable = true;
        $this->field = $field ?? $this->field;

        return $this;
    }

    /** Include this column in the search box. $field = database column if it differs from the key. */
    public function searchable(?string $field = null): static
    {
        $this->searchable = true;
        $this->field = $field ?? $this->field;

        return $this;
    }

    public function center(): static
    {
        $this->align = 'center';

        return $this;
    }

    public function right(): static
    {
        $this->align = 'right';

        return $this;
    }

    public function width(string $width): static
    {
        $this->width = $width;

        return $this;
    }

    /** Cell value is an image URL. */
    public function image(): static
    {
        $this->type = 'image';

        return $this;
    }

    /** Cell value is ['label' => ..., 'variant' => 'success|danger|...'] or a list of them. */
    public function badge(): static
    {
        $this->type = 'badge';

        return $this;
    }

    /** Cell value is built with $this->actions() in your list's row(). Always centered. */
    public function actions(): static
    {
        $this->type = 'actions';
        $this->align = 'center';
        $this->width ??= '160px';

        return $this;
    }

    /** Cell value is trusted HTML. Escape user input yourself with e()! Prefer badge()/actions(). */
    public function html(): static
    {
        $this->type = 'html';

        return $this;
    }

    /** Database column used for sort/search. */
    public function dbField(): string
    {
        return $this->field ?? $this->key;
    }

    /** What the Vue table needs (no database details). */
    public function toArray(): array
    {
        return [
            'key'        => $this->key,
            'label'      => $this->label,
            'type'       => $this->type,
            'sortable'   => $this->sortable,
            'searchable' => $this->searchable,
            'align'      => $this->align,
            'width'      => $this->width,
        ];
    }
}
