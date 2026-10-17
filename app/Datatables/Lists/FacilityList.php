<?php

namespace App\Datatables\Lists;

use App\Datatables\Core\Column;
use App\Datatables\Core\Datatable;
use App\Datatables\Filters\SelectFilter;
use App\Models\Facility;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

/** Facilities table - shared by HotelFacilityList and RoomFacilityList. */
abstract class FacilityList extends Datatable
{
    /** e.g. App\Models\HotelFacility::class */
    abstract protected function model(): string;

    /** Route name prefix, e.g. 'admin.hotel-facilities' */
    abstract protected function routeName(): string;

    public function columns(): array
    {
        return [
            Column::make('name', 'Facility')->sortable()->searchable(),
            Column::make('category', 'Category')->badge()->sortable()->width('240px'),
            Column::make('action', 'Action')->actions(),
        ];
    }

    public function filters(): array
    {
        return [
            SelectFilter::make('category', 'Category', $this->model()::CATEGORIES),
        ];
    }

    public function defaultSort(): ?array
    {
        return ['name', 'asc'];
    }

    public function query(Request $request): Builder
    {
        return $this->model()::query();
    }

    /** @param Facility $facility */
    public function row(Model $facility): array
    {
        return [
            'name'     => $facility->name,
            'category' => $this->badge($facility->category_label, 'info'),
            'action'   => $this->actions()
                ->edit(route($this->routeName().'.edit', $facility))
                ->delete(route($this->routeName().'.destroy', $facility), $facility->name),
        ];
    }
}
