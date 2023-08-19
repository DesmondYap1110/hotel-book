<template>

    <!-- Main content -->
    <section class="content">
        <div class="container-fluid">
            <!-- Filter Row -->
            <div class="row no-print" v-if="!print">
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
                        <!-- /.card-header -->
                        <div class="card-body">
                            <div class="d-flex flex-row-reverse">
                                <b class="float-right align-self-end small font-italic text-muted">By Loan</b>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 col-md-5 col-lg-5 col-xl-3">
                                    <div class="form-group">
                                        <label for="real_name">ID</label>
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="fas fa-hashtag"></i></span>
                                            </div>
                                            <input v-model="form.filter.id" name="id" type="text" id="id" class="form-control">
                                        </div>
                                    </div>
                                </div>

                                <div class="col-sm-6 col-md-5 col-lg-5 col-xl-3">
                                    <div class="form-group">
                                        <label for="selected_product">Product</label>
                                        <v-select
                                            v-model="form.filter.product_name"
                                            name="selected_product"
                                            class="text-capitalize"
                                            placeholder="Maximum of 2 options"
                                            :options="select_options.products"
                                            label="value"
                                            index="key"
                                            :closeOnSelect="false"
                                               :noDrop="form.filter.product_name.length > 1"
                                               title="Multiple options allowed. Maximum of 2 options."
                                            multiple>
                                        </v-select>
                                    </div>
                                </div>
                                <!--
                                <div class="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                                    <div class="form-group">
                                        <label for="has_pending_referral_transaction">Referal Bonus</label>

                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="fas fa-layer-group"></i></span>
                                            </div>
                                            <select v-model="form.filter.has_pending_referral_transaction" class="form-control text-capitalize">
                                                <option value="">All</option>
                                                <option v-for="option in select_options.referral_bonus_status">{{ option }}</option>
                                            </select>
                                        </div>

                                    </div>
                                </div>
                                -->
                                <div class="col-sm-6" :class="statusSize(form.filter.status)">
                                    <div class="form-group">
                                        <label for="selected_status">Status</label>
                                        <v-select
                                            v-model="form.filter.status"
                                            class="text-capitalize"
                                            placeholder="Maximum of 4 options"
                                            title="Multiple options allowed. Maximum of 4 options."
                                            :options="select_options.status"
                                            label="value"
                                            index="key"
                                               :closeOnSelect="false"
                                               :noDrop="form.filter.status.length > 3"
                                            multiple>
                                        </v-select>
                                    </div>
                                </div>
                            </div>
                            <hr class="mb-1">
                            <div class="d-flex flex-row-reverse">
                                <b class="float-right align-self-end small font-italic text-muted">By User</b>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 col-md-5 col-lg-5 col-xl-3">
                                    <div class="form-group">
                                        <label for="real_name">Username</label>
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="fas fa-at"></i></span>
                                            </div>
                                            <input v-model="form.filter.real_name" name="real_name" type="text" id="name" class="form-control" placeholder="i.e. John Doe">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-5 col-lg-5 col-xl-3">
                                    <div class="form-group">
                                        <label for="selected_agent" class="control-label">Agents</label>
                                        <v-select
                                            name="selected_agent"
                                             v-model="form.filter.agent_id"
                                             placeholder="All Agents"
                                            :options="select_options.agents"
                                            label="name"
                                            index="id">
                                        </v-select>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-5 col-lg-5 col-xl-3">
                                    <div class="form-group">
                                        <label for="selected_referral" class="control-label">Referrals</label>
                                        <v-select
                                            name="selected_referral"
                                             v-model="form.filter.referral_id"
                                             placeholder="All Referrals"
                                            :options="select_options.referrals"
                                            label="name"
                                            index="id">
                                        </v-select>
                                    </div>
                                </div>
                            </div>
                            <hr class="mb-1">
                            <div class="d-flex flex-row-reverse">
                                <b class="float-right align-self-end small font-italic text-muted">By Date</b>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 col-md-5 col-lg-5 col-xl-3">
                                    <div class="form-group">
                                        <label for="created_from" class="control-label">Created from</label>
                                        <div class="input-group date">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="fas fa-calendar"></i></span>
                                            </div>
                                            <input v-model="form.filter.created_from" class="form-control border-right-0 pr-0" name="created_from" type="date" id="created_from">
                                            <div class="input-group-append border-left-0">
                                                <span class="input-group-text border-left-0 bg-white pl-0" @click="form.filter.created_from = ''" title="Clear selection">
                                                    <i class="fas fa-fw fa-times text-muted"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-5 col-lg-5 col-xl-3">
                                    <div class="form-group">
                                        <label for="created_until" class="control-label">Created until</label>
                                        <div class="input-group date">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="fas fa-calendar"></i></span>
                                            </div>
                                            <input v-model="form.filter.created_until" class="form-control border-right-0 pr-0" name="created_until" type="date" id="created_until">
                                            <div class="input-group-append border-left-0">
                                                <span class="input-group-text border-left-0 bg-white pl-0" @click="form.filter.created_until = ''" title="Clear selection">
                                                    <i class="fas fa-fw fa-times text-muted"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-5 col-lg-5 col-xl-3">
                                    <div class="form-group">
                                        <label for="is_expired">Expired <i class="fas fa-question-circle" title="Filter loans with unpaid expired repayment."></i></label>
                                        <div class="form-row p-2">
                                            <div class="mr-3">
                                                <input type="radio" v-model="form.filter.is_expired" value="true" id="yes_expired">
                                                <label class="form-check-label" for="yes_expired">Yes</label>
                                            </div>
                                            <div class="mr-3">
                                                <input type="radio" v-model="form.filter.is_expired" value="false" id="no_expired">
                                                <label class="form-check-label" for="no_expired">No</label>
                                            </div>
                                            <label class="small text-primary cursor-pointer" @click="deselectRadio('expired')" title="Clear Selection">Clear</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /.card-body -->
                        <div class="card-footer">
                            <div class="row justify-content-between">
                                <p class="d-inline">Found <span v-text="total"></span> records</p>
                                <div class="float-right d-inline">
                                    <button class="btn btn-primary mr-1" @click="getLoans"><i class="fas fa-search"></i> Search</button>
                                    <button class="btn btn-outline-primary" title="Reset search" @click="resetFilters"><i class="fa fa-ban" aria-hidden="true"></i></button>
                                </div>
                            </div>
                        </div>
                        <!-- /.card-footer -->
                    </div>
                    <!-- /.card -->
                </div>
            </div>
            <!-- /.row (filter) -->

            <!-- Main Content Row -->
            <div class="row no-print" v-if="!print">
                <div class="col-md-12">
                    <div class="card card-outline card-primary">
                        <div class="card-header">
                            <h5 class="d-inline">
                                <i class="fa fa-list-alt"></i> Loans (<span v-text="total"></span>)
                            </h5>
                            <button type="button"
                                class="btn btn-primary btn-sm btn-min-width float-right"
                                v-if="policies.store"
                                @click="createLoan"
                                style="line-height: initial">
                                <i class="fa fa-fw fa-plus" aria-hidden="true"></i> Create New
                            </button>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body">
                            <vue-data-table
                                :numbering="true"
                                :columns="columns.index"
                                :items.sync="loans.data"
                                :paginate="true"
                                :pagination="loans.pagination"
                                pagination-method="get"
                                :pagination-data="form.filter"
                                :loading="loading"
                            >
                                <template slot="items" slot-scope="props">
                                    <td>
                                        <a @click="showLoan(props.item.user_id, props.item.id)" class="text-primary" v-if="props.item.id" style="cursor: pointer">
                                            #{{ props.item.id }}
                                        </a>
                                        <i class="fas fa-fw blink_me fa-exclamation-circle text-danger" title="Repayment date is expired" v-if="props.item.has_expired_tenure"></i>
                                    </td>
                                    <td>
                                        <a @click="showUser(props.item.user_id)" class="text-primary" style="cursor: pointer" v-if="props.item.user">{{ props.item.user.name }}</a>
                                    </td>
                                    <td>
                                        <a @click="showUser(props.item.user_id)" class="text-primary" style="cursor: pointer" v-if="props.item.user">{{ props.item.user.full_name }}</a>
                                    </td>
                                    <td>{{ props.item.product_name }}</td>
                                    <td class="text-right">{{ props.item.amount.display ? props.item.amount.display : props.item.amount.unformatted }}</td>
                                    <!--
                                    <td width="15%">
                                        <span v-if="props.item.next_repayment_expired_at">{{ props.item.next_repayment_expired_at | moment("Do MMMM YYYY, dddd") }}</span>
                                        <span v-else>--</span>
                                    </td>
                                    <td class="text-capitalize" width="10%"><span v-if="props.item.has_pending_referral_transaction">{{ props.item.has_pending_referral_transaction.status }}</span><span v-else>--</span></td>
                                    -->
                                    <td width="12%">
                                        <span v-if="props.item.applied_at">{{ props.item.applied_at | toStandardDateTime }}</span>
                                        <span v-else>--</span>
                                    </td>
                                    <td width="10%">
                                        <span class="text-center text-capitalize status"
                                            :class="'status_' + props.item.status">
                                            {{ props.item.status }}
                                        </span>
                                    </td>
                                    <td width="10%" class="text-center">
                                        <button type="button" class="btn btn-sm btn-success" v-if="props.item.policies.show" @click="showLoan(props.item.user_id, props.item.id)" title="View Details">
                                            <i class="fas fa-eye" aria-hidden="true"></i>
                                        </button>
                                        <button type="button" class="btn btn-sm btn-primary" v-if="props.item.policies.store_repayment" @click="createRepayment(props.item.user_id, props.item.id)" title="Make Payment">
                                            <i class="fas fa-credit-card"></i>
                                        </button>
                                        <button type="button" class="btn btn-sm btn-warning text-white" v-if="props.item.policies.update" @click="editLoan(props.item.id)" title="Update Details">
                                            <i class="fas fa-edit" aria-hidden="true"></i>
                                        </button>
                                        <button type="button" class="btn btn-sm btn-danger" v-if="props.item.policies.delete" @click="destroyLoan(props.item.id)" title="Delete">
                                            <i class="fas fa-trash-alt" aria-hidden="true"></i>
                                        </button>
                                    </td>
                                </template>
                            </vue-data-table>
                            <div class="row justify-content-center">
                                <div class="col-12 float-right">
                                    <button class="btn btn-warning btn-min-width mt-2 float-right no-print" @click="printLoans()" v-if="true"><i class="fas fa-print"></i> Print</button>
                                </div>
                            </div>
                        </div>
                        <!-- /.card-body -->
                    </div>
                    <!-- /.card -->
                </div>
            </div>
            <!-- /.row (main content) -->

            <div class="card card-info p-3" id="printMe" v-if="print">
                <div class="card-body">
                    <div class="callout" v-if="loans.headers">
                        <h5>
                            <span>
                                All <span v-if="this.isExpired">{{ this.isExpired == 'true' ? 'Expired ' : ' '}}</span>
                                <span class="text-capitalize" v-for="(item, index) in this.form.filter.status">{{ index > 0 ? ', ' : '' }}{{ item }}</span>
                                Loans
                            </span>
                            <span v-if="loans.headers.from">From {{ loans.headers.from | toStandardDateTime }} </span>
                            <span v-if="loans.headers.until">Until {{ loans.headers.until | toStandardDateTime }}</span>
                        </h5>
                        <div class="row justify-content-between">
                            <span>
                                <span class="badge badge-primary">
                                    Agent : {{ loans.headers.agent ? loans.headers.agent.name : 'All Agents' }}
                                </span>
                                <span class="badge badge-success" v-if="loans.headers.referral">
                                    Referred By : {{ loans.headers.referral.name }}
                                </span>
                            </span>
                               <small class="text-muted font-italic" v-if="loans.headers.today">Date: {{ loans.headers.today | toStandardDateTime }}</small>
                        </div>
                    </div>
                    <vue-data-table
                        class="text-left"
                        :columns="columns.print"
                        :items.sync="loans.data"
                        :paginate="true"
                        :pagination="loans.pagination"
                        pagination-method="get"
                        :pagination-data="form.filter"
                        :loading="loading"
                    >
                        <template slot="items" slot-scope="props">
                            <td width="3%">
                                <span v-if="props.item.id" class="badge badge-primary">
                                    #{{ props.item.id }}
                                </span>
                            </td>
                            <td width="20%">
                                <a v-if="props.item.user" style="pointer: cursor">{{ props.item.user.full_name }}</a>
                            </td>
                            <td width="10%">{{ props.item.product_name }}</td>
                            <td width="10%" class="text-right">{{ props.item.amount.display ? props.item.amount.display : props.item.amount.unformatted }}</td>
                            <td width="12%" :class="!props.item.applied_at ? 'text-center' : ''">
                                <span v-if="props.item.applied_at">{{ props.item.applied_at | toStandardDateTime }}</span>
                                   <span v-else class="text-muted">--</span>
                               </td>
                            <td width="10%">
                                <span class="text-center text-capitalize status"
                                    :class="'status_' + props.item.status">
                                    {{ props.item.status }}
                                </span>
                            </td>
                            <td width="25%" :class="!props.item.next_tenure ? 'text-center' : ''">
                                <h6 class="text-left text-muted p-0" v-if="props.item.next_tenure">
                                    <b>{{ props.item.next_tenure ? "Period #" + props.item.next_tenure.period : "" }}</b>
                                    <span class="badge badge-danger small mx-1" v-if="props.item.has_expired_tenure">
                                        <i class="fas fa-fw fa-exclamation-circle text-white"></i>
                                        Expired
                                    </span>
                                </h6>
                                <span :class="!props.item.next_tenure ? 'text-muted' : ''">
                                   {{ props.item.next_tenure ?
                                          props.item.next_tenure.currency.symbol +
                                          props.item.next_tenure.capital +
                                          " + " +
                                          props.item.next_tenure.currency.symbol +
                                          props.item.next_tenure.interest +
                                          " = " +
                                          props.item.next_tenure.currency.symbol +
                                          props.item.next_tenure.total
                                          :
                                       "--" }}
                                </span>
                            </td>
                        </template>
                    </vue-data-table>
                    <div class="text-center text-muted font-italic d-none d-print-block">-- End of Page --</div>
                    <div class="row justify-content-center">
                        <div class="col-12 float-right">
                            <button class="btn btn-warning btn-min-width mt-2 float-right no-print" @click="printLoans()" v-if="true"><i class="fas fa-print"></i> Print</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <!-- /.container-fluid -->

        <vue-snotify></vue-snotify>

    </section>
    <!-- /.content -->

    </template>

    <script>

        import VueDataTable from "../../vue-data-table";
        var qs = require('qs');

        export default{

            props: {

                indexLoansApiRoute: {
                    type: String,
                },
                createLoansRoute: {
                    type: String,
                },
                showUsersLoansRoute: {
                    type: String,
                },
                editLoansRoute: {
                    type: String,
                },
                showUsersRoute: {
                    type: String,
                },
                createUserLoanRepaymentRoute: {
                    type: String,
                },
                selectOptions: {
                    type: String,
                },
                id: {
                    type: [String, Number],
                    default: '',
                },
                realName: {
                    type: String,
                    default: '',
                },
                productName: {
                    type: String,
                    default: '',
                },
                status: {
                    type: String,
                    default: '',
                },
                createdFrom: {
                    type: String,
                    default: moment().startOf('month').format('YYYY-MM-DD'),
                },
                createdUntil: {
                    type: String,
                    default: moment().format('YYYY-MM-DD'),
                },
                isExpired: {
                    type: String,
                },
                agentId: {
                    type: [String, Number],
                    default: '',
                },
                referralId: {
                    type: [String, Number],
                    default: '',
                },
                print: {
                    type: Boolean,
                    default: false,
                },
                userIsAdmin: {
                    type: Boolean,
                    default: false,
                },
            },

            computed:{

            },

            components:{
                VueDataTable
            },

            data(){
                return {

                    columns: {
                        index: [
                            {
                                name: "#",
                                field: "id",
                            },
                            {
                                name: "Username",
                                field: "user.name",
                                sortable: 'user.name',
                            },
                            {
                                name: "Full Name",
                                field: "real_name",
                                sortable: 'real_name',
                            },
                            {
                                name: "Product",
                                field: "product_name",
                                sortable: 'product_name',
                            },
                            {
                                name: "Amount",
                                field: "amount.display",
                                sortable: 'amount.display',
                                align: 'right',
                            },
                            //{
                            //    name: "Next Repayment Date",
                            //   field: "next_repayment_expired_at",
                            //    sortable: 'next_repayment_expired_at',
                            //    type: 'date'
                            //},
                            //{
                            //    name: "Referral Bonus",
                            //    field: "has_pending_referral_transaction.status",
                            //    sortable: 'has_pending_referral_transaction.status',
                            //},
                            {
                                name: "Applied At",
                                field: "applied_at",
                                sortable: 'applied_at',
                            },
                            {
                                name: "Status",
                                field: "status",
                                sortable: 'status',
                            },
                            {
                                name: "Action"
                            }
                        ],
                        print: [
                            {
                                name: "#",
                                field: "id",
                            },
                            {
                                name: "Full Name",
                                field: "real_name",
                            },
                            {
                                name: "Product",
                                field: "product_name",
                            },
                            {
                                name: "Amount",
                                field: "amount.unformatted",
                                align: 'right',
                            },
                            {
                                name: "Application Date",
                                field: "applied_at",
                                type: 'date'
                            },
                            {
                                name: "Status",
                                field: "status",
                            },
                            {
                                name: "Next Tenure Details"
                            },
                        ]

                    },
                    loans: {
                        data: [],
                        pagination: {},
                        headers: [],
                    },
                    processing: false,
                    loading: false,
                    form: {
                        filter: {
                            id: '',
                            real_name: '',
                            product_name: [],
                            status: [],
                            created_from: '',
                            created_until: '',
                            is_expired: '',
                            agent_id: '',
                            referral_id: '',
                        },
                    },
                    policies: {},
                    select_options: [],
                    total: 0,
                }
            },

            mounted() {
                if(!this.print){
                    this.getSelectOptions();
                }
                this.getFilters();
                this.getLoans();
            },

            methods: {

                getSelectOptions(){
                    this.select_options = JSON.parse(this.selectOptions);
                },

                showUser(user_id){
                    window.open(this.showUsersRoute.replace('user_id', user_id), '_blank');
                },

                getFilters(){
                    if(this.print){
                        this.form.filter.id = this.id;
                        this.form.filter.real_name = this.realName;
                        this.form.filter.product_name = JSON.parse(this.productName);
                        this.form.filter.status = JSON.parse(this.status);
                        this.form.filter.created_from = this.createdFrom;
                        this.form.filter.created_until = this.createdUntil;
                        this.form.filter.is_expired = this.isExpired;
                        this.form.filter.agent_id = this.agentId;
                           this.form.filter.referral_id = this.referralId;
                    }
                    else{
                        this.form.filter.id = '';
                        this.form.filter.real_name = '';
                        this.form.filter.product_name = '';
                        this.form.filter.status = [];
                        this.form.filter.has_pending_referral_transaction = [];
                        this.form.filter.created_from = '';
                        this.form.filter.created_until = moment().format('YYYY-MM-DD');
                        this.form.filter.is_expired = '';
                        this.form.filter.agent_id = '';
                        this.form.filter.referral_id = '';
                    }
                },

                getLoans (){

                    this.toggleLoading();
                    axios.get(this.indexLoansApiRoute, {
                        'params': this.form.filter,
                        'paramsSerializer': function(params) {
                           return qs.stringify(params, {arrayFormat: 'bracket'})
                        },
                    })
                    .then(response => {
                        //this.loading.filters = false;
                        this.loans.data = response.data.data;
                        this.loans.pagination.links = response.data.links;
                        this.loans.pagination.meta = response.data.meta;
                        this.total = response.data.meta.total;
                        //this.select_options = response.data.select_options;
                        this.policies = response.data.policies;
                        this.loans.headers = response.data.headers;
                    })
                    .catch(error => {
                        this.$snotify.error('Something went wrong when loading loans record!');
                    })
                    .finally(() => {
                        this.toggleLoading();
                    });

                },

                resetFilters: function(){
                    this.form.filter.id = '';
                    this.form.filter.real_name = '';
                    this.form.filter.product_name = '';
                    this.form.filter.status = '';
                    this.form.filter.has_pending_referral_transaction = [];
                    this.form.filter.created_from = '';
                    this.form.filter.created_until = moment().format('YYYY-MM-DD');
                    this.form.filter.is_expired = '';
                    this.form.filter.agent_id = '';
                    this.form.filter.referral_id = '';
                    this.getLoans();
                },

                createLoan () {
                    window.location.href = this.createLoansRoute;
                },

                showLoan(user_id, loan_id) {
                    window.open(this.showUsersLoansRoute.replace('user_id', user_id).replace('loan_id', loan_id), '_blank');
                },

                editLoan (loan_id) {
                    window.location.href = this.editLoansRoute.replace('loan_id', loan_id);
                },

                createRepayment(user_id, loan_id){
                    window.open(this.createUserLoanRepaymentRoute.replace('user_id', user_id).replace('loan_id', loan_id), '_self');
                },

                toggleLoading(){
                    this.loading = !this.loading;
                },

                statusSize(statuses){
                    switch (statuses.length){
                    case 3:
                        return "col-md-6 col-lg-6 col-xl-4";
                        break;
                    case 4:
                        return "col-md-7 col-lg-7 col-xl-5";
                        break;
                    default:
                        return "col-md-5 col-lg-5 col-xl-3";
                        break;
                    }

                },

                deselectRadio(attribute){
                      switch(attribute){
                          case 'expired':
                              this.form.filter.is_expired = '';
                              var gender = ['yes', 'no'];
                                gender.forEach(deselectAllRadioFunction);
                                break;
                      }


                    function deselectAllRadioFunction(item, index){
                        if(document.getElementById(item + '_expired').checked == true){
                              document.getElementById(item + '_expired').checked = false;
                          }
                    }

                  },

                printLoans(){
                    if(this.print){
                        window.print();
                    }
                    else{
                        var statuses = '';

                        for (var i = 0; i < this.form.filter.status.length; i++) {
                            statuses = statuses + '&status[' + i + ']=' + this.form.filter.status[i];
                        }

                        for (var i = 0; i < this.form.filter.product_name.length; i++) {
                            statuses = statuses + '&product_name[' + i + ']=' + this.form.filter.product_name[i];
                        }

                        window.open('/admin/loans?' +
                                'id=' + (this.form.filter.id ? this.form.filter.id : '') +
                                '&real_name=' + (this.form.filter.real_name ? this.form.filter.real_name : '') +
                                '&product_name=' + (this.form.filter.product_name ? this.form.filter.product_name : '') +
                                statuses +
                                '&created_from=' + (this.form.filter.created_from ? this.form.filter.created_from : '') +
                                '&created_until=' + (this.form.filter.created_until ? this.form.filter.created_until : '') +
                                '&is_expired=' + (this.form.filter.is_expired ? this.form.filter.is_expired : '') +
                                '&agent_id=' + (this.form.filter.agent_id ? this.form.filter.agent_id : '') +
                                '&referral_id=' + (this.form.filter.referral_id ? this.form.filter.referral_id : '') +
                                '&print=true', '_blank');
                    }
                },

            },

        }
    </script>
