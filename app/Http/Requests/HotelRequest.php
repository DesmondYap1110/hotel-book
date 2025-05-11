<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class HotelRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'address' => 'required|string',
            'city' => 'required|string',
            'state' => 'required|string',
            'country' => 'required|string',
            'postal_code' => 'required|string',
            'phone_number' => 'required|string',
            'website_url' => 'nullable|url',
            'chain_name' => 'nullable|string',
            'policies' => 'required|string',
            'cancellation_policies' => 'required|string',
            'check_in_from' => 'required',
            'check_in_until' => 'required',
            'check_out_from' => 'required',
            'check_out_until' => 'required',
            'images.*' => 'required|image|mimes:jpeg,png,jpg|max:2048',
            'registration_no'=>'nullable',
        ];
    }
}
