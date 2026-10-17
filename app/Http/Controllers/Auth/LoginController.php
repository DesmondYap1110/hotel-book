<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LoginController extends Controller
{
    use AuthenticatesUsers;

    protected $redirectTo = RouteServiceProvider::HOME;

    public function __construct()
    {
        $this->middleware('guest')->except('logout');
        $this->middleware('auth')->only('logout');
    }

    /** Vue page: resources/js/Pages/Auth/Login.vue */
    public function showLoginForm()
    {
        return Inertia::render('Auth/Login', [
            'submitUrl' => route('login'),
        ]);
    }

    /** After logout go straight to the login page. */
    protected function loggedOut(Request $request)
    {
        return redirect()->route('login');
    }
}
