<?php

namespace App\Reports;

use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use App\User;
use App\ReportTransaction;
use App\Tenure;

/**
 * Currently not available for date filtering
 */

class SummaryPortfolio extends Report {

	/**
	 * @var  \App\User
	 */
	protected $auth_user;

	/**
	 * @var  bool
	 */
	protected $auth_user_sole_agent;

	/**
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


	public function __construct (User $auth_user, User $user = null, Carbon $start_date = null, Carbon $end_date = null) {
		$this->auth_user = $auth_user;
		$this->user = $user;
		$this->start_date = $start_date;
		$this->end_date = $end_date;

		$this->auth_user_sole_agent = $auth_user->isSoleAgent();
		$this->users_ids = $this->getUsersIdsArray();
	}


	public function report () {

		$released = $this->getTotalReleasedAmount();
		$received = $this->getTotalReceivedAmount();
		$outstanding = $this->getTotalOutstandingAmount();


		return [
			'released' => $released,
			'received' => $received,
			'outstanding' => $outstanding,
			'expected_gross' => $outstanding + $received - $released,
			'balance' => $received - $released,
		];

	}

	public function defaultSumQuery (array $types = null) {
		$default_filters = $this->getDefaultFilters(
									$this->auth_user,
									$this->auth_user_sole_agent,
									$this->users_ids,
									$this->start_date,
									$this->end_date
							);

		return ReportTransaction::summary($default_filters)
								->whereIn('type', $types)
                                ->orderBy('transaction_at', 'asc')
                                ->sum('amount');
	}



	public function getTotalReleasedAmount () {
		$types = [
			\App\Enumerations\ReportTransaction\Type::LOAN_RELEASE,
			\App\Enumerations\ReportTransaction\Type::LOAN_REFERRAL,
			\App\Enumerations\ReportTransaction\Type::CASH_ADVANCE_RELEASE,
			\App\Enumerations\ReportTransaction\Type::CLAIM,
		];

		return $this->defaultSumQuery($types);
	}


	public function getTotalReceivedAmount () {
		$types = [
			\App\Enumerations\ReportTransaction\Type::LOAN_REPAYMENT,
		];

		return $this->defaultSumQuery($types);
	}


	public function getTotalOutstandingAmount () {
		$statuses = [
			\App\Enumerations\Tenure\Status::PENDING,
		];

		$filters = collect([
			'user_id' => $this->user ? $this->user->id : null,
		]);

		return Tenure::summary($filters)
					->whereIn('status', $statuses)
					->value(DB::raw("SUM(capital + interest)"));
	}

}




?>






