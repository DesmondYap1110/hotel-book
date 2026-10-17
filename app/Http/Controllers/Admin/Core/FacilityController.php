<?php

namespace App\Http\Controllers\Admin\Core;

use App\Datatables\Core\Datatable;
use App\Http\Controllers\Controller;
use App\Models\Facility;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

/**
 * Add / edit / delete facilities - shared by:
 *   Admin\Hotel\HotelFacilityController  (Hotels › Hotel Facilities)
 *   Admin\Room\RoomFacilityController    (Rooms › Room Facilities)
 * A child only says which model, route name and title it is.
 * Pages: resources/js/Pages/Facilities/Index.vue, Form.vue (shared too).
 */
abstract class FacilityController extends Controller
{
    /** e.g. App\Models\HotelFacility::class */
    abstract protected function model(): string;

    /** Route name prefix, e.g. 'admin.hotel-facilities' */
    abstract protected function routeName(): string;

    /** Page title, e.g. 'Hotel Facilities' */
    abstract protected function title(): string;

    /** Datatable list name (config/datatables.php), e.g. 'hotel-facilities' */
    abstract protected function listName(): string;

    /** Example shown in the Name box. */
    protected function example(): string
    {
        return 'e.g. Hair dryer';
    }

    public function index()
    {
        return Inertia::render('Facilities/Index', [
            'title'     => $this->title(),
            'table'     => Datatable::props($this->listName()),
            'createUrl' => route($this->routeName().'.create'),
        ]);
    }

    public function create()
    {
        return $this->form(new ($this->model())());
    }

    public function store(Request $request)
    {
        $this->model()::create($this->validated($request));

        return redirect()->route($this->routeName().'.index')->with('status', 'Facility added.');
    }

    public function edit(int $facility)
    {
        return $this->form($this->find($facility));
    }

    public function update(Request $request, int $facility)
    {
        $model = $this->find($facility);
        $model->update($this->validated($request, $model));

        return redirect()->route($this->routeName().'.index')->with('status', 'Facility updated.');
    }

    public function destroy(Request $request, int $facility)
    {
        $this->find($facility)->delete();

        return $request->expectsJson()
            ? response()->json(['message' => 'Facility deleted.'])
            : redirect()->route($this->routeName().'.index')->with('status', 'Facility deleted.');
    }

    // -----------------------------------------------------------------

    private function find(int $id): Facility
    {
        return $this->model()::findOrFail($id);
    }

    private function form(Facility $facility)
    {
        return Inertia::render('Facilities/Form', [
            'title'      => $this->title(),
            'example'    => $this->example(),
            'facility'   => $facility->only('id', 'name', 'category'),
            'categories' => collect($facility::CATEGORIES)->map(fn ($label, $value) => ['value' => $value, 'label' => $label])->values(),
            'submitUrl'  => $facility->exists ? route($this->routeName().'.update', $facility) : route($this->routeName().'.store'),
            'backUrl'    => route($this->routeName().'.index'),
        ]);
    }

    private function validated(Request $request, ?Facility $facility = null): array
    {
        $model = $this->model();

        return $request->validate([
            'category' => ['required', Rule::in(array_keys($model::CATEGORIES))],
            'name'     => [
                'required', 'string', 'max:100',
                Rule::unique((new $model())->getTable())->where('category', $request->input('category'))->ignore($facility?->id),
            ],
        ], [
            'name.unique' => 'This facility already exists in that category.',
        ]);
    }
}
