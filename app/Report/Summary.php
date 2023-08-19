<?php

namespace App\Reports;

/**
 * @author  Stanley
 * date: 25/04/2019
 */

use Carbon\Carbon;
use App\User;
use App\ReportTransaction;

use Illuminate\Http\Request;

use App\Http\Resources\Admin\ReportTransactionResource;



class Summary extends Report {

    // Request

    /**
     * Current login user
     * @var  \App\User
     */
    protected $auth_user;


    /**
     * Is current login user is sole agent
     * @var  bool
     */
    protected $auth_user_sole_agent;

    /**
     * Target User
     * @var  \App\User
     */
    protected $user;

    /**
     * Users Ids
     * @var  Array
     */
    protected $users_ids;

    /**
     * @var  \Carbon\Carbon
     */
    protected $start_date;

    /**
     * @var  \Carbon\Carbon
     */
    protected $end_date;


    /**
     * @var  array
     */
    protected $ignore_types;

    /**
     * @var  array
     */
    protected $only_types;

    /**
     * @var  bool
     */
    protected $paginate;

    // for pagination usage;
    protected $current_page;

    protected $per_page;

    protected $prev_pagination_report_transactions;

    protected $dates = [
        'start_date',
        'end_date',
    ];

    public function __construct(
        User $auth_user,
        User $user = null,
        Carbon $start_date = null,
        Carbon $end_date = null,
        array $ignore_types = null,
        array $only_types = null,
        bool $paginate = null
    ) {
        $this->auth_user = $auth_user;
        $this->user = $user;
        $this->start_date = $start_date;
        $this->end_date = $end_date;
        $this->paginate = $paginate;
        $this->ignore_types = $ignore_types;
        $this->only_types = $only_types;
        $this->setAuthUserSoleAgent($this->auth_user);
        $this->users_ids = $this->getUsersIdsArray();
    }


    public function report() {

        $data = collect();

        $pagination_number = config('system.default_pagination_number');

        if ($this->paginate) {
            $pagination_number = ReportTransaction::summary($this->defaultFilters())
                                                    ->count();
        }

        $report_transactions = ReportTransaction::summary($this->defaultFilters())
                                                ->orderBy('transaction_at', 'asc')
                                                ->paginate($pagination_number);

        $this->current_page = $report_transactions->currentPage();
        $this->per_page = $report_transactions->perPage();
        $this->setPrevPageReportTransactions();

        $prev_in_out_total = $this->calcInOutTotalBeforeStartDate() + $this->calcInOutTotalBeforePagination();

        $prev_total_cross = $this->calcTotalCrossBeforeStartDate() + $this->calcTotalCrossBeforePagination();

        foreach($report_transactions as $report_transaction) {

            if ($report_transaction->isIn()) {
                $prev_in_out_total -= $report_transaction->amount;
                $report_transaction['in_out_total'] = $prev_in_out_total;

            }
            else if ($report_transaction->isOut()){
                $prev_in_out_total += $report_transaction->amount;
                $report_transaction['in_out_total'] = $prev_in_out_total;
            }
            $report_transaction['loan_col'] = $this->getLoanAmount($report_transaction);
            $report_transaction['payment_col'] = $this->getPaymentAmount($report_transaction);

            if ($report_transaction['loan_col'] && $report_transaction['loan_col'] > 0) {
                //$prev_total_cross += $report_transaction['loan_col'];
                $prev_total_cross += $this->getTotalCrossValue($report_transaction);
                $report_transaction['total_cross'] = $prev_total_cross;

            }
            else if ($report_transaction['payment_col'] && $report_transaction['payment_col'] > 0) {
                $prev_total_cross += $this->getTotalCrossValue($report_transaction);
                $report_transaction['total_cross'] = $prev_total_cross;
            }
            else {
                $report_transaction['total_cross'] = null;
            }

            // latest
            $report_transaction['repayment_ca_interest'] -= $report_transaction['repayment_ca_settle_interest'];

        }

        return ReportTransactionResource::collection($report_transactions)
            ->additional(['header' => [
                'user' => $this->user,
                'start_date' => $this->start_date,
                'end_date' => $this->end_date,
            ]]);
    }


    /**
     * Calculate pagination number
     */
    public function calcPagination () {
        if ($this->auth_user_sole_agent) {


        }

        return ReportTransaction::summary($this->defaultFilters())
                                ->count();
    }



    public function defaultFilters () {
        return $this->getDefaultFilters($this->auth_user, $this->auth_user_sole_agent, $this->users_ids, $this->start_date, $this->end_date, $this->ignore_types, $this->only_types);
    }


    public function calcTakeNum () {
        $current_page = $this->current_page ?: 0;
        $per_page = $this->per_page ?: 0;

        $take_num = 0;
        if ($current_page > 1) {
            $take_num = ($current_page - 1) * $per_page;
        }

        return $take_num;
    }



    /**
     * Set  $this->previous_pagination_report_transactions
     *
     */
    public function setPrevPageReportTransactions () {
        $take_num = $this->calcTakeNum();

        if ($take_num > 0) {
            $this->prev_pagination_report_transactions =  ReportTransaction::summary($this->defaultFilters())
                                                                            ->orderBy('transaction_at', 'asc')
                                                                            ->take($take_num)
                                                                            ->get();
        }
    }


