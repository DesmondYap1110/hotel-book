<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Http\Requests\BookingRequest;
use App\Models\Booking;
use App\Models\Hotel;
use App\Payments\PaymentManager;
use App\Services\BookingService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

/**
 * Customer booking site (no login - guest checkout).
 *   /                         Home      pick hotel + dates + guests
 *   /hotels/{slug}            Hotel     room types available for the dates, with prices
 *   /hotels/{slug}/checkout   Checkout  guest details -> pay
 *   /booking/{reference}      Booking   status page (signed link, also after paying)
 * Pages: resources/js/Pages/Public/*.vue (layout: Layouts/PublicLayout.vue)
 */
class BookingController extends Controller
{
    public function __construct(private BookingService $bookings, private PaymentManager $payments)
    {
    }

    public function home()
    {
        $hotels = Hotel::query()
            ->where('status', 'active')
            ->withMin('rates', 'price')
            ->orderByRaw("type = 'headquarters' desc")->orderBy('name')
            ->get(['id', 'slug', 'name', 'brand', 'tagline', 'city', 'state', 'star_rating', 'photo_path', 'type']);

        return Inertia::render('Public/Home', [
            'hotels' => $hotels->map(fn (Hotel $h) => [
                'slug'       => $h->slug,
                'name'       => $h->name,
                'brand'      => $h->brand,
                'tagline'    => $h->tagline,
                'location'   => trim(implode(', ', array_filter([$h->city, $h->state]))),
                'stars'      => $h->star_rating,
                'photo_url'  => $h->photo_url,
                'from_price' => $h->rates_min_price !== null ? (float) $h->rates_min_price : null,
            ]),
            'stay' => $this->defaultStay(),
        ]);
    }

    public function hotel(Request $request, Hotel $hotel)
    {
        abort_unless($hotel->status === 'active', 404);

        [$stay, $errors] = $this->stayFrom($request);

        return Inertia::render('Public/Hotel', [
            'hotel'       => $this->hotelInfo($hotel->load('facilities:id,name', 'faqs')),
            'stay'        => $stay,
            'stayErrors'  => (object) $errors,
            'rooms'       => $errors ? [] : $this->bookings->availability($hotel, $stay['check_in'], $stay['check_out'], $stay['adults'], $stay['children']),
        ]);
    }

    public function checkout(Request $request, Hotel $hotel)
    {
        abort_unless($hotel->status === 'active', 404);

        [$stay, $errors] = $this->stayFrom($request);
        $room = $errors ? null : $this->bookableRoom($hotel, $stay, (int) $request->query('room_type_id'));

        if (! $room) {
            return redirect()->route('booking.hotel', ['hotel' => $hotel->slug] + $stay)
                ->with('status', 'That room is no longer available for your dates. Please choose again.');
        }

        return Inertia::render('Public/Checkout', [
            'hotel'    => $this->hotelInfo($hotel),
            'stay'     => $stay,
            'room'     => $room,
            'isMock'   => $this->payments->isMock(),
            'holdMins' => config('payments.hold_minutes'),
        ]);
    }

    public function store(BookingRequest $request, Hotel $hotel)
    {
        abort_unless($hotel->status === 'active', 404);

        $data = $request->validated();
        $stay = ['check_in' => $data['check_in'], 'check_out' => $data['check_out'], 'adults' => (int) $data['adults'], 'children' => (int) ($data['children'] ?? 0)];
        if (! $this->bookableRoom($hotel, $stay, (int) $data['room_type_id'])) {
            return back()->withErrors(['room_type_id' => 'Sorry, this room is no longer available for your dates or guests.']);
        }

        $booking = $this->bookings->create($hotel, $data);

        // to the gateway (Billplz, or the mock page). Inertia::location = full browser redirect.
        return Inertia::location($this->bookings->startPayment($booking));
    }

