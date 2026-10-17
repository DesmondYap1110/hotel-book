<?php

namespace App\Support;

use Mews\Purifier\Facades\Purifier;

/**
 * Clean HTML from the rich text editor (<ui-rich-editor>, Summernote) before saving.
 * Removes scripts, event handlers and anything the toolbar can't produce
 * (allow-list: config/purifier.php -> settings.rich_text).
 *
 *   'description' => RichText::clean($request->input('description')),
 */
class RichText
{
    public static function clean(?string $html): ?string
    {
        if ($html === null) {
            return null;
        }

        $clean = trim(Purifier::clean($html, 'rich_text'));

        // the editor sends "<p><br></p>" when empty
        return trim(strip_tags($clean)) === '' ? null : $clean;
    }
}
