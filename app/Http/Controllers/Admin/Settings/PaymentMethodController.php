<?php

namespace App\Http\Controllers\Admin\Settings;

use App\Http\Controllers\Controller;
use App\Models\PaymentMethod;
use App\Support\TempUpload;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

/**
 * Settings › Payment Methods. Page: resources/js/Pages/Settings/PaymentMethods/Index.vue (add / edit in MethodModal.vue)
 */
class PaymentMethodController extends Controller
{
    public function index()
    {
        return Inertia::render('Settings/PaymentMethods/Index', [
            'methods'    => PaymentMethod::ordered()->get()->map->toRow(),
            'categories' => PaymentMethod::categoryOptions(),
        ]);
    }

    public function store(Request $request)
    {
        $data = $this->validated($request);
        $data['key'] = $this->uniqueKey($data['name']);
        $data['sort_order'] = (int) PaymentMethod::where('category', $data['category'])->max('sort_order') + 1;

        $method = PaymentMethod::create(collect($data)->except('logo')->all());
        $this->saveLogo($method, $request->input('logo', []));

        return redirect()->route('admin.payment-methods.index')->with('status', "{$method->name} added.");
    }

    public function update(Request $request, PaymentMethod $paymentMethod)
    {
        $data = $this->validated($request);

        // moved to another category -> put it at the end of that group
        if ($data['category'] !== $paymentMethod->category) {
            $data['sort_order'] = (int) PaymentMethod::where('category', $data['category'])->max('sort_order') + 1;
        }

        $paymentMethod->update(collect($data)->except('logo')->all());
        $this->saveLogo($paymentMethod, $request->input('logo', []));

        return redirect()->route('admin.payment-methods.index')->with('status', "{$paymentMethod->name} updated.");
    }

    /** The switch in the list. */
    public function toggle(Request $request, PaymentMethod $paymentMethod)
    {
        $paymentMethod->update(['is_enabled' => $request->boolean('is_enabled')]);

        return response()->json(['is_enabled' => $paymentMethod->is_enabled]);
    }

    /** Drag & drop: ids in their new order (within one category). */
    public function reorder(Request $request)
    {
        $ids = $request->validate(['ids' => ['required', 'array'], 'ids.*' => ['integer']])['ids'];

        DB::transaction(function () use ($ids) {
            foreach (array_values($ids) as $i => $id) {
                PaymentMethod::whereKey($id)->update(['sort_order' => $i + 1]);
            }
        });

        return response()->json(['message' => 'Order saved.']);
    }

    public function destroy(Request $request, PaymentMethod $paymentMethod)
    {
        // hotels store the key - do not delete a method that is still in use
        if ($count = $paymentMethod->hotelCount()) {
            $message = "{$paymentMethod->name} is accepted by {$count} ".Str::plural('hotel', $count).'. Disable it instead, or remove it from those hotels first.';

            return response()->json(['message' => $message], 422);
        }

        if ($paymentMethod->logo_path) {
            Storage::disk('public')->delete($paymentMethod->logo_path);
        }
        $paymentMethod->delete();

        return response()->json(['message' => 'Payment method deleted.']);
    }

    // -----------------------------------------------------------------

    private function validated(Request $request): array
    {
        $data = $request->validate([
            'name'          => ['required', 'string', 'max:100'],
            'category'      => ['required', Rule::in(array_keys(PaymentMethod::CATEGORIES))],
            'is_enabled'    => ['boolean'],
            'logo'          => ['array', 'max:1'],
            'logo.*.upload' => ['nullable', 'string'],
        ]);

        $upload = $request->input('logo.0.upload');
        if ($upload && ! TempUpload::exists($upload)) {
            throw ValidationException::withMessages(['logo' => 'The logo upload expired. Please upload it again.']);
        }

        $data['is_enabled'] = $request->boolean('is_enabled');

        return $data;
    }

    /** [{ id: 'current' }] keep | [{ upload }] replace | [] remove */
    private function saveLogo(PaymentMethod $method, array $logo): void
    {
        $entry = $logo[0] ?? null;
        if (($entry['id'] ?? null) === 'current') {
            return;
        }

        $old = $method->logo_path;
        $new = ! empty($entry['upload']) ? TempUpload::claim($entry['upload'], 'public', 'payment-methods') : null;
        $method->update(['logo_path' => $new]);

        if ($old && $old !== $new) {
            Storage::disk('public')->delete($old);
        }
    }

    /** 'Touch n Go eWallet' -> 'touch_n_go_ewallet' (unique). The key never changes after creation. */
    private function uniqueKey(string $name): string
    {
        $key = $base = Str::limit(Str::slug($name, '_'), 30, '') ?: 'method';
        for ($i = 2; PaymentMethod::where('key', $key)->exists(); $i++) {
            $key = "{$base}_{$i}";
        }

        return $key;
    }
}
