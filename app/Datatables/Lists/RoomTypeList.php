<?php

namespace App\Datatables\Lists;

use App\Datatables\Core\Column;
use App\Datatables\Core\Datatable;
use App\Models\RoomType;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

/** Rooms › Room Types. */
class RoomTypeList extends Datatable
{
    public function columns(): array
    {
        return [
            Column::make('image', 'Image')->image()->width('110px'),
            Column::make('name', 'Name')->sortable()->searchable(),
            Column::make('beds', 'Bed')->badge(),
            Column::make('guests', 'Guests')->width('170px'),
            Column::make('facilities_count', 'Facilities')->sortable()->center()->width('110px'),
            Column::make('rooms_count', 'Rooms')->sortable()->center()->width('100px'),
            Column::make('action', 'Action')->actions(),
        ];
    }

    public function defaultSort(): ?array
    {
        return ['name', 'asc'];
    }

    public function query(Request $request): Builder
    {
        // first photo only + two counts: one query each, no per-row queries
        return RoomType::query()
            ->with(['roomImages' => fn ($q) => $q->select('id', 'room_type_id', 'images', 'sort_order')])
            ->withCount('facilities', 'rooms');
    }

    /** @param RoomType $type */
    public function row(Model $type): array
    {
        return [
            'image'            => $type->roomImages->first()?->url ?? '/images/empty.jpg',
            'name'             => $type->name,
            'beds'             => collect(RoomType::BEDS)
                ->filter(fn ($label, $column) => $type->{$column} > 0)
                ->map(fn ($label, $column) => $this->badge("{$label} × {$type->{$column}}"))
                ->values()->all(),
            'guests'           => "{$type->max_adult} adult(s)".($type->max_child ? ", {$type->max_child} child(ren)" : ''),
            'facilities_count' => $type->facilities_count,
            'rooms_count'      => $type->rooms_count,
            'action'           => $this->actions()
                ->edit(route('admin.room-types.edit', $type))
                ->delete(route('admin.room-types.destroy', $type), $type->name),
        ];
    }
}
