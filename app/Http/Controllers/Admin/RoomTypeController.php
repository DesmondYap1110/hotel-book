<?php

namespace App\Http\Controllers\Admin;

use App\Models\RoomType;

use Illuminate\Http\Request;
use App\Enumerations\Decision;
use App\Http\Controllers\Controller;
use App\Http\Requests\RoomTypesRequest;

class RoomTypeController extends Controller
{
    public function index(){
        return view('admin.types.index');
    }


    public function show(RoomType $roomType){
        return view('admin.types.show',[
            'roomType' => $roomType,
        ]);
    }

    public function create(){

        return view('admin.types.add');
    }

}
