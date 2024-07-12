<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class RoomTypeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return[
            'id' => $this->id,
            'name'=>$this->name,
            'description'=>$this->description,
            'max_child'=>$this->max_child,
            'max_adult'=>$this->max_adult,
            'quantity'=>$this->quantity,
            'single_bed'=>$this->single_bed,
            'queen_bed'=>$this->queen_bed,
            'king_bed'=> $this->king_bed,
            'images'=>$this->whenLoaded('roomImages'),
            'facilities'=> $this->facilities,
            'room_prefix'=> $this->room_prefix,
            'rooms'=>$this->whenLoaded('rooms')


        ];
    }
}
