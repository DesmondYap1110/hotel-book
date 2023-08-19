<?php

namespace App\Http\Controllers\Api\Admin;

use Illuminate\Http\Request;
use App\Http\Requests\Admin\ReportRequest;

use App\Http\Controllers\Controller;

use Carbon\Carbon;
use App\User;
use App\Reports\Summary;
use App\Reports\SummaryPortfolio;

class ReportController extends Controller
{
    public function index (ReportRequest $request) {
        switch ($request->input('type')){
            case \App\Enumerations\Report\Type::SUMMARY:
                return $this->summary($request);
                break;

            case \App\Enumerations\Report\Type::SUMMARY_PORTFOLIO:
                return $this->summaryPortfolio($request);
                break;

            default:
                abort(422, 'Invalid report type');
        }
    }

    public function summary (Request $request) {
    	$user = $this->getParamUser($request);
    	$start_date = $this->getParamDate($request, 'start_date');
    	$end_date = $this->getParamDate($request, 'end_date');
        $paginate = $this->getPaginate($request);
        $ignore_types = $request->get('ignore_types');
        $only_types = $request->get('only_types');

        return (new Summary($request->getAuthUser(), $user, $start_date, $end_date, $ignore_types, $only_types, $paginate))->report();
    }


    public function summaryPortfolio (Request $request) {
        $user = $this->getParamUser($request);
        $start_date = $this->getParamDate($request, 'start_date');
        $end_date = $this->getParamDate($request, 'end_date');

        return (new SummaryPortfolio($request->getAuthUser(), $user, $start_date, $end_date))->report();
    }


    /**
     * Get target user that is passed in the request
     *
     * @param  Request $request
     * @return \App\User | null
     */
    public function getParamUser (Request $request) {
    	$user = null;
    	if ($request->filled('user_id')) {
    		$user = User::find($request->input('user_id'));
    	}
    	return $user;
    }


    /**
     * Get date that is passed through request.
     *
     * @param  Request $request
     * @param  string  $date_name
     * @return  \Carbon\Carbon | null
     */
    public function getParamDate (Request $request, string $date_name) {
    	$date = null;
    	if ($request->filled($date_name)) {
    		$date = Carbon::parse($request->input($date_name));
    	}
    	return $date;
    }


    /**
     * Get is paginate.
     *
     * @param  \Illuminate\Http\Request  $request
     */
    public function getPaginate (Request $request) {

        if ($request->filled('paginate') && $request->input('paginate') == 'true') {
            return true;
        }
        return false;

    }


}
