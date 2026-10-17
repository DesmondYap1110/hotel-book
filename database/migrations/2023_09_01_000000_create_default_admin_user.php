<?php

use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Hash;

return new class extends Migration
{
    public function up()
    {
        User::updateOrCreate(
            ['email' => 'desmondyap64@gmail.com'],
            ['name' => 'Admin', 'password' => Hash::make('123456')]
        );
    }

    public function down()
    {
        User::where('email', 'desmondyap64@gmail.com')->delete();
    }
};
