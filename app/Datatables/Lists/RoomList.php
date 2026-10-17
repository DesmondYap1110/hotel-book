<?php

namespace App\Datatables\Lists;

use App\Datatables\Core\Column;
use App\Datatables\Core\Datatable;
use App\Datatables\Filters\SelectFilter;
use App\Models\Room;
use App\Models\RoomType;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

/**
 * Example of a table that searches/sorts a JOINED column (room_types.name).
 */
class RoomList extends Datatable
{
    public function columns(): array
    {
        return [
            Column::make('room_number', 'Room No.')->sortable('rooms.room_number')->searchable('rooms.room_number')->width('140px'),
            Column::make('type_name', 'Room Type')->sortable('room_types.name')->searchable('room_types.name'),
            Column::make('created_at', 'Added')->sortable('rooms.created_at')->width('160px'),
        ];
    }

    public function filters(): array
    {
        return [
            SelectFilter::make('room_type', 'Room Type', RoomType::orderBy('name')->pluck('name', 'id')->all())
                ->field('rooms.room_type_id'),
        ];
    }

    public function defaultSort(): ?array
    {
        return ['room_number', 'asc'];
    }

    public function query(Request $request): Builder
    {
        return Room::query()
            ->join('room_types', 'room_types.id', '=', 'rooms.room_type_id')
            ->select('rooms.*', 'room_types.name as type_name');
    }

    /** @param Room $room */
    public function row(Model $room): array
    {
        return [
            'room_number' => $room->room_number,
            'type_name'   => $room->type_name,
            'created_at'  => $room->created_at?->format('d M Y'),
            // add ->actions() here once RoomController has edit/destroy
        ];
    }
}
