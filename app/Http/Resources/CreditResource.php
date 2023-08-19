<?php

namespace App\Http\Resources\Admin;

use App\Transaction;
use App\Http\Resources\BaseResource;
use App\Http\Resources\BaseResourceInterface;

class LoanResource extends BaseResource implements BaseResourceInterface
{
    protected $filtered_fields = [
        'id',
        'user_id',
        'user',
        'real_name',
        'amount',
        'product_name',
        'tenure_type',
        'status',
        'has_expired_tenure',
        'extra_payment',
        'created_at',
        'applied_at',
        'next_tenure'
    ];

    protected $dates = [
        'birth_date',
        'released_at',
        'applied_at',
        'approval_at',
        'first_repayment_at',
        'created_at',
        'updated_at',
    ];

    protected $monetary_fields = [
        'amount',
        'extra_payment',
        'referral_commission',
        'upfront_amount',
        'stamping_amount',
        'deposit',
        'release_amount',
        'pending_capital',
        'pending_interest',
        'pending_total',
    ];

    /**
     * Setting default currency.
     *
     */
    protected function setDefaultCurrency() {
        $this->default_currency = $this->currency;
    }


    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function getArray($request)
    {
        $copy_fields = $this->filtered_fields;

        $array = [];
        $this->copyFieldsFromResource($this->ignoreArrayFields($copy_fields, ['has_expired_tenure']), $array);

        $user = $this->user;
        if (isset($user)) {
            $array['user'] = [
                'id' => $user->id,
                'name' => $user->name,
                'full_name' => $user->prefix ? '['.$user->prefix.'] '.$user->real_name : $user->real_name,
            ];
        }

        $array['has_expired_tenure'] = $this->has_expired_tenure();

        return $array;
    }


    public function appendArrayForFullDisplay (&$array){
        $copy_fields = [
            'email',
            'id_number',
            'phone',
            'birth_date',
            'address',
            'employer_id',
            'employer_name',
            'employer_address',
            'employer_contact',
            'occupation',
            'income',
            'product_id',
            'product_name',
            'interest',
            'interest_type',
            'period',
            'period_type',

            'referral_id',
            'referral_commission',
            'referral_commission_percentage',
            'upfront_amount',
            'upfront_percentage',
            'stamping_amount',
            'stamping_percentage',
            'deposit',
            'release_amount',

            'released_at',
            'remark',
            'first_repayment_at',
            'approval_at',
            'created_at',
            'updated_at',
        ];

        $this->copyFieldsFromResource($copy_fields, $array);

        if (isset($this->gender)) {
            $array['gender'] = $this->gender == 'm' ? 'Male' : 'Female';
        }
        else {
            $array['gender'] = null;
        }

        $country = $this->country;
        $array['country'] = isset($country) ? static::minimalCountryDisplay($country) : null;

        $currency = $this->currency;
        $array['currency'] = isset($currency) ? static::currencyDisplay($currency) : null;

        $release_admin = $this->released_by;
        $array['release_admin'] = isset($release_admin) ? static::minimalUserDisplay($release_admin) : null;

        $approval_admin = $this->approver;
        $array['approval_admin'] = isset($approval_admin) ? static::minimalUserDisplay($approval_admin) : null;

        $calculated_release_amount = $this->calculate_release_amount();
        $array['calculated_release_amount'] = $calculated_release_amount > 0 ? $calculated_release_amount : 0;

        $creator = $this->creator;
        $array['creator'] = isset($creator) ? static::minimalUserDisplay($creator) : null;

        $loan_id = $this->id;
        $pending_referral_bonus = Transaction::whereHas('loans', function ($query) use ($loan_id) {
                                                $query->where('transactionable_id', $loan_id);
                                            })
                                            ->where('type', \App\Enumerations\Transaction\Type::LOAN_REFERRAL)
                                            ->where('status', \App\Enumerations\Transaction\Status::PENDING)->first();

        if($pending_referral_bonus){
            $array['has_pending_referral_transaction'] =
            [
                "status" => $pending_referral_bonus->status,
                "id" => $pending_referral_bonus->id
            ];
        }

        $first_payable_tenure = $this->firstPayableTenure();

        if (isset($first_payable_tenure)) {
            $array['first_payable_tenure'] = [
                'id' => $first_payable_tenure->id,
                'period' => $first_payable_tenure->period,
            ];
            $array['payable_period_number'] = $this->suggestedPayablePeriodNumber();

        }
        else {
            $array['first_payable_tenure'] = null;
            $array['payable_period_number'] = null;
        }

        // Summary details for this loan.
        if ($this->status == \App\Enumerations\Loan\Status::RELEASED) {
            $array['pending_capital'] = $this->tenures()->where('status', \App\Enumerations\Tenure\Status::PENDING)->sum('capital');
            $array['pending_interest'] = $this->tenures()->where('status', \App\Enumerations\Tenure\Status::PENDING)->sum('interest');
            $array['pending_total'] = $array['pending_capital'] + $array['pending_interest'];
        }
        else {
            $array['pending_capital'] = null;
            $array['pending_interest'] = null;
            $array['pending_total'] = null;
        }

        $array['referral'] = static::minimalUserDisplay($this->referral);


        // loan summary
        if (in_array($this->status, [
            \App\Enumerations\Loan\Status::PENDING,
            \App\Enumerations\Loan\Status::APPROVED,
            \App\Enumerations\Loan\Status::REJECTED,
        ])) {
            $array['summary'] = null;
        }
        else {
            $summary = [];

            $tenures = $this->tenures;
            $cash_advances = $this->cash_advances;
            $repayments = $this->repayments;

            $summary['contract_sum'] = $this->contractSum($tenures);
            $summary['floating_sum'] = $this->floatingSum($tenures, $repayments, $cash_advances);
            $summary['paid_sum'] = $this->paidSum($repayments);
            $summary['expired_sum'] = $this->expiredSum($tenures, $cash_advances);
            $summary['pending_sum'] = $this->pendingSum($tenures, $cash_advances);

            $array['summary'] = $summary;
        }

        //loan progress (11-6-19: JL added)
        $repayments = $this->repayments()
                        ->where('status', \App\Enumerations\Repayment\Status::APPROVED)
                        ->orderBy('payment_at', 'desc')
                        ->get();

        $array['progress'] = $this->calculateLoanProgress($array['tenure_type'] == 'unaffected' ? $repayments : $this->tenures);

    }



}
