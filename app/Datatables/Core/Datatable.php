<?php

namespace App\Datatables\Core;

use App\Datatables\Filters\Filter;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

/**
 * Base class for every server-side table.
 *
 * To make a new table (see docs/datatables.md):
 *   1. Run `php artisan make:datatable {Name}List` (creates app/Datatables/Lists/{Name}List.php)
 *      and fill in columns(), query() and row().
 *   2. Register it in config/datatables.php:  'my-list' => MyList::class
 *   3. Controller:  Inertia::render('My/Index', ['table' => Datatable::props('my-list')])
 *      Vue page:    <ui-data-table :server="table" />
 *
 * Search, sorting, filters, paging and the JSON format are handled here,
 * so a list class only describes WHAT to show.
 */
abstract class Datatable
{
    /** Rows per page when the table first loads. */
    protected int $perPage = 10;

    /** Options in the "Show N entries" dropdown. */
    protected array $perPageOptions = [10, 25, 50, 100];

    /** @return array<int, Column> */
    abstract public function columns(): array;

    /** The base query (joins, eager loads, scopes). Do not paginate here. */
    abstract public function query(Request $request): Builder;

    /** Turn one model into a row: column key => value. */
    abstract public function row(Model $model): array;

    /** @return array<int, Filter> Optional filter bar. */
    public function filters(): array
    {
        return [];
    }

    /** First sort: ['column key', 'asc'|'desc'], or null for the query's own order. */
    public function defaultSort(): ?array
    {
        return null;
    }

    /** Extra check on top of the admin login, e.g. return $request->user()->isManager(). */
    public function authorize(Request $request): bool
    {
        return true;
    }

    // -----------------------------------------------------------------
    // Helpers for row()
    // -----------------------------------------------------------------

    protected function actions(): Actions
    {
        return new Actions();
    }

    /** A coloured pill for a badge() column. Variants: primary, success, danger, warning, info, muted */
    protected function badge(string $label, string $variant = 'muted'): array
    {
        return ['label' => $label, 'variant' => $variant];
    }

    // -----------------------------------------------------------------
    // Engine - you normally do not need to touch anything below.
    // -----------------------------------------------------------------

    /** Handle one AJAX request from the Vue table and return JSON-ready data. */
    public function handle(Request $request): array
    {
        $query = $this->query($request);
        $columns = collect($this->columns())->keyBy('key');

        // 1. search box: OR across searchable columns
        $search = trim((string) $request->input('search', ''));
        $searchable = $columns->filter(fn (Column $c) => $c->searchable);
        if ($search !== '' && $searchable->isNotEmpty()) {
            $like = '%'.addcslashes($search, '%_\\').'%';
            $query->where(function (Builder $q) use ($searchable, $like) {
                foreach ($searchable as $column) {
                    $q->orWhere($column->dbField(), 'like', $like);
                }
            });
        }

        // 2. filter bar
        $values = (array) $request->input('filters', []);
        foreach ($this->filters() as $filter) {
            $value = $values[$filter->name] ?? null;
            if (is_scalar($value) && trim((string) $value) !== '') {
                $filter->apply($query, trim((string) $value));
            }
        }

        // 3. sort (only columns marked sortable)
        [$sortKey, $sortDir] = [$request->input('sort'), $request->input('dir', 'asc')];
        if (! $sortKey && $this->defaultSort()) {
            [$sortKey, $sortDir] = $this->defaultSort();
        }
        $sortColumn = $columns->get($sortKey);
        if ($sortColumn && $sortColumn->sortable) {
            $query->reorder($sortColumn->dbField(), $sortDir === 'desc' ? 'desc' : 'asc');
        }

        // 4. page
        $perPage = (int) $request->input('per_page', $this->perPage);
        $perPage = in_array($perPage, $this->perPageOptions, true) ? $perPage : $this->perPage;
        $page = $query->paginate($perPage, ['*'], 'page', max(1, (int) $request->input('page', 1)));

        return [
            'data' => $page->getCollection()->map(fn (Model $model) => $this->row($model))->values(),
            'meta' => [
                'total'     => $page->total(),
                'page'      => $page->currentPage(),
                'last_page' => $page->lastPage(),
                'per_page'  => $page->perPage(),
                'from'      => $page->firstItem() ?? 0,
                'to'        => $page->lastItem() ?? 0,
            ],
        ];
    }

    /** Everything the Vue table needs to draw itself. */
    public function config(string $listName): array
    {
        $sort = $this->defaultSort();

        return [
            'source'         => route('admin.datatables.show', $listName),
            'columns'        => collect($this->columns())->map->toArray()->values(),
            'filters'        => collect($this->filters())->map->toArray()->values(),
            'searchable'     => collect($this->columns())->contains(fn (Column $c) => $c->searchable),
            'perPage'        => $this->perPage,
            'perPageOptions' => $this->perPageOptions,
            'sort'           => $sort ? ['key' => $sort[0], 'dir' => $sort[1]] : null,
        ];
    }

    /**
     * Props for a Vue page:  Inertia::render('Rooms/Index', ['table' => Datatable::props('rooms')])
     * then in the page:      <ui-data-table :server="table" />
     */
    public static function props(string $listName): array
    {
        return static::resolve($listName)->config($listName);
    }

    /** Look up a registered list by its name in config/datatables.php. */
    public static function resolve(string $listName): static
    {
        $class = config("datatables.lists.{$listName}");

        abort_unless($class && is_subclass_of($class, self::class), 404, "Unknown datatable [{$listName}].");

        return app($class);
    }
}
