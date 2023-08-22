<style>
.card-hover:hover {
	opacity: 0.75;
	cursor: pointer;
}
</style>
<template>
<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
	<div class="content-header">
		<div class="container-fluid">
			<div class="row justify-content-between">
				<div class="col-sm-4">
					<div class="card m-0 d-inline-block">
    					<div class="card-header">
        					<h5 class="m-0">
        						<i class="fas nav-icon fas fa-receipt"></i>
        						Claims
        					</h5>
    					</div>
					</div>
				</div>
				<div class="col-sm-8 align-self-center">
					<ol class="breadcrumb float-sm-right text-primary">
						<li class="breadcrumb-item">
							<a href="#" @click="indexClaim()">
								<i class="fas fa-fw fa-receipt"></i> Claims
							</a>
						</li>
						<li class="breadcrumb-item active">Index</li>
					</ol>
				</div>
			</div>
		</div>
	</div>

	<!-- Main content -->
	<div class="content">
		<div class="container-fluid">

			<div class="row">
				<div class="col-md-12">
					<div class="card card-primary collapsed-card">
						<div class="card-header" data-card-widget="collapse">
							<h3 class="card-title">
								<i class="fa fa-filter" aria-hidden="true"></i> Filter
								<span style="display: inline"><i class="caret" aria-hidden="true"></i></span>
							</h3>

							<div class="card-tools">
			                	<button type="button" class="btn btn-tool">
			                		<i class="fas fa-minus"></i>
			                	</button>
			                </div>
						</div>
						<div class="card-body">
							<div class="d-flex flex-row-reverse">
								<b class="float-right align-self-end small font-italic text-muted">By Details</b>
							</div>
							<div class="row">
								<div class="col-sm-6 col-md-4 col-lg-4 col-xl-3">
									<div class="form-group">
										<label for="filter_item">ID</label>
										<div class="input-group">
											<div class="input-group-prepend">
												<span class="input-group-text"><i class="fas fa-fw fa-hashtag"></i></span>
											</div>
											<input v-model="form.filter.id" name="id" type="text" id="id" class="form-control" placeholder="">
										</div>
									</div>
								</div>
								<div class="col-sm-6 col-md-4 col-lg-4 col-xl-3">
									<div class="form-group">
										<label for="filter_item">Title</label>
										<div class="input-group">
											<div class="input-group-prepend">
												<span class="input-group-text"><i class="fas fa-fw fa-archive"></i></span>
											</div>
											<input v-model="form.filter.item" name="item" type="text" id="item" class="form-control" placeholder="Item">
										</div>
									</div>
								</div>
								<div class="col-sm-6 col-md-4 col-lg-4 col-xl-3">
									<div class="form-group">
										<label for="user_id">User</label>
										<v-select
											name="selected_user"
									     	v-model="form.filter.user_id"
									        :options="select_options.users"
									        placeholder="Everyone"
									        label="name"
									        index="id">
										</v-select>
									</div>
								</div>
								<div class="col-sm-6 col-md-4 col-lg-4 col-xl-3">
									<div class="form-group">
										<label for="filter_user_id">Status</label>
										<v-select
											class="text-capitalize"
											name="selected_status"
									     	v-model="form.filter.status"
									     	placeholder="Maximum of 3 Options"
									     	title="Multiple options allowed. Maximum of 3 options."
									        :options="select_options.statuses"
									        multiple
									        :closeOnSelect="false"
									        :noDrop="form.filter.status.length > 2"
									        label="key"
									        index="value">
										</v-select>
									</div>
								</div>
							</div>
							<hr class="mb-1">
							<div class="d-flex flex-row-reverse">
								<b class="float-right align-self-end small font-italic text-muted">By Transaction Date</b>
							</div>
							<div class="row">
								<div class="col-sm-6 col-md-4 col-lg-4 col-xl-3">
									<div class="form-group">
										<label for=transaction_from>Transaction From</label>
										<div class="input-group">
											<div class="input-group-prepend">
												<span class="input-group-text"><i class="fas fa-fw fa-calendar-day"></i></span>
											</div>
											<input v-model="form.filter.transaction_from" name="" type="date" id="transaction_from" class="form-control border-right-0 pr-0">
											<div class="input-group-append border-left-0">
												<span class="input-group-text border-left-0 bg-white pl-0" @click="form.filter.transaction_from = ''" title="Clear selection">
													<i class="fas fa-fw fa-times text-muted"></i>
												</span>
											</div>
										</div>
									</div>
								</div>
								<div class="col-sm-6 col-md-4 col-lg-4 col-xl-3">
									<div class="form-group">
										<label for="transaction_until">Transaction Until</label>
										<div class="input-group">
											<div class="input-group-prepend">
												<span class="input-group-text"><i class="fas fa-fw fa-calendar-day fa-flip-horizontal"></i></span>
											</div>
											<input v-model="form.filter.transaction_until" name="" type="date" id="transaction_until" class="form-control border-right-0 pr-0">
											<div class="input-group-append border-left-0">
												<span class="input-group-text border-left-0 bg-white pl-0" @click="form.filter.transaction_until = ''" title="Clear selection">
													<i class="fas fa-fw fa-times text-muted"></i>
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<hr class="mb-1">
							<div class="d-flex flex-row-reverse">
								<b class="float-right align-self-end small font-italic text-muted">By Closing Date</b>
							</div>
							<div class="row">
								<div class="col-sm-6 col-md-4 col-lg-4 col-xl-3">
									<div class="form-group">
										<label for="closing_from">Closing From</label>
										<div class="input-group">
											<div class="input-group-prepend">
												<span class="input-group-text"><i class="fas fa-fw fa-calendar-times"></i></span>
											</div>
											<input v-model="form.filter.closed_from" name="" type="date" id="closing_from" class="form-control border-right-0 pr-0">
											<div class="input-group-append border-left-0">
												<span class="input-group-text border-left-0 bg-white pl-0" @click="form.filter.closed_from = ''" title="Clear selection">
													<i class="fas fa-fw fa-times text-muted"></i>
												</span>
											</div>
										</div>
									</div>
								</div>
								<div class="col-sm-6 col-md-4 col-lg-4 col-xl-3">
									<div class="form-group">
										<label for="closing_until">Closing Until</label>
										<div class="input-group">
											<div class="input-group-prepend">
												<span class="input-group-text"><i class="fas fa-fw fa-calendar-times"></i></span>
											</div>
											<input v-model="form.filter.closed_until" name="" type="date" id="closing_until" class="form-control border-right-0 pr-0">
											<div class="input-group-append border-left-0">
												<span class="input-group-text border-left-0 bg-white pl-0" @click="form.filter.closed_until = ''" title="Clear selection">
													<i class="fas fa-fw fa-times text-muted"></i>
												</span>
											</div>
										</div>
									</div>
								</div>
								<div class="col-sm-6 col-md-4 col-lg-4 col-xl-3">
									<div class="form-group">
										<label for="has_closing">Is Closed <i class="fas fa-question-circle" title="Filter claims with presence of closing date."></i></label>
										<div class="form-row p-2">
											<div class="mr-3">
												<input type="radio" v-model="form.filter.is_closed" value="false" id="is_closed_no">
												<label class="form-check-label" for="is_closed_no">Yes</label>
											</div>
											<div class="mr-3">
												<input type="radio" v-model="form.filter.is_closed" value="true" id="is_closed_yes">
												<label class="form-check-label" for="is_closed_yes">No</label>
											</div>
											<label class="small text-primary cursor-pointer" @click="deselectRadio('closing')" title="Clear Selection">Clear</label>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="card-footer">
							<div class="row justify-content-between">
								<p class="d-inline">Found <span v-text="total"></span> records</p>
								<div class="float-right d-inline">
									<button class="btn btn-primary mr-1" @click="getFilteredClaims"><i class="fas fa-search"></i> Search</button>
									<button class="btn btn-outline-primary" title="Reset search" @click="resetSearch"><i class="fa fa-ban" aria-hidden="true"></i></button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Main content row -->
			<div class="row">
				<div class="col-md-12">
					<div class="card card-outline card-primary">
						<div class="card-header">
							<h5 class="d-inline">
								<i class="fas fa-list-alt"></i>
								Claims (<span v-text="total"></span>)
								<span class="text-capitalize p-2 ml-2"
										:class="form.batch.mode == 'release' ? 'bg-primary' : 'bg-warning text-white'"
										v-if="form.batch.mode"
										style="border-radius: 0.25rem">Batch {{ form.batch.mode }}</span>
							</h5>
							<button class="btn btn-outline-primary btn-sm btn-min-width float-right ml-1"
									v-if="form.batch.claims.length > 0"
									data-toggle="modal"
									data-target="#modal-batch-update"
									@click="fillDefaultDate(form.batch.mode)"
									style="line-height: initial">
								<i class="fas fa-forward fa-fw"></i>
								Proceed Batch Update
							</button>
							<button class="btn btn-outline-primary btn-sm btn-min-width float-right ml-1"
								data-toggle="modal"
								data-target="#modal-batch-selection"
								v-if="showBatchUpdateButton('initiate')"
								style="line-height: initial"
								>
								<i class="fa fa-fw fa-tasks" aria-hidden="true"></i>
								Batch Update
							</button>
							<button class="btn btn-primary btn-sm btn-min-width float-right ml-1"
								@click="showBatch = false"
								v-if="showBatchUpdateButton('change')"
								style="line-height: initial"
								>
								<i class="fa fa-fw fa-undo" aria-hidden="true"></i>
								Change Action
							</button>
							<button type="button"
								class="btn btn-primary btn-sm btn-min-width float-right"
								v-if="claims.policies.store"
								data-toggle="modal"
								data-target="#modal-create-claim"
								@click="fillDefaultDate('create')"
								style="line-height: initial"
								>
								<i class="fa fa-fw fa-plus" aria-hidden="true"></i> Create New
							</button>

						</div>
						<!-- /.card-header -->

						<div class="card-body">
							<vue-data-table
								:numbering="true"
								:columns="columns.claims"
					            :items.sync="claims.data"
					            :paginate="true"
					            :pagination="claims.pagination"
		                        pagination-method="get"
		                        :pagination-data="form.filter"
		                        :loading="loading"
		                    >
								<template slot="items" slot-scope="props">
									<td width="3%" class="text-primary text-center">
										<a @click="getClaim(props.item.id)" class="text-primary" style="cursor: pointer">#{{ props.item.id }}</a>
										<i class="fas fa-fw blink_me fa-clock text-warning" title="This claim is without a closing date." v-if="alertClosingDate(props.item)"></i>
									</td>
									<td class="text-capitalize">{{ props.item.item }}</td>
									<td width="15%" class="text-right">{{ props.item.amount.display }}</td>
									<td width="15%" class="text-capitalize">{{ props.item.transaction_at | toStandardDateTime }}</td>
									<td width="10%">
										<span class="text-capitalize text-center status status__icon" :class="'status_' + props.item.status">
											{{ props.item.status }}
										</span>
									</td>
									<td width="15%" class="text-capitalize">{{ props.item.closed_at | toStandardDateTime }}</td>
									<td width="10%" class="text-capitalize text-center">
										<button class="btn btn-sm btn-success" @click="getClaim(props.item.id)" v-if="props.item.policies.show">
											<i class="fas fa-eye"></i>
										</button>
									</td>
									<td width="5%" class="text-center">
										<div class="btn-group-toggle btn-group" title="Check to batch update" v-if="showBatch">
											<label class="btn btn-sm btn-outline-light border-secondary"
												v-if="batchUpdateMode(props.item.policies)" data-toggle="buttons">
												<input class="form-check-input" type="checkbox" :id="'batch_check_'+props.item.id" :value="props.item.id" v-model="form.batch.claims">
												<i class="fas fa-fw fa-check"></i>
											</label>
										</div>
									</td>
								</template>
							</vue-data-table>
						</div>
		        	</div>
		        	<!-- /.card -->
				</div>
			</div>
			<!-- row (main content) -->
		</div>

		<!-- claims-show-modal
			:claim_id="claim_id"
			:user_id="user_id"
			:admin_id="this.admin_id"
			:showUserRoute="showUserRoute.replace('user_id', this.user_id)"
			:indexClaimApiRoute="indexClaimApiRoute.replace('user_id', this.user_id)"
			:showClaimApiRoute="showUserClaimApiRoute.replace('user_id', this.user_id).replace('claim_id', this.claim_id)"
           	:updateUserClaimApiRoute="updateUserClaimApiRoute.replace('user_id', this.user_id).replace('claim_id', this.claim_id)"
           	:indexClaimDocumentApiRoute="indexUserClaimDocumentApiRoute.replace('user_id', this.user_id).replace('claim_id', this.claim_id)"
           	:storeClaimDocumentApiRoute="storeUserClaimDocumentApiRoute.replace('user_id', this.user_id).replace('claim_id', this.claim_id)"
           	:indexClaimRemarkApiRoute="indexClaimRemarkApiRoute"
           	:storeClaimRemarkApiRoute="storeClaimRemarkApiRoute"
           	:destroyClaimRemarkApiRoute="destroyClaimRemarkApiRoute"></claims-show-modal -->
	</div>

	<div class="modal fade" id="modal-create-claim">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-header">
					<h4 class="modal-title">
						<i class="fas fa-money-check-alt"></i>
						New Claim Request
					</h4>
					<button type="button" class="close float-right" data-dismiss="modal" aria-label="Close" @click="closeSnotify()">
						<span aria-hidden="true"><i class="fas fa-times"></i></span>
					</button>
				</div>
				<div class="modal-body">
					<div class="row mt-1">
						<b class="col-md-3 align-self-center">Claimed By*</b>
						<div class="col-md-9">
							<v-select
								name="claimant"
						     	v-model="form.claims.user_id"
						        :options="select_options.users"
						        label="name"
						        index="id">
							</v-select>
							<span v-if="errors.claims.user_id" class="help-block small text-danger">
								{{ errors.claims.user_id[0] }}
							</span>
						</div>
					</div>
					<div class="row mt-1">
						<b class="col-md-3 align-self-center">Item*</b>
						<div class="col-md-9">
							<input type="text" name="item" class="form-control" :class="{'is-invalid': errors.claims.item}" :disabled="processing" v-model="form.claims.item">
							<span v-if="errors.claims.item" class="help-block small text-danger">
								{{ errors.claims.item[0] }}
							</span>
						</div>
					</div>
					<div class="row mt-1">
						<b class="col-md-3 align-self-center">Description</b>
						<div class="col-md-9">
							<input type="text" name="description" class="form-control" :class="{'is-invalid': errors.claims.description}" :disabled="processing" v-model="form.claims.description">
							<span v-if="errors.claims.description" class="help-block small text-danger">
								{{ errors.claims.description[0] }}
							</span>
						</div>
					</div>
					<div class="row mt-1">
						<b class="col-md-3 align-self-center">Amount*</b>
						<div class="col-md-9">
							<div class="input-group">
								<v-select
									name="claim_currency"
									class="col-md-4 p-0"
							     	v-model="form.claims.currency_id"
							     	:class="{'is-invalid': errors.claims.amount}"
							        :options="select_options.currencies"
							        label="code"
							        index="id">
								</v-select>
								<input type="number" @keypress="$_onlyNumber" name="amount" class="form-control" :class="{'is-invalid': errors.claims.amount}" :disabled="processing" v-model.number="form.claims.amount">
							</div>
							<span v-if="errors.claims.amount" class="help-block small text-danger">
								{{ errors.claims.amount[0] }}
							</span>
						</div>
					</div>
					<div class="row mt-1">
						<b class="col-md-3 align-self-center">Transaction At*</b>
						<div class="col-md-5">
							<input type="date" name="transaction_date" class="form-control" :class="{'is-invalid': errors.claims.transaction_at}" :disabled="processing" v-model="form.claims.transaction_date">
						</div>
						<div class="col-md-4">
							<input type="time" name="transaction_time" class="form-control" :class="{'is-invalid': errors.claims.transaction_at}" :disabled="processing" v-model="form.claims.transaction_time">
							<input type="hidden" v-model="form.claims.transaction_at">
						</div>
						<div class="col-md-6 offset-md-3">
							<span v-if="errors.claims.transaction_at" class="help-block small text-danger">
								{{ errors.claims.transaction_at[0] }}
							</span>
							<span v-else class="help-block small font-italic">
								Date and time shown are as per current local datetime.
							</span>
						</div>
					</div>
				</div>
				<div class="modal-footer justify-content-between">
					<div class="small font-italic">*Fields with asterisk are required.</div>
					<div>
						<button type="button" class="btn btn-default" data-dismiss="modal" aria-label="Close" @click="closeSnotify(); clearClaimModals()">Cancel</button>
						<button class="btn btn-success" :disabled="processing" @click="storeClaim()">
							<i class="fas fa-fw" :class="processing ? 'fa-circle-notch fa-spin' : 'fa-check-circle'" aria-hidden="true"></i>
							Confirm
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="modal fade" id="modal-batch-update">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-header">
					<h4 class="modal-title">
						<i class="fas fa-fw" :class="form.batch.mode == 'release' ? 'fa-tasks' : 'fa-calendar-check'"></i>
						{{ form.batch.mode == 'release' ? 'Batch Release Claims' : 'Batch Closing Date' }}
					</h4>
					<button type="button" class="close float-right" data-dismiss="modal" aria-label="Close" @click="closeSnotify()">
						<span aria-hidden="true"><i class="fas fa-times"></i></span>
					</button>
				</div>
				<div class="modal-body">
					<div class="form-group col-md-12 row">
						<label class="col-md-12">{{ form.batch.mode == 'release' ? 'Release Date*' : 'Closing Date*' }}</label>
						<div class="col-md-6" v-if="form.batch.mode == 'release'">
							<input type="date" name="released_at" class="form-control" :disabled="processing"
								v-model="form.batch.released_at"
								:class="{'is-invalid': errors.batch.released_at}">
						</div>
						<div class="col-md-6" v-if="form.batch.mode == 'closing'">
							<input type="date" name="closed_at" class="form-control" :disabled="processing"
								v-model="form.batch.closed_at"
								:class="{'is-invalid': errors.batch.closed_at}">
						</div>
						<div class="col-md-12">
							<span v-if="errors.batch.released_at" class="help-block small text-danger">
								<i class="fas fa-fw fa-exclamation-triangle"></i>
								{{ errors.batch.released_at[0] }}
							</span>
						</div>
					</div>
					<div class="form-group col-md-12">
						<label>Remark</label>
						<div class="input-group">
							<textarea v-model="form.batch.remark" name="release_remark" id="remark" class="form-control" :class="{'is-invalid': errors.batch.remark}" :disabled="processing" rows="5" placeholder="Leave blank if none."></textarea>
						</div>
						<span v-if="errors.batch.remark" class="help-block small text-danger">
							<i class="fas fa-fw fa-exclamation-triangle"></i>
							{{ errors.batch.remark[0] }}
						</span>
					</div>
				</div>
				<div class="modal-footer justify-content-between">
					<div class="small font-italic">*Fields with asterisk are required.</div>
					<div>
						<button type="button" class="btn btn-default" data-dismiss="modal" aria-label="Close" @click="closeSnotify(); clearClaimModals()">Cancel</button>
						<button class="btn btn-success" :disabled="processing" @click="batchUpdateSubmit()">
							<i class="fas fa-fw" :class="processing ? 'fa-circle-notch fa-spin' : 'fa-check-circle'" aria-hidden="true"></i>
							Confirm
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="modal fade" id="modal-batch-selection">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-header border-bottom-0">
					<h4 class="modal-title">
						<i class="fas fa-tasks"></i>
						Batch Action Selection
					</h4>
					<button type="button" class="close float-right" data-dismiss="modal" aria-label="Close" @click="closeSnotify()">
						<span aria-hidden="true"><i class="fas fa-times"></i></span>
					</button>
				</div>
				<div class="modal-body">
					<div class="row">
						<div class="col-6" v-if="claims.policies.batch_release">
							<div class="card bg-primary card-hover text-center p-4" @click="batchUpdateToggle('release')" data-dismiss="modal">
								<i class="fas fa-tasks fa-3x d-block p-2"></i>
								<label class="text-light" style="cursor:pointer">Batch Release</label>
							</div>
						</div>
						<div class="col-6" v-if="claims.policies.batch_closing">
							<div class="card bg-warning card-hover text-center p-4" @click="batchUpdateToggle('closing')" data-dismiss="modal">
								<i class="fas fa-calendar-check fa-3x d-block p-2 text-light"></i>
								<label class="text-light" style="cursor:pointer">Batch Closing</label>
							</div>
						</div>


					</div>
				</div>
			</div>
		</div>
	</div>

