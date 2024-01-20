<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RoomRequest extends FormRequest
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
            'quantity' =>['required','integer','min:1'],
            'room_type_id' =>['required'],
            // 'room_numbers' => ['required', 'array'],
            'room_number.*' => ['required', 'string', 'unique:rooms,room_number'],
        ];
    }

    public function messages()
    {
        return [
            'room_number.*.unique' => "The room number ':input' has already been selected.",
        ];
    }
}
