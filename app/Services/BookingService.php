<?php

namespace App\Services;

use App\Models\Booking;
use App\Models\Customer;
use App\Models\Hotel;
use App\Models\HotelRoomRate;
use App\Models\Payment;
use App\Models\Room;
use App\Payments\PaymentManager;
use App\Payments\PaymentResult;
use Carbon\CarbonImmutable;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;

/**
 * Everything about booking a room and paying for it, in one place:
 *
 *   availability()  which room types can be booked for these dates (+ price)
 *   create()        guest books -> customer + booking (room HELD for config('payments.hold_minutes'))
 *   startPayment()  create a payment at the gateway, returns the URL to send the guest to
 *   applyResult()   gateway says paid / failed -> payment + booking updated (safe to call twice)
 *   expireHolds()   unpaid holds past their time -> expired (scheduled every minute)
 */
class BookingService
{
    public function __construct(private PaymentManager $payments)
    {
    }

    /**
     * Room types with a price at this hotel that fit the guests, and how many rooms are free.
     * [{ room_type_id, name, description, max_adult, max_child, beds, image, price, total, free_rooms }]
     */
    public function availability(Hotel $hotel, string $checkIn, string $checkOut, int $adults, int $children): Collection
    {
        $nights = $this->nights($checkIn, $checkOut);

        $rates = HotelRoomRate::with('roomType.roomImages')
            ->where('hotel_id', $hotel->id)
            ->get();

        // free rooms per type, one query
        $free = Room::query()
            ->where('hotel_id', $hotel->id)
            ->where('status', 'available')
            ->whereNotNull('room_type_id')
            ->whereNotExists(fn ($q) => $q->select(DB::raw(1))->from('bookings')
                ->whereColumn('bookings.room_id', 'rooms.id')
                ->where('check_in', '<', $checkOut)->where('check_out', '>', $checkIn)
                ->where(fn ($q) => $q->where('status', Booking::CONFIRMED)
                    ->orWhere(fn ($q) => $q->where('status', Booking::PENDING)->where('expires_at', '>', now()))))
            ->groupBy('room_type_id')
            ->selectRaw('room_type_id, count(*) as free')
            ->pluck('free', 'room_type_id');

        return $rates
            ->filter(fn ($rate) => $rate->roomType)
            ->map(function (HotelRoomRate $rate) use ($free, $nights, $adults, $children) {
                $type = $rate->roomType;
                $fits = ($type->max_adult === null || $adults <= $type->max_adult)
                    && ($type->max_child === null || $children <= $type->max_child);

                return [
                    'room_type_id' => $type->id,
                    'name'         => $type->name,
                    'description'  => $type->description,
                    'max_adult'    => $type->max_adult,
                    'max_child'    => $type->max_child,
                    'beds'         => collect(['king_bed' => 'King', 'queen_bed' => 'Queen', 'single_bed' => 'Single'])
                        ->filter(fn ($label, $col) => $type->{$col} > 0)
                        ->map(fn ($label, $col) => "{$type->{$col}} {$label}")->values()->implode(' + '),
                    'image'        => $type->roomImages->first()?->url,
                    'price'        => $rate->price,
                    'nights'       => $nights,
                    'total'        => round($rate->price * $nights, 2),
                    'free_rooms'   => (int) ($free[$type->id] ?? 0),
                    'fits'         => $fits,
                ];
            })
            ->sortBy('price')
            ->values();
    }

    /**
     * Book one room. Picks a free room of the type and HOLDS it until expires_at.
     * Rooms of that type are locked while choosing, so two guests can't get the same room.
     */
    public function create(Hotel $hotel, array $data): Booking
    {
        return DB::transaction(function () use ($hotel, $data) {
            $rate = HotelRoomRate::where('hotel_id', $hotel->id)->where('room_type_id', $data['room_type_id'])->first();
            if (! $rate) {
                throw ValidationException::withMessages(['room_type_id' => 'This room type is not available at this hotel.']);
            }

            $room = $this->freeRoom($hotel->id, $data['room_type_id'], $data['check_in'], $data['check_out']);
            if (! $room) {
                throw ValidationException::withMessages(['room_type_id' => 'Sorry, this room type was just booked out for your dates. Please choose another.']);
            }

            $customer = Customer::updateOrCreate(
                ['email' => strtolower($data['email'])],
                ['name' => $data['name'], 'phone' => $data['phone']]
            );

            $nights = $this->nights($data['check_in'], $data['check_out']);

            return Booking::create([
                'reference'        => Booking::newReference(),
                'hotel_id'         => $hotel->id,
                'customer_id'      => $customer->id,
                'room_type_id'     => $data['room_type_id'],
                'room_id'          => $room->id,
                'check_in'         => $data['check_in'],
                'check_out'        => $data['check_out'],
                'nights'           => $nights,
                'adults'           => $data['adults'],
                'children'         => $data['children'] ?? 0,
                'price_per_night'  => $rate->price,
                'total_amount'     => round($rate->price * $nights, 2),
                'currency'         => config('payments.currency'),
                'status'           => Booking::PENDING,
                'special_requests' => $data['special_requests'] ?? null,
                'expires_at'       => now()->addMinutes(config('payments.hold_minutes')),
            ]);
        });
    }

