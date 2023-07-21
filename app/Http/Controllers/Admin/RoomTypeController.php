<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Enumerations\Decision;
use App\Http\Controllers\Controller;
use App\Http\Requests\RoomTypesRequest;

class RoomTypeController extends Controller
{
    public function index(){
        return view('admin.types.index');
    }

    public function create(){

        return view('admin.types.add');
    }

}
