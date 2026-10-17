<?php

namespace App\Datatables\Lists;

use App\Datatables\Core\Column;
use App\Datatables\Core\Datatable;
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
            Column::make('name', 'Hotel')->sortable()->searchable(),
            Column::make('email', 'Email')->searchable(),
            Column::make('tel', 'Tel')->width('150px'),
            Column::make('city', 'City')->sortable()->searchable()->width('180px'),
        ];
    }

    public function filters(): array
    {
        return [
            TextFilter::make('state', 'State'),
        ];
    }

    public function defaultSort(): ?array
    {
        return ['name', 'asc'];
    }

    public function query(Request $request): Builder
    {
        return Hotel::query();
    }

    /** @param Hotel $hotel */
    public function row(Model $hotel): array
    {
        return [
            'name'  => $hotel->name,
            'email' => $hotel->email,
            'tel'   => $hotel->tel,
            'city'  => $hotel->city,
            // add ->actions() here once HotelController has edit/destroy
        ];
    }
}
