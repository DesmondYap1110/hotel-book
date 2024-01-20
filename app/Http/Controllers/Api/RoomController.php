<?php

namespace App\Http\Controllers\Api;

use App\Models\Room;
use App\Http\Controllers\Controller;
use App\Http\Requests\RoomRequest;
use App\Http\Resources\RoomResource;

class RoomController extends Controller
{
    public function index()
    {
        $rooms = Room::orderBy('room_number', 'asc')->paginate(10);
        return RoomResource::collection($rooms);
    }

    public function store(RoomRequest $request){

        $roomNumbersArray = $request->input('room_number');

        foreach($roomNumbersArray as $roomNumber){
            $data = [
                'room_type_id' => $request->input('room_type_id'),
                'room_number' => $roomNumber,
            ];

            $room = new Room($data);
            $room->save();
        }


    }
}
