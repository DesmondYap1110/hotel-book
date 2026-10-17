<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

/**
 * Room Types form rebuilt (Pages/RoomTypes/Form.vue):
 *   description  rich text -> TEXT (a VARCHAR(255) cut long descriptions)
 *   quantity     no longer typed in (rooms are added per hotel level) -> default 0
 * Raw SQL because changing a column type needs doctrine/dbal on Laravel 9.
 */
return new class extends Migration
{
    public function up()
    {
        DB::statement('ALTER TABLE room_types MODIFY description TEXT NULL, MODIFY quantity INT NOT NULL DEFAULT 0');
    }

    public function down()
    {
        DB::statement('ALTER TABLE room_types MODIFY description VARCHAR(255) NOT NULL, MODIFY quantity INT NOT NULL');
    }
};
