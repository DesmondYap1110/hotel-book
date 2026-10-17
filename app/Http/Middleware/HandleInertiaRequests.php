<?php

namespace App\Http\Middleware;

use App\Payments\PaymentManager;
use App\Support\AdminMenu;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $menu = new AdminMenu($request);

        // Available in every Vue page as usePage().props.xxx
        return array_merge(parent::share($request), [
            'appName' => config('app.name'),
            'auth' => [
                'user' => $request->user()?->only('id', 'name', 'email'),
            ],
            'flash' => [
                'status' => fn () => $request->session()->get('status'),
            ],
            // true on local / staging: the public site shows a "test mode" bar (config/payments.php)
            'paymentsMock' => fn () => app(PaymentManager::class)->isMock(),
            // only needed by the admin layout (skip the work on guest pages)
            'menu' => fn () => $request->user() ? $menu->items() : [],
            'breadcrumbs' => fn () => $request->user() ? $menu->breadcrumbs() : [],
        ]);
    }
}
