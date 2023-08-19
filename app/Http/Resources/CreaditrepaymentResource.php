<?php

namespace App\Http\Resources\Admin;

use App\Http\Resources\BaseResource;
use App\Http\Resources\BaseResourceInterface;

class RepaymentResource extends BaseResource implements BaseResourceInterface
{

    protected $filtered_fields = [
        'id',
        'paid_period_number',
        'discount',
        'extra_charge',
        'extra_payment',
        'paid_capital',
        'paid_interest',
        'payment_at',
        'status',
        'amount',
        'first_payable_tenure_id',

        'cash_advance',
        'cash_advance_payment_type',
        'cash_advance_capital',
        'cash_advance_interest',

        'salary',
    ];

    protected $monetary_fields = [
        'amount',
        'discount',
        'extra_charge',
        'paid_capital',
        'paid_interest',
        'extra_payment',
        'cash_advance',
        'cash_advance_capital',
        'cash_advance_interest',
        'salary',
    ];


    protected $dates = [
        'settlement_at',
        'payment_at',
    ];

    public function getArray ($request) {

        $array = $this->getFilteredFieldsValue();
        $array['amount'] = $this->total();
        $first_payable_tenure = $this->tenures()
                                        ->orderBy('period', 'asc')
                                        ->first();

        if (isset($first_payable_tenure)) {
            $array['first_payable_tenure_id'] = $first_payable_tenure->id;
        }
        else {
            $array['first_payable_tenure_id'] = null;
        }

        $user = $this->user;
        if (isset($user)) {
            $array['user'] = [
                'id' => $user->id,
                'name' => $user->name,
                'full_name' => $user->prefix ? '['.$user->prefix.'] '.$user->real_name : $user->real_name,
            ];
        }

        $loan = $this->loan;
        if (isset($loan)) {
            $array['loan'] = [
                'id' => $loan->id,
            ];

            if($loan->tenure_type != \App\Enumerations\Product\TenureType::UNAFFECTED){

                $loan_first_payable_tenure = $loan->firstPayableTenure();
                if($loan_first_payable_tenure){
                    $array['loan_first_payable_tenure_id'] = $loan_first_payable_tenure->id;

                    if ($loan_first_payable_tenure->repayments()->first()) {
                        $tenure_repayment = $loan_first_payable_tenure->repayments()->where('status', 'pending')->first();
                        if($tenure_repayment){
                            $array['loan_first_payable_tenure_repayment_id'] = $tenure_repayment->id;
                        }
                    }
                }
                else{
                    $array['loan_first_payable_tenure_id'] = null;
                    $array['loan_first_payable_tenure_repayment_id'] = null;
                }
            }
        }
        return $array;
    }

    public function appendArrayForFullDisplay (&$array) {
        // fields name of which value and key need to be copied to $array
        $copy_fields = [
            'discount',
            'extra_charge',
            'paid_capital',
            'paid_interest',
            'extra_payment',
            'paid_period_number',
            'settlement_at',
        ];

        $this->copyFieldsFromResource($copy_fields, $array);

        if (isset($this->settlement_admin_id)) {
            $settlement_admin = $this->settlementAdmin;
            $array['settlement_admin'] = static::minimalUserDisplay($settlement_admin);
        }
        else {
            $array['settlement_admin'] = null;
        }

        $array['tenures'] = $this->tenures()
                        ->orderBy('period', 'asc')
                        ->get(['tenure_id as id', 'period'])
                        ->each(function ($item) {
                            unset($item->pivot);
                        });
    }


    /**
     * @TODO:lms deprecated.
     * Calculate the total amount of this repayment.
     *
     * @return  number
     */

    public function calculateTotal () {
        $discount = $this->discount ?: 0;
        $extra_charge = $this->extra_charge ?: 0;
        $paid_capital = $this->paid_capital ?: 0;
        $paid_interest = $this->paid_interest ?: 0;
        $extra_payment = $this->extra_charge ?: 0;

        $add = [$extra_charge, $paid_capital, $paid_interest, $extra_payment];
        $minus = [$discount];

        return array_sum($add) - array_sum($minus);
    }


    /**
     * Setting default currency.
     *
     */
    protected function setDefaultCurrency() {
        $this->default_currency = $this->currency;
    }





}
