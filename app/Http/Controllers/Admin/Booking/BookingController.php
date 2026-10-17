<?php

namespace App\Http\Controllers\Admin\Booking;

use App\Datatables\Core\Datatable;
use App\Http\Controllers\Controller;
use App\Models\Booking;
use App\Models\Payment;
use App\Payments\PaymentManager;
use App\Services\BookingService;
use Inertia\Inertia;

/**
 * Admin › Bookings. Guests book on the public site; staff view and cancel here.
 * Pages: resources/js/Pages/Bookings/Index.vue, Show.vue
 */
class BookingController extends Controller
{
    public function index(PaymentManager $payments)
    {
        return Inertia::render('Bookings/Index', [
            'table'      => Datatable::props('bookings'),
            'gateway'    => $payments->activeName(),
            'bookingUrl' => route('booking.home'),
        ]);
    }

    public function show(Booking $booking)
    {
        $booking->load('hotel:id,name', 'customer', 'roomType:id,name', 'room.level', 'payments');
        $paidWhileCancelled = $booking->status === Booking::CANCELLED && $booking->payments->contains('status', Payment::PAID);

        return Inertia::render('Bookings/Show', [
            'booking' => [
                'id'               => $booking->id,
                'reference'        => $booking->reference,
                'status'           => $booking->status,
                'status_label'     => $booking->status_label,
                'badge'            => Booking::STATUS_BADGES[$booking->status] ?? 'muted',
                'hotel'            => $booking->hotel->name,
                'room_type'        => $booking->roomType->name,
                'room'             => $booking->room ? "Room {$booking->room->room_number} · {$booking->room->level?->name}" : null,
                'check_in'         => $booking->check_in->format('D, d M Y'),
                'check_out'        => $booking->check_out->format('D, d M Y'),
                'nights'           => $booking->nights,
                'guests'           => $booking->adults.' adult(s)'.($booking->children ? ", {$booking->children} child(ren)" : ''),
                'price_per_night'  => $booking->price_per_night,
                'total'            => $booking->total_amount,
                'special_requests' => $booking->special_requests,
                'created_at'       => $booking->created_at->format('d M Y, g:i A'),
                'expires_at'       => $booking->status === Booking::PENDING ? $booking->expires_at?->format('d M Y, g:i A') : null,
                'paid_at'          => $booking->paid_at?->format('d M Y, g:i A'),
                'cancelled_at'     => $booking->cancelled_at?->format('d M Y, g:i A'),
                'needs_refund'     => $paidWhileCancelled,
                'can_cancel'       => in_array($booking->status, [Booking::PENDING, Booking::CONFIRMED], true),
                'guest'            => $booking->customer->only('name', 'email', 'phone'),
            ],
            'payments' => $booking->payments->map(fn (Payment $p) => [
                'id'      => $p->id,
                'date'    => $p->created_at->format('d M Y, g:i A'),
                'gateway' => Payment::GATEWAYS[$p->gateway] ?? $p->gateway,
                'ref'     => $p->gateway_ref,
                'amount'  => $p->amount,
                'status'  => Payment::STATUSES[$p->status] ?? $p->status,
                'badge'   => Payment::STATUS_BADGES[$p->status] ?? 'muted',
                'paid_at' => $p->paid_at?->format('d M Y, g:i A'),
            ]),
            'cancelUrl' => route('admin.bookings.cancel', $booking),
            'backUrl'   => route('admin.bookings.index'),
        ]);
    }

    public function cancel(Booking $booking, BookingService $bookings)
    {
        if (! in_array($booking->status, [Booking::PENDING, Booking::CONFIRMED], true)) {
            return back()->withErrors(['booking' => 'Only pending or confirmed bookings can be cancelled.']);
        }

        $bookings->cancel($booking);

        $note = $booking->paid_at ? ' It was paid - remember to refund the guest.' : '';

        return back()->with('status', "Booking {$booking->reference} cancelled. The room is free again.{$note}");
    }
}
