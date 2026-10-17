<?php

namespace App\Datatables\Lists;

use App\Datatables\Core\Column;
use App\Datatables\Core\Datatable;
use App\Models\Booking;
use App\Models\Customer;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

/** Admin › Customers: guests who booked (guest checkout, one row per email). */
class CustomerList extends Datatable
{
    public function columns(): array
    {
        return [
            Column::make('name', 'Name')->sortable()->searchable(),
            Column::make('email', 'Email')->sortable()->searchable(),
            Column::make('phone', 'Phone')->searchable()->width('160px'),
            Column::make('bookings_count', 'Bookings')->sortable()->center()->width('110px'),
            Column::make('spent', 'Total Spent')->sortable('confirmed_total')->width('140px'),
            Column::make('created_at', 'Since')->sortable()->width('130px'),
        ];
    }

    public function defaultSort(): ?array
    {
        return ['created_at', 'desc'];
    }

    public function query(Request $request): Builder
    {
        return Customer::query()
            ->withCount('bookings')
            ->withSum(['bookings as confirmed_total' => fn ($q) => $q->where('status', Booking::CONFIRMED)], 'total_amount');
    }

    /** @param Customer $customer */
    public function row(Model $customer): array
    {
        return [
            'name'           => $customer->name,
            'email'          => $customer->email,
            'phone'          => $customer->phone,
            'bookings_count' => $customer->bookings_count,
            'spent'          => 'RM '.number_format((float) $customer->confirmed_total, 2),
            'created_at'     => $customer->created_at->format('d M Y'),
        ];
    }
}
