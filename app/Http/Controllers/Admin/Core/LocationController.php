<?php

namespace App\Http\Controllers\Admin\Core;

use App\Http\Controllers\Controller;
use App\Models\Malaysia\City;
use App\Models\Malaysia\Postcode;
use App\Models\Malaysia\State;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Cache;

/**
 * Malaysia address API used by the hotel Location tab (and any address form).
 *
 *   GET /admin/locations/malaysia/states                    ["Johor", "Kedah", ...]
 *   GET /admin/locations/malaysia/cities?state=Selangor     ["Ampang", "Banting", ...]
 *   GET /admin/locations/malaysia/postcodes/43000           [{ postcode, city, state }]
 *
 * Data: malaysia_* tables (MalaysiaLocationSeeder). States are cached - they never change.
 */
class LocationController extends Controller
{
    public function states(): JsonResponse
    {
        $states = Cache::rememberForever('malaysia.states', fn () => State::orderBy('name')->pluck('name')->all());

        return response()->json($states);
    }

    public function cities(): JsonResponse
    {
        $state = (string) request('state', '');

        $cities = City::query()
            ->whereHas('state', fn ($q) => $q->where('name', $state))
            ->orderBy('name')
            ->pluck('name');

        return response()->json($cities);
    }

    public function postcode(string $postcode): JsonResponse
    {
        abort_unless(preg_match('/^\d{5}$/', $postcode), 422, 'A Malaysian postcode has 5 digits.');

        $matches = Postcode::query()
            ->where('postcode', $postcode)
            ->with('city.state')
            ->get()
            ->map(fn (Postcode $p) => ['postcode' => $p->postcode, 'city' => $p->city->name, 'state' => $p->city->state->name])
            ->values();

        return response()->json($matches);
    }
}
