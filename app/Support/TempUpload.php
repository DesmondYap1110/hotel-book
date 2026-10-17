<?php

namespace App\Support;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

/**
 * Two-step uploads for <ui-file-upload> (FilePond):
 *
 *   1. The file is uploaded as soon as it is dropped  -> TempUpload::store()  returns a token
 *   2. The form is saved with that token               -> TempUpload::claim()  moves it into place
 *
 * Temp files live in storage/app/tmp/uploads (not public) and are bound to the
 * uploader's session, so nobody can claim someone else's upload.
 * Files never claimed are deleted by `php artisan uploads:clean` (scheduled daily).
 */
class TempUpload
{
    public const DIR = 'tmp/uploads';
    private const SESSION_KEY = 'temp_uploads';

    public static function store(UploadedFile $file): string
    {
        $token = Str::random(40).'.'.strtolower($file->guessExtension() ?: $file->getClientOriginalExtension() ?: 'bin');
        $file->storeAs(self::DIR, $token, 'local');

        session()->push(self::SESSION_KEY, $token);

        return $token;
    }

    /** Does this token belong to the current user and still exist? */
    public static function exists(?string $token): bool
    {
        return is_string($token)
            && preg_match('/^[A-Za-z0-9]{40}\.[a-z0-9]{1,8}$/', $token)
            && in_array($token, session(self::SESSION_KEY, []), true)
            && Storage::disk('local')->exists(self::DIR.'/'.$token);
    }

    /** Move the temp file to its final place, e.g. claim($token, 'public', "hotels/5"). Returns the new path. */
    public static function claim(string $token, string $disk, string $directory): string
    {
        abort_unless(self::exists($token), 422, 'Upload expired, please upload the file again.');

        $path = trim($directory, '/').'/'.$token;
        Storage::disk($disk)->put($path, Storage::disk('local')->readStream(self::DIR.'/'.$token));

        self::delete($token);

        return $path;
    }

    /** FilePond "revert" (user removed a file before saving). */
    public static function delete(string $token): void
    {
        if (self::exists($token)) {
            Storage::disk('local')->delete(self::DIR.'/'.$token);
        }
        session()->put(self::SESSION_KEY, array_values(array_diff(session(self::SESSION_KEY, []), [$token])));
    }
}
