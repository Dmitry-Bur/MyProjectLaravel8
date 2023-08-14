<?php

namespace App\Http\Resources;

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
          'name'=> $this->name,
          'description'=> $this->description,
          'price'=> $this->sub_category_id,
          'sub_category_id'=> $this->sub_category_id,
          'in_stock'=> $this->in_stock,
        ];
    }
}
