<?php

namespace Database\Seeders;

use App\Models\Malaysia\State;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

/**
 * Malaysia states, cities and postcodes for the address fields.
 * Source: database/data/malaysia-postcodes.json
 *   (npm package "malaysia-postcodes" v3.0.0 by Asyraf Hussin, ISC licence - see malaysia-postcodes.LICENSE)
 *
 * Reference data only, so it is simply reloaded: run again after updating the JSON.
 */
class MalaysiaLocationSeeder extends Seeder
{
    public function run()
    {
        $data = json_decode(file_get_contents(database_path('data/malaysia-postcodes.json')), true);

        DB::transaction(function () use ($data) {
            // reload from scratch (cities + postcodes cascade)
            DB::table('malaysia_postcodes')->delete();
            DB::table('malaysia_cities')->delete();
            DB::table('malaysia_states')->delete();

            foreach ($data as $stateRow) {
                $state = State::create(['name' => $this->stateName($stateRow['name'])]);

                foreach ($stateRow['city'] as $cityRow) {
                    $cityId = DB::table('malaysia_cities')->insertGetId([
                        'state_id' => $state->id,
                        'name'     => $cityRow['name'],
                    ]);

                    $rows = collect($cityRow['postcode'])->unique()
                        ->map(fn ($postcode) => ['postcode' => $postcode, 'city_id' => $cityId])
                        ->values()->all();
                    DB::table('malaysia_postcodes')->insert($rows);
                }
            }
        });

        Cache::forget('malaysia.states'); // see LocationController
    }

    /** "Wp Kuala Lumpur" -> "W.P. Kuala Lumpur" (how it is written on addresses) */
    private function stateName(string $name): string
    {
        return preg_replace('/^Wp /', 'W.P. ', $name);
    }
}
