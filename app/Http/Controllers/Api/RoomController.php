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
        $rooms = Room::orderBy('room_type_id', 'asc')->paginate(100);
        return RoomResource::collection($rooms);
    }

    public function store(RoomRequest $request){

        // $roomNumbersArray = $request->input('room_number');

        // foreach($roomNumbersArray as $roomNumber){
        //     $data = [
        //         'room_type_id' => $request->input('room_type_id'),
        //         'room_number' => $roomNumber,
        //     ];

        //     $room = new Room($data);
        //     $room->save();
        // }
        //

        //auto create room with quantity insert
        $roomNumbers = $request->input('quantity');

        for ($i = 0; $i < $roomNumbers; $i++) {
            $data = [
                'room_type_id' =>  $request->input('room_type_id'),
                'room_number' => $i + 1,
            ];

            $room = new Room($data);
            $room->save();
        }


    }
}
