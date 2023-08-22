<style scoped>
.border-danger{
	border-bottom: 3px solid #dc3545 !important;
}

.border-primary{
	border-bottom: 3px solid #007bff !important;
}

.bg-warning{
	border: 2px solid #9c9c9c;
    background-color: #e4e4e4 !important;
}

.max-height-500-container{
	max-height: 550px;
	overflow-y: auto;
}

.card-body.p-0 .table thead > tr > th:last-of-type, .card-body.p-0 .table thead > tr > td:last-of-type, .card-body.p-0 .table tbody > tr > th:last-of-type, .card-body.p-0 .table tbody > tr > td:last-of-type, .px-4 {
    padding-right: 0.75rem !important
}

.card-body.p-0 .table thead > tr > th:first-of-type, .card-body.p-0 .table thead > tr > td:first-of-type, .card-body.p-0 .table tbody > tr > th:first-of-type, .card-body.p-0 .table tbody > tr > td:first-of-type, .px-4 {
    padding-left: 0.75rem !important;
}

</style>

<template>
	<!-- Main content -->
	<section class="content">
		<div class="container-fluid">

			<div class="d-none d-print-block">
				<div class="row">
					<div class="col-6">
						<table class="table table-sm w-100">
							<thead>
								<tr>
									<th>Item</th>
									<th class="text-right">Amount</th>
								</tr>
							</thead>
							<tbody>
								<tr v-if="form.repayment.paid_period_number">
									<td>Period <span v-if="form.repayment.paid_period_number">({{ form.repayment.paid_period_number }})</span></td>
									<td class="text-right">
										<span v-if="form.repayment.paying_tenures" v-for="tenure in form.repayment.paying_tenures" class="badge badge-light ml-1">
											{{ tenure.period }}
										</span>
									</td>
								</tr>
								<tr>
									<td>Capital</td>
									<td class="text-right">{{ form.repayment.total_capital | toCurrency }}</td>
								</tr>
								<tr>
									<td>Interest</td>
									<td class="text-right">{{ form.repayment.total_interest | toCurrency }}</td>
								</tr>
								<tr v-if="form.repayment.extra_charge">
									<td>Extra Charge</td>
									<td class="text-right">{{ form.repayment.extra_charge | toCurrency }}</td>
								</tr>
								<tr v-if="form.repayment.extra_payment">
									<td>Extra Payment</td>
									<td class="text-right">{{ form.repayment.extra_payment | toCurrency }}</td>
								</tr>
								<tr v-if="form.repayment.cash_advance">
									<td class="text-capitalize">Cash Advance</td>
									<td class="text-right">
										{{ form.repayment.cash_advance | toCurrency }}
									</td>
								</tr>
								<tr v-if="form.repayment.discount">
									<td>Discount</td>
									<td class="text-right">- {{ form.repayment.discount | toCurrency }}</td>
								</tr>
								<tr>
									<td>Salary</td>
									<td class="text-right">{{ form.repayment.salary | toCurrency }}</td>
								</tr>
							</tbody>
							<tfoot>
								<tr>
									<td>Total Repayment</td>
									<td class="text-right">{{ form.repayment.calculated_total | toCurrency }}</td>
								</tr>
								<tr>
									<td>Total Bank-In</td>
									<td class="text-right">{{ form.repayment.salary - form.repayment.calculated_total | toCurrency }}</td>
								</tr>
							</tfoot>
						</table>
					</div>
					<div class="col-6">
                        <div class="card card-light mb-0">
                            <div class="card-body py-0 px-2">
                                <dl class="row">
                                    <dt class="col-sm-4">{{ user.name }}</dt>
                                    <dt class="col-sm-8">{{ user.real_name }}</dt>
                                </dl>
                            </div>
                        </div>
						<div class="card card-light mb-0" v-if="user_bank">
							<div class="card-body py-0 px-2">
								<dl class="row">
									<dt class="col-sm-4">Payment Date</dt>
									<dd class="col-sm-8">{{ form.repayment.payment_at }}</dd>

									<dt class="col-sm-4">User Bank</dt>
									<dd class="col-sm-8" :class="{'text-muted font-italic' : !user_bank.bank_name}">{{ user_bank.bank_name ? user_bank.bank_name : '--empty--' }}</dd>

									<dt class="col-sm-4">Account No.</dt>
									<dd class="col-sm-8" :class="{'text-muted font-italic' : !user_bank.bank_account}">{{ user_bank.bank_account ? user_bank.bank_account : '--empty--' }}</dd>

									<dt class="col-sm-4">Holder's Name</dt>
									<dd class="col-sm-8" :class="{'text-muted font-italic' : !user_bank.name}">{{ user_bank.name ? user_bank.name : '--empty--' }}</dd>
								</dl>
							</div>
						</div>
						<div v-else class="text-center">
							<span class="text-muted">No bank record found</span>
						</div>
						<hr class="mt-0">
						<div class="card card-light" v-if="payroll_bank">
							<div class="card-body py-0 px-2">
								<dl class="row">
									<dt class="col-sm-4">Payroll Bank</dt>
									<dd class="col-sm-8" :class="{'text-muted font-italic' : !payroll_bank.bank_name}">{{ payroll_bank.bank_account ? payroll_bank.bank_account : '--empty--' }}</dd>

									<dt class="col-sm-4">Account No.</dt>
									<dd class="col-sm-8" :class="{'text-muted font-italic' : !payroll_bank.bank_account}">{{ payroll_bank.bank_account ? payroll_bank.bank_account : '--empty--' }}</dd>

									<dt class="col-sm-4">Holder's Name</dt>
									<dd class="col-sm-8" :class="{'text-muted font-italic' : !payroll_bank.name}">{{ payroll_bank.name ? payroll_bank.name : '--empty--' }}</dd>

									<dt class="col-sm-4">PIN Number</dt>
									<dd class="col-sm-8" :class="{'text-muted font-italic' : !payroll_bank.pin}">{{ payroll_bank.pin ? payroll_bank.pin : '--hidden--' }}</dd>
								</dl>
							</div>
						</div>
						<div v-else class="text-center">
							<span class="text-muted">No bank record found</span>
						</div>
					</div>
				</div>

			</div>

			<div class="row justify-content-center no-print">

				<div class="col-md-12" v-if="show_create_user_bank_prompt">
					<div class="alert alert-warning alert-dismissible">
						<button type="button" class="close" data-dismiss="alert"
							aria-hidden="true">×</button>
						<h5>
							<i class="icon fas fa-exclamation-triangle"></i> Alert!
						</h5>
						This borrower has not create a bank-in account yet. <a :href="showUserRoute" class="text-primary">Create now</a>
					</div>
				</div>

				<div class="col-md-12">
					<div class="card">
						<div class="card-body p-0">
							<div class="row no-gutters">
								<h5 class="w-100 text-center m-0 bg-dark py-3 border-bottom border-danger">Repayment Details</h5>
								<div class="col-md-6 col-sm-12">
									<div class="p-3" v-if="tenureType == 'default'">
										<div v-if="$_notEmpty(tenures)" class="max-height-500-container">
											<table id="repayment" class="table table-bordered table-striped">
												<thead>
													<tr>
														<th width="10%" class="text-center">Period</th>
														<th width="10%" class="text-center">#</th>
														<th width="30%" class="text-center">Capital</th>
														<th width="30%" class="text-center">Interest</th>
														<th width="30%" class="text-center">Expiry Date</th>
													</tr>
												</thead>
												<tbody>
													<tr v-for="tenure in tenures">
														<td class="text-center">
															<span v-if="tenure.period">
																{{ tenure.period }}
															</span>
														</td>
														<td class="text-center">
															<span v-if="tenure.id">
																{{ tenure.id }}
															</span>
														</td>
														<td class="text-right">
															<span v-if="tenure.capital">
																{{ tenure.capital.display }}
															</span>
														</td>
														<td class="text-right">
															<span v-if="tenure.interest">
																{{ tenure.interest.display }}
															</span>
														</td>
														<td class="text-center">
															<span v-if="tenure.expired_at">
																{{ tenure.expired_at | moment("DD-MMM-YYYY") }}
															</span>
															<span v-if="tenure.type == 'extend'" class="text-danger" title="Extended tenure">(Ex.)</span>
														</td>
													</tr>
												</tbody>
												<tfoot>
													<tr>
														<th colspan="2">Balance</th>
														<th class="text-right"><span>{{ balanceCapital | toCurrency }}</span></th>
														<th class="text-right"><span>{{ balanceInterest | toCurrency }}</span></th>
														<th></th>
													</tr>
												</tfoot>
											</table>
										</div>
										<div v-else class="text-center my-3 p-5 bg-warning">
											<h5 class="text-muted font-italic">
												<i class="fas fa-exclamation-circle mr-1" ></i>
												No outstanding tenure from the loan.
											</h5>
										</div>
									</div>
									<div class="p-3" v-else>
										<div class="info-box bg-light d-block text-center">
											<div class="info-box-content">
												<div class="row justify-content-around align-items-center">
													<div class="col-md-4 p-1">
														<small class="badge border">Capital</small>
														<h5 class="text-muted">{{ loan.data.total_capital ? loan.data.total_capital.display : '--Not Stated--' }}</h5>
													</div>
													<div class="col-md-4 p-1">
														<small class="badge border">Outstanding</small>
														<h5 class="text-danger">{{ loan.data.outstanding_capital ? loan.data.outstanding_capital.display : '--Not Stated--' }}</h5>
													</div>
													<div class="col-md-4 p-1">
														<small class="badge border">Interest</small>
														<h5 class="text-muted">{{ loan.data.interest }}%</h5>
													</div>
													<div class="col-12 mt-2">
									                	<div class="progress">
									                		<div class="progress-bar bg-danger" :style="{ width: loan.data.progress * 100 + '%'}"></div>
									                	</div>
										                <span class="progress-description small font-italic text-muted">
										                	<small>
										                		<i class="fas fa-check" v-if="loan.data.progress == 1"></i>
										                		{{ loan.data.progress | percentage(2) }} Completed
										                	</small>
										                </span>
													</div>
												</div>
											</div>
										</div>
										<div class="info-box bg-light d-block text-center">
											<div class="info-box-content">
												<div class="row justify-content-around align-items-center">
													<div class="col-md-6">
														<small class="badge border">First Repayment Date</small>
														<h5 class="text-muted">{{ loan.data.first_repayment_at | toStandardDateTime }}</h5>
													</div>
													<div class="col-md-6">
														<small class="badge border">Last Repayment Date</small>
														<h5 class="text-muted">{{ loan.data.last_repayment_at | toStandardDateTime }}</h5>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-md-6 col-sm-12">
									<div class="p-3">
										<div class="row form-group">
											<div class="col-sm-7 col-md-5 disable-spin-button">
												<label for="payment_at">Payment Date</label>
												<input :disabled="processing" v-model="form.repayment.payment_at"
													@change="getCashAdvance()"
													min="0" name="" type="date" class="form-control" :class="{'is-invalid': errors.payment_at}">
											</div>
											<div class="col-sm-12">
												<span v-if="errors.payment_at" class="help-block text-danger">
													{{ errors.payment_at[0] }}
												</span>
											</div>
										</div>
										<div class="row form-group">
										 	<div class="col-sm-4 col-md-4" v-if="tenureType == 'default'">
												<label for="period_number">Period(s)</label>
												<input @keypress="$_onlyNumber" @change="changePeriod(); getCashAdvance()" :disabled="processing || isRepaymentEditMode()" v-model="form.repayment.paid_period_number"
													min="0" :max="maxPeriod" name="paid_period_number" type="number" class="form-control" :class="{'is-invalid': errors.paid_period_number}">
												<span v-if="errors.paid_period_number" class="help-block text-small text-danger d-block">
													{{ errors.paid_period_number[0] }}
												</span>
											</div>
											<div class="col-sm-8 col-md-6 disable-spin-button">
												<label for="period_number">Salary</label>
												<input @keypress="$_onlyNumber" @change="calculatedTotal()" :disabled="processing" v-model="form.repayment.salary"
													min="0" name="salary" type="number" class="form-control" :class="{'is-invalid': errors.salary}">
													<a :href="showUserRoute" target="_blank" v-if="show_create_income_prompt">Create user bank</a>
												<span v-if="errors.salary" class="help-block text-small text-danger d-block">
													{{ errors.salary[0] }}
												</span>
											</div>
										</div>
										<div class="row form-group">
											<div class="col-sm-6 col-md-5 disable-spin-button">
												<label for="total_capital">Capital Amount (MYR)</label>
												<input @keypress="$_onlyNumber" @change="calculatedTotal()" :disabled="processing" v-model="form.repayment.total_capital"
													min="0" name="total_capital" type="number" class="form-control" :class="{'is-invalid': errors.total_capital}">
												<span v-if="errors.total_capital" class="help-block text-small text-danger">
													{{ errors.total_capital[0] }}
												</span>
											</div>
											<div class="col-sm-6 col-md-5 disable-spin-button">
												<label for="total_interest">Interest Amount (MYR)</label>
												<input @keypress="$_onlyNumber" @change="calculatedTotal()" :disabled="processing" v-model="form.repayment.total_interest"
													min="0" name="total_interest" type="number" class="form-control" :class="{'is-invalid': errors.total_interest}">
												<span v-if="errors.total_interest" class="help-block text-small text-danger">
													{{ errors.total_interest[0] }}
												</span>
											</div>
										</div>
										<div class="row form-group">
											<div class="col-sm-6 col-md-5 disable-spin-button">
												<label for="interest">Extra Charges (MYR)</label>
												<input @keypress="$_onlyNumber" @change="calculatedTotal()" :disabled="processing" v-model="form.repayment.extra_charge"
													min="0" name="" type="number" class="form-control" :class="{'is-invalid': errors.extra_charge}">
												<span v-if="errors.extra_charge" class="help-block text-danger">
													{{ errors.extra_charge[0] }}
												</span>
											</div>
											<div class="col-sm-6 col-md-5 disable-spin-button">
												<label for="extra_payment">Extra Payment (MYR)</label>
												<input @keypress="$_onlyNumber" @change="calculatedTotal()" :disabled="processing" v-model="form.repayment.extra_payment"
													min="0" name="extra_payment" type="number" class="form-control" :class="{'is-invalid': errors.extra_payment}">
												<span v-if="errors.extra_payment" class="help-block text-danger">
													{{ errors.extra_payment[0] }}
												</span>
											</div>
										</div>
										<div class="row form-group disable-spin-button">
											<div class="col-sm-6 col-md-5">
												<label for="discount">Discount (MYR)</label>
												<input @keypress="$_onlyNumber" @change="calculatedTotal()" :disabled="processing" v-model="form.repayment.discount"
													min="0" name="discount" type="number" class="form-control" :class="{'is-invalid': errors.discount}">
											</div>
											<div class="col-sm-12">
												<span v-if="errors.discount" class="help-block text-danger">
													{{ errors.discount[0] }}
												</span>
											</div>
										</div>
										<div class="row form-group">
											<div class="col-sm-12 disable-spin-button">
												<label for="remark">Remark</label>
												<textarea :disabled="processing" v-model="form.repayment.remark" name="repayment_remark" type="text" class="form-control" :class="{'is-invalid': errors.remark}" placeholder="Leave blank if none."></textarea>
											</div>
											<div class="col-sm-12">
												<span v-if="errors.remark" class="help-block text-danger">
													{{ errors.remark[0] }}
												</span>
											</div>
										</div>
										<div class="p-3 form-control text-gray h-100 mt-4 clearfix">
											<h5 class="d-inline m-0 float-left">Subtotal</h5>
											<h5 class="d-inline m-0 float-right font-weight-bold">{{ form.repayment.tenure_subtotal | toCurrency }}</h5>
										</div>
										<span v-if="errors.calculated_total" class="help-block text-danger">
											{{ errors.calculated_total[0] }}
										</span>
									</div>
								</div>

								<div class="col-sm-12" v-if="cash_advances.data.length">
									<div class="row no-gutters">

										<h5 class="w-100 text-center m-0 bg-dark py-3 border-bottom border-danger">Outstanding Cash Advance</h5>

										<div class="col-sm-12 col-md-12">
											<div class="row no-gutters p-3 ">
												<div class="col-sm-12 max-height-500-container">
													<table id="repayment" class="table table-bordered table-striped">
														<thead>
															<tr>
																<th width="5%" class="text-center">#</th>
																<th width="10%" class="text-center">Payment</th>
																<th width="30%" class="text-right">Capital</th>
																<th width="30%" class="text-right">Interest</th>
																<th width="25%" class="text-right">Tenures</th>
															</tr>
														</thead>
														<tbody>
															<tr v-if="cash_advances.data" v-for="item in cash_advances.data">
																<td class="text-center">
																	<b class="font-weight-bold">{{ item.id }}</b>
																</td>
																<td class="text-center">
																	<div class="btn-group-toggle btn-group" data-toggle="buttons">
																		<label class="btn btn-primary active disabled"
																				:id="'ca_include_payment_button_'+item.id"
																				:title="!isRepaymentEditMode() ? 'Include this cash advance payment' : 'Unable to change this option'">
																			<input class="form-check-input" checked type="checkbox" :id="'ca_include_'+item.id" @change="cashAdvancePaymentOptions('include payment', item.id)">
																			<i class="fas fa-fw fa-check"></i>
																		</label>
																		<label class="btn btn-outline-primary"
																				:class="{'disabled' : isRepaymentEditMode()}"
																				:id="'ca_exclude_payment_button_'+item.id"
																				:title="!isRepaymentEditMode() ? 'Exclude this cash advance payment' : 'Unable to change this option'">
																			<input class="form-check-input" type="checkbox" :id="'ca_exclude_'+item.id" @change="cashAdvancePaymentOptions('exclude payment', item.id)">
																			<i class="fas fa-fw fa-times"></i>
																		</label>
																	</div>
																	<label class="small font-weight-light font-italic d-block" :id="'ca_label_' + item.id">Included</label>
																</td>
																<td class="text-right">
																	<input @keypress="$_onlyNumber" @change="calculatedTotal()"
																		:disabled="processing || disabledValue('capital', item.id) || isRepaymentEditMode()"
																		v-model="item.capital"
																		name="cash_advance_capital" min="0"
																		class="form-control text-right" type="number"
																		:class="{'is-invalid': errors.cash_advance}">
																	<input class="form-check-input" type="checkbox" :id="'capital-'+item.id" @change="cashAdvancePaymentOptions('capital', item.id)" :disabled="isRepaymentEditMode()">
																	<label :for="'capital-'+item.id"><small class="font-weight-light"><i>Ignore Capital</i></small></label>
																</td>
																<td class="text-right">
																	<input @keypress="$_onlyNumber" @change="calculatedTotal()"
																		:disabled="processing || disabledValue('interest', item.id) || isRepaymentEditMode()"
																		v-model="item.interest"
																		name="cash_advance_interest" min="0"
																		class="form-control text-right" type="number"
																		:class="{'is-invalid': errors.cash_advance}">
																	<input class="form-check-input" type="checkbox" :id="'interest-'+item.id" @change="cashAdvancePaymentOptions('interest', item.id)" :disabled="isRepaymentEditMode()">
																	<label :for="'interest-'+item.id"><small class="font-weight-light"><i>Ignore Interest</i></small></label>
																</td>
																<td>
																	<div class="badge badge-pill badge-primary"
																		v-for="period in form.repayment.paying_tenures"
																		v-if="expiredOnTenure(item.released_at, period.expired_at)"
																		:title="'Tenure Period #'+period.period">
																		#{{ period.period }}
																	</div>
																</td>
															</tr>
														</tbody>
													</table>
												</div>
											</div>
											<div class="col-sm-12 p-3">
												<div class="p-3 form-control text-gray clearfix h-100">
													<h5 class="d-inline m-0 float-left">Subtotal</h5>
													<h5 class="d-inline m-0 float-right font-weight-bold">{{ form.repayment.cash_advance | toCurrency }}</h5>
												</div>
											</div>
										</div>

										<!-- div class="col-sm-12 col-md-12">
											<div class="p-3">
												<div class="row no-gutters">
													<div class="md-radio col-sm-6 form-group pt-2">
														<input :disabled="processing || form.repayment.paid_period_number == 0" id="radio1" type="radio" value='full' class="" v-model="form.repayment.cash_advance_payment_type" @change="changeCashAdvanceMode();calculatedTotal()">
														<label for="radio1" class="form-check-label text-bold my-1">Full payment</label>
													</div>
													<div class="md-radio col-sm-6 form-group pt-2">
														<input :disabled="processing || form.repayment.paid_period_number == 0" id="radio2" type="radio" value='interest' class="" v-model="form.repayment.cash_advance_payment_type" @change="changeCashAdvanceMode();calculatedTotal()">
														<label for="radio2" class="form-check-label text-bold my-1">Interest only</label>
														<span v-if="errors.cash_advance_payment_type" class="help-block text-danger">
															{{ errors.cash_advance_payment_type[0] }}
														</span>
													</div>
													<div class="col-sm-12">
														<div class="p-3 form-control h-100 text-primary clearfix">
															<h5 class="d-inline m-0 float-left">Subtotal</h5>
															<h5 class="d-inline m-0 float-right font-weight-bold">{{ form.repayment.cash_advance | toCurrency }}</h5>
														</div>
													</div>
												</div>
											</div>
										</div-->
									</div>
								</div>

								<div class="col-sm-12">
									<div class="row no-gutters">
										<div class="col-sm-12">
											<hr class="m-0">
										</div>
										<div class="col-sm-12 p-3">
											<div class="p-3 form-control text-primary clearfix h-100">
												<h5 class="d-inline m-0 float-left">Total Repayment</h5>
												<h5 class="d-inline m-0 float-right font-weight-bold">{{ form.repayment.calculated_total | toCurrency }}</h5>
											</div>
										</div>
										<span v-if="errors.calculated_total" class="help-block text-small text-danger">
											{{ errors.calculated_total[0] }}
										</span>

										<div class="col-sm-12 py-0 px-3 pb-3">
											<div class="p-3 form-control text-success clearfix h-100">
												<h5 class="d-inline m-0 float-left">
													Total Bank-In
													<i class="fas fa-question-circle" title="Total bank-in amount to borrower's second bank account"></i>
												</h5>
												<h5 class="d-inline m-0 float-right font-weight-bold">{{ form.repayment.salary - form.repayment.calculated_total  | toCurrency }}</h5>
											</div>
										</div>

									</div>
								</div>

								<div class="col-sm-12 px-3 pb-3 no-print">
									<button class="btn btn-warning px-5" @click="print()">
										<i class="fas fa-fw fa-print"></i>
										Print
									</button>

									<button class="btn btn-primary float-right px-5" @click="createPayment()" :disabled="loading">
										<i class="fas fa-fw fa-check"></i>
										Submit
									</button>

									<button class="btn btn-outline-primary float-right mr-2 px-5" @click="resetForm()">
										<i class="fas fa-fw fa-redo"></i>
										Clear
									</button>
								</div>

							</div>
						</div>
					</div>

				</div>
			</div>
		</div>



	</section>

