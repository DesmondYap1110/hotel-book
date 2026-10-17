<?php

namespace App\Datatables\Lists;

use App\Datatables\Core\Column;
use App\Datatables\Core\Datatable;
use App\Datatables\Filters\SelectFilter;
use App\Models\Booking;
use App\Models\Hotel;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

/** Admin › Bookings. Bookings are made by guests on the public site. */
class BookingList extends Datatable
{
    public function columns(): array
    {
        return [
            Column::make('reference', 'Reference')->sortable('bookings.reference')->searchable('bookings.reference')->width('170px'),
            Column::make('guest', 'Guest')->sortable('customers.name')->searchable('customers.name'),
            Column::make('hotel', 'Hotel / Room')->sortable('hotels.name')->searchable('hotels.name'),
            Column::make('stay', 'Stay')->sortable('bookings.check_in')->width('200px'),
            Column::make('total', 'Total')->sortable('bookings.total_amount')->width('120px'),
            Column::make('status', 'Status')->badge()->center()->width('150px'),
            Column::make('action', 'Action')->actions(),
        ];
    }

    public function filters(): array
    {
        return [
            SelectFilter::make('status', 'Status', Booking::STATUSES)->field('bookings.status'),
            SelectFilter::make('hotel', 'Hotel', Hotel::orderBy('name')->pluck('name', 'id')->all())->field('bookings.hotel_id'),
        ];
    }

    public function defaultSort(): ?array
    {
        return ['stay', 'desc'];
    }

    public function query(Request $request): Builder
    {
        // joins only for the columns we show / search / sort - one query per page
        return Booking::query()
            ->join('customers', 'customers.id', '=', 'bookings.customer_id')
            ->join('hotels', 'hotels.id', '=', 'bookings.hotel_id')
            ->join('room_types', 'room_types.id', '=', 'bookings.room_type_id')
            ->leftJoin('rooms', 'rooms.id', '=', 'bookings.room_id')
            ->select('bookings.*', 'customers.name as guest_name', 'customers.email as guest_email',
                'hotels.name as hotel_name', 'room_types.name as type_name', 'rooms.room_number');
    }

    /** @param Booking $booking */
    public function row(Model $booking): array
    {
        return [
            'reference' => $booking->reference,
            'guest'     => "{$booking->guest_name}\n{$booking->guest_email}",
            'hotel'     => "{$booking->hotel_name}\n{$booking->type_name}".($booking->room_number ? " · Room {$booking->room_number}" : ''),
            'stay'      => $booking->check_in->format('d M').' – '.$booking->check_out->format('d M Y')." ({$booking->nights}n)",
            'total'     => 'RM '.number_format($booking->total_amount, 2),
            'status'    => $this->badge($booking->status_label, Booking::STATUS_BADGES[$booking->status] ?? 'muted'),
            'action'    => $this->actions()->view(route('admin.bookings.show', $booking)),
        ];
    }
}
