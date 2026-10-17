<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\Room\RoomController;
use App\Http\Controllers\Admin\Room\RoomTypeController;
use App\Http\Controllers\Admin\Room\RoomFacilityController;
use App\Http\Controllers\Admin\Hotel\HotelController;
use App\Http\Controllers\Admin\Core\DatatableController;
use App\Http\Controllers\Admin\Core\UploadController;
use App\Http\Controllers\Admin\Account\PasswordController;
use App\Http\Controllers\Admin\Settings\PaymentMethodController;
use App\Http\Controllers\Auth\LoginController;

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

Route::redirect('/', '/admin');

// Route::get('/admin/dashboard', function () {
//     return view('admin.rooms_list');
// });

// Route::get('/admin/rooms', [RoomController::class, 'index']);


Route::get('/login', [LoginController::class, 'showLoginForm'])->name('login');
Route::post('/login', [LoginController::class, 'login']);
Route::post('/logout', [LoginController::class, 'logout'])->name('logout');

Route::redirect('/admin', '/admin/rooms');

Route::group(['prefix' => 'admin', 'as' => 'admin.', 'middleware' => 'auth'], function () {
    // one JSON endpoint for every table (lists registered in config/datatables.php)
    Route::get('datatables/{list}', [DatatableController::class, 'show'])->name('datatables.show');

    // FilePond temp uploads (<ui-file-upload>)
    Route::post('uploads', [UploadController::class, 'store'])->name('uploads.store');
    Route::delete('uploads', [UploadController::class, 'destroy'])->name('uploads.destroy');

    Route::get('password', [PasswordController::class, 'edit'])->name('password.edit');
    Route::put('password', [PasswordController::class, 'update'])->name('password.update');

    // Settings › Payment Methods
    Route::post('payment-methods/reorder', [PaymentMethodController::class, 'reorder'])->name('payment-methods.reorder');
    Route::patch('payment-methods/{payment_method}/toggle', [PaymentMethodController::class, 'toggle'])->name('payment-methods.toggle');
    Route::resource('payment-methods', PaymentMethodController::class)->only(['index', 'store', 'update', 'destroy']); // add / edit = modal

    Route::resource('hotels', HotelController::class)->only(['index','create','store','edit', 'update','destroy']);

    Route::resource('rooms', RoomController::class)->only(['index','create','store','edit', 'update','destroy']);

    Route::resource('room-types', RoomTypeController::class)->only(['index','create','show','store','edit', 'update','destroy']);

    Route::resource('room-facilities', RoomFacilityController::class)->only(['index','create','store','edit', 'update','destroy']);
});


