<template>

	<div class="form-horizontal">
		<div class="card card-light direct-chat direct-chat-warning" :class="{'collapsed-card': !remarks.data.length }">
			<div class="card-header">
				<h3 class="card-title">
					<i class="fas fa-comment-dots"></i>
					Remarks
					<span class="badge border border-warning text-warning" v-if="remarks.pagination.meta">{{ remarks.pagination.meta.total }}</span>
				</h3>
				<div class="card-tools">
					<button type="button" class="btn btn-tool"
						@click="showMaximiseModal()"
						title="Maximize">
						<i class="fas fa-expand"></i>
					</button>

	            	<button type="button" class="btn btn-tool"
	            		data-card-widget="collapse" title="Collapse">
	            		<i class="fas fa-minus"></i>
	            	</button>
	            </div>
			</div>
			<div class="card-body">
				<div class="direct-chat-messages" v-if="remarks.data.length">
					<div class="direct-chat-msg" v-for="remark in remarks.data" :class="isMyRemark(remark) ? 'right' : 'left'">
						<div class="direct-chat-infos clearfix">
							<span class="direct-chat-name" :class="isMyRemark(remark) ? 'float-right' : 'float-left'">
								{{ remark.user ? remark.user.name : 'Anonymous Admin' }}
							</span>
							<span class="direct-chat-timestamp time p-0" :class="isMyRemark(remark) ? 'float-left' : 'float-right'">
								{{ remark.created_at | moment("h:mm:ss a DD-MMM-YY") }}
							</span>
						</div>
						<img class="direct-chat-img" src="/images/user_default.jpg" alt="Message User Image">
						<div class="direct-chat-text">
							<!--
								<div class="col-md-1">
									<button class="close float-right" @click="deleteRemark(remark.id)" v-if="remark.policies.destroy">
										<i class="fas fa-times small"></i>
									</button>
								</div>
							-->
							<pre>{{ remark.remark }}</pre>
						</div>
					</div>
					<div class="text-center" v-if="show_more_remark_button">
						<span v-if="loading_remarks">
							<i class="fas fa-circle-notch fa-spin text-primary" aria-hidden="true"></i>
						</span>
						<div v-else class="">
							<span class="d-block">...</span>
							<button  type="button" class="btn btn-xs btn-tool text-primary" @click="getMoreRemarks()">
								Load More
							</button>
						</div>
					</div>
				</div>

				<div v-else class="p-3 m-3 d-flex flex-column align-content-center border justify-content-center border-dotted">
					<img alt="" src="/images/icons/icons8-empty-box.png" width="60" height="60" class="m-auto">
					<small class="text-muted font-italic m-auto">No Remark</small>
				</div>
			</div>
			<div class="card-footer" v-if="this.remarks.policies.store">
				<div class="input-group">
					<input type="text" name="message" v-model="form.admin_remark.remark" :disabled="processing" placeholder="Type Remark ..." class="form-control" :class="{'is-invalid': errors.admin_remark.remark}">
					<span class="input-group-append">
						<button type="submit" class="btn btn-primary" :disabled="processing" @click="storeRemark">Send</button>
					</span>
				</div>
				<span v-if="errors.admin_remark.remark" class="help-block small text-danger d-block">
					{{ errors.admin_remark.remark[0] }}
				</span>
			</div>
		</div>

		<!-- Show Remarks -->
		<div class="modal fade modal-remarks-maximized" id="modalRemarksMaximized" ref="modalRemarksMaximized">
			<div class="modal-dialog modal-lg ">
				<div class="modal-content direct-chat direct-chat-warning card">
					<div class="modal-header">
						<h3 class="card-title">
							<i class="fas fa-comment-dots"></i>
							Remarks
							<span class="badge border border-warning text-warning">{{ remarks.data.length }}</span>
						</h3>
						<button type="button" class="close float-right" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true"><i class="fas fa-fw fa-fw fa-times"></i></span>
						</button>
					</div>
					<div class="modal-body p-0">
						<div class="direct-chat-messages" v-if="remarks.data.length">
							<div class="direct-chat-msg" v-for="remark in remarks.data" :class="isMyRemark(remark) ? 'right' : 'left'">
								<div class="direct-chat-infos clearfix">
									<span class="direct-chat-name" :class="isMyRemark(remark) ? 'float-right' : 'float-left'">
										{{ remark.user ? remark.user.name : 'Anonymous Admin' }}
									</span>
									<span class="direct-chat-timestamp time p-0" :class="isMyRemark(remark) ? 'float-left' : 'float-right'">
										{{ remark.created_at | moment("h:mm:ss a DD-MMM-YY") }}
									</span>
								</div>
								<img class="direct-chat-img" src="/images/user_default.jpg" alt="Message User Image">
								<div class="direct-chat-text">
									<!--
									<div class="col-md-1">
										<button class="close float-right" @click="deleteRemark(remark.id)" v-if="remark.policies.destroy">
											<i class="fas fa-times small"></i>
										</button>
									</div>
									 -->
									<pre class="">{{ remark.remark }}</pre>
								</div>
							</div>
							<div class="text-center" v-if="show_more_remark_button">
								<span v-if="loading_remarks">
									<i class="fas fa-circle-notch fa-spin text-primary" aria-hidden="true"></i>
								</span>
								<div v-else class="">
									<span class="d-block">...</span>
									<button  type="button" class="btn btn-xs btn-tool text-primary" @click="getMoreRemarks()">
										Load More
									</button>
								</div>
							</div>
						</div>
						<div v-else class="p-3 m-3 d-flex flex-column align-content-center border justify-content-center border-dotted">
							<img alt="" src="/images/icons/icons8-empty-box.png" width="60" height="60" class="m-auto">
							<small class="text-muted font-italic m-auto">No Remark</small>
						</div>

						<div class="m-3" v-if="this.remarks.policies.store">
							<div class="input-group">
								<textarea type="text" name="message" rows="4" cols="100"
									v-model="form.admin_remark.remark" :disabled="processing" placeholder="Type Remark ..."
									class="form-control" :class="{'is-invalid': errors.admin_remark.remark}"></textarea>
								<span class="input-group-append">

								</span>
							</div>
							<span v-if="errors.admin_remark.remark" class="help-block small text-danger d-block">
								{{ errors.admin_remark.remark[0] }}
							</span>
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal" aria-label="Close">
							Close
						</button>
						<button v-if="this.remarks.policies.store" type="submit" class="btn btn-primary" :disabled="processing" @click="storeRemark()">
							Send
						</button>
					</div>
				</div>
			</div>
		</div>
		<!-- /.modal (show remarks) -->

	</div>