    /** New payment attempt at the active gateway. Returns the gateway URL. */
    public function startPayment(Booking $booking): string
    {
        $gateway = $this->payments->gateway();

        $payment = $booking->payments()->create([
            'gateway'  => $gateway->name(),
            'amount'   => $booking->total_amount,
            'currency' => $booking->currency,
            'status'   => Payment::PENDING,
        ]);
        $payment->setRelation('booking', $booking);

        try {
            $url = $gateway->start($payment);
        } catch (\Throwable $e) {
            $payment->update(['status' => Payment::FAILED, 'payload' => ['error' => $e->getMessage()]]);
            report($e);
            throw ValidationException::withMessages(['payment' => 'The payment page could not be opened. Please try again in a moment.']);
        }

        $payment->update(['gateway_ref' => $payment->gateway_ref, 'payment_url' => $url]);

        return $url;
    }

    /**
     * Verified result from a gateway (webhook or return). Idempotent: a paid payment stays paid,
     * the webhook and the browser return can both arrive, in any order.
     */
    public function applyResult(string $gateway, PaymentResult $result): ?Payment
    {
        return DB::transaction(function () use ($gateway, $result) {
            $payment = Payment::where('gateway', $gateway)->where('gateway_ref', $result->gatewayRef)->lockForUpdate()->first();
            if (! $payment || $payment->status === Payment::PAID) {
                return $payment;
            }

            if (! $result->paid) {
                $payment->update(['status' => Payment::FAILED, 'payload' => $result->payload]);

                return $payment;
            }

            $payment->update(['status' => Payment::PAID, 'paid_at' => now(), 'payload' => $result->payload]);

            $booking = Booking::lockForUpdate()->find($payment->booking_id);
            if (in_array($booking->status, [Booking::PENDING, Booking::EXPIRED], true)) {
                // paid after the hold ran out: keep the room if still free, otherwise give another of the same type
                if ($booking->status === Booking::EXPIRED && ! $this->roomStillFree($booking)) {
                    $booking->room_id = $this->freeRoom($booking->hotel_id, $booking->room_type_id, $booking->check_in->toDateString(), $booking->check_out->toDateString())?->id;
                }
                $booking->status = Booking::CONFIRMED;
                $booking->paid_at = now();
                $booking->save();
            }
            // a cancelled booking that gets paid keeps "cancelled" - staff refund it (shown on the booking page)

            return $payment;
        });
    }

    public function cancel(Booking $booking): void
    {
        $booking->update(['status' => Booking::CANCELLED, 'cancelled_at' => now()]);
    }

    /** Unpaid holds whose time is up. Returns how many expired. */
    public function expireHolds(): int
    {
        return Booking::where('status', Booking::PENDING)->where('expires_at', '<=', now())->update(['status' => Booking::EXPIRED]);
    }

    // -----------------------------------------------------------------

    public function nights(string $checkIn, string $checkOut): int
    {
        return CarbonImmutable::parse($checkIn)->diffInDays(CarbonImmutable::parse($checkOut));
    }

    private function freeRoom(int $hotelId, int $roomTypeId, string $checkIn, string $checkOut): ?Room
    {
        $candidates = Room::where('hotel_id', $hotelId)
            ->where('room_type_id', $roomTypeId)
            ->where('status', 'available')
            ->orderBy('hotel_level_id')->orderBy('sort_order')
            ->lockForUpdate()
            ->get(['id']);

        $taken = Booking::whereIn('room_id', $candidates->pluck('id'))->blocking($checkIn, $checkOut)->pluck('room_id')->all();

        return $candidates->first(fn ($room) => ! in_array($room->id, $taken, true));
    }

    private function roomStillFree(Booking $booking): bool
    {
        return $booking->room_id && ! Booking::where('room_id', $booking->room_id)
            ->where('id', '!=', $booking->id)
            ->blocking($booking->check_in->toDateString(), $booking->check_out->toDateString())
            ->exists();
    }
}
