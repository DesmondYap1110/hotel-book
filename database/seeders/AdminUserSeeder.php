<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

/** The first admin login. Change the password after the first login (Admin › Change Password). */
class AdminUserSeeder extends Seeder
{
    public function run()
    {
        // firstOrCreate: an existing admin keeps the password they set
        User::firstOrCreate(
            ['email' => 'desmondyap64@gmail.com'],
            ['name' => 'Admin', 'password' => Hash::make('123456')]
        );
    }
}