    /** Guest's booking page. The link is signed, so knowing a reference is not enough to open it. */
    public function show(Booking $booking)
    {
        $booking->load('hotel', 'customer', 'roomType', 'room', 'payments');

        return Inertia::render('Public/Booking', [
            'booking' => [
                'reference'        => $booking->reference,
                'status'           => $booking->status,
                'status_label'     => $booking->status_label,
                'badge'            => Booking::STATUS_BADGES[$booking->status] ?? 'muted',
                'check_in'         => $booking->check_in->format('D, d M Y'),
                'check_out'        => $booking->check_out->format('D, d M Y'),
                'nights'           => $booking->nights,
                'adults'           => $booking->adults,
                'children'         => $booking->children,
                'room_type'        => $booking->roomType->name,
                'room_number'      => $booking->status === Booking::CONFIRMED ? $booking->room?->room_number : null,
                'price_per_night'  => $booking->price_per_night,
                'total'            => $booking->total_amount,
                'currency'         => $booking->currency,
                'special_requests' => $booking->special_requests,
                'expires_at'       => $booking->isPayable() ? $booking->expires_at->toIso8601String() : null,
                'paid_at'          => $booking->paid_at?->format('d M Y, g:i A'),
                'guest'            => $booking->customer->only('name', 'email', 'phone'),
                'last_payment'     => optional($booking->payments->first())->status,
            ],
            'hotel'  => $this->hotelInfo($booking->hotel),
            'payUrl' => $booking->isPayable() ? URL::signedRoute('booking.pay', ['booking' => $booking->reference]) : null,
        ]);
    }

    /** "Pay now" again (first try failed / was cancelled), while the hold is still on. */
    public function pay(Booking $booking)
    {
        if (! $booking->isPayable()) {
            return redirect($booking->guestUrl())->with('status', 'This booking can no longer be paid. Please make a new booking.');
        }

        return Inertia::location($this->bookings->startPayment($booking));
    }

    // -----------------------------------------------------------------

    /** Dates + guests from the query string. Bad / missing values -> defaults + the errors to show. */
    private function stayFrom(Request $request): array
    {
        $input = $request->only('check_in', 'check_out', 'adults', 'children');
        if (! $request->filled('check_in')) {
            return [$this->defaultStay(), []];
        }

        $validator = Validator::make($input + ['children' => 0], BookingRequest::stayRules());
        if ($validator->fails()) {
            return [array_merge($this->defaultStay(), array_filter($input)), $validator->errors()->toArray()];
        }

        $stay = ['check_in' => $input['check_in'], 'check_out' => $input['check_out'], 'adults' => (int) $input['adults'], 'children' => (int) ($input['children'] ?? 0)];
        if ($this->bookings->nights($stay['check_in'], $stay['check_out']) > BookingRequest::MAX_NIGHTS) {
            return [$stay, ['check_out' => ['A booking can be up to '.BookingRequest::MAX_NIGHTS.' nights.']]];
        }

        return [$stay, []];
    }

    private function defaultStay(): array
    {
        return ['check_in' => now()->addDay()->toDateString(), 'check_out' => now()->addDays(2)->toDateString(), 'adults' => 2, 'children' => 0];
    }

    /** The room type if it can be booked for this stay (has a price, fits the guests, a room is free). */
    private function bookableRoom(Hotel $hotel, array $stay, int $roomTypeId): ?array
    {
        return $this->bookings->availability($hotel, $stay['check_in'], $stay['check_out'], $stay['adults'], $stay['children'])
            ->first(fn ($r) => $r['room_type_id'] === $roomTypeId && $r['fits'] && $r['free_rooms'] > 0);
    }

    private function hotelInfo(Hotel $hotel): array
    {
        return [
            'slug'           => $hotel->slug,
            'name'           => $hotel->name,
            'brand'          => $hotel->brand,
            'tagline'        => $hotel->tagline,
            'description'    => $hotel->description, // cleaned by RichText::clean when saved
            'stars'          => $hotel->star_rating,
            'photo_url'      => $hotel->photo_url,
            'address'        => $hotel->full_address,
            'map_url'        => $hotel->map_url,
            'email'          => $hotel->email,
            'phone'          => collect($hotel->phones)->firstWhere(fn ($p) => ! empty($p['number']))['number'] ?? null,
            'check_in_time'  => $hotel->check_in_time ? date('g:i A', strtotime($hotel->check_in_time)) : null,
            'check_out_time' => $hotel->check_out_time ? date('g:i A', strtotime($hotel->check_out_time)) : null,
            'cancellation_policy' => $hotel->cancellation_policy,
            'facilities'     => $hotel->relationLoaded('facilities') ? $hotel->facilities->pluck('name') : [],
            'faqs'           => $hotel->relationLoaded('faqs') ? $hotel->faqs->map->only('question', 'answer') : [],
        ];
    }
}
