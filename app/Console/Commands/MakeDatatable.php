<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

/**
 * php artisan make:datatable HotelList --model=Hotel
 *
 * Creates app/Datatables/Lists/HotelList.php from stubs/datatable.stub
 * and registers it in config/datatables.php as "hotels".
 */
class MakeDatatable extends Command
{
    protected $signature = 'make:datatable {name : Class name, e.g. HotelList} {--model= : Model name, e.g. Hotel}';

    protected $description = 'Create a server-side table class (see docs/datatables.md)';

    public function handle(): int
    {
        $class = Str::studly($this->argument('name'));
        $class = Str::endsWith($class, 'List') ? $class : $class.'List';
        $model = Str::studly($this->option('model') ?: Str::beforeLast($class, 'List'));
        $listName = Str::kebab(Str::plural(Str::beforeLast($class, 'List')));
        $path = app_path("Datatables/Lists/{$class}.php");

        if (File::exists($path)) {
            $this->error("{$path} already exists.");

            return self::FAILURE;
        }

        File::put($path, str_replace(
            ['{{ class }}', '{{ model }}', '{{ variable }}'],
            [$class, $model, Str::camel($model)],
            File::get(base_path('stubs/datatable.stub'))
        ));

        $this->registerInConfig($listName, $class);

        $this->info("Created app/Datatables/Lists/{$class}.php and registered it as \"{$listName}\".");
        $this->line('');
        $this->line('Next:');
        $this->line("  1. Fill in columns() and row() in app/Datatables/Lists/{$class}.php");
        $this->line("  2. Controller:  Inertia::render('Xxx/Index', ['table' => Datatable::props('{$listName}')])");
        $this->line('  3. Vue page:    <ui-data-table :server="table" />');

        return self::SUCCESS;
    }

    private function registerInConfig(string $listName, string $class): void
    {
        $config = config_path('datatables.php');
        $contents = File::get($config);

        if (Str::contains($contents, "'{$listName}'")) {
            return;
        }

        $line = str_pad("'{$listName}'", 18)."=> App\\Datatables\\Lists\\{$class}::class,";
        File::put($config, preg_replace("/(    'lists' => \[\n(?:.*\n)*?)(    \],)/", "$1        {$line}\n$2", $contents, 1));
    }
}
