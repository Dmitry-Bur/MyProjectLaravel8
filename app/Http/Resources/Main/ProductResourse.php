<?php

namespace App\Http\Resources\Main;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResourse extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'sub_category_id' => $this->sub_category_id,
            'price' => $this->price,
            'in_stock' => $this->in_stock,
            'brand_id' => $this->brand_id,
            'image_prev' => $this->imagePrev,
            'brand' => $this->nameBrand,

        ];
    }
}
