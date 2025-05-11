<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

use App\Http\Requests\HotelRequest;
use App\Models\Hotel;
use Illuminate\Http\Request;

class HotelController extends Controller
{
    public function index(){
        return view('admin.hotels.index');
    }
    public function create(){

        return view('admin.hotels.add');
    }

    public function store(HotelRequest $request){
         $validated = $request->validated();

         $hotel = Hotel::create($validated);

        // 3. Handle images if uploaded
        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $image) {
                $path = $image->store('hotels/images', 'public');

                // Save image path to a related table (example)
                $hotel->images()->create([
                    'path' => $path
                ]);
            }
        }

        return response()->json([
            'message' => 'Hotel created successfully!',
            'hotel' => $hotel,
        ], 201);
    }
}
