<?php

namespace App\Http\Requests;

use App\Support\RichText;
use Illuminate\Foundation\Http\FormRequest;

class UpdateRoomTypesRequest extends FormRequest
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

    /** Clean rich text (Summernote) before validation, so only safe HTML is saved. */
    protected function prepareForValidation()
    {
        $this->merge(['description' => RichText::clean($this->input('description'))]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name'=> ['required','unique:room_types,name,'.$this->room_type->id],
            'images'=> ['required'],
            'description'=> ['required','max:5000'], // HTML from the rich text editor
            'max_adult'=> ['nullable','integer'],
            'max_child' => ['nullable','integer'],
            'selectedBeds'=>['required'],
            'quantity'=>['required','integer'],
            'selectedBeds.*.quantity' => ['required_if:selectedBeds.*.isSelected,true'],
        ];
    }

    public function messages()
    {
        return [

            'selectedBeds.*.quantity.required_if' => 'The quantity field is required when the bed is selected',

        ];
    }
}
