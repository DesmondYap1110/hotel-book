<?php

namespace App\Http\Controllers\Api;

use App\Models\RoomType;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;
use App\Http\Requests\RoomTypesRequest;
use Illuminate\Support\Facades\Storage;
use App\Http\Resources\RoomTypeResource;
use App\Http\Requests\UpdateRoomTypesRequest;

class RoomTypeController extends Controller
{
    public function index()
    {
        $roomType = RoomType::with('roomImages')->paginate(10);
        return RoomTypeResource::collection($roomType);
    }

    public function store(RoomTypesRequest $request)
    {
        $facilities = $request->input('selectedItems');
        $facilitiesArray = explode(',', $facilities); // Convert the string to an array
        // Convert the array to valid JSON format
        $facilitiesJson = json_encode($facilitiesArray);


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

        $data = [
            'name' => $request->input('name'),
            'description' => $request->input('description'),
            'max_adult' => $request->input('max_adult'),
            'max_child' => $request->input('max_child'),
            'quantity' => $request->input('quantity'),
            'king_bed' => $king,
            'queen_bed' => $queen,
            'single_bed' => $single,
            'facilities' => $facilitiesJson, // Assign the facilities array
        ];



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

    public function update(UpdateRoomTypesRequest $request, RoomType $roomType)
    {

        $facilities = $request->input('selectedItems');
        $facilitiesArray = explode(',', $facilities); // Convert the string to an array
        // Convert the array to valid JSON format
        $facilitiesJson = json_encode($facilitiesArray);

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

        // $data = $request->only('name', 'description', 'max_adult', 'max_child', 'quantity');
        // $data['king_bed'] = $king;
        // $data['queen_bed'] = $queen;
        // $data['single_bed'] = $single;
        $data = [
            'name' => $request->input('name'),
            'description' => $request->input('description'),
            'max_adult' => $request->input('max_adult'),
            'max_child' => $request->input('max_child'),
            'quantity' => $request->input('quantity'),
            'king_bed' => $king,
            'queen_bed' => $queen,
            'single_bed' => $single,
            'facilities' => $facilitiesJson, // Assign the facilities array
        ];


        $roomType->update($data);
        $roomType->save();

        $existingImages = $roomType->roomImages; // Get the existing images associated with the room type

        foreach ($existingImages as $existingImage) {
            // Delete the image file from storage
            Storage::delete('/storage/room_images/' . $existingImage->images);

            // Delete the image record from the database
            $existingImage->delete();
        }


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

    public function destroy(RoomType $roomType){
        $existingImages = $roomType->roomImages; // Get the existing images associated with the room type

        foreach ($existingImages as $existingImage) {
            // Delete the image file from storage
            Storage::delete('/storage/room_images/' . $existingImage->images);

            // Delete the image record from the database
            $existingImage->delete();
        }
        $roomType->delete();
    }
}
