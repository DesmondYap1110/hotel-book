<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

class RoomFacilityController extends Controller
{

    public function index(){
        return view('admin.facilities.index');
    }
    public function create(){
        return view('admin.facilities.add');
    }
}
