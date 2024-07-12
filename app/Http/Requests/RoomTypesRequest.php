<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RoomTypesRequest extends FormRequest
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
            'name'=> ['required','unique:room_types,name'],
            'images'=> ['required'],
            'description'=> ['required','max:1000'],
            'max_adult'=> ['nullable','integer'],
            'max_child' => ['nullable','integer'],
            'selectedBeds'=>['required'],
            'quantity'=>['required','integer'],
            'selectedBeds.*.quantity' => ['required_if:selectedBeds.*.isSelected,true'],
            'room_prefix'=>['required'],
        ];
    }

    public function messages()
    {
        return [

            'selectedBeds.*.quantity.required_if' => 'The quantity field is required when the bed is selected',

        ];
    }
}
