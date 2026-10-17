<?php

namespace App\Datatables\Lists;

use App\Datatables\Core\Column;
use App\Datatables\Core\Datatable;
use App\Models\RoomType;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class RoomTypeList extends Datatable
{
    public function columns(): array
    {
        return [
            Column::make('image', 'Image')->image()->width('110px'),
            Column::make('name', 'Name')->sortable()->searchable(),
            Column::make('beds', 'Bed')->badge(),
            Column::make('guests', 'People'),
            Column::make('quantity', 'Quantity')->sortable()->center()->width('110px'),
            Column::make('action', 'Action')->actions()->width('170px'),
        ];
    }

    public function defaultSort(): ?array
    {
        return ['name', 'asc'];
    }

    public function query(Request $request): Builder
    {
        return RoomType::query()->with('roomImages');
    }

    /** @param RoomType $type */
    public function row(Model $type): array
    {
        $image = $type->roomImages->first();

        return [
            'image'    => $image ? asset('storage/room_images/'.$image->images) : asset('images/empty.jpg'),
            'name'     => $type->name,
            'beds'     => $this->beds($type),
            'guests'   => trim(($type->max_adult ? "{$type->max_adult} adult " : '').($type->max_child ? "{$type->max_child} child" : '')) ?: '-',
            'quantity' => $type->quantity,
            'action'   => $this->actions()
                ->view(route('admin.room-types.show', $type))
                ->edit(route('admin.room-types.edit', $type))
                ->delete(route('room-types.destroy', $type), $type->name),
        ];
    }

    /** One badge per bed size the room has. */
    private function beds(RoomType $type): array
    {
        return collect(['single_bed' => 'Single', 'queen_bed' => 'Queen', 'king_bed' => 'King'])
            ->filter(fn ($label, $field) => $type->{$field})
            ->map(fn ($label, $field) => $this->badge("{$label} × {$type->{$field}}"))
            ->values()
            ->all();
    }
}
