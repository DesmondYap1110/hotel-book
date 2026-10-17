<?php

namespace App\Support;

use Illuminate\Http\Request;

/**
 * Builds the sidebar menu (from config/admin-menu.php) with active/open flags,
 * and the breadcrumb trail for the current URL. Shared with every Vue page by
 * App\Http\Middleware\HandleInertiaRequests.
 */
class AdminMenu
{
    public function __construct(private Request $request)
    {
    }

    /** Menu items with `active` / `open` flags for the current URL. */
    public function items(): array
    {
        return collect(config('admin-menu'))->map(function (array $item) {
            $children = collect($item['children'] ?? [])->map(fn (array $child) => [
                'label'  => $child['label'],
                'url'    => $child['url'],
                'active' => $this->matches($child['active'] ?? null),
            ]);

            $childActive = $children->contains('active', true);

            return [
                'label'    => $item['label'],
                'icon'     => $item['icon'],
                'url'      => $item['url'] ?? null,
                'children' => $children->values()->all(),
                'active'   => $childActive || $this->matches($item['active'] ?? null),
                'open'     => $childActive,
            ];
        })->values()->all();
    }

    /** e.g. [['label' => 'Rooms', 'url' => null], ['label' => 'Room Types', 'url' => '/admin/room-types']] */
    public function breadcrumbs(): array
    {
        foreach (config('admin-menu') as $item) {
            foreach ($item['children'] ?? [] as $child) {
                if ($this->matches($child['active'] ?? null)) {
                    return [
                        ['label' => $item['label'], 'url' => null],
                        ['label' => $child['label'], 'url' => $child['url']],
                    ];
                }
            }

            if ($this->matches($item['active'] ?? null)) {
                return [['label' => $item['label'], 'url' => $item['url'] ?? null]];
            }
        }

        return [];
    }

    private function matches(?string $pattern): bool
    {
        return $pattern !== null && $this->request->is($pattern);
    }
}