    public function calcInOutTotalBeforeStartDate () {
        $total = 0;

        if ($this->start_date) {
            $in_value = ReportTransaction::whereIn('type', \App\Enumerations\ReportTransaction\Type::getIn())
                                        ->summaryBeforeStartDate($this->defaultFilters())
                                        ->sum('amount');

            $out_value = ReportTransaction::whereIn('type', \App\Enumerations\ReportTransaction\Type::getOut())
                                            ->summaryBeforeStartDate($this->defaultFilters())
                                            ->sum('amount');

            $total = $out_value - $in_value;
        }

        return $total;
    }


    public function calcInOutTotalBeforePagination () {
        $prev_page_report_transactions = $this->prev_pagination_report_transactions;

        $total = 0;

        if ($prev_page_report_transactions) {
            $total = ReportTransaction::calculateReportTransactionsInOutTotal($prev_page_report_transactions);
        }

        return $total;
    }

    public function getLoanTypes () {
        return [
            \App\Enumerations\ReportTransaction\Type::LOAN_RELEASE,
            \App\Enumerations\ReportTransaction\Type::CASH_ADVANCE_RELEASE,
        ];
    }


    public function getPaymentTypes () {
        return [
            \App\Enumerations\ReportTransaction\Type::LOAN_REPAYMENT,
        ];
    }



    /**
     *  Calculate total cross before start date
     *
     * @return  float
     */
    public function calcTotalCrossBeforeStartDate () {
        if ($this->start_date) {

            $report_transactions = ReportTransaction::summaryBeforeStartDate($this->defaultFilters())
                                                        ->get();

            $total = 0;

            if ($report_transactions) {
                foreach ($report_transactions as $report_transaction) {
                    $total += $this->getTotalCrossValue($report_transaction);
                }
            }
            return $total;
        }

        return 0;
    }


    /**
     * Calculate total cross before current page
     */
    public function calcTotalCrossBeforePagination () {
        $report_transactions = $this->prev_pagination_report_transactions;

        $total = 0;

        if ($report_transactions) {
            foreach ($report_transactions as $report_transaction) {
                $total += $this->getTotalCrossValue($report_transaction);
            }
        }

        return $total;

    }


    /**
     * Get total cross value from report transaction
     *
     * @param  \App\ReportTransaction  $report_transaction
     *
     * @return  float
     */
    public function getTotalCrossValue (ReportTransaction $report_transaction) {
        $val = 0;

        if (in_array($report_transaction->type, $this->getLoanTypes())) {
            $val += $this->getLoanAmount($report_transaction);
        }
        else if (in_array($report_transaction->type, $this->getPaymentTypes())) {
            $repayment_discount = 0;
            if (isset($report_transaction['repayment_discount']) && $report_transaction['repayment_discount'] > 0) {
                $repayment_discount = $report_transaction['repayment_discount'];
            }

            $val -= $this->getPaymentAmount($report_transaction) + $repayment_discount;

            $repayment = $report_transaction->repayments()->first();

            if (isset($repayment)) {
                $cash_advances = $repayment->getComprehensiveCashAdvances();

                foreach ($cash_advances as $cash_advance) {
                    if ($cash_advance->payment_type != \App\Enumerations\CashAdvance\PaymentType::FULL) {
                        $val += $cash_advance->paid_interest;
                    }
                }
            }

            $val += $report_transaction['repayment_extra_charge'] + $report_transaction['repayment_extra_interest'];
            $val += $report_transaction['capital_settlement_interest'];
        }

        return $val;
    }


     /**
     * Get loan amount.
     *
     * @param  \App\ReportTransaction
     *
     * @return  float | null
     */

    private function getLoanAmount (ReportTransaction $report_transaction) {

        switch ($report_transaction->type) {
            case \App\Enumerations\ReportTransaction\Type::LOAN_RELEASE:

                $loan = $report_transaction->loans()->first();
                if ($loan) {
                    switch ($loan->tenure_type) {
                        case \App\Enumerations\Product\TenureType::UNAFFECTED:
                                return $loan->amount;
                                break;
                        default:
                            return $loan->contractSum();
                    }
                }
                break;

            case \App\Enumerations\ReportTransaction\Type::CASH_ADVANCE_RELEASE:

                $cash_advance = $report_transaction->cash_advances()->first();

                if ($cash_advance) {
                    return $cash_advance->amount + $cash_advance->interest_amount;
                }

                break;
        }

        return null;
    }

    /**
     * Get payment amount.
     *
     * @param  \App\ReportTransaction
     *
     * @return  float | null
     */


    private function getPaymentAmount (ReportTransaction $report_transaction) {
        switch ($report_transaction->type) {
            case \App\Enumerations\ReportTransaction\Type::LOAN_REPAYMENT:
                return $report_transaction->amount;
                break;
        }

        return null;
    }



    /**
     * Set if current login user is sole agent.
     */

    private function setAuthUserSoleAgent (User $auth_user) {
        if ($auth_user->hasRoles(['superadmin', 'reportviewer'])) {
            $this->auth_user_sole_agent = false;
        }
        else {
            $this->auth_user_sole_agent = true;
        }

    }


}



?>
