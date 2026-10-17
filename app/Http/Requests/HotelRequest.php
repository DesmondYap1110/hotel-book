<?php

namespace App\Http\Requests;

use App\Models\Hotel;
use App\Models\Malaysia\State;
use App\Models\PaymentMethod;
use App\Models\Room;
use App\Models\HotelFacility;
use App\Models\RoomType;
use App\Support\RichText;
use App\Support\TempUpload;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Validator;

/**
 * Validation for Add / Edit Hotel (resources/js/Pages/Hotels/Form.vue).
 */
class HotelRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true; // admin routes are already behind auth
    }

    protected function prepareForValidation(): void
    {
        $this->merge([
            // One HQ, many branches - the server decides the type, never the browser:
            //   editing  -> keeps its type (HQ stays HQ, branch stays branch)
            //   adding   -> HQ if there is none yet, otherwise a branch
            'type' => $this->route('hotel')?->type ?? (Hotel::hq() ? Hotel::TYPE_BRANCH : Hotel::TYPE_HQ),

            // Malaysia only - no Country field in the form
            'country' => 'Malaysia',
        ]);

        // clean every rich text (Summernote) field so only safe HTML is ever saved
        foreach (self::RICH_TEXT as $field) {
            $this->merge([$field => RichText::clean($this->input($field))]);
        }

        // FAQ answers are rich text too
        if (is_array($this->input('faqs'))) {
            $this->merge(['faqs' => array_map(
                fn ($faq) => is_array($faq) ? ['question' => trim((string) ($faq['question'] ?? '')), 'answer' => RichText::clean($faq['answer'] ?? null)] : $faq,
                array_values($this->input('faqs'))
            )]);
        }
    }

    /** Fields edited with <ui-rich-editor>. */
    public const RICH_TEXT = ['description', 'late_arrival_note', 'cancellation_policy', 'house_rules', 'parking_notes'];

    public function rules(): array
    {
        return [
            // general
            'type'            => ['required', Rule::in(array_keys(Hotel::TYPES))],
            'status'          => ['required', Rule::in(array_keys(Hotel::STATUSES))],
            'name'            => ['required', 'string', 'max:150'],
            'brand'           => ['nullable', 'string', 'max:100'],
            'tagline'         => ['nullable', 'string', 'max:200'],
            'description'     => ['nullable', 'string', 'max:20000'], // rich text (HTML)
            'star_rating'     => ['nullable', 'integer', 'between:1,5'],
            'legal_name'      => ['nullable', 'string', 'max:150'],
            'registration_no' => ['nullable', 'string', 'max:50'],

            // location
            'address_line1' => ['required', 'string', 'max:200'],
            'address_line2' => ['nullable', 'string', 'max:200'],
            'city'          => ['required', 'string', 'max:100'],
            'state'         => ['nullable', 'string', 'max:100'],
            'postcode'      => ['nullable', 'string', 'max:20'],
            'country'       => ['required', Rule::in(['Malaysia'])],
            'map_url'       => ['nullable', 'url', 'max:500'],

            // contact
            'email'            => ['nullable', 'email', 'max:150'],
            'website'          => ['nullable', 'url', 'max:200'],
            'phones'           => ['array', 'max:10'],
            'phones.*.label'   => ['nullable', 'string', 'max:50'],
            'phones.*.number'  => ['required', 'string', 'max:40'],
            'social_links'     => ['array'],
            'social_links.*'   => ['nullable', 'url', 'max:300'],

            // stay
            'check_in_time'       => ['nullable', 'date_format:H:i'],
            'check_out_time'      => ['nullable', 'date_format:H:i'],
            'reception_hours'     => ['nullable', 'string', 'max:100'],
            'late_arrival_note'   => ['nullable', 'string', 'max:10000'], // rich text (HTML)
            'cancellation_policy' => ['nullable', 'string', 'max:10000'], // rich text (HTML)
            'house_rules'         => ['nullable', 'string', 'max:10000'], // rich text (HTML)

            // parking & payment
            'parking_available' => ['boolean'],
            'parking_fee'       => ['nullable', 'numeric', 'min:0', 'max:99999'],
            'parking_clearance' => ['nullable', 'numeric', 'min:0', 'max:10'],
            'parking_notes'     => ['nullable', 'string', 'max:10000'], // rich text (HTML)
            'payment_methods'   => ['array'],
            'payment_methods.*' => ['string', Rule::exists(PaymentMethod::class, 'key')], // Settings › Payment Methods

            // facilities
            'facility_ids'   => ['array'],
            'facility_ids.*' => ['integer', Rule::exists(HotelFacility::class, 'id')],

            // nearby places
            'nearby_places'               => ['array', 'max:50'],
            'nearby_places.*.name'        => ['required', 'string', 'max:150'],
            'nearby_places.*.category'    => ['required', Rule::in(array_keys(Hotel::PLACE_CATEGORIES))],
            'nearby_places.*.distance_km' => ['nullable', 'numeric', 'min:0', 'max:9999'],

            // nightly price per room type: { room_type_id: price }, empty = not sold online
            'rates'   => ['array'],
            'rates.*' => ['nullable', 'numeric', 'min:1', 'max:99999'],

            // rooms: levels (floors) -> rooms. id = existing row, null = new
            'levels'                        => ['array', 'max:100'],
            'levels.*.id'                   => ['nullable', 'integer'],
            'levels.*.name'                 => ['required', 'string', 'max:50'],
            'levels.*.rooms'                => ['array', 'max:300'],
            'levels.*.rooms.*.id'           => ['nullable', 'integer'],
            'levels.*.rooms.*.room_number'  => ['required', 'string', 'max:10'],
            'levels.*.rooms.*.room_type_id' => ['nullable', 'integer', Rule::exists(RoomType::class, 'id')],
            'levels.*.rooms.*.status'       => ['required', Rule::in(array_keys(Room::STATUSES))],

            // FAQ
            'faqs'           => ['array', 'max:50'],
            'faqs.*.question' => ['required', 'string', 'max:255'],
            'faqs.*.answer'   => ['nullable', 'string', 'max:10000'], // rich text (HTML)

            // photo (<ui-file-upload variant="avatar">): [] = no photo, [{ id: 'current' }] = keep, [{ upload }] = new
            'photo'          => ['array', 'max:1'],
            'photo.*.upload' => ['nullable', 'string'],
        ];
    }

    /** The "one HQ, many branches" rules. */
    public function withValidator(Validator $validator): void
    {
        $validator->after(function (Validator $validator) {
            $hotel = $this->route('hotel'); // null when adding
            $hq = Hotel::hq();

            if ($this->input('type') === Hotel::TYPE_HQ && $hq && $hq->id !== $hotel?->id) {
                $validator->errors()->add('type', "There is already a headquarters: {$hq->name}. A group can only have one.");
            }

            if ($this->input('type') === Hotel::TYPE_BRANCH && ! $hq) {
                $validator->errors()->add('type', 'Add the headquarters first, then its branches.');
            }

            $this->validateMalaysiaAddress($validator);
            $this->validateRooms($validator, $hotel);

            $upload = $this->input('photo.0.upload');
            if ($upload && ! TempUpload::exists($upload)) {
                $validator->errors()->add('photo', 'The photo upload expired. Please upload it again.');
            }
        });
    }

    /** State must be a Malaysian state, city must belong to it, postcode = 5 digits. */
    private function validateMalaysiaAddress(Validator $validator): void
    {
        $state = State::where('name', $this->input('state'))->first();
        if (! $state) {
            $validator->errors()->add('state', 'Choose a Malaysian state.');

            return;
        }

        if (! $state->cities()->where('name', $this->input('city'))->exists()) {
            $validator->errors()->add('city', "Choose a city in {$state->name}.");
        }

        if ($this->filled('postcode') && ! preg_match('/^\d{5}$/', $this->input('postcode'))) {
            $validator->errors()->add('postcode', 'A Malaysian postcode has 5 digits.');
        }
    }

    /** Room numbers are unique per hotel; ids sent back must belong to this hotel. */
    private function validateRooms(Validator $validator, ?Hotel $hotel): void
    {
        $unknownTypes = array_diff(array_keys((array) $this->input('rates', [])), RoomType::pluck('id')->all());
        if ($unknownTypes) {
            $validator->errors()->add('rates', 'A room type was removed. Reload the page.');
        }

        $levelIds = $hotel ? $hotel->levels()->pluck('id')->all() : [];
        $roomIds = $hotel ? $hotel->rooms()->pluck('id')->all() : [];
        $seen = [];

        foreach ((array) $this->input('levels', []) as $i => $level) {
            if (! empty($level['id']) && ! in_array((int) $level['id'], $levelIds, true)) {
                $validator->errors()->add("levels.{$i}.name", 'This level no longer exists. Reload the page.');
            }

            foreach ((array) ($level['rooms'] ?? []) as $j => $room) {
                if (! empty($room['id']) && ! in_array((int) $room['id'], $roomIds, true)) {
                    $validator->errors()->add("levels.{$i}.rooms.{$j}.room_number", 'This room no longer exists. Reload the page.');
                }

                $number = strtoupper(trim((string) ($room['room_number'] ?? '')));
                if ($number === '') {
                    continue;
                }
                if (isset($seen[$number])) {
                    $validator->errors()->add("levels.{$i}.rooms.{$j}.room_number", "Room {$number} is already used ({$seen[$number]}).");
                } else {
                    $seen[$number] = $level['name'] ?? 'another level';
                }
            }
        }
    }

    public function attributes(): array
    {
        return [
            'address_line1'               => 'address',
            'phones.*.number'             => 'phone number',
            'nearby_places.*.name'        => 'place name',
            'nearby_places.*.distance_km' => 'distance',
            'social_links.*'              => 'social link',
            'rates.*'                     => 'price',
            'levels.*.name'               => 'level name',
            'levels.*.rooms.*.room_number' => 'room number',
            'levels.*.rooms.*.room_type_id' => 'room type',
            'faqs.*.question'             => 'question',
            'faqs.*.answer'               => 'answer',
        ];
    }
}
