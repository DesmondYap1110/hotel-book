<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

class HotelController extends Controller
{
    public function index(){
        return view('admin.hotels.index');
    }
    public function create(){

        return view('admin.hotels.add');
    }
}
