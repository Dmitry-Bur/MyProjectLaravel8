<?php

namespace App\Http\Requests\Admin\Product;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
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
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'string',
            'description' => 'string',
            'sub_category_id' => 'integer',
            'price' => 'integer',
            'in_stock' => '',
            'images' => 'array',
            'image_prev' => 'array',
            'images_delete_Id' => 'array',
            'image_prev_delete_Id' => 'array'
        ];
    }
}
