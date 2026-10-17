<?php

namespace App\Http\Requests;

use App\Models\RoomFacility;
use App\Models\RoomType;
use App\Support\RichText;
use App\Support\TempUpload;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Validator;

/** Add / Edit Room Type (resources/js/Pages/RoomTypes/Form.vue). */
class RoomTypeRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true; // admin routes are already behind auth
    }

    protected function prepareForValidation(): void
    {
        $this->merge(['description' => RichText::clean($this->input('description'))]);
    }

    public function rules(): array
    {
        return [
            'name'             => ['required', 'string', 'max:100', Rule::unique('room_types', 'name')->ignore($this->route('room_type'))],
            'description'      => ['nullable', 'string', 'max:10000'], // rich text (HTML)
            'max_adult'        => ['required', 'integer', 'between:1,20'],
            'max_child'        => ['required', 'integer', 'between:0,20'],
            'king_bed'         => ['required', 'integer', 'between:0,10'],
            'queen_bed'        => ['required', 'integer', 'between:0,10'],
            'single_bed'       => ['required', 'integer', 'between:0,10'],
            'facility_ids'     => ['array'],
            'facility_ids.*'   => ['integer', Rule::exists(RoomFacility::class, 'id')],
            // <ui-file-upload multiple>: [{ id }] = keep existing, [{ upload: token }] = new
            'images'           => ['array', 'max:10'],
            'images.*.id'      => ['nullable', 'integer'],
            'images.*.upload'  => ['nullable', 'string'],
        ];
    }

    public function withValidator(Validator $validator): void
    {
        $validator->after(function (Validator $validator) {
            if (! $this->bedTotal()) {
                $validator->errors()->add('beds', 'Switch on at least one bed.');
            }

            foreach ((array) $this->input('images', []) as $i => $image) {
                if (! empty($image['upload']) && ! TempUpload::exists($image['upload'])) {
                    $validator->errors()->add('images', 'A photo upload expired. Please upload it again.');
                    break;
                }
            }
        });
    }

    private function bedTotal(): int
    {
        return collect(array_keys(RoomType::BEDS))->sum(fn ($column) => (int) $this->input($column));
    }

    public function attributes(): array
    {
        return [
            'max_adult' => 'max adults',
            'max_child' => 'max children',
        ];
    }
}