</template>

<script>

	var qs = require('qs');

	import {SnotifyPosition, SnotifyStyle} from 'vue-snotify';

    export default{

        props: [
        	'loan-id',
        	'tenure-type',
        	'user-id',
        	'repayment-id',
        	'settlement-admin-id',
        	'show-user-route',
            'show-user-api-route',
        	'show-user-loan-route',
        	'show-user-loan-api-route',
        	'show-repayment-route',
        	'post-repayments-api-route',
        	'patch-repayments-api-route',
        	'show-repayments-api-route',
        	'index-loan-tenures-api-route',
        	'index-cash-advance-api-route',
        	'index-repayment-cash-advance-api-route'
       	],

        data(){
            return {
            	is_repayment_extend: false,
            	is_repayment_edit_mode: false,
            	show_create_user_bank_prompt: false,
            	show_create_income_prompt: false,
            	loading: false,
            	processing: false,
            	can_submit: true,
            	loan:{
            		param: {
        				mode: 'repayment',
        			},
        			data: []
            	},
            	repayments: {},
            	repayment: {},
            	tenures: {},
            	cash_advances: {
            		param: {
        				mode: 'repayment',
            			dates: [],
        			},
            		data: [],
            		date: [],
            		paying_tenures: [],
            		disabled: {
                		capital: [],
                		interest: [],
                		excluded: [],
                	},
            	},
                user: {},
            	user_bank: {},
            	payroll_bank: {},
            	form: {
            		repayment : {
            			paid_period_number: 0,
						paying_tenures: {},
            			total_capital: 0,
            			total_interest: 0,
            			discount: 0,
            			extra_charge: 0,
            			extra_payment: 0,
            			loan_id: this.loanId,
            			first_payable_tenure_id: null,
            			calculated_total: 0,
            			settlement_admin_id: this.settlementAdminId,
                        payment_at: moment().format("YYYY-MM-DD"),
                        tenure_subtotal: 0, //total tenure amount
                        cash_advances: [],
                        cash_advance: 0, //total cash advance amount
                        cash_advance_capital: 0,
                        cash_advance_interest: 0,
                        cash_advance_payment_type: null,

                        salary: 0,

                        remark: '',
            		},
            	},
            	errors: [],
                policies: {},
                select_options: {},
            }
        },

        computed:{

        	maxPeriod(){
        		if(this.$_notEmpty(this.tenures)){
        			return this.tenures.length;
        		}
        		else{
        			return 0;
        		}
        	},

        	balanceCapital(){
        		if(this.$_notEmpty(this.tenures)){
        			return _.sumBy(this.tenures, function(o) { return o.capital.unformatted; });
        		}
        	},

        	balanceInterest(){
        		if(this.$_notEmpty(this.tenures)){
        			return _.sumBy(this.tenures, function(o) { return o.interest.unformatted; });
        		}
        	},

        },

        created () {
        	//this.getSelectOptions();
        	//this.getTenures();

        	this.getTenures();
        	this.getSalary();
        	this.getPayrollBank();
            this.getUser();

        	if(this.tenureType == 'unaffected'){
        		this.getCashAdvance();
        	}
        },

        methods: {

        	getSelectOptions(){
        		if(this.selectOptions){
        			this.select_options = JSON.parse(this.selectOptions);
        		}
    		},

    		print(){
    			window.print();
    		},

    		getSalary() {
            	this.loading = true;
        		axios.get('/api/admin/users/' + this.userId + '/user-banks?type=bank%20in')
	        		.then(response => {
	                    if(response.data.data.length){
	                    	this.user_bank = response.data.data[0];

	                    	if(this.user_bank.income){
	                    		this.form.repayment.salary = this.user_bank.income.unformatted;
	                    	}
	                    	else{
	                    		this.form.repayment.salary = 0;
	                    		this.show_create_income_prompt = true;
	                    	}
	                    }
	                    else{
	                    	this.show_create_user_bank_prompt = true;
	                    }
	                })
	                .catch(error => {
	                	this.$snotify.error('Failed to load borrower\'s salary');
	                    console.log(error);
	            	})
        			.finally(() => {this.loading = false});
            },

            getPayrollBank() {
            	this.loading = true;
        		axios.get('/api/admin/users/' + this.userId + '/user-banks?type=payroll')
	        		.then(response => {
	                    if(response.data.data.length){
	                    	this.payroll_bank = response.data.data[0];
	                    }
	                    else{
	                    	this.show_create_user_bank_prompt = true;
	                    }
	                })
	                .catch(error => {
	                	this.$snotify.error('Failed to load borrower\'s salary');
	                    console.log(error);
	            	})
        			.finally(() => {this.loading = false});
            },

            getUser(){
                axios.get(this.showUserApiRoute)
                    .then(response => {
                        this.user = response.data.data;
                    })
                    .catch(
                        (response) => {
                            console.log(response.data);
                        }
                    );
            },

    		getTenures() {

    			axios.get(this.indexLoanTenuresApiRoute, {
	            	'params': {status: 'pending'
	            				,paginate: 'false'},
	    		    'paramsSerializer': function(params) {
	    		       return qs.stringify(params, {arrayFormat: 'repeat'})
	    		    },
	            })
                .then(response => {
               		this.tenures = response.data.data;
               		if(this.$_notEmpty(this.tenures)){
               			this.form.repayment.first_payable_tenure_id = this.tenures[0].id;
               		}
               	})
               	.then(response => {
    				if(this.repaymentId){
    	        		this.is_repayment_edit_mode = true;
    	        		this.getRepayment();
    	        	}
               	})
                .catch(
					error => {
						this.$snotify.error('Failed to load tenures.');
						this.can_submit = false;
						console.log(error);
				});

	        },

 			getRepayment() {
            	this.loading = true;
        		axios.get(this.showRepaymentsApiRoute.replace('repayment_id', this.repaymentId))
	        		.then(response => {

	        			this.repayment = response.data.data;
	                    if(this.repayment){
	                    	this.form.repayment.paid_period_number = this.repayment.paid_period_number;
	                    	this.form.repayment.total_capital = this.repayment.paid_capital.unformatted;
		                    this.form.repayment.total_interest = this.repayment.paid_interest.unformatted;
		                   	this.form.repayment.discount = this.repayment.discount.unformatted;
		                    this.form.repayment.extra_charge = this.repayment.extra_charge.unformatted;
		                    this.form.repayment.extra_payment = this.repayment.extra_payment.unformatted;
		                    this.form.repayment.loan_id = this.repayment.loan_id;
		                    this.form.repayment.settlement_admin_id = this.settlementAdminId;
		                    this.form.repayment.cash_advance_payment_type = this.repayment.cash_advance_payment_type;
		                    this.form.repayment.payment_at = this.repayment.payment_at.slice(0,10);
		                    if(this.repayment.salary){
		                    	this.form.repayment.salary = this.repayment.salary.unformatted;
		                    }

	                    }
	                })
	                .then(response => {
	                	if(this.tenuretype == 'default'){
	                		this.changePeriod();
	                	}
	                	this.getRepaymentCashAdvance();
	                	//this.changeCashAdvanceMode();
	                	this.calculatedTotal();
	                })
	                .catch(error => {
	                	this.$snotify.error('Failed to load repayment');
	                    console.log(error);
	            	})
        			.finally(() => {this.loading = false});
            },

            getCashAdvance(){
            	switch(this.tenureType){
            		case 'unaffected':
            			var today = moment().format("YYYY-MM-DD");
            			if(this.$_notEmpty(this.cash_advances.param.dates) && this.$_notEmpty(this.form.repayment.payment_at)){
            				this.cash_advances.param.dates = [this.form.repayment.payment_at];
            			}
            			else{
            				this.cash_advances.param.dates = [today];
            			}

            			this.getCapitalSettlementBalance();
           			break;

           			default:
           				//
         			break;
            	}
       			if(this.cash_advances.param.dates.length){
               		axios.get(this.indexCashAdvanceApiRoute, {
       	    		    'params': this.cash_advances.param,
       	    		    'paramsSerializer': function(params) {
       	    		    	return qs.stringify(params, {arrayFormat: 'bracket'})
       	    		    },
       	    		})
         	    		.then(response => {
         	                var data = response.data.data;
         	             	var cash_advances = [];
         	          		var dates = [];
         	                data.forEach(getCashAdvanceForeachFunction);

         	                function getCashAdvanceForeachFunction(item, index){
      	   	             	cash_advances = item.cash_advances;
      	   	             	dates[index] = item.date;
      	   	            }

         	             	this.cash_advances.data = cash_advances;
         	             	this.cash_advances.date = dates;

      		        	if(this.$_notEmpty(this.cash_advances.data)){
      		        		this.form.repayment.cash_advances = this.cash_advances.data;
      		        		var i;
      		        		for(i = 0; i < this.cash_advances.data.length; i++){
      		        			this.form.repayment.cash_advances[i].capital = this.cash_advances.data[i].amount.unformatted;
      		        			this.form.repayment.cash_advances[i].interest = this.cash_advances.data[i].interest_amount.unformatted;
      		        			this.form.repayment.cash_advances[i].payment_type = 'full';
      		        		}
      		        	}
      		    		this.cashAdvanceStateValue();
      		        	this.calculatedTotal();
         	            })
         	            .catch(error => {
         	            	this.$snotify.error('Failed to load Cash Advances!');
         	            	console.log(error);
         	        	});
               	}
               	else{
               		this.cash_advances.data = [];
               		this.cash_advances.date = [];
               	}

            },

            getCapitalSettlementBalance(){
            	axios.get(this.showUserLoanApiRoute,{
         	   		'params': this.loan.param,
         	    	'paramsSerializer': function(params) {
         	    		return qs.stringify(params, {arrayFormat: 'bracket'})
         	    	},
         	    })
            	.then(response => {
            		this.loan.data = response.data.data;
            	})
            	.catch(error => {
   	            	this.$snotify.error('Failed to load!');
   	            	console.log(error);
   	        	});
            },

            cashAdvanceStateValue(){
            	var excluded = this.cash_advances.disabled.excluded;
             	var dis_capital = this.cash_advances.disabled.capital;
             	var dis_interest = this.cash_advances.disabled.interest;

            	this.cash_advances.data.forEach(setAmount);

            	function setAmount(item){
            		if(excluded.includes(item.id)){
            			item.capital = 0;
            			item.interest = 0;
            		}
            		else if(dis_capital.includes(item.id)){
            			item.capital = 0;
            		}
            		else if(dis_interest.includes(item.id)){
            			item.interest = 0;
            		}
            	}
            },

            getRepaymentCashAdvance(){
            	axios.get(this.indexRepaymentCashAdvanceApiRoute)
            	.then(response => {
            		this.cash_advances.data = response.data.data;

            		if(this.$_notEmpty(this.cash_advances.data)){
		        		this.form.repayment.cash_advances = this.cash_advances.data;
		        		var i;
		        		for(i = 0; i < this.cash_advances.data.length; i++){
		        			this.form.repayment.cash_advances[i].capital = this.cash_advances.data[i].paid_capital ? this.cash_advances.data[i].paid_capital.unformatted : 0;
		        			this.form.repayment.cash_advances[i].interest = this.cash_advances.data[i].paid_interest ? this.cash_advances.data[i].paid_interest.unformatted : 0;
		        			this.form.repayment.cash_advances[i].payment_type = this.cash_advances.data[i].payment_type;
		        		}
		        	}

		        	this.calculatedTotal();
            	})
            	.catch(error => {
   	            	this.$snotify.error('Failed to load Cash Advances!');
   	            	console.log(error);
   	        	});
            },

	        //changeCashAdvanceMode(){

            //	if(this.form.repayment.cash_advance_payment_type == 'full'){
            //		if(this.form.repayment.cash_advance_capital == 0){
            //			this.form.repayment.cash_advance_capital = this.tenures[this.form.repayment['paid_period_number'] - 1].cash_advances.capital;
            //		}
            //		this.form.repayment.cash_advance = _.sum([
		    //    		parseFloat(Math.abs(this.form.repayment.cash_advance_capital)),
	       	//			parseFloat(Math.abs(this.form.repayment.cash_advance_interest))
	    	//		]);
	        //	}
	        //	else if(this.form.repayment.cash_advance_payment_type == 'interest'){
	        //		this.form.repayment.cash_advance_capital = 0;
	        //		this.form.repayment.cash_advance = _.sum([
		    //    		parseFloat(Math.abs(this.form.repayment.cash_advance_capital)),
	       	//			parseFloat(Math.abs(this.form.repayment.cash_advance_interest))
	    	//		]);
	        //	}
	        //	else{
	        //		this.form.repayment.cash_advance = 0;
	        //	}

	        //	this.calculatedTotal();
	        //},

	        expiredOnTenure(date1, date2){
	        	if(date1 < date2){
	        		return true;
	        	}
	        	else{
	        		return false;
	        	}
	        },

	        cashAdvancePaymentOptions(section, id){
	        	var button_include = document.getElementById('ca_include_payment_button_'+id);
        		var button_exclude = document.getElementById('ca_exclude_payment_button_'+id);
        		var label = document.getElementById('ca_label_'+id);

	        	switch(section){
		        	case 'include payment':

		        		if(document.getElementById("ca_include_" + id).checked){
		        			document.getElementById("ca_exclude_" + id).checked = false;
		        			document.getElementById("capital-" + id).checked = false;
		            	    document.getElementById("interest-" + id).checked = false;

		            	    document.getElementById("capital-" + id).disabled = false;
		            	    document.getElementById("interest-" + id).disabled = false;

		            	    button_include.className = 'btn btn-primary disabled';
		            	    button_exclude.className = 'btn btn-outline-primary';

		            	    label.innerHTML = "Included";

		            	    if(this.cash_advances.disabled.excluded.includes(id)){
			            	    var excluded_index = this.cash_advances.disabled.excluded.indexOf(id);
			        	    	this.cash_advances.disabled.excluded.splice(excluded_index, 1);
		            	    }
		        		}

	    			break;

		        	case 'exclude payment':

		        		if(document.getElementById("ca_exclude_" + id).checked){
		        			document.getElementById("ca_include_" + id).checked = false
		        			document.getElementById("capital-" + id).checked = true;
		            	    document.getElementById("interest-" + id).checked = true;

		            	    document.getElementById("capital-" + id).disabled = true;
		            	    document.getElementById("interest-" + id).disabled = true;

		            	    button_include.className = 'btn btn-outline-danger';
		            	    button_exclude.className = 'btn btn-danger disabled';

		            	    label.innerHTML = "Excluded";

		            	    if(!this.cash_advances.disabled.excluded.includes(id)){
		            	    	this.cash_advances.disabled.excluded.push(id);
		            	    }
		        		}

	    			break;

		        	case 'capital':
		        	case 'interest':

		        		//
		        	break;

	        	}

	        	this.cashAdvanceLogic(id);

        	    this.calculatedTotal();
	        },

	        cashAdvanceLogic(id){
	        	if(document.getElementById("capital-" + id).checked){
	        		if(!this.cash_advances.disabled.capital.includes(id)){
        	    		this.cash_advances.disabled.capital.push(id);

        	    		this.cash_advances.data.forEach(checkedValue);

        	    		function checkedValue(item, index) {
        	    			if(item.id == id){
        	    				item.capital = 0;
        	    				item.payment_type = 'interest';
        	    			}
        	    		}
        	    	}
        	    }
        	    else{
        	    	if(this.cash_advances.disabled.capital.includes(id)){
	        	    	var capital_index = this.cash_advances.disabled.capital.indexOf(id);
	        	    	this.cash_advances.disabled.capital.splice(capital_index, 1);

						this.cash_advances.data.forEach(uncheckedValue);

        	    		function uncheckedValue(item, index) {
	     	    			if(item.id == id){
	     	    				item.capital = parseFloat(item.amount.unformatted);
	     	    				item.payment_type = 'full';
	     	    			}
        	    		}
        	    	}
        	    }

        	    if(document.getElementById("interest-" + id).checked){
        	    	if(!this.cash_advances.disabled.interest.includes(id)){
        	    		this.cash_advances.disabled.interest.push(id);

						this.cash_advances.data.forEach(checkedValue);

        	    		function checkedValue(item, index) {
        	    			if(item.id == id){
        	    				item.interest = 0;
        	    			}
        	    		}

        	    	}
        	    }
        	    else{
        	    	if(this.cash_advances.disabled.interest.includes(id)){
	        	    	var interest_index = this.cash_advances.disabled.interest.indexOf(id);
	        	    	this.cash_advances.disabled.interest.splice(interest_index, 1);

						this.cash_advances.data.forEach(uncheckedValue);

        	    		function uncheckedValue(item, index) {
	     	    			if(item.id == id){
	     	    				item.interest = parseFloat(item.interest_amount.unformatted);
	     	    			}
        	    		}
        	    	}
        	    }
	        },

	        disabledValue(section, id){
        		switch(section){
	        		case 'capital':
	        			return this.cash_advances.disabled.capital.includes(id);
        			break;

	        		case 'interest':
	        			return this.cash_advances.disabled.interest.includes(id);
	        		break;
	        	}
	        },

	        isRepaymentEditMode(){
	        	return this.is_repayment_edit_mode;
	        },

	        excludeCashAdvance(){

        		var excluded = this.cash_advances.disabled.excluded;
	        	var cash_advances = this.form.repayment.cash_advances;

	        	this.form.repayment.cash_advances.forEach(excludePayment);
	        	this.form.repayment.cash_advances = cash_advances;

	    		function excludePayment(item, index) {
	    			if(excluded.includes(item.id)){
	    				cash_advances.splice(index, 1);
 	    			}
	    		}
	        },

	        changePeriod(){

	        	var repayment_to_sum = {};
	        	if(parseInt(this.form.repayment['paid_period_number']) > this.tenures.length){
	        		this.form.repayment['paid_period_number'] = this.tenures.length;
	        	}

	        	if(this.form.repayment['paid_period_number'] = parseInt(this.form.repayment['paid_period_number'])){
	        		repayment_to_sum = _.slice(this.tenures, 0, this.form.repayment['paid_period_number']);

	        		this.form.repayment.paying_tenures = repayment_to_sum;

	        		if(parseInt(this.form.repayment['paid_period_number']) == this.cash_advances.param.dates.length + 1){
	        			var period = this.form.repayment['paid_period_number'];
	        			this.cash_advances.param.dates[period - 1] = this.form.repayment.paying_tenures[period - 1].expired_at;
	        		}
	        		else{
	        			this.cash_advances.param.dates.splice(this.form.repayment['paid_period_number'], 1);
	        		}

	        		if(!this.is_repayment_edit_mode){
	        			this.form.repayment['total_capital'] = _.sumBy(repayment_to_sum, function(o) {
		        			return o.capital.unformatted;
	        			});

		        		this.form.repayment['total_interest'] = _.sumBy(repayment_to_sum, function(o) {
	        				return o.interest.unformatted;
	       				});
	        		}

	        		//this.form.repayment['cash_advance_capital'] = this.tenures[this.form.repayment['paid_period_number'] - 1].cash_advances.capital;

	        		//this.form.repayment['cash_advance_interest'] = _.sumBy(repayment_to_sum, function(o) {
        			//	return o.cash_advances.interest;
    				//});

	        		//if(this.form.repayment.cash_advance_payment_type == 'interest'){
	        		//	this.form.repayment['cash_advance'] = this.form.repayment['cash_advance_interest'];
		        	//}
	        		//else{
	        		//	this.form.repayment['cash_advance'] = _.sum([this.form.repayment['cash_advance_capital'], this.form.repayment['cash_advance_interest']]);

	        		//	this.form.repayment.cash_advance_payment_type = 'full';
	        		//}

	        		this.form.repayment.cash_advance_payment_type = 'full';

	        	}
	        	else{
	        		if(this.form.repayment['paid_period_number'] == 0){
	        			this.cash_advances.param.dates.splice(this.form.repayment['paid_period_number'], 1);
	        		}
	        		this.form.repayment['total_capital'] = 0;
	        		this.form.repayment['total_interest'] = 0;
	        		this.form.repayment['cash_advance'] = 0;
	        		this.form.repayment['cash_advance_capital'] = 0;
	        		this.form.repayment['cash_advance_interest'] = 0;
	        		this.form.repayment.paying_tenures = {};
	        	}

	        	this.calculatedTotal();
	        },

	        calculatedTotal(){

	        	//	Tenure Subtotal
	        	this.form.repayment.tenure_subtotal = _.sum([
	        		parseFloat(Math.abs(this.form.repayment.total_capital)),
	        		parseFloat(Math.abs(this.form.repayment.total_interest)),
	        		parseFloat(Math.abs(this.form.repayment.discount) * -1),
	        		parseFloat(Math.abs(this.form.repayment.extra_charge)),
	        		parseFloat(Math.abs(this.form.repayment.extra_payment)),
        		]);

	        	//	Cash Advance Subtotal
	        	this.form.repayment['cash_advance_capital'] = _.sumBy(this.cash_advances.data, function(o) {
        			return parseFloat(Math.abs(o.capital));
    			});

	        	this.form.repayment['cash_advance_interest'] = _.sumBy(this.cash_advances.data, function(o) {
        			return parseFloat(Math.abs(o.interest));
    			});

	        	this.form.repayment.cash_advance = _.sum([
	        		parseFloat(Math.abs(this.form.repayment.cash_advance_capital)),
	        		parseFloat(Math.abs(this.form.repayment.cash_advance_interest)),
        		]);

	        	//	Calculated Total
	        	this.form.repayment.calculated_total = _.sum([
	        		this.form.repayment.tenure_subtotal,
	        		this.form.repayment.cash_advance,
        		]);
	        },

	        createPayment (){
            	this.processing = true;
             	this.$snotify.confirm('Submit Payment', 'Do you confirm?', {
                     closeOnClick: false,
                     buttons: [
                         {text: 'Yes', action: (toast) => this.postPaymentRequest(toast), bold: false},
                         {text: 'No', action: (toast) => {this.closeSnotify();}},
                     ],
 	        	});
            },

            postPaymentRequest(toast){
            	this.closeSnotify();
  				this.errors = [];
  				this.excludeCashAdvance();
  				var method = this.is_repayment_edit_mode ? 'patch' : 'post';
  				var url = this.is_repayment_edit_mode ? this.patchRepaymentsApiRoute.replace('repayment_id', this.repaymentId) : this.postRepaymentsApiRoute;
  				var data = this.form.repayment;

  				axios({ method, url, data})
			  	   	.then(response => {
			  	   		this.$snotify.success('Loan payment successfully submited.');
			  	   		setTimeout(()=>{
			  	   			window.location.href = this.showRepaymentRoute.replace('repayment_id', this.is_repayment_edit_mode ? response.data.data.id : response.data.id);
				  	    },2000);
			  	    })
  					.catch(({response}) => {
  						this.processing = false;
  	   					this.$snotify.error('The given data was invalid.');
  	   					this.errors = response.data.errors;
				});
  			},

			resetForm(){
	        	//tenure
	        	this.form.repayment.paying_tenures = {};
  				this.form.repayment.paid_period_number = 0;
	        	this.form.repayment.total_capital = 0;
	        	this.form.repayment.total_interest = 0;
	        	this.form.repayment.discount = 0;
	        	this.form.repayment.extra_charge = 0;
	        	this.form.repayment.extra_payment = 0;
	        	this.form.repayment.tenure_subtotal = 0,
	        	this.form.repayment.calculated_total = 0,

	        	//cash advance
	        	this.form.repayment.cash_advance = 0;
	        	this.form.repayment.cash_advance_capital = 0;
	        	this.form.repayment.cash_advance_interest = 0;
	        	this.form.repayment.cash_advance_payment_type = null;

	        	this.form.repayment.cash_advances = [];
	        	this.cash_advances.data = [];
	        	this.cash_advances.date = [];
	        	this.cash_advances.paying_tenures = [];
	        	this.cash_advances.param.dates = [];
	        	this.cash_advances.disabled.capital = [];
	        	this.cash_advances.disabled.interest = [];
	        	this.cash_advances.disabled.excluded = [];

	        },

            closeSnotify() {
            	this.processing = false;
            	this.$snotify.remove();
            },

        },

    }
</script>
