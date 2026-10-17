<?php

namespace App\Datatables\Lists;

use App\Datatables\Core\Column;
use App\Datatables\Core\Datatable;
use App\Datatables\Filters\SelectFilter;
use App\Models\Payment;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

/** Admin › Payments: every payment attempt (a booking can have several). */
class PaymentList extends Datatable
{
    public function columns(): array
    {
        return [
            Column::make('created_at', 'Date')->sortable('payments.created_at')->width('170px'),
            Column::make('reference', 'Booking')->sortable('bookings.reference')->searchable('bookings.reference')->width('170px'),
            Column::make('guest', 'Guest')->searchable('customers.name'),
            Column::make('gateway', 'Gateway')->searchable('payments.gateway_ref')->width('190px'),
            Column::make('amount', 'Amount')->sortable('payments.amount')->width('120px'),
            Column::make('status', 'Status')->badge()->center()->width('110px'),
            Column::make('action', 'Action')->actions(),
        ];
    }

    public function filters(): array
    {
        return [
            SelectFilter::make('status', 'Status', Payment::STATUSES)->field('payments.status'),
            SelectFilter::make('gateway', 'Gateway', Payment::GATEWAYS)->field('payments.gateway'),
        ];
    }

    public function defaultSort(): ?array
    {
        return ['created_at', 'desc'];
    }

    public function query(Request $request): Builder
    {
        return Payment::query()
            ->join('bookings', 'bookings.id', '=', 'payments.booking_id')
            ->join('customers', 'customers.id', '=', 'bookings.customer_id')
            ->select('payments.*', 'bookings.reference', 'customers.name as guest_name');
    }

    /** @param Payment $payment */
    public function row(Model $payment): array
    {
        return [
            'created_at' => $payment->created_at->format('d M Y, g:i A'),
            'reference'  => $payment->reference,
            'guest'      => $payment->guest_name,
            'gateway'    => (Payment::GATEWAYS[$payment->gateway] ?? $payment->gateway)."\n".$payment->gateway_ref,
            'amount'     => 'RM '.number_format($payment->amount, 2),
            'status'     => $this->badge(Payment::STATUSES[$payment->status] ?? $payment->status, Payment::STATUS_BADGES[$payment->status] ?? 'muted'),
            'action'     => $this->actions()->view(route('admin.bookings.show', $payment->booking_id)),
        ];
    }
}
