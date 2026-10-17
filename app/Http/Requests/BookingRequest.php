<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Guest checkout (resources/js/Pages/Public/Checkout.vue).
 * Also used (rules only) to check the search query on the hotel page.
 */
class BookingRequest extends FormRequest
{
    public const MAX_NIGHTS = 30;

    public function authorize(): bool
    {
        return true; // public
    }

    /** Dates + guests: shared by search and checkout. */
    public static function stayRules(): array
    {
        return [
            'check_in'  => ['required', 'date_format:Y-m-d', 'after_or_equal:today'],
            'check_out' => ['required', 'date_format:Y-m-d', 'after:check_in', 'before_or_equal:'.now()->addYear()->toDateString()],
            'adults'    => ['required', 'integer', 'between:1,10'],
            'children'  => ['nullable', 'integer', 'between:0,10'],
        ];
    }

    public function rules(): array
    {
        return self::stayRules() + [
            'room_type_id'     => ['required', 'integer'],
            'name'             => ['required', 'string', 'max:150'],
            'email'            => ['required', 'email', 'max:150'],
            'phone'            => ['required', 'string', 'max:40', 'regex:/^[0-9+\-\s()]{7,40}$/'],
            'special_requests' => ['nullable', 'string', 'max:1000'],
            'agree'            => ['accepted'],
        ];
    }

    public function withValidator($validator): void
    {
        $validator->after(function ($validator) {
            if ($this->filled(['check_in', 'check_out']) && ! $validator->errors()->hasAny(['check_in', 'check_out'])
                && now()->parse($this->check_in)->diffInDays($this->check_out) > self::MAX_NIGHTS) {
                $validator->errors()->add('check_out', 'A booking can be up to '.self::MAX_NIGHTS.' nights.');
            }
        });
    }

    public function messages(): array
    {
        return [
            'check_in.after_or_equal' => 'Check-in cannot be in the past.',
            'check_out.after'         => 'Check-out must be after check-in.',
            'phone.regex'             => 'Enter a valid phone number, e.g. +60 12-345 6789.',
            'agree.accepted'          => 'Please accept the booking terms.',
        ];
    }
}
