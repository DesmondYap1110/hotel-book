<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\RoomTypeController;
use App\Http\Controllers\Api\RoomController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::resource('room-types', RoomTypeController::class)->only(['index','store','show','destroy']);
Route::post('room-types/update/{room_type}',[RoomTypeController::class,'update'])->name('room-types.update');

Route::resource('rooms', RoomController::class)->only(['index','store']);