</div>
</template>

<script>

	import VueDataTable from "../../vue-data-table";
	import RemarkComponent from "../../remark-component";
	import CustomDirectives from '../../../directives/customDirectives';
	var qs = require('qs');

	export default{
	    props: [
	    	'admin_id',
	    	'select-options',
	    	'show-user-route',
			'index-claim-route',
			'show-claim-route',
			'index-claim-api-route',
			'store-user-claim-api-route',
			'batch-update-claim-api-route',
			//'show-user-claim-api-route',
			//'update-user-claim-api-route',
			//'index-user-claim-document-api-route',
			//'store-user-claim-document-api-route',
			//'index-claim-remark-api-route',
			//'store-claim-remark-api-route',
			//'destroy-claim-remark-api-route'
		],

    	directives: {CustomDirectives},

	    components:{
	        VueDataTable
	    },

	    data(){
	        return {
	        	columns:{
	        		claims:[
	        			{
		                    name: "#",
		                    field: "id",
		                    align: "center",
		                },
		                {
		                    name: "Item",
		                    field: "item",
		                },
		                {
		                    name: "Amount",
		                    field: "amount",
		                },
		                {
		                    name: "Transaction At",
		                    field: "transaction_at",
		                    sortable: 'transaction_at',
		                },
		                {
		                    name: "Status",
		                    field: "status",
		                    sortable: 'status',
		                },
		                {
		                    name: "Closed At",
		                    field: "closed_at",
		                    sortable: 'closed_at',
		                },
		                {
		                	name: "Action",
		                	align: "center",
		                },
		                {
		                	name: "",
		                	align: "center",
		                }
		             ],
	        	},
	        	claims: {
	                data: [],
	                pagination: {},
	                policies: {},
	        	},
            	claim_id: '',
            	user_id: '',
	        	form: {
	        		filter: {
	        			id: '',
	        			user_id: '',
	        			item: '',
	        			status:[],
	        			transaction_from: '',
	        			transaction_until: '',
	        			closed_from: '',
	        			closed_until: '',
	        			has_closing: '',
	        		},
	        		claims: {
	        			item: '',
	        			description: '',
	        			currency_id: '',
	        			amount: '',
	        			transaction_date: '',
	                    transaction_time: '',
	        			transaction_at: '',
	        			user_id: ''
	        		},
	        		batch: {
	        			mode: '',
	        			claims: [],
	        			released_at: '',
	        			closed_at: '',
	        			remark: '',
	        		}
	        	},
	        	errors: {
	        		claims: [],
	        		batch: [],
	        	},
	        	processing: false,
	        	loading: false,
	        	showBatch: false,
	        	select_options: {},
	        	total: 0,
	        }
	    },

	    mounted() {
	    	this.getClaims();
	    	this.getSelectOptions();
	    	$('.modal').on("hide.bs.modal", () => this.closeSnotify());
	    	$('.modal').on("hidden.bs.modal", () => this.clearProcessing());
	    	$('#modal-show-claim').on("hide.bs.modal", () => this.getClaims());
	    	$('#modal-create-claim').on("hide.bs.modal", () => this.clearClaimModals());
	    	$('#modal-batch-update').on("hide.bs.modal", () => this.clearClaimModals());
	    },

	    methods: {

	    	getSelectOptions(){
	    		this.select_options = JSON.parse(this.selectOptions);
	    	},

	    	getClaims(){
	    		this.toggleLoading();
	    		axios.get(this.indexClaimApiRoute, {
        		    'params': this.form.filter,
        		    'paramsSerializer': function(params) {
        		       return qs.stringify(params, {arrayFormat: 'bracket'})
        		    },
        		})
    			.then(response => {
    				this.claims.data = response.data.data;
	                this.claims.pagination.links = response.data.links;
	                this.claims.pagination.meta = response.data.meta;
	                this.claims.policies = response.data.policies;
	                this.total = response.data.meta.total;
	                this.form.batch.claims = [];
                	this.showBatch = !this.showBatch;
    			})
    			.catch(error => {
	            	this.$snotify.error('Failed to load claim list!');
	            	//console.log(error.response);
	        	})
    			.finally(() => {
    					this.showBatch = !this.showBatch;
	        			this.toggleLoading();
	        		}
	        	);

	    	},

	    	getFilteredClaims(){
	    		this.getClaims();
	    	},

	    	resetSearch(){
	    		this.form.filter.user_id = '';
	    		this.form.filter.item = '';
	    		this.form.filter.status = '';
	    		this.form.filter.transaction_from = '';
	    		this.form.filter.transaction_until = '';
	    		this.form.filter.closed_from = '';
	    		this.form.filter.closed_until = '';
	    		this.getClaims();
	    	},

	    	indexClaim(){
            	window.location.href = this.indexClaimRoute;
            },

            clearShowClaim(){
            	this.claim = {}
            },

        	getClaim(claim_id){
	        	window.open(this.showClaimRoute.replace('claim_id', claim_id));
	        },

	        fillDefaultDate(request){
            	this.errors.claims = []
            	//var today = new Date();
				//Date.prototype.dateString = function() {
				//	  var mm = this.getMonth() + 1;
				//	  var dd = this.getDate();

				//	  return [this.getFullYear(),
				//	          (mm>9 ? '' : '0') + mm,
				//	          (dd>9 ? '' : '0') + dd
				//	         ].join('-');
				//	};

				//Date.prototype.timeString = function() {
				//	  var mm = this.getMinutes();
				//	  var HH = this.getHours();

				//	  return [(HH>9 ? '' : '0') + HH,
				//	          (mm>9 ? '' : '0') + mm
				//	         ].join(':');
				//	};
				//var time = today.timeString();
				//var date = today.dateString();

				switch(request){
					case 'create':
						this.form.claims.transaction_date = moment().format('YYYY-MM-DD');
						this.form.claims.transaction_time = moment().format('HH:mm');
						this.form.claims.currency_id = 1;
						this.form.claims.currency_id = 1;
						break;

					case 'release':
						this.form.batch.released_at = moment().format('YYYY-MM-DD');
						break;

					case 'closing':
						this.form.batch.closed_at = moment().format('YYYY-MM-DD');
						break;
				}

            },

            storeClaim(){
            	this.form.claims.transaction_at = this.form.claims.transaction_date.concat(' ', this.form.claims.transaction_time, ':00')
            	this.processing = true;
            	this.$snotify.confirm('Do you confirm?', 'Make Claim Request', {
                    closeOnClick: false,
                    buttons: [
                        {text: 'Yes', action: (toast) => this.storeClaimRequest(toast), bold: false},
                        {text: 'No', action: (toast) => {this.closeSnotify();}},
                    ],
	        	});
            },

            storeClaimRequest(toast){
            	this.closeSnotify();
  				this.errors.claims = [];
  				axios.post(this.storeUserClaimApiRoute.replace('user_id', this.form.claims.user_id), this.form.claims)
			  	   	.then(response => {
				  	   	this.clearClaimModals();
				  	   	this.closeModal();
				        this.getClaims();
					  	this.$snotify.success('Claim requested successfully!');
			  	    })
			  	    .catch(({response}) => {
  						this.processing = false;
  	   					this.$snotify.error(response.data.message);
  	   					this.errors.claims = response.data.errors;
					});
  			},

	        clearClaimModals(){
  				this.form.claims.user_id = '';
  				this.form.claims.item = '';
				this.form.claims.description = '';
				this.form.claims.amount = '';
				this.form.claims.transaction_time = '';
				this.form.claims.transaction_date = '';
				this.form.claims.transaction_at = '';

				this.form.batch.claims = [];
				this.form.batch.released_at = '';
				this.form.batch.closed_at = '';
				this.form.batch.remark = '';
  			},

  			alertClosingDate(claim){
  				switch(claim.status){
	  				case 'approved':
	  				case 'released':
						if(!claim.closed_at){
							return true;
						}
						else{
							return false;
						}

	  					break;

	  				default:
	  					return false;
  				}
  			},

  			batchUpdateSubmit(){
            	this.processing = true;
            	switch(this.form.batch.mode){
            		case 'release':
            			var disclaimer = 'Releasing Batch Claims';
            			break;
            		case 'closing':
            			var disclaimer = 'Batch Closing Date';
            			break;
            	}
            	this.$snotify.confirm('Do you confirm?', disclaimer, {
                    closeOnClick: false,
                    buttons: [
                        {text: 'Yes', action: (toast) => this.batchUpdateClaimRequest(toast), bold: false},
                        {text: 'No', action: (toast) => {this.closeSnotify();}},
                    ],
	        	});
  			},

  			batchUpdateClaimRequest(){
  				this.closeSnotify();
  				axios.patch(this.batchUpdateClaimApiRoute, this.form.batch)
		  	   	.then(response => {
			        this.clearClaimModals();
			  	   	this.closeModal();
			        this.getClaims();
				  	this.$snotify.success('Batch Claims Updated successfully!');
		  	    })
		  	    .catch(({response}) => {
					this.processing = false;
   					this.$snotify.error('The given data was invalid.');
   					this.errors = response.data.errors;
				});
  			},

  			showBatchUpdateButton(action){
  				switch(action){
  					case 'initiate':
  						return (!this.showBatch && this.claims.policies.batch_release) || (!this.showBatch && this.claims.policies.batch_closing);

  						break;

  					case 'change':
  						return (this.showBatch && this.claims.policies.batch_release) || (this.showBatch && this.claims.policies.batch_closing);

  						break
  				}
  			},

  			batchUpdateToggle(mode){
  				this.showBatch = !this.showBatch;
  				this.form.batch.mode = mode;
  				this.clearClaimModals();
  			},

  			batchUpdateMode(policies){
  				switch(this.form.batch.mode){
  					case 'release':
	  					return (this.showBatch && policies.admin_release);
	  					break;

	  				case 'closing':
	  					return (this.showBatch && policies.admin_close);
	  					break;
  				}
  			},

  			deselectRadio(attribute){
  				switch(attribute){
	  				case 'closing':
	  					this.form.filter.has_closing = '';
	  					var options = ['yes', 'no'];
	  	  				options.forEach(deselectAllRadioFunction);
	  	  				break;
  				}


                function deselectAllRadioFunction(item, index){
                	if(document.getElementById('is_closed_' + item).checked == true){
      					document.getElementById('is_closed_' + item).checked = false;
      				}
                }

  			},

  			closeModal(){
				$('#modal-batch-update').modal('hide');
	  	   		$('#modal-batch-selection').modal('hide');
	  	   		$('#modal-create-claim').modal('hide');
			},

	        closeSnotify() {
            	this.$snotify.remove();
            },

            clearProcessing(){
            	this.processing = false;
            },

            toggleLoading(){
	        	this.loading = !this.loading;
	        },
    	}
    }
</script>
