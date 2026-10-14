<style>
.nowrap {
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
</style>

<template>
	<div class="card card-widget widget-user" style="position: relative;">
		<div class="widget-user-header bg-primary mb-3">
			<h3 class="widget-user-username text-left">
				<b>
					<i class="fas mr-1" :class="userIcon()"></i>
					{{ user.name }}
				</b>
			</h3>
			<h6 class="widget-user-desc text-left font-weight-light">
				<span v-if="user.email">{{ user.email }}</span>
			</h6>
		</div>
		<div class="widget-user-image">
			<img class="img-circle"
				src="/images/user_default.jpg"
				alt="User profile picture">
		</div>
		<div class="card-body">
			<div class="row">
				<div class="col-md-4 col-sm-4 order-sm-2">
					<div class="description-block nowrap overlay-wrapper border-0 p-1" title="KYC Status">
						<div class="description-header nowrap">
							KYC
						</div>
						<span class="text-capitalize badge p-0 mx-auto"
							:class="user.is_admin ? 'font-weight-light font-italic text-muted' : ('text_'+ user.kyc_status)"
							:title="user.is_admin ? 'Waived' : 'Status '+user.kyc_status"
							style="overflow: hidden; text-overflow: ellipsis">
							{{ user.is_admin ? 'Waived' : user.kyc_status }}
						</span>
						<span class="overlay" v-if="loading.profile">
							<i class="fas fa-circle-notch fa-spin"></i>
						</span>
					</div>
				</div>
				<div class="col-md-4 col-sm-4 order-sm-1">
					<div class="description-block nowrap overlay-wrapper border-0 p-1" title="Prefix">
						<div class="description-header nowrap">
							Prefix
						</div>
						<span class="badge status mx-auto p-0" :title="user.prefix ? user.prefix : 'No Prefix'">
							<span class="text-muted" v-if="user.prefix">{{ user.prefix }} </span>
							<span v-else class="text-muted">--</span>
						</span>
						<span class="overlay" v-if="loading.profile">
							<i class="fas fa-circle-notch fa-spin"></i>
						</span>
					</div>
				</div>
				<div class="col-md-4 col-sm-4 order-sm-3">
					<div class="description-block nowrap overlay-wrapper border-0 p-1" title="Referred">
						<div class="description-header">
							Referred
						</div>
						<span class="badge status mx-auto p-0 text-muted">{{ user.total_referred }}</span>
						<span class="overlay" v-if="loading.profile">
							<i class="fas fa-circle-notch fa-spin"></i>
						</span>
					</div>
				</div>
			</div>
		</div>

		<div class="card bg-white collapsed-card border-0 m-0" v-if="user.commission_rate">
			<div class="card-header border-0">
				<b class="font-weight-bold">Commission Rate</b>
				<div class="float-right">
					<span class="float-right text-capitalize badge bg-danger">
						{{ user.commission_rate }}%
					</span>
				</div>
			</div>
		</div>
		<div class="card bg-white collapsed-card border-0 m-0" @click="collapseIcon('user_group')">
			<div class="card-header border-0" data-card-widget="collapse">
				<b class="font-weight-bold">User Group</b>
				<div class="card-tools">
					<button type="button" class="btn btn-tool" data-card-widget="collapse" title="View more" :id="'user_group' + screenSize + '_title'">
						<i class="fas fa-eye" :id="'user_group' + screenSize + '_icon'"></i>
					</button>
				</div>
			</div>
			<div class="card-body pt-0" data-card-widget="collapse">
				<span v-if="$_notEmpty(user.user_groups_as_admin)">
					<span class="float-left text-capitalize badge badge-danger mt-1 mr-1" v-for="group in user.user_groups_as_admin">
						<span v-if="group.user">
							<i class="fas fa-user-tie mr-1" title="Group owner" v-if="group.user.id == user.id"></i>
						</span>
						{{ group.code }}
					</span>
				</span>
				<span class="float-left text-capitalize badge badge-secondary mt-1 mr-1" v-else>No Group</span>
			</div>
		</div>
		<div class="card bg-white collapsed-card border-0 m-0" id="roleCollapse" @click="collapseIcon('role')">
			<div class="card-header border-0" data-card-widget="collapse">
				<b class="font-weight-bold">Role</b>
				<div class="card-tools">
					<button type="button" class="btn btn-tool" data-card-widget="collapse" title="View more" :id="'role' + screenSize + '_title'">
						<i class="fas fa-eye" :id="'role' + screenSize + '_icon'"></i>
					</button>
				</div>
			</div>
			<div class="card-body pt-0" data-card-widget="collapse">
				<span v-if="$_notEmpty(user.roles)">
					<span v-for="role in user.roles" class="d-incline text-capitalize badge badge-primary mt-1 mr-1">
						{{ role.name }}
					</span>
				</span>
				<span v-else>
					<span class="float-right text-capitalize badge badge-secondary mt-1 mr-1">
						No Role Assigned
					</span>
				</span>
			</div>
		</div>
		<div class="card-body">
			<div class="d-flex flex-row flex-wrap">
				<div class="col-md-6 col-sm-6 col-xs-6">
					<button class="btn btn-block btn-outline-primary"
						data-toggle="modal" :data-target="'#' + profileModalId + screenSize"
						style="overflow: hidden"
						@click="fillEditProfile(user)">
						<i class="fas fa-fw fa-edit" aria-hidden="true"></i> Edit Profile
					</button>
				</div>
				<div class="col-md-6 col-sm-6 col-xs-6">
					<button class="btn btn-block btn-primary"
						data-toggle="modal" :data-target="'#' + passwordModalId + screenSize"
						style="overflow: hidden">
						<i class="fas fa-fw fa-key" aria-hidden="true"></i> Change Password
					</button>
				</div>
			</div>
		</div>
		<!-- Modal Edit profile -->
			<div class="modal fade" :id="profileModalId + screenSize">
				<div class="modal-dialog modal-lg">
					<div class="modal-content">
						<div class="modal-header">
							<h4 class="modal-title">
								<i class="fas fa-edit" aria-hidden="true"></i> Edit Profile
							</h4>
							<button type="button" class="close float-right"
								data-dismiss="modal" aria-label="Close" @click="closeSnotify()">
								<span aria-hidden="true"><i class="fas fa-times"></i></span>
							</button>
						</div>
						<form class="form-horizontal">
							<div class="modal-body">
								<div class="row">
									<div class="col-md-12">
										<div class="form-group">
											<label for="email">Username</label>
											<div class="input-group">
												<div class="input-group-prepend">
													<span class="input-group-text"><i
														class="fas fa-at fa-fw"></i></span>
												</div>
												<input v-model="form.update.name" type="text" name="name"
													class="form-control" :disabled="processing"
													:class="{'is-invalid': errors.update.name}">
											</div>
											<span v-if="errors.update.name"
												class="help-block small text-danger"> {{
												errors.update.name[0] }} </span>
										</div>
									</div>
									<div class="col-md-12">
										<div class="form-group">
											<label for="email">Email</label>
											<div class="input-group">
												<div class="input-group-prepend">
													<span class="input-group-text"><i
														class="fas fa-envelope fa-fw"></i></span>
												</div>
												<input v-model="form.update.email" type="text" name="email"
													class="form-control" :disabled="processing"
													:class="{'is-invalid': errors.update.email}">
											</div>
											<span v-if="errors.update.email"
												class="help-block small text-danger"> {{
												errors.update.email[0] }} </span>
										</div>
									</div>
								</div>
							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-default float-right"
									data-dismiss="modal" @click="closeSnotify()">Close</button>
								<button type="button" :disabled="processing"
									class="btn btn-success float-right" @click="editProfile">
									<i class="fas fa-fw"
										:class="processing ? 'fa-circle-notch fa-spin' : 'fa-check-circle'"
										aria-hidden="true"></i> Confirm
								</button>
							</div>
						</form>
					</div>
					<!-- /.modal-content -->
				</div>
				<!-- /.modal-dialog -->
			</div>
			<!-- /.modal -->

			<!-- Modal Edit profile -->
			<div class="modal fade" :id="passwordModalId + screenSize">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<h4 class="modal-title">
								<i class="fas fa-key"></i> Change Password
							</h4>
							<button type="button" class="close float-right"
								data-dismiss="modal" aria-label="Close" @click="closeSnotify()">
								<span aria-hidden="true"><i class="fas fa-times"></i></span>
							</button>
						</div>
						<form class="form-horizontal">
							<div class="modal-body">
								<div class="row">
									<div class="col-sm-12">
										<div class="form-group">
											<label>New Password</label>
											<div class="input-group">
												<input v-model="form_Password.password"
													type="password" name="password" :disabled="processing"
													class="form-control" :id="passwordModalId + screenSize + 'password'"
													@change="removeError()"
													:class="{'is-invalid': errors.password.password}" autocomplete="off">
												<div class="input-group-append">
													<span class="input-group-text" id="password_show" title="Show Password">
														<a @click="showPasswordFunction('password')" style="background: none; cursor: pointer">
															<i class="fas fa-eye fa-fw" id="password_button"></i>
														</a>
													</span>
												</div>
											</div>
											<span v-if="errors.password.password" class="help-block small text-danger"> {{ errors.password.password[0] }} </span>
										</div>
									</div>
									<div class="col-sm-12">
										<div class="form-group">
											<label>Confirm Password</label>
											<div class="input-group">
												<input v-model="form_Password.password_confirmation"
													type="password" :disabled="processing"
													class="form-control" :id="passwordModalId + screenSize + 'password_confirmation'"
													:class="{'is-invalid': comparePasswords(form_Password.password, form_Password.password_confirmation) }"
													autocomplete="off">
												<div class="input-group-append">
													<span class="input-group-text" id="password_confirmation_show" title="Show Confirmed Password">
														<a @click="showPasswordFunction('password_confirmation')" style="background: none; cursor: pointer">
															<i class="fas fa-eye fa-fw" id="password_confirmation_button"></i>
														</a>
													</span>
												</div>
											</div>
											<span v-if="errors.password_confirmation "
												class="help-block small text-danger"> {{
												errors.password_confirmation[0] }} </span>
										</div>
									</div>
								</div>
							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-default float-right"
									data-dismiss="modal" @click="closeSnotify(); clearPassword()">Close</button>
								<button type="button" :disabled="processing"
									class="btn btn-success float-right" @click="changePassword">
									<i class="fas fa-fw"
										:class="processing ? 'fa-circle-notch fa-spin' : 'fa-check-circle'"
										aria-hidden="true"></i> Confirm
								</button>

							</div>
						</form>
					</div>
					<!-- /.modal-content -->
				</div>
				<!-- /.modal-dialog -->
			</div>
			<!-- /.modal -->
	</div>
</template>

<script>
	import CustomDirectives from '../../../directives/customDirectives';

	export default {

    	directives: {CustomDirectives},

    	props: {
            userId: String,
            screenSize: String,
            profileModalId: {
            	type: String,
            	default: 'modal-edit-profile-'
            },
            passwordModalId: {
            	type: String,
            	default: 'modal-change-password-'
            },
            indexProfileApiRoute: {
            	type: String,
            	default: '/api/profile',
            },
            updateProfileApiRoute: String,
            updatePasswordApiRoute: String,
        },

        data(){
            return {
            	form: {
                	update: {
	        			name: '',
	        			email: '',
		            	real_name: '',
		            	phone: '',
		            	address: '',
		            	gender: '',
		            	birth_date: '',
		            	country_id: '',
		            	id_number: '',
		            	occupation: '',
		            	income: '',
		            	referral_id: '',
		            	commission_plan_id: '',
	        		},
            	},
            	form_Password: {
                    password : '',
                    password_confirmation : ''
            	},
            	errors: {
            		update: [],
            		password:[],
            		password_confirmation: [],
            	},
            	loading: {
                	profile: false,
            	},
            	policies: {},
            	processing: false,
            	roles: {},
            	user: {},
            }
        },

        mounted() {
	        this.getUser();
	        $('.modal').on("hide.bs.modal", () => this.closeSnotify());
	        $('.modal').on("hide.bs.modal", () => this.clearPassword());
	    },

        methods: {
        	getUser(){
   		    	this.toggleLoading('profile');
        		axios.get(this.indexProfileApiRoute)
					.then(response => {
						this.user = response.data.data;
						this.roles = response.data.data.roles;
						this.policies = response.data.policies;
						if(this.user.roles){
							this.user.roles = _.sortBy(this.user.roles, [function(o) { return o.name; }]);
						}
						this.form.update.name = this.user.name;
						this.form.update.email = this.user.email;
					})
					.catch(
						(response) => {
	                    	console.log(response.data);
						}
					)
	        		.finally(() => {
	    				this.toggleLoading('profile');
	    			});
            },

            fillEditProfile(user){
            	this.user = user
				this.form.update.name = user.name
	           	this.form.update.email = user.email
	           	this.form.update.real_name = user.real_name
	           	this.form.update.phone = user.phone
	           	this.form.update.address = user.address
	           	this.form.update.gender = user.gender
	           	this.form.update.birth_date = moment(user.birth_date).format("YYYY-MM-DD")
	           	this.form.update.country_id = user.country_id
	           	this.form.update.occupation = user.occupation
	           	this.form.update.income = user.income
            },

            editProfile(){
            	this.processing = true;
            	this.$snotify.confirm('Do you confirm?', 'Edit Profile', {
                    closeOnClick: false,
                    buttons: [
                        {text: 'Yes', action: (toast) => this.patchProfileRequest(toast), bold: false},
                        {text: 'No', action: (toast) => {this.closeSnotify();}},
                    ],
	        	});
            },

			patchProfileRequest(toast){
            	this.closeSnotify();
  				this.errors.update = [];
  				var profileModalId = '#' + this.profileModalId + this.screenSize;
  				axios.patch(this.updateProfileApiRoute.replace('user_id', this.user.id), this.form.update)
			  	   	.then(response => {
			  	   		this.processing = false;
			  	   		this.getUser();
				  	   	window.setTimeout(function(){
				  	   		$(profileModalId).modal('hide');
				        }, 2000)
					  	this.$snotify.success(response.data.message);
			  	    })
  					.catch(({response}) => {
  						console.log(response.data);
  	   					this.$snotify.error(response.data.message);
  	   					this.errors.update = response.data.errors;
				});
  			},

  			changePassword() {
            	this.processing = true;
            	this.$snotify.confirm('Do you confirm?', 'Change Password', {
                    closeOnClick: false,
                    buttons: [
                        {text: 'Yes', action: (toast) => this.patchPasswordRequest(toast), bold: false},
                        {text: 'No', action: (toast) => {this.closeSnotify();}},
                    ],
	        	});
            },

            patchPasswordRequest: function(toast){
				this.closeSnotify();
  				var passwordModalId = '#'+this.passwordModalId+this.screenSize;
  				axios.patch(this.updatePasswordApiRoute, this.form_Password)
			  	   	.then(response => {
			  	   		this.processing = false;
			  	   		this.getUser();
			  	   		this.clearPassword();
				  	   	window.setTimeout(function(){
				  	   		$(passwordModalId).modal('hide');
				        }, 2000)
				        console.log(response.data.message);
					  	this.$snotify.success(response.data.message);
			  	    })
  					.catch(({response}) => {
  						this.processing = false;
  						console.log(response.data.errors);
  	   					this.$snotify.error(response.data.message);
  	   					this.errors.password = response.data.errors;
				});
  			},

  			clearPassword(){
  				this.form_Password.password = '';
  				this.form_Password.password_confirmation = '';
  			},

  			removeError(){
  				this.errors.password = [];
  			},

        	showPasswordFunction(action) {
        		let pin = document.getElementById(this.passwordModalId + this.screenSize + action);
        		let button = document.getElementById(action + "_button");
        		let title = document.getElementById(action + "_show");

        		if (pin.type === "password") {
        	  		pin.type = "text";
        	  		button.className = "fas fa-eye-slash fa-fw";
        	  		title.title = action.includes('_confirmation')? "Hide Confirmed Password" : "Hide Password"
        		} else {
        	  		pin.type = "password";
        	  		button.className = "fas fa-eye fa-fw";
        	  		title.title = action.includes('_confirmation')? "Show Confirmed Password" : "Show Password"
        		}
        	},

            toggleLoading(section){
	        	switch(section){
		        	case 'profile':
		        		this.loading.profile = !this.loading.profile;
		        		break;
	        	}
	        },

            closeSnotify() {
            	this.processing = false;
            	this.$snotify.remove();
            },

            comparePasswords(password, repeat){
            	if(password != repeat){
            		this.errors.password_confirmation[0] = 'The password and confirmation password do not match.';
            		return true;
            	}
            	else{
            		this.errors.password_confirmation[0] = '';
            		return false;
            	}
            },

            userIcon(){
            	if (this.user.is_admin) {
                    if(this.user.is_superadmin){
                    	return 'fa-user-secret';
                    }
                    else {
                    	return 'fa-user-tie';
                    }
                }
                else {
                	switch(this.user.kyc_status){
	                	case 'approved':
	                		return 'fa-user-shield';
	               		break;

	                	case 'rejected':
	                		return 'fa-user-times';
	               		break;

	                	default:
	                		return 'fa-user';
	                	break;
                	}
                }
            },

            collapseIcon(name){
            	var icon = document.getElementById(name + this.screenSize + "_icon");
            	var title = document.getElementById(name + this.screenSize + "_title");

            	if(icon.className == 'fas fa-eye'){
            		icon.className = 'fas fa-eye-slash';
            		icon.title = 'View less';
            	}
            	else{
            		icon.className = 'fas fa-eye';
            		icon.title = 'View more';
            	}
            },
        },
	}

</script>
