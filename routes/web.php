<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\RoomController;
use App\Http\Controllers\Admin\RoomTypeController;
use App\Http\Controllers\Admin\RoomFacilityController;
use App\Http\Controllers\Admin\HotelController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// Route::get('/admin/dashboard', function () {
//     return view('admin.rooms_list');
// });

// Route::get('/admin/rooms', [RoomController::class, 'index']);


Route::group(['prefix' => 'admin', 'as' => 'admin.'], function () {
    Route::resource('hotels', HotelController::class)->only(['index','create','edit', 'update','destroy']);

    Route::resource('rooms', RoomController::class)->only(['index','create','store','edit', 'update','destroy']);

    Route::resource('room-types', RoomTypeController::class)->only(['index','create','show','store','edit', 'update','destroy']);

    Route::resource('room-facilities', RoomFacilityController::class)->only(['index','create','store','edit', 'update','destroy']);
});


