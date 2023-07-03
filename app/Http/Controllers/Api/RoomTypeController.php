<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use App\Http\Requests\RoomTypesRequest;

class RoomTypeController extends Controller
{
    public function index(){


    }

    public function store(RoomTypesRequest $request){

        dd($request->validated());
    }
}
