<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\Room\RoomController;
use App\Http\Controllers\Admin\Room\RoomTypeController;
use App\Http\Controllers\Admin\Room\RoomFacilityController;
use App\Http\Controllers\Admin\Hotel\HotelFacilityController;
use App\Http\Controllers\Admin\Hotel\HotelController;
use App\Http\Controllers\Admin\Core\DatatableController;
use App\Http\Controllers\Admin\Core\UploadController;
use App\Http\Controllers\Admin\Core\LocationController;
use App\Http\Controllers\Admin\Account\PasswordController;
use App\Http\Controllers\Admin\Settings\PaymentMethodController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Admin\Booking\BookingController as AdminBookingController;
use App\Http\Controllers\Admin\Booking\CustomerController;
use App\Http\Controllers\Admin\Booking\PaymentController as AdminPaymentController;
use App\Http\Controllers\Public\BookingController;
use App\Http\Controllers\Public\MockGatewayController;
use App\Http\Controllers\Public\PaymentController;

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

/*
| Customer booking site (public, guest checkout). Pages: resources/js/Pages/Public
*/
Route::get('/', [BookingController::class, 'home'])->name('booking.home');
Route::get('hotels/{hotel:slug}', [BookingController::class, 'hotel'])->name('booking.hotel');
Route::get('hotels/{hotel:slug}/checkout', [BookingController::class, 'checkout'])->name('booking.checkout');
Route::post('hotels/{hotel:slug}/book', [BookingController::class, 'store'])->middleware('throttle:booking')->name('booking.store');
Route::get('booking/{booking:reference}', [BookingController::class, 'show'])->middleware('signed')->name('booking.show');
Route::post('booking/{booking:reference}/pay', [BookingController::class, 'pay'])->middleware(['signed', 'throttle:booking-pay'])->name('booking.pay');

// payment gateways talk back here (signature checked by the gateway class)
Route::post('payments/{gateway}/callback', [PaymentController::class, 'callback'])->name('payments.callback');
Route::get('payments/{gateway}/return', [PaymentController::class, 'return'])->name('payments.return');

// fake gateway for local / staging only (config/payments.php) - every URL is signed
Route::get('mock-gateway/{payment}', [MockGatewayController::class, 'show'])->middleware('signed')->name('mock-gateway.show');
Route::post('mock-gateway/{payment}', [MockGatewayController::class, 'complete'])->middleware('signed')->name('mock-gateway.complete');

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

    // Malaysia address lookups (state / city dropdowns, postcode auto-fill)
    Route::prefix('locations/malaysia')->name('locations.malaysia.')->group(function () {
        Route::get('states', [LocationController::class, 'states'])->name('states');
        Route::get('cities', [LocationController::class, 'cities'])->name('cities');
        Route::get('postcodes/{postcode}', [LocationController::class, 'postcode'])->name('postcode');
    });

    Route::get('password', [PasswordController::class, 'edit'])->name('password.edit');
    Route::put('password', [PasswordController::class, 'update'])->name('password.update');

    // Settings › Payment Methods
    Route::post('payment-methods/reorder', [PaymentMethodController::class, 'reorder'])->name('payment-methods.reorder');
    Route::patch('payment-methods/{payment_method}/toggle', [PaymentMethodController::class, 'toggle'])->name('payment-methods.toggle');
    Route::resource('payment-methods', PaymentMethodController::class)->only(['index', 'store', 'update', 'destroy']); // add / edit = modal

    // Bookings / Customers / Payments (bookings are made on the public site)
    Route::patch('bookings/{booking}/cancel', [AdminBookingController::class, 'cancel'])->name('bookings.cancel');
    Route::resource('bookings', AdminBookingController::class)->only(['index', 'show']);
    Route::get('customers', [CustomerController::class, 'index'])->name('customers.index');
    Route::get('payments', [AdminPaymentController::class, 'index'])->name('payments.index');

    Route::resource('hotels', HotelController::class)->only(['index','create','store','edit', 'update','destroy']);

    // rooms are added / edited on Hotels › Edit › Rooms tab; this is the list of all rooms
    Route::resource('rooms', RoomController::class)->only(['index', 'create']);

    Route::resource('room-types', RoomTypeController::class)->except('show');

    // Facilities: Hotels › Hotel Facilities and Rooms › Room Facilities (shared Admin\Core\FacilityController)
    Route::resource('hotel-facilities', HotelFacilityController::class)->except('show')->parameters(['hotel-facilities' => 'facility']);
    Route::resource('room-facilities', RoomFacilityController::class)->except('show')->parameters(['room-facilities' => 'facility']);
});


