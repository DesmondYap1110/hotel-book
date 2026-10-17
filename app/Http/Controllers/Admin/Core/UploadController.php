<?php

namespace App\Http\Controllers\Admin\Core;

use App\Http\Controllers\Controller;
use App\Support\TempUpload;
use Illuminate\Http\Request;

/**
 * FilePond server endpoints used by <ui-file-upload> (resources/js/components/ui/UiFileUpload.vue).
 *   POST   /admin/uploads  (field "file")   -> returns a token (plain text)
 *   DELETE /admin/uploads  (body = token)   -> removes that temp file
 */
class UploadController extends Controller
{
    /** File types per kind=... (sent by the component's `kind` prop). */
    private const KINDS = [
        'image'    => ['mimes:jpg,jpeg,png,webp,gif', 'max:5120'],
        'document' => ['mimes:pdf,doc,docx,xls,xlsx,csv,txt', 'max:10240'],
    ];

    public function store(Request $request)
    {
        $rules = self::KINDS[$request->input('kind', 'image')] ?? self::KINDS['image'];
        $request->validate(['file' => ['required', 'file', ...$rules]]);

        return response(TempUpload::store($request->file('file')), 200)->header('Content-Type', 'text/plain');
    }

    public function destroy(Request $request)
    {
        TempUpload::delete(trim($request->getContent()));

        return response()->noContent();
    }
}
