<?php

namespace App\Datatables\Lists;

use App\Datatables\Core\Column;
use App\Datatables\Core\Datatable;
use App\Datatables\Filters\SelectFilter;
use App\Models\RoomFacility;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class RoomFacilityList extends Datatable
{
    public function columns(): array
    {
        return [
            Column::make('name', 'Facility')->sortable()->searchable(),
            Column::make('category', 'Category')->badge()->sortable()->width('220px'),
            Column::make('action', 'Action')->actions(),
        ];
    }

    public function filters(): array
    {
        return [
            SelectFilter::make('category', 'Category', RoomFacility::CATEGORIES),
        ];
    }

    public function defaultSort(): ?array
    {
        return ['name', 'asc'];
    }

    public function query(Request $request): Builder
    {
        return RoomFacility::query();
    }

    /** @param RoomFacility $facility */
    public function row(Model $facility): array
    {
        return [
            'name'     => $facility->name,
            'category' => $this->badge($facility->category_label, 'info'),
            'action'   => $this->actions()
                ->edit(route('admin.room-facilities.edit', $facility))
                ->delete(route('admin.room-facilities.destroy', $facility), $facility->name),
        ];
    }
}
