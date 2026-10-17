<?php

namespace App\Datatables\Lists;

use App\Datatables\Core\Column;
use App\Datatables\Core\Datatable;
use App\Datatables\Filters\SelectFilter;
use App\Models\Hotel;
use App\Models\Room;
use App\Models\RoomType;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

/**
 * Every room of every hotel. Rooms are added / edited on the hotel form › Rooms tab
 * (Edit opens that tab). Example of searching / sorting JOINED columns.
 */
class RoomList extends Datatable
{
    private const STATUS_BADGES = ['available' => 'success', 'maintenance' => 'warning', 'out_of_service' => 'danger'];

    public function columns(): array
    {
        return [
            Column::make('room_number', 'Room No.')->sortable('rooms.room_number')->searchable('rooms.room_number')->width('120px'),
            Column::make('hotel_name', 'Hotel')->sortable('hotels.name')->searchable('hotels.name'),
            Column::make('level_name', 'Level')->sortable('hotel_levels.sort_order')->searchable('hotel_levels.name')->width('150px'),
            Column::make('type_name', 'Room Type')->sortable('room_types.name')->searchable('room_types.name'),
            Column::make('status', 'Status')->badge()->center()->width('140px'),
            Column::make('action', 'Action')->actions(),
        ];
    }

    public function filters(): array
    {
        return [
            SelectFilter::make('hotel', 'Hotel', Hotel::orderBy('name')->pluck('name', 'id')->all())->field('rooms.hotel_id'),
            SelectFilter::make('room_type', 'Room Type', RoomType::orderBy('name')->pluck('name', 'id')->all())->field('rooms.room_type_id'),
            SelectFilter::make('status', 'Status', Room::STATUSES)->field('rooms.status'),
        ];
    }

    public function defaultSort(): ?array
    {
        return ['room_number', 'asc'];
    }

    public function query(Request $request): Builder
    {
        return Room::query()
            ->join('hotels', 'hotels.id', '=', 'rooms.hotel_id')
            ->join('hotel_levels', 'hotel_levels.id', '=', 'rooms.hotel_level_id')
            ->leftJoin('room_types', 'room_types.id', '=', 'rooms.room_type_id') // type is optional
            ->select('rooms.*', 'hotels.name as hotel_name', 'hotel_levels.name as level_name', 'room_types.name as type_name');
    }

    /** @param Room $room */
    public function row(Model $room): array
    {
        return [
            'room_number' => $room->room_number,
            'hotel_name'  => $room->hotel_name,
            'level_name'  => $room->level_name,
            'type_name'   => $room->type_name ?? '-',
            'status'      => $this->badge(Room::STATUSES[$room->status] ?? $room->status, self::STATUS_BADGES[$room->status] ?? 'muted'),
            'action'      => $this->actions()->edit(route('admin.hotels.edit', $room->hotel_id).'#rooms'),
        ];
    }
}