</template>

<script>

 export default{
        props: {
            adminId: String,
            indexRemarkApiRoute: String,
            storeRemarkApiRoute: String,
            destroyRemarkApiRoute: String,
            modalRef: String,
            isSetApiRoutes: {
                type: Boolean,
                default: false
            },
        },

        data(){
            return {
            	api_routes:{},
            	remarks: {
            		data: [],
            		pagination: {},
            		policies: {},
            		api: {},
            	},
            	form: {
	        		admin_remark: {
	        			remark: '',
	        		}
            	},
            	errors: {
            		admin_remark: [],
            	},
          		processing: false,
          		loading_remarks: false,
          		show_more_remark_button: false,
            }
        },

		created() {
        	if(!this.isSetApiRoutes){
        		this.api_routes =
        		{
        			index: this.indexRemarkApiRoute,
        			store: this.storeRemarkApiRoute,
        			destroy: this.destroyRemarkApiRoute,
        		}
        		this.getRemarks();
        	}
		},

		mounted() {
	    	$(this.$refs.modalRemarksMaximized).on("hidden.bs.modal", (e) => {
				this.closeSnotify();
			});
	    },

        methods: {
        	getRemarks(nextpage, indexApiRoute = null){
        		axios.get(nextpage ? this.remarks.pagination.links.next : this.api_routes.index)
	  				.then(response => {
	        			this.remarks.data = nextpage ? _.concat(this.remarks.data, response.data.data) : response.data.data;
	        			this.remarks.pagination.links = response.data.links;
	                    this.remarks.pagination.meta = response.data.meta;
	        			this.remarks.policies = response.data.policies;
	        			if(this.remarks.pagination.meta.last_page > this.remarks.pagination.meta.current_page){
	        				this.show_more_remark_button = true;
	        			}
	        			else{
	        				this.show_more_remark_button = false;
	        			}
	        		})
	        		.catch((response) => {
	        			console.log(response);
	   					this.$snotify.error('Failed to load remarks!');
					})
	       			.finally(() => {
	       				if(nextpage)
	       					this.toggleLoading();
	       			});
            },

            getMoreRemarks(){
            	this.toggleLoading();
            	this.getRemarks(true);
            },

            showMaximiseModal(){
            	if(this.modalRef){
            		let element = this.$parent.$refs[this.modalRef].$refs.modalRemarksMaximized;
                    $(element).modal('show');
            	}
            	else{
            		$('#modalRemarksMaximized').modal('show');
            	}
            },

            hideRemarks(){
            	this.remarks.data = [];
            	this.remarks.policies = {};
            	this.form.admin_remark.remark = '',
            	this.closeSnotify();
            },

        	storeRemark(){
            	this.processing = true;
            	this.$snotify.confirm('Do you confirm?', 'Store Remark', {
                    closeOnClick: false,
                    buttons: [
                        {text: 'Yes', action: (toast) => this.storeRemarkRequest(toast), bold: false},
                        {text: 'No', action: (toast) => {this.closeSnotify();}},
                    ],
	        	});
            },

            storeRemarkRequest(toast){
				this.closeSnotify();
				this.errors.admin_remark = [];
				axios.post(this.api_routes.store, this.form.admin_remark)
 					.then(response => {
			  	   		this.processing = false;
				  	   	this.remarks.data = [];
				  	   	this.getRemarks();
				        this.$snotify.success('Remark Added Successfully.');
				        this.clearRemarkTextbox();
			  	    })
			  	    .catch(({response}) => {
 						this.processing = false;
 	   					this.$snotify.error('Invalid data input.');
 	   					this.errors.admin_remark = response.data.errors;
 	   					console.log(response);
					});
			},

			clearRemarkTextbox(){
  				this.form.admin_remark.remark = '';
  			},

  			deleteRemark(remark_id){
  				this.processing = true;
            	this.$snotify.confirm('Do you confirm?', 'Delete Remark', {
                    closeOnClick: false,
                    buttons: [
                        {text: 'Yes', action: (toast) => this.destroyRemarkRequest(toast, remark_id), bold: false},
                        {text: 'No', action: (toast) => {this.closeSnotify();}},
                    ],
	        	});
            },

			destroyRemarkRequest(toast, remark_id){
            	this.closeSnotify();
  				axios.delete(this.api_routes.destroy.replace('remark_id', remark_id))
			  	   	.then(response => {
			  	   		this.getRemarks();
					  	this.$snotify.success(response.data.message);
					  	this.clearRemarkTextbox();
			  	    })
  					.catch(
  						(response) => {
	  	   					this.$snotify.error(response.data.message);
	  	   					this.setErrors(response);
						}
					);
  			},

  			toggleLoading: function(){
                this.loading_remarks = !this.loading_remarks;
            },

            setApiRoutes(apiRoutes){

            	//console.log(apiRoutes);

            	try {
            		this.api_routes.index = apiRoutes.index;
            		this.api_routes.store = apiRoutes.store;
            		this.api_routes.destory = apiRoutes.destory;
            	} catch (error) {
            		console.log(error);
            	}
            },

  			isMyRemark(remark){
  				if(remark.user){
  					if(remark.user.id == this.adminId){
  						return true;
  					}
  					else{
  						return false;
  					}
  				}
  				else{
  					return false;
  				}
  			},

  			closeSnotify() {
            	this.processing = false;
            	this.$snotify.remove();
            },
        }
}



</script>

