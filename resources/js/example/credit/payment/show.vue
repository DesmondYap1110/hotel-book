<template>
    <!-- Main content -->
    <section class="content">
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="row justify-content-between">
                                <div class="col-lg-6 col-xl-4 text-capitalize">
                                    <div class="row">
                                        <div class="col-sm-6 col-12">
                                            <div class="info-box bg-primary">
                                                <div class="info-box-content text-center">
                                                    <span class="info-box-text text-warning badge border border-warning d-inline">Repaid Amount</span>
                                                    <span v-if="repayment.amount" class="info-box-number text-center mb-0 mt-1">
                                                        <h5 class="m-0 font-weight-bold">{{ repayment.amount.unformatted | toCurrency }}</h5>
                                                    </span>
                                                    <span v-else class="text-muted">--Not Stated--</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-12">
                                            <div class="info-box" :class="'status-box-'+ repayment.status">
                                                <div class="info-box-content m-auto">
                                                    <h5 class="info-box-number text-center mb-0" v-if="repayment.status">
                                                        <span class="text-center info-box-status" :class="'info-box-status-'+ repayment.status"></span>
                                                    {{ repayment.status }}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="card card-light">
                                                <div class="card-body card-comments">
                                                    <div class="row">
                                                        <div class="col-12">
                                                            <label class="float-left">Salary</label>
                                                            <div class="float-right">
                                                                <span v-if="repayment.salary" class="badge badge-primary mr-1">{{ repayment.salary.display }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="col-12">
                                                            <label class="float-left">Paid Tenures<span v-if="repayment.paid_period_number">({{ repayment.paid_period_number }})</span></label>
                                                            <div class="float-right">
                                                                <span v-for="tenure in repayment.tenures" class="badge badge-info mr-1">#{{ tenure.id }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="col-12" v-if="cash_advances.length">
                                                            <label class="float-left">Paid Cash Advance<span>({{ cash_advances.length }})</span></label>
                                                            <div class="float-right">
                                                                <span v-for="cash_advance in cash_advances" class="badge badge-info mr-1">#{{ cash_advance.id }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="col-12">
                                                            <label class="float-left">Payment Date</label>
                                                            <div class="float-right">
                                                                <span v-if="repayment.payment_at" class="badge badge-success ml-1">{{ repayment.payment_at | toStandardDateTime }}</span>
                                                                <span v-else class="text-muted">--Not Stated--</span>
                                                            </div>
                                                        </div>
                                                        <div class="col-12">
                                                            <label class="float-left">Settlement Date</label>
                                                            <div class="float-right">
                                                                <span v-if="repayment.settlement_admin" class="badge badge-primary" title="Settlement Admin">{{ repayment.settlement_admin.name }}</span>
                                                                <span v-if="repayment.payment_at" class="badge badge-success ml-1">{{ repayment.settlement_at | toStandardDateTime }}</span>
                                                                <span v-else class="text-muted">--Not Stated--</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-xl-4 text-capitalize">
                                    <div class="card">
                                        <div class="card-body p-0">
                                            <table class="table table-hover">
                                                <thead class="bg-light">
                                                    <tr>
                                                        <th>Item</th>
                                                        <th class="text-right">Amount</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Capital</td>
                                                        <td class="text-right">
                                                            <span v-if="repayment.paid_capital">
                                                                <span v-if="repayment.paid_capital.display">{{ repayment.paid_capital.display }}</span>
                                                                <span v-else>{{ repayment.paid_capital.unformatted }}</span>
                                                            </span>
                                                            <span v-else class="text-muted">--Not Stated--</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Interest</td>
                                                        <td class="text-right">
                                                            <span v-if="repayment.paid_capital">
                                                                <span v-if="repayment.paid_interest.display">{{ repayment.paid_interest.display }}</span>
                                                                <span v-else>{{ repayment.paid_interest.unformatted }}</span>
                                                            </span>
                                                            <span v-else class="text-muted">--Not Stated--</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Extra Payment</td>
                                                        <td class="text-right">
                                                            <span v-if="repayment.extra_payment">
                                                                <span v-if="repayment.extra_payment.display">{{ repayment.extra_payment.display }}</span>
                                                                <span v-else>{{ repayment.extra_payment.unformatted }}</span>
                                                            </span>
                                                            <span v-else class="text-muted">--Not Stated--</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Extra Charges</td>
                                                        <td class="text-right">
                                                            <span v-if="repayment.discount">
                                                                <span v-if="repayment.extra_charge.display">{{ repayment.extra_charge.display }}</span>
                                                                <span v-else>{{ repayment.extra_charge.unformatted }}</span>
                                                            </span>
                                                            <span v-else class="text-muted">--Not Stated--</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Discount</td>
                                                        <td class="text-right">
                                                            <span v-if="repayment.discount">
                                                                <span v-if="repayment.discount.display" :class="{'text-danger' : repayment.discount.unformatted > 0}">- {{ repayment.discount.display }}</span>
                                                                <span v-else>({{ repayment.discount.unformatted }})</span>
                                                            </span>
                                                            <span v-else class="text-muted">--Not Stated--</span>
                                                        </td>
                                                    </tr>

                                                    <tr data-toggle="modal" data-target="#modal-show-cash-advances" v-if="repayment.cash_advance">
                                                        <td>Cash Advances</td>
                                                        <td class="text-right">
                                                            <a class="text-primary" title="See all Cash Advances' details." style="cursor: pointer">
                                                                <sup>
                                                                    <i class="fas fa-fw fa-info-circle"></i>
                                                                </sup>
                                                                MYR {{ repayment.paid_cash_advance.toFixed(2) }}
                                                            </a>
                                                        </td>
                                                    </tr>

                                                    <!-- tr v-if='$_notEmpty(repayment.cash_advance)'>
                                                        <td>
                                                            Cash Advance
                                                            <span v-if="repayment.cash_advance_payment_type" class="ml-1">({{ repayment.cash_advance_payment_type }})</span>
                                                        </td>
                                                        <td class="text-right">
                                                            <span v-if="repayment.cash_advance">
                                                                <span v-if="repayment.cash_advance.display">{{ repayment.cash_advance.display }}</span>
                                                                <span v-else>{{ repayment.cash_advance.unformatted }}</span>
                                                            </span>
                                                            <span v-else class="text-muted">--Not Stated--</span>
                                                        </td>
                                                    </tr>

                                                    <tr v-if="$_isEmpty(repayment.cash_advance) && $_notEmpty(repayment.cash_advance_capital)">
                                                        <td>
                                                            Cash Advance Capital
                                                            <span v-if="repayment.cash_advance_payment_type == 'full'" class="m1-1">(Full)</span>
                                                        </td>

                                                        <td class="text-right">
                                                            <span v-if="repayment.cash_advance_capital">
                                                                <span v-if="repayment.cash_advance_capital.display">{{ repayment.cash_advance_capital.display }}</span>
                                                                <span v-else class="text-muted">{{ repayment.cash_advance_capital.unformatted }}</span>
                                                            </span>
                                                            <span v-else class="text-muted">--Not Stated--</span>
                                                        </td>
                                                    </tr>

                                                    <tr v-if="$_isEmpty(repayment.cash_advance) && $_notEmpty(repayment.cash_advance_interest)">
                                                        <td>
                                                            Cash Advance Interest
                                                            <span v-if="repayment.cash_advance_payment_type == 'interest'" class="m1-1">(Interest)</span>
                                                        </td>

                                                        <td class="text-right">
                                                            <span v-if="repayment.cash_advance_interest">
                                                                <span v-if="repayment.cash_advance_interest.display">{{ repayment.cash_advance_interest.display }}</span>
                                                                <span v-else class="text-muted">{{ repayment.cash_advance_interest.unformatted }}</span>
                                                            </span>
                                                            <span v-else class="text-muted">--Not Stated--</span>
                                                        </td>
                                                    </tr-->
                                                </tbody>

                                                <tbody>
                                                    <tr class="font-weight-bold">
                                                        <td>
                                                            Total
                                                        </td>
                                                        <td class="text-right">
                                                            <span v-if="repayment.amount">
                                                                {{ repayment.amount.unformatted | toCurrency }}
                                                            </span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-sm-12 col-md-12 col-lg-12 col-xl-4">
                                    <div class="row">
                                        <div class="col-12">
                                            <remark-component
                                                :adminId="this.adminId"
                                                :indexRemarkApiRoute="indexRepaymentRemarkApiRoute"
                                                :storeRemarkApiRoute="storeRepaymentRemarkApiRoute"
                                                :destroyRemarkApiRoute="destroyRepaymentRemarkApiRoute"
                                                ref="remark">
                                            </remark-component>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer bg-white border-top" v-if="repayment.policies">
                            <div class="row">
                                <div class="col-12">

                                    <button
                                        :disabled="this.processing"
                                        @click="showLoan()"
                                        type="button"
                                        class="btn btn-default float-left px-4 m-1">
                                        <i class="fas fa-chevron-left"></i>
                                        Back to Loan <strong class="text-primary">#{{ loanId }}</strong>
                                    </button>

                                    <button v-if="repayment.policies.approve"
                                        :disabled="this.processing"
                                        @click="patchRepayment('approved')"
                                        type="button"
                                        class="btn btn-success float-right px-4 btn-min-width m-1">
                                        <i class="fas fa-fw fa-check"></i>
                                        Approve
                                    </button>
                                    <button v-if="repayment.policies.reject"
                                        :disabled="this.processing"
                                        @click="patchRepayment('rejected')"
                                        type="button"
                                        class="btn btn-danger float-right btn-min-width px-4 m-1">
                                        <i class="fas fa-fw fa-times"></i>
                                        Reject
                                    </button>
                                    <button
                                        v-if="repayment.policies.update"
                                        type="button"
                                        :disabled="this.processing"
                                        @click="editRepayment()"
                                        class="btn btn-default float-right btn-min-width px-4 m-1">
                                        <i class="fas fa-plus-circle"></i> Edit
                                    </button>
                                    <button type="button"
                                        class="btn float-right btn-warning btn-min-width m-1"
                                        data-toggle="modal"
                                        data-target="#modal-upload">
                                            <i class="fas fa-fw fa-file-upload"></i> Upload Document
                                    </button>

                                    <button v-if="repayment.policies.revert"
                                        type="button"
                                        :disabled="this.processing"
                                        @click="patchRepayment('revert')"
                                        class="btn float-right btn-default btn-min-width m-1">
                                            <i class="fas fa-fw" :class="this.processing ? 'fa-spin fa-circle-notch' : 'fa-redo fa-flip-horizontal text-danger'"></i> Revert Payment
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Upload Document -->
            <div class="modal fade" id="modal-upload">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">
                                <i class="fas fa-mail-bulk"></i>
                                Upload Document
                            </h4>
                            <button type="button" class="close float-right" data-dismiss="modal" aria-label="Close" @click="closeSnotify">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                        <div class="modal-body">
                            <upload-document
                                   :post-document-api-route="storeRepaymentDocumentApiRoute"
                                   v-on:uploaded="uploadedLoanDocuments"
                            ></upload-document>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default float-right" data-dismiss="modal" @click="closeSnotify">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /.modal(upload document) -->

            <div class="modal fade" id="modal-show-cash-advances">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header border-bottom-0">
                            <h4 class="modal-title">
                                <i class="fas fa-money-bill-wave"></i>
                                Cash Advances
                            </h4>
                            <button type="button" class="close float-right" data-dismiss="modal" aria-label="Close" @click="closeSnotify">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                        <div class="modal-body">
                            <table class="table table-hover bg-white">
                                <thead class="bg-gray-dark">
                                    <tr>
                                        <th class="text-center">#</th>
                                        <th></th>
                                        <th class="text-right">Capital</th>
                                        <th class="text-right">Interest</th>
                                        <th class="text-right">Total</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr v-for="item in cash_advances.data">
                                        <td class="text-center">
                                            <abbr class="badge badge-lg"
                                                :class="item.payment_type == 'full' ? ' bg-primary' : 'bg-info'"
                                                :title="item.payment_type + ' payment'">
                                                    {{ item.id }}
                                            </abbr>
                                        </td>
                                        <td>
                                            <p class="font-weight-bold text-muted mb-1 border-bottom">Amount</p>
                                            <p class="font-weight-bold text-olive m-0">Paid</p>
                                        </td>
                                        <td class="text-right">
                                            <p class="mb-1 border-bottom">{{ item.amount.display }}</p>
                                            <p class="text-olive m-0">{{ item.paid_capital ? item.paid_capital.display : '--' }}</p>
                                        </td>
                                        <td class="text-right">
                                            <p class="mb-1 border-bottom">{{ item.interest_amount.display }}</p>
                                            <p class="text-olive m-0">{{ item.paid_interest ? item.paid_interest.display : '--' }}</p>
                                        </td>
                                        <td class="text-right">
                                            <p class="mb-1 border-bottom">MYR {{ (item.amount.unformatted + item.interest_amount.unformatted).toFixed(2) }}</p>
                                            <p class="text-olive m-0">
                                                MYR {{ item.payment_type == 'interest' ? item.paid_interest.unformatted.toFixed(2) : (item.paid_capital.unformatted + item.paid_interest.unformatted).toFixed(2) }}
                                            </p>
                                        </td>
                                    </tr>
                                    <tr class="bg-light">
                                        <td class="text-left" colspan="3"></td>
                                        <td class="text-left">
                                            <!--h5 class="mb-1">
                                                <span class="font-weight-bold">Total Amount</span>
                                            </h5-->
                                            <h5 class="m-0">
                                                <span class="font-weight-bold">Total Paid</span>
                                            </h5>
                                        </td>
                                        <td class="text-right">
                                            <!-- h5 class="mb-1">
                                                <span>MYR {{ repayment.cash_advance ? repayment.cash_advance.toFixed(2) : '' }}</span>
                                            </h5-->
                                            <h5 class="m-0">
                                                <span class="text-olive">MYR {{ repayment.paid_cash_advance ? repayment.paid_cash_advance.toFixed(2) : '' }}</span>
                                            </h5>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default float-right" data-dismiss="modal" aria-label="Close" @click="closeSnotify">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <div class="row justify-content-between">
                                <div class="col-12">
                                    <ul class="nav nav-pills">
                                        <li class="nav-item"><a class="nav-link active" href="#documentTab" data-toggle="tab"><i class="fas fa-mail-bulk mr-1"></i>Documents ({{ total.documents }})</a></li>
                                        <li class="nav-item" v-if="policies.view_chronicle"><a class="nav-link" href="#RepaymentChronicleTab" data-toggle="tab"><i class="fas fa-fw fa-history"></i>{{ total.chronicles > 1 ? 'Histories' : 'History' }} ({{ total.chronicles }})</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="tab-content">
                                <div class="tab-pane active" id="documentTab">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <vue-data-table
                                                :numbering="true"
                                                :columns="columns.documents"
                                                :items.sync="documents.data"
                                                :paginate="true"
                                                :pagination="documents.pagination"
                                            >
                                                <template slot="items" slot-scope="props">
                                                    <td class="text-capitalize">{{ props.item.upload_name }}</td>
                                                    <td width="20%" class="text-capitalize">{{ props.item.mime_type }}</td>
                                                    <td width="7%">{{ props.item.size | prettyBytes }}</td>
                                                    <td width="13%">{{ props.item.created_at | toStandardDateTime }}</td>
                                                    <td width="10%" class="text-center">
                                                        <button @click="showDocument(props.item.url)" target="_blank"
                                                            v-if="props.item.policies.show" title="View Document"
                                                            class="btn btn-sm btn-success text-white d-inline bg-success">
                                                            <i class="fas fa-eye" aria-hidden="true"></i>
                                                        </button>
                                                    </td>
                                                </template>
                                            </vue-data-table>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane" id="RepaymentChronicleTab">
                                    <index-chronicle
                                        :index-chronicle-route="indexRepaymentChronicleApiRoute"
                                        ref="chronicles"
                                    ></index-chronicle>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    <vue-snotify></vue-snotify>

</section>

</template>

<script>
import VueDataTable from "../../../../vue-data-table";
import RemarkComponent from "../../../../remark-component";

export default{

    components: {
        VueDataTable,
        RemarkComponent
    },

    props: [
        'admin-id',
        'user-id',
        'loan-id',
        'repayment-id',
        'show-loan-route',
        'show-repayments-route',
        'show-repayments-api-route',
           'patch-repayments-api-route',
           'edit-user-loan-repayment-route',
        'store-repayment-document-api-route',
        'index-repayment-document-api-route',
        'index-repayment-cash-advances-api-route',
        'index-repayment-remark-api-route',
        'store-repayment-remark-api-route',
        'destroy-repayment-remark-api-route',
        'index-repayment-chronicle-api-route'
       ],

    data(){
        return {
            edit_mode:false,
            processing: false,
            loading: false,
            cash_advance: {},
            cash_advances: {
                data: [],
                pagination: {},
            },
            documents: {
                data: [],
                pagination: {},
            },
            repayment: {},

            repayment_total_amount_display: 0,

            errors: {},
            policies: {},
            select_options: {
                payable_amount: []
            },
            selected_option:null,

            form: {
                repayment: {},
            },

            columns:{
                documents:[
                    {
                        name: "Documents",
                        field: "upload_name",
                        sortable: 'upload_name',
                    },
                    {
                        name: "MIME",
                        field: "mime_type",
                        sortable: 'mime_type',
                    },
                    {
                        name: "File Size",
                        field: "size",
                        sortable: 'size',
                    },
                    {
                        name: "Uploaded Date",
                        field: "created_at",
                        sortable: 'created_at',
                    },
                    {
                        name: "Action"
                    }
                ],
                cash_advances:[
                    {
                        name: "#",
                        field: "id",
                        align:"right"
                    },
                    {
                        name: "Capital",
                        align:"right"
                    },
                    {
                        name: "Interest",
                        align:"right"
                    },
                ]
            },
            total:{
                documents: 0,
                chronicles: 0,
            }
        }
    },

    mounted() {
        this.getRepayment();
        //this.getRepaymentCashAdvances();
        this.getDocuments();


        /* setInterval(() => this.getRepayment(), this.request_time_interval);
        setInterval(() => this.getCashAdvanceIndex(), this.request_time_interval);
         setInterval(() => this.getTransactions(), this.request_time_interval);*/
    },

    methods: {

        showLoan(){
            window.open(this.showLoanRoute, '_self');
        },

        getRepayment(){
            this.loading = true;
            axios.get(this.showRepaymentsApiRoute)
                .then(response => {
                    this.repayment = response.data.data;
                    this.policies.view_chronicle = this.repayment.policies.view_chronicle;
                    if(this.policies.view_chronicle){
                        this.$refs.chronicles.getChronicles(false);
                        this.getChronicleTotal();
                    }
                    this.getRepaymentCashAdvances();
                })
                .catch(error => {
                    this.$snotify.error('Failed to load repayment');
                    console.log(error);
                })
                .finally(() => {
                    this.loading = false;
                });
        },

        getChronicleTotal(){
            axios.get(this.indexRepaymentChronicleApiRoute)
                .then(response => {
                    this.total.chronicles = response.data.meta.total;
                });
        },

        getRepaymentCashAdvances(){
            axios.get('/api/admin/repayments/'+ this.repaymentId +'/cash-advances')
                .then(response => {
                    this.cash_advances.data = response.data.data;
                })
                .then(response => {
                    this.repayment.cash_advance_paid_capital = _.sumBy(this.cash_advances.data, function(o) {
                        return o.paid_capital ? parseFloat(Math.abs(o.paid_capital.unformatted)) : 0;
                    });

                    this.repayment.cash_advance_paid_interest = _.sumBy(this.cash_advances.data, function(o) {
                        return o.paid_interest ? parseFloat(Math.abs(o.paid_interest.unformatted)) : 0;
                    });

                    this.repayment.cash_advance_capital = _.sumBy(this.cash_advances.data, function(o) {
                        return parseFloat(Math.abs(o.amount.unformatted));
                    });

                    this.repayment.cash_advance_interest = _.sumBy(this.cash_advances.data, function(o) {
                        return parseFloat(Math.abs(o.interest_amount.unformatted));
                    });

                    this.repayment.paid_cash_advance = _.sum([
                        parseFloat(Math.abs(this.repayment.cash_advance_paid_capital)),
                        parseFloat(Math.abs(this.repayment.cash_advance_paid_interest)),
                    ]);

                    this.repayment.cash_advance = _.sum([
                        parseFloat(Math.abs(this.repayment.cash_advance_capital)),
                        parseFloat(Math.abs(this.repayment.cash_advance_interest)),
                    ]);
                })
                .catch(error => {
                    this.$snotify.error('Failed to load repayment cash advances details');
                    console.log(error);
                });
        },

        editRepayment(){
            window.open('/admin/users/'+ this.userId +'/loans/'+ this.loanId +'/repayments/'+ this.repaymentId +'/edit', '_self');
        },

        patchOrRedirectRepayment(){
            return this.repayment.first_payable_tenure_id == this.repayment.loan_first_payable_tenure_id;
        },

        redirectToPayableRepayment(repayment_id){
            window.open(this.showRepaymentsRoute.replace('repayment_id', repayment_id), '_blank');
        },

        patchOrPrompt(status){
            if(status == 'revert')
                return true;
            else
                if(this.repayment.loan_first_payable_tenure_repayment_id == null)
                    return true;
                else
                    if(this.patchOrRedirectRepayment())
                        return true;
                    else
                        return false;
        },

        patchRepayment(status){

            if(this.patchOrPrompt(status)){
                this.processing = true;
                var title = 'Update Repayment';
                if(status){
                    title = status == 'approved' ? 'Approve Repayment' :
                        status == 'canceled' ? 'Cancel Repayment' :
                        status == 'rejected' ? 'Reject Repayment' :
                        status == 'revert' ? 'Revert Repayment' : 'Update Repayment'
                };
                 this.$snotify.confirm(title, 'Do you confirm?', {
                     closeOnClick: false,
                     buttons: [
                         {text: 'Yes', action: (toast) => this.patchRepaymentRequest(toast, status), bold: false},
                         {text: 'No', action: (toast) => {this.closeSnotify();}},
                     ],
                 });
            }
            else{
                var tenure = this.repayment.loan_first_payable_tenure_id;
                var title = "Please go to Expected Tenure's Repayment."
                this.$snotify.warning(title, 'Incorrect Tenure', {
                    closeOnClick: false,
                    showProgressBar: false,
                    buttons: [
                        {text: 'Go Now', action: (toast) => this.redirectToPayableRepayment(this.repayment.loan_first_payable_tenure_repayment_id), bold: false},
                        {text: 'Next Time', action: (toast) => {this.closeSnotify();}},
                    ],
                });
            }

        },

        patchRepaymentRequest (toast, status){

            this.form.repayment = _.cloneDeep(this.repayment);
            //this.form.repayment.cash_advances = this.cash_advances.data;

            if(status){
                this.form.repayment.status = status;
            }
            this.processing = true;
              this.closeSnotify();
              this.errors = [];
              this.$_revertCurrencyResourceFormatting(this.form.repayment, ['total_capital', 'total_interest', 'discount', 'extra_charge', 'extra_payment', 'cash_advance']);
               axios.patch(this.patchRepaymentsApiRoute.replace('repayment_id', this.repaymentId), this.form.repayment)
                      .then(response => {
                          this.getRepayment();
                          this.$snotify.success('Repayment #'+ this.repaymentId + ' updated successfully!');
                   })
                  .catch(({response}) => {
                      this.processing = false;
                         this.$snotify.error('Failed to update repayment');
                         console.log(response);
                 });
        },

          getDocuments (){
            axios.get(this.indexRepaymentDocumentApiRoute)
                .then(response => {
                    this.documents.data = response.data.data;
                    this.documents.pagination.links = response.data.links;
                    this.documents.pagination.meta = response.data.meta;
                    this.total.documents = response.data.meta.total;
                    this.policies.store_documents = response.data.policies.store;
                })
                .catch(error => {
                    this.$snotify.error('Failed to load document list!');
                    //console.log(error);
                });
        },

        uploadedLoanDocuments (){
            $('#modal-upload').modal('hide');
            this.getDocuments();
            this.closeSnotify();
            this.$snotify.success('Documents successfully uploaded!');
        },

        showDocument(url){
            window.open(url, '_blank');
        },
        //
        confirmUpdate(){
            this.processing = true;

            let title = 'Update Loan Details';
            if(this.form.action.status){
                if(this.form.action.status == 'approved')
                    title = 'Approve Loan';
                else if(this.form.action.status == 'rejected')
                    title = 'Reject Loan';
                else if(this.form.action.status == 'released')
                    title = 'Release Loan';
            }

             this.$snotify.confirm('Do you confirm?', title, {
                 closeOnClick: false,
                 buttons: [
                     {text: 'Yes', action: (toast) => this.patchLoanRequest(toast, status), bold: false},
                     {text: 'No', action: (toast) => {this.closeSnotify();}},
                 ],
             });
        },
        //
        patchLoanRequest (toast, status){
            this.processing = true;
              this.closeSnotify();
              this.errors = [];
               axios.patch(this.updateUserLoanApiRoute, this.form.action)
                      .then(response => {
                       this.$snotify.success('Loan updated successfully!');
                     setTimeout(function () {
                         $('#modal-remark').modal('hide');
                         window.location.href = this.showUserLoanRoute;
                     }.bind(this), 2000);
                   })
                  .catch(({response}) => {
                      this.processing = false;
                         this.$snotify.error('The given data was invalid');
                         this.errors = response.data.errors;
                         //console.log(response);
                 });
        },

        closeSnotify() {
            this.processing = false;
            this.$snotify.remove();
        },

    },

}
</script>
