<?php

namespace App\Datatables\Lists;

use App\Datatables\Core\Column;
use App\Datatables\Core\Datatable;
use App\Datatables\Filters\SelectFilter;
use App\Datatables\Filters\TextFilter;
use App\Models\Hotel;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class HotelList extends Datatable
{
    public function columns(): array
    {
        return [
            Column::make('photo', '')->avatar()->width('64px'),
            Column::make('name', 'Hotel')->sortable()->searchable(),
            Column::make('type', 'Type')->badge()->sortable()->width('140px'),
            Column::make('location', 'Location')->searchable('city')->sortable('city'),
            Column::make('phone', 'Phone')->width('160px'),
            Column::make('status', 'Status')->badge()->center()->width('110px'),
            Column::make('action', 'Action')->actions(),
        ];
    }

    public function filters(): array
    {
        return [
            SelectFilter::make('type', 'Type', Hotel::TYPES),
            SelectFilter::make('status', 'Status', Hotel::STATUSES),
            TextFilter::make('state', 'State'),
        ];
    }

    /** HQ first, then branches A-Z (served by the (type, status) and name indexes). */
    public function query(Request $request): Builder
    {
        return Hotel::query()
            ->select(['id', 'type', 'status', 'name', 'brand', 'city', 'state', 'country', 'phones', 'photo_path'])
            ->orderByRaw("type = 'headquarters' desc")
            ->orderBy('name');
    }

    /** @param Hotel $hotel */
    public function row(Model $hotel): array
    {
        return [
            'photo'    => $hotel->photo_url,
            'name'     => $hotel->brand && ! str_contains($hotel->name, $hotel->brand) ? "{$hotel->name} ({$hotel->brand})" : $hotel->name,
            'type'     => $hotel->isHeadquarters() ? $this->badge('Headquarters', 'primary') : $this->badge('Branch', 'info'),
            'location' => implode(', ', array_filter([$hotel->city, $hotel->state, $hotel->country])) ?: '-',
            'phone'    => $hotel->phones[0]['number'] ?? '-',
            'status'   => $hotel->status === 'active' ? $this->badge('Active', 'success') : $this->badge('Inactive', 'muted'),
            'action'   => $this->rowActions($hotel),
        ];
    }

    /** HQ can be edited but never deleted. */
    private function rowActions(Hotel $hotel)
    {
        $actions = $this->actions()->edit(route('admin.hotels.edit', $hotel));

        return $hotel->isHeadquarters()
            ? $actions
            : $actions->delete(route('admin.hotels.destroy', $hotel), $hotel->name);
    }
}
