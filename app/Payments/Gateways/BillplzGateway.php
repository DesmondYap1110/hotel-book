<?php

namespace App\Payments\Gateways;

use App\Models\Payment;
use App\Payments\PaymentGateway;
use App\Payments\PaymentResult;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use RuntimeException;

/**
 * Billplz (Malaysia) - API v3 "bills". https://www.billplz.com/api
 *
 * .env (production):
 *   BILLPLZ_API_KEY=...          Billplz › Settings › Keys & Integration
 *   BILLPLZ_COLLECTION_ID=...    the collection the bills go into
 *   BILLPLZ_X_SIGNATURE=...      X Signature Key (turn X Signature ON in Billplz)
 *   BILLPLZ_SANDBOX=false
 *
 * Callback (webhook) and redirect both carry an x_signature (HMAC-SHA256) that we check.
 */
class BillplzGateway implements PaymentGateway
{
    public function __construct(private array $config)
    {
    }

    public function name(): string
    {
        return 'billplz';
    }

    public function start(Payment $payment): string
    {
        foreach (['api_key' => 'BILLPLZ_API_KEY', 'collection_id' => 'BILLPLZ_COLLECTION_ID', 'x_signature' => 'BILLPLZ_X_SIGNATURE'] as $key => $envName) {
            if (empty($this->config[$key])) {
                throw new RuntimeException("Billplz is not set up: {$envName} is missing in .env");
            }
        }

        $booking = $payment->booking;
        $customer = $booking->customer;

        $response = Http::asForm()
            ->withBasicAuth($this->config['api_key'], '')
            ->timeout(20)
            ->post($this->baseUrl().'/api/v3/bills', [
                'collection_id'     => $this->config['collection_id'],
                'email'             => $customer->email,
                'mobile'            => $customer->phone,
                'name'              => mb_substr($customer->name, 0, 255),
                'amount'            => (int) round($payment->amount * 100), // in sen
                'description'       => mb_substr("Booking {$booking->reference} - {$booking->hotel->name}", 0, 200),
                'callback_url'      => route('payments.callback', 'billplz'),
                'redirect_url'      => route('payments.return', 'billplz'),
                'reference_1_label' => 'Booking',
                'reference_1'       => $booking->reference,
            ]);

        if (! $response->successful() || ! $response->json('id')) {
            throw new RuntimeException('Billplz could not create the bill: '.$response->body());
        }

        $payment->gateway_ref = $response->json('id');

        return $response->json('url');
    }

    /** POST from Billplz: id, paid ("true"/"false"), state, amount, ..., x_signature */
    public function fromCallback(Request $request): ?PaymentResult
    {
        $data = $request->except('x_signature');
        if (! $this->validSignature($data, (string) $request->input('x_signature'))) {
            return null;
        }

        return new PaymentResult((string) $data['id'], ($data['paid'] ?? '') === 'true', $request->all());
    }

    /** GET redirect: ?billplz[id]=...&billplz[paid]=true&billplz[paid_at]=...&billplz[x_signature]=... */
    public function fromReturn(Request $request): ?PaymentResult
    {
        $data = (array) $request->input('billplz', []);
        $signature = (string) ($data['x_signature'] ?? '');
        unset($data['x_signature']);

        // redirect keys are signed with the "billplz" prefix: billplzid, billplzpaid, billplzpaid_at
        $prefixed = [];
        foreach ($data as $key => $value) {
            $prefixed['billplz'.$key] = $value;
        }

        if (! isset($data['id']) || ! $this->validSignature($prefixed, $signature)) {
            return null;
        }

        return new PaymentResult((string) $data['id'], ($data['paid'] ?? '') === 'true', $request->all());
    }

    /**
     * Billplz X Signature: every "key + value" pair, sorted (case-insensitive),
     * joined with "|", HMAC-SHA256 with the X Signature key.
     */
    public function validSignature(array $data, string $signature): bool
    {
        if ($signature === '' || empty($this->config['x_signature'])) {
            return false;
        }

        $pairs = [];
        foreach ($data as $key => $value) {
            $pairs[] = $key.(is_array($value) ? '' : (string) $value);
        }
        sort($pairs, SORT_STRING | SORT_FLAG_CASE);

        $expected = hash_hmac('sha256', implode('|', $pairs), $this->config['x_signature']);

        return hash_equals($expected, $signature);
    }

    private function baseUrl(): string
    {
        return $this->config['sandbox'] ? 'https://www.billplz-sandbox.com' : 'https://www.billplz.com';
    }
}
