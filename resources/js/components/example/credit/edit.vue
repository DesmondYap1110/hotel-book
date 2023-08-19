<template>

	<div>
		<div class="content-header">
			<div class="container-fluid">
				<div class="row">
					<div class="col-sm-6">
						<h1 class="m-0">
							<i class="fas nav-icon fas fa-hand-holding-usd"></i> Repayment <small>Make Payment</small>
						</h1>
					</div>
					<div class="col-sm-6">
						<ol class="breadcrumb float-sm-right">
							<li class="breadcrumb-item"><a
								href="\admin\users"><i class="fas fa-users"></i>&nbsp;Users</a></li>
							<li class="breadcrumb-item"><a
								href="\admin\users\">{{ 'user_id' }}</a></li>
							<li class="breadcrumb-item"><a
								href="">&nbsp;Loans</a></li>
							<li class="breadcrumb-item"><a
								href="">{{ 'loan_id' }}</a></li>
							<li class="breadcrumb-item"><a
								href="">&nbsp;Repayments</a></li>
							<li class="breadcrumb-item"><a
								href="">{{ 'repayment_id' }}</a></li>
							<li class="breadcrumb-item active">Make Payment</li>
						</ol>
					</div>
				</div>
			</div>
		</div>
		<!-- Main content -->
		<section class="content">
			<div class="container-fluid">
				<div class="row justify-content-center">
					<div class="col-md-12">
						<div class="card">
							<div class="card-header">
								<div class="row">
									<div class="col-md-12">
										<h4>
											<i class="fas fa-file-invoice"></i>
											Loan #{{ repaymentId }} - Make Payment
										</h4>
									</div>
								</div>
							</div>
							<div class="card-body">
								PAYMENT DETAILS
							</div>
						</div>
					</div>
				</div>
			</div>

		<vue-snotify></vue-snotify>
		</section>

	</div>

</template>

<script>

    export default{

        props: [
        	'repayment-id',
       	],

        data(){
            return {
            	processing: false,
            	loading: false,
            	form: {
            		update : {
            			status : '',
            			payable_amount: '',
            			payment_at: moment().format("YYYY-MM-DD"),
            			payment_type: '',
            		},
            		cash_advance : {
            			amount : '',
	                    interest_percentage : '',
	                    interest_amount : '',
	                    applied_at : moment().format("YYYY-MM-DD"),
            		},
            		additional : {
            			late_payment_penalty : '',
                        discount : ''
            		}
            	},
            	errors: {},
                policies: {},
                select_options: {},
            }
        },

        mounted() {
        	this.getSelectOptions();
        },

        methods: {

        	getSelectOptions(){
    			this.select_options = JSON.parse(this.selectOptions);
    		},

        	getRepayment(){
	        	axios.get(this.showUserLoanRepaymentsApiRoute)
	                .then(response => {
	                	this.repayment = response.data.data;
	                    this.policies = response.data.policies;
	                    if(this.policies.settle){
	                    	this.select_options.payable_amount = response.data.data.payable_amount;
	                    	this.selected_option = this.select_options.payable_amount[0];
	                    	this.form.update.payment_type = this.select_options.payable_amount[0].payment_type;
	                    	this.form.update.payable_amount = this.select_options.payable_amount[0].amount;
	                    }
	                })
	                .catch(
						error => {
	                    	console.log(error);
						}
					);
	        },

	        getCashAdvanceIndex(){
	        	axios.get(this.indexCashAdvanceApiRoute)
        		.then(response => {
        			this.cash_advances.data = response.data.data;
                    this.cash_advances.pagination.links = response.data.links;
                    this.cash_advances.pagination.meta = response.data.meta;
                    this.total.cash_advances = response.data.meta.total;
                })
                .catch(error => {
               		this.$snotify.error('Failed to load cash advance records!');
               		console.log(error);
            	});
	        },

            createPayment(){
            	this.processing = true;
             	this.$snotify.confirm('Add Cash Advance', 'Do you confirm?', {
                     closeOnClick: false,
                     buttons: [
                         {text: 'Yes', action: (toast) => this.patchAdditionalDetailRequest(toast), bold: false},
                         {text: 'No', action: (toast) => {this.closeSnotify();}},
                     ],
 	        	});
            },

            postPaymentRequest(toast){
            	this.closeSnotify();
  				this.errors = [];
  				axios.patch(this.updateUserLoanRepaymentsApiRoute, this.form.additional)
			  	   	.then(response => {
			  	   		this.processing = false;
			  	   		this.getRepayment();
			  	   		$('#modal-update-additional').modal('hide');
			  	   		this.$snotify.success('Repayment successfully updated');
			  	    })
  					.catch(({response}) => {
  						this.processing = false;
  	   					this.$snotify.error(response.data.message);
  	   					this.errors = response.data.errors;
				});
  			},

            closeSnotify() {
            	this.processing = false;
            	this.$snotify.remove();
            },

        },

    }
</script>
