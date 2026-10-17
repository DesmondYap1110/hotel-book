<?php

namespace App\Http\Controllers\Admin\Account;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class PasswordController extends Controller
{
    /** Vue page: resources/js/Pages/Account/Password.vue */
    public function edit()
    {
        return Inertia::render('Account/Password', [
            'submitUrl' => route('admin.password.update'),
        ]);
    }

    public function update(Request $request)
    {
        $request->validate([
            'current_password' => ['required', 'current_password'],
            'password'         => ['required', 'string', 'min:6', 'confirmed', 'different:current_password'],
        ]);

        $request->user()->update([
            'password' => Hash::make($request->input('password')),
        ]);

        return back()->with('status', 'Password updated successfully.');
    }
}
