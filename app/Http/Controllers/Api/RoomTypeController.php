<?php

namespace App\Http\Controllers\Api;

use App\Models\RoomType;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;
use App\Http\Requests\RoomTypesRequest;
use App\Http\Resources\RoomTypeResource;

class RoomTypeController extends Controller
{
    public function index()
    {
        $roomType = RoomType::with('roomImages')->paginate(10);
        return RoomTypeResource::collection($roomType);
    }

    public function store(RoomTypesRequest $request)
    {
        $beds = $request->input('selectedBeds');
        $king = null;
        $queen = null;
        $single = null;

        foreach ($beds as $bed) {
            if ($bed['isSelected']) {
                if ($bed['name'] == "King") {
                    $king = $bed['quantity'];
                } elseif ($bed['name'] == "Queen") {
                    // Perform actions for Queen room
                    $queen = $bed['quantity'];
                } else {
                    // Handle other room names here
                    $single = $bed['quantity'];
                }
            }
        }

        $data = $request->only('name', 'description', 'max_adult', 'max_child', 'quantity');
        $data['king_bed'] = $king;
        $data['queen_bed'] = $queen;
        $data['single_bed'] = $single;

        $roomType = new RoomType($data);
        $roomType->save();


        if ($request->hasFile('images')) {
            if (!File::exists(storage_path("app/public/room_images/"))) {
                File::makeDirectory(storage_path("app/public/room_images/"), 0777, true);
            }

            $images = $request->file('images');
            // $uploadedFiles = [];

            foreach ($images as $index => $image) {
                $fileName = $request->input('name') . '_' . $index . '.' . $image->getClientOriginalExtension();
                $image->move(storage_path("app/public/room_images/"), $fileName);
                // $uploadedFiles[] = $fileName;
                $roomType->roomImages()->create(['images' => $fileName]);
            }
        }
    }

    public function show(RoomType $roomType){
        $roomType->load('roomImages');
       return new RoomTypeResource($roomType);
    }
}
