# Datatables – how to add a table

Every admin list (search, sort, filters, "Show N entries", pagination,
mobile cards, delete confirm) comes from **one PHP class**. You never write
table HTML or JavaScript.

```
Controller: Inertia::render('RoomFacilities/Index', ['table' => Datatable::props('room-facilities')])
Vue page:   <ui-data-table :server="table" />           ← where the table goes
PHP:        app/Datatables/Lists/RoomFacilityList.php     ← what the table shows
Config: config/datatables.php  'room-facilities' => ...    ← allow-list
```

Under the hood: the Vue `<ui-data-table>` calls `GET /admin/datatables/{list}`,
and `App\Datatables\Core\Datatable::handle()` does search → filters → sort → paging.

```
app/Datatables/
├── Core/      engine: Datatable (base class), Column, Actions   ← rarely touched
├── Filters/   SelectFilter, TextFilter, DateFilter              ← add new filter types here
└── Lists/     one file per table: RoomFacilityList, ...         ← you work here
```

---

## 1. Create the class

```bash
php artisan make:datatable HotelList --model=Hotel
```

This creates `app/Datatables/Lists/HotelList.php` and registers it as `hotels`
in `config/datatables.php`.

## 2. Fill in the class

```php
class HotelList extends Datatable
{
    public function columns(): array
    {
        return [
            Column::make('name', 'Hotel')->sortable()->searchable(),
            Column::make('city', 'City')->sortable()->searchable(),
            Column::make('status', 'Status')->badge()->center(),
            Column::make('action', 'Action')->actions(),
        ];
    }

    public function filters(): array
    {
        return [
            SelectFilter::make('status', 'Status', ['open' => 'Open', 'closed' => 'Closed']),
        ];
    }

    public function query(Request $request): Builder
    {
        return Hotel::query();
    }

    public function row(Model $hotel): array
    {
        return [
            'name'   => $hotel->name,
            'city'   => $hotel->city,
            'status' => $this->badge(ucfirst($hotel->status), $hotel->status === 'open' ? 'success' : 'danger'),
            'action' => $this->actions()
                ->edit(route('admin.hotels.edit', $hotel))
                ->delete(route('admin.hotels.destroy', $hotel), $hotel->name),
        ];
    }
}
```

## 3. Put it on a page

Controller:

```php
public function index()
{
    return Inertia::render('Hotels/Index', [
        'table'     => Datatable::props('hotels'),
        'createUrl' => route('admin.hotels.create'),
    ]);
}
```

Vue page `resources/js/Pages/Hotels/Index.vue`:

```vue
<template>
    <Head title="Hotels" />
    <ui-page-card title="Hotels">
        <template #actions>
            <Link :href="createUrl" class="cl-btn cl-btn--primary"><i class="fas fa-plus"></i> Add Hotel</Link>
        </template>
        <ui-data-table :server="table" />
    </ui-page-card>
</template>

<script setup>
defineProps({ table: Object, createUrl: String });
</script>
```

Done. 🎉

---

## Cheat sheet

### Columns

| Call                          | Does                                              |
| ----------------------------- | ------------------------------------------------- |
| `->sortable()`                | click header to sort                              |
| `->searchable()`              | included in the Search box                        |
| `->sortable('db_column')`     | sort by a different DB column than the key        |
| `->center()` / `->right()`    | alignment                                         |
| `->width('120px')`            | fixed width                                       |
| `->image()`                   | value is an image URL                             |
| `->avatar()`                  | value is an image URL, shown as a small circle    |
| `->badge()`                   | value is `$this->badge('Label', 'success')` or an array of badges |
| `->actions()`                 | value is `$this->actions()->...`                  |
| `->html()`                    | value is HTML – **escape user data with `e()`**   |

Badge colours: `primary`, `success`, `danger`, `warning`, `info`, `muted`.

### Action buttons

```php
$this->actions()
    ->view($url)
    ->edit($url)
    ->delete($url, $name)                         // confirm → AJAX DELETE → reload
    ->link($url, 'fas fa-print', 'Print', 'dark') // any custom link
```

Your `destroy()` should answer JSON when asked:

```php
if ($request->expectsJson()) {
    return response()->json(['message' => 'Deleted.']);
}
```

### Filters

```php
SelectFilter::make('category', 'Category', ['a' => 'Label A'])   // exact match
TextFilter::make('city', 'City')                                  // contains
DateFilter::make('created_at', 'Created on')                      // same day
SelectFilter::make('type', 'Type', $options)->field('room_type')  // different DB column
```

### Other options

```php
protected int $perPage = 25;                       // rows on first load
protected array $perPageOptions = [25, 50, 100];   // "Show N entries" choices

public function defaultSort(): ?array { return ['name', 'asc']; }

public function authorize(Request $request): bool  // extra permission check
{
    return $request->user()->is_manager;
}
```

### Searching related tables

Join in `query()` and point the column at the joined field:

```php
public function query(Request $request): Builder
{
    return Room::query()
        ->join('room_types', 'room_types.id', '=', 'rooms.room_type_id')
        ->select('rooms.*', 'room_types.name as type_name');
}

Column::make('type_name', 'Room Type')->searchable('room_types.name')->sortable('room_types.name'),
```

---

## Small, already-loaded lists (no server)

For a short array you already have in Vue, use client mode:

```vue
<ui-data-table :columns="columns" :rows="rows">
    <template #cell-name="{ row }"><strong>{{ row.name }}</strong></template>
</ui-data-table>
```

## Files

| File | Role |
| ---- | ---- |
| `app/Datatables/Lists/*` | **your tables** (one class each) |
| `app/Datatables/Core/Datatable.php` | base class + engine (search, filter, sort, page) |
| `app/Datatables/Core/Column.php`, `Core/Actions.php` | column + button builders |
| `app/Datatables/Filters/*` | filter types |
| `app/Http/Controllers/Admin/DatatableController.php` | the one JSON endpoint |
| `config/datatables.php` | allow-list of tables |
| `resources/js/components/ui/UiDataTable.vue` | the table (Vue) |
| `resources/js/components/ui/UiTableCell.vue`, `UiTableFilters.vue` | cell types, filter bar |
| `resources/sass/components/_data-table.scss` | styles (incl. mobile cards) |
| `stubs/datatable.stub` | template used by `make:datatable` |
