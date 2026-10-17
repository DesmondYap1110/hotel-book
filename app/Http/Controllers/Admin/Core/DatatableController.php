<?php

namespace App\Http\Controllers\Admin\Core;

use App\Datatables\Core\Datatable;
use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * One endpoint for every table: GET /admin/datatables/{list}
 * The list name must be registered in config/datatables.php.
 */
class DatatableController extends Controller
{
    public function show(Request $request, string $list): JsonResponse
    {
        $table = Datatable::resolve($list);

        abort_unless($table->authorize($request), 403);

        return response()->json($table->handle($request));
    }
}
