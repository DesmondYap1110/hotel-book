<?php

namespace App\Console\Commands;

use App\Support\TempUpload;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;

/** Delete uploads that were never saved with a form (older than --hours). Scheduled daily. */
class CleanTempUploads extends Command
{
    protected $signature = 'uploads:clean {--hours=24}';

    protected $description = 'Delete abandoned temporary uploads (FilePond)';

    public function handle(): int
    {
        $disk = Storage::disk('local');
        $cutoff = now()->subHours((int) $this->option('hours'))->getTimestamp();
        $deleted = 0;

        foreach ($disk->files(TempUpload::DIR) as $file) {
            if ($disk->lastModified($file) < $cutoff) {
                $disk->delete($file);
                $deleted++;
            }
        }

        $this->info("Deleted {$deleted} temporary upload(s).");

        return self::SUCCESS;
    }
}
