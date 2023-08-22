<style>
.hover-trigger {
	opacity: 0;
}
.hover-trigger:hover {
	opacity: 0.75;
	cursor: pointer;
}

</style>

<template>
<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper no-print">

	<div class="content-header">
		<div class="container-fluid">
			<div class="alert alert-info alert-dismissible" v-if="new_agent_prompt">
				<button type="button" class="close" data-dismiss="alert"
					aria-hidden="true">&times;</button>
				<h5>
					<i class="icon fas fa-info-circle"></i> Alert!
				</h5>
				Agent upgrade is one step away from complete! Click
					<a class="font-weight-bold" data-toggle="modal" href="#modal-edit-user" @click="fillEditUser(user); new_agent_prompt = false">here</a>
				to assign a superior for {{ user.name }}, or access through <i>More</i> > <i>Edit Profile</i>.
			</div>
			<div class="row justify-content-between">
				<div class="col-sm-4 col-xs-4">
					<div class="card m-0 d-inline-block">
    					<div class="card-header">
        					<h5 class="m-0">
        						<i class="fas nav-icon fas fa-file-invoice"></i>
        						User
        						<span class="ml-1 badge border border-danger text-danger">#{{ user.id }}</span>
        					</h5>
    					</div>
					</div>
				</div>
				<div class="col-sm-8 col-xs-8 align-self-center">
					<ol class="breadcrumb float-sm-right text-primary">
						<li class="breadcrumb-item">
							<a href="#" @click="indexUser()">
								<i class="fas fa-fw fa-users"></i> Users</a>
						</li>
						<li class="breadcrumb-item">
							<a href="#" @click="showUser(user.id)" class="badge border border-primary text-primary">{{ user.id }}</a>
						</li>
					</ol>
				</div>
			</div>
		</div>
	</div>

	<!-- Main content -->
	<section class="content">

		<div class="container-fluid">
			<!-- Main row -->
			<div class="row">
				<div class="col-lg-12 col-xl-3">
					<user-show-profile
						:indexUserDocumentRoute="indexUserDocumentRoute"
						screenSize="large"
						:user="user"
						:policies="policies"
					></user-show-profile>
				</div>

				<div class="col-xl-9">
					<div class="card">
						<div class="card-header">
							<div class="row justify-content-between">
								<div class="col-md-9">
									<ul class="nav nav-pills">
										<li class="nav-item" v-if="showPortfolio()">
											<a class="nav-link active" href="#portfolio_tab" data-toggle="tab">
												<i class="nav-icon fas fa-chart-bar "></i> Portfolio</a>
										</li>
										<li class="nav-item">
											<a class="nav-link" :class="{ 'active' : !showPortfolio() }" href="#personal" data-toggle="tab">
												<i class="nav-icon fas fa-id-card"></i> Personal Info.</a>
										</li>
										<li class="nav-item">
											<a class="nav-link" href="#employer" data-toggle="tab">
												<i class="nav-icon fas fa-building"></i> Employer Info.</a>
										</li>
										<li class="nav-item" @click="$refs.bankLarge.getBanks()" v-if="policies.view_user_bank">
											<a class="nav-link" href="#bank" data-toggle="tab">
												<i class="nav-icon fas fa-university"></i> Bank Info.</a>
										</li>
										<li class="nav-item" @click="$refs.claimLarge.getClaims()" v-if="policies.view_claims">
											<a class="nav-link" href="#claim" data-toggle="tab">
												<i class="nav-icon fas fa-receipt"></i> Claim Info.</a>
										</li>
										<li class="nav-item" v-if="policies.view_chronicle">
											<a class="nav-link" href="#history" data-toggle="tab" @click="$refs.chronicles_user.getChronicles(false)">
												<i class="nav-icon fas fa-history"></i> User History</a>
										</li>
									</ul>
								</div>
								<div class="col-md-3">
									<div class="p-1 float-right">
										<button type="button" class="btn btn-outline-primary dropdown-toggle" data-toggle="dropdown">
											<b>More</b>
											<span class="caret"></span> <span class="sr-only">Toggle Dropdown</span>
										</button>

										<div class="dropdown-menu" role="menu">
											<a class="dropdown-item" href="#modal-edit-user" data-toggle="modal" @click="fillEditUser(user)" v-if="policies.admin_edit">
												<i class="fas fa-user-edit fa-fw" aria-hidden="true"></i>
												Edit Profile
											</a>
											<a class="dropdown-item" v-if="!user.is_admin && policies.approve_kyc" href="#" @click="kycStatus(user.id)">
												<i class="fas fa-user-check fa-fw" aria-hidden="true"></i>
												KYC Verification
											</a>
											<a class="dropdown-item" href="#modal-assign-role" data-toggle="modal" @click="fillAssignRole('update')" v-if="policies.roles_assign && user.is_admin">
												<i class="fas fa-id-badge fa-fw" aria-hidden="true"></i>
												Assign Role(s)
											</a>
											<a class="dropdown-item" href="#modal-assign-role" data-toggle="modal" @click="fillAssignRole('upgrade')" v-if="policies.roles_assign && !user.is_admin">
												<i class="fas fa-user-tie fa-fw" aria-hidden="true"></i>
												Upgrade to Agent
											</a>
											<a class="dropdown-item" href="#modal-create-group" data-toggle="modal" v-if="!$_notEmpty(user.user_groups_as_admin) " @click="getUserGroupsValidation()">
												<i class="fas fa-users-cog fa-fw" aria-hidden="true"></i>
												Create User Group
											</a>
											<a class="dropdown-item" href="#modal-assign-group" data-toggle="modal" v-if="policies.groups_assign && user.is_admin" @click="getUserGroups()">
												<i class="fas fa-users fa-fw" aria-hidden="true"></i>
												Assign to Group
											</a>
											<a class="dropdown-item" href="#modal-reset-password" data-toggle="modal" v-if="policies.reset_password">
												<i class="fas fa-fw fa-key" aria-hidden="true"></i>
												Reset Password
											</a>
											<a class="dropdown-item" href="#" @click="deleteUser(user.id)">
												<i class="fas fa-trash-alt fa-fw" aria-hidden="true"></i>
												Delete
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>

						<!-- /.card-header -->
						<div class="card-body">
							<div class="tab-content">

								<div class="tab-pane active" id="portfolio_tab" v-if="showPortfolio()">
									<div class="row no-gutters">
										<div class="col-12">
											<portfolio
												:user-id="user_id"></portfolio>
										</div>
									</div>
								</div>

								<div class="tab-pane" :class="{ 'active' : !showPortfolio() }" id="personal">
									<div class="row no-gutters">
										<div class="col-md-6">
											<div class="info-box bg-light mb-1">
												<span class="info-box-icon border">
													<i class="fas fa-fw fa-at text-muted"></i>
												</span>
												<span class="info-box-content">
													<span class="info-box-number">Full Name</span>
													<span class="info-box-text">{{ user.real_name ? user.real_name : '-- Not Stated --' }}</span>
												</span>
											</div>
											<div class="info-box bg-light mb-1">
												<span class="info-box-icon border">
													<i class="fas fa-fw fa-envelope text-muted"></i>
												</span>
												<span class="info-box-content">
													<span class="info-box-number">E-Mail</span>
													<span class="info-box-text">{{ user.email ? user.email : '-- Not Stated --' }}</span>
												</span>
											</div>
											<div class="info-box bg-light mb-1">
												<span class="info-box-icon border">
													<i class="fas fa-fw fa-mobile-alt text-muted"></i>
												</span>
												<span class="info-box-content">
													<span class="info-box-number">Phone No.</span>
													<span class="info-box-text">{{ user.phone ? user.phone : '-- Not Stated --' }}</span>
												</span>
											</div>
											<div class="info-box bg-light mb-1">
												<span class="info-box-icon border">
													<i class="fas fa-fw fa-id-card text-muted"></i>
												</span>
												<span class="info-box-content">
													<span class="info-box-number">Identification No.</span>
													<span class="info-box-text">{{ user.id_number ? user.id_number : '-- Not Stated --' }}</span>
												</span>
											</div>
											<div class="info-box bg-light mb-1">
												<span class="info-box-icon border" style="max-height: 70px">
													<i class="fas fa-fw fa-map-marker-alt text-muted"></i>
												</span>
												<span class="info-box-content">
													<span class="info-box-number">Address</span>
													<span class="info-box-text text-wrap">{{ user.address ? user.address : '-- Not Stated --' }}</span>
												</span>
											</div>
										</div>
										<div class="col-md-6">
											<div class="info-box bg-light mb-1">
												<span class="info-box-icon border">
													<i class="fas fa-fw fa-birthday-cake text-muted"></i>
												</span>
												<span class="info-box-content">
													<span class="info-box-number">D.O.B</span>
													<span class="info-box-text">{{ user.birth_date ? user.birth_date : '-- Not Stated --' }}</span>
												</span>
											</div>
											<div class="info-box bg-light mb-1">
												<span class="info-box-icon border">
													<i class="fas fa-fw fa-globe text-muted"></i>
												</span>
												<span class="info-box-content">
													<span class="info-box-number">Nationality</span>
													<span class="info-box-text">{{ country ? country.name : '-- Not Stated --' }}</span>
												</span>
											</div>
											<div class="info-box bg-light mb-1">
												<span class="info-box-icon border">
													<i class="fas fa-fw fa-smile text-muted"></i>
												</span>
												<span class="info-box-content">
													<span class="info-box-number">Race</span>
													<span class="info-box-text">{{ user.race ? user.race : '-- Not Stated --' }}</span>
												</span>
											</div>
											<div class="info-box bg-light mb-1">
												<span class="info-box-icon border">
													<i class="fas fa-fw text-muted" :class="user.gender ? user.gender == 'm' ? 'fa-mars' : 'fa-venus' : 'fa-venus-mars'"></i>
												</span>
												<span class="info-box-content">
													<span class="info-box-number">Gender</span>
													<span class="info-box-text">{{ user.gender ? user.gender == 'm' ? 'Male' : 'Female' : '-- Not Stated --' }}</span>
												</span>
											</div>
										</div>
									</div>
								</div>
								<!-- /.tab-pane (personal) -->

								<div class="tab-pane" id="employer">
									<div class="row no-gutters">
										<button href="#modal-update-employer" class="btn btn-outline-primary btn-min-width mb-3" data-toggle="modal" style="display: inline" @click="fillUpdateEmployer(user)">
											<i class="fas fa-fw fa-edit"></i>
											Update
										</button>
									</div>
									<div class="info-box bg-light mb-1 col-md-6">
										<span class="info-box-icon border">
											<i class="fas fa-fw fa-building text-muted"></i>
										</span>
										<span class="info-box-content">
											<span class="info-box-number">Employer</span>
											<span class="info-box-text">{{ employer ? employer.name : '-- not stated --' }}</span>
										</span>
									</div>
									<div class="info-box bg-light mb-1 col-md-6">
										<span class="info-box-icon border">
											<i class="fas fa-fw fa-user-tie text-muted"></i>
										</span>
										<span class="info-box-content">
											<span class="info-box-number">Occupation</span>
											<span class="info-box-text">{{ user.occupation ? user.occupation : '-- not stated --' }}</span>
										</span>
									</div>
									<div class="info-box bg-light mb-1 col-md-6">
										<span class="info-box-icon border">
											<i class="fas fa-fw fa-dollar-sign text-muted"></i>
										</span>
										<span class="info-box-content">
											<span class="info-box-number">Income</span>
											<span class="info-box-text">{{ user.income ? user.income : '-- not stated --' }}</span>
										</span>
									</div>

								</div>
								<!-- /.tab-pane (employer) -->

								<div class="tab-pane" id="bank">
									<user-show-bank-index
										:user="user"
										:policies="policies"
										:indexUserBankApiRoute="indexUserBankApiRoute"
										:createUserBankApiRoute="createUserBankApiRoute"
										:storeUserBankApiRoute="storeUserBankApiRoute"
										:restoreUserBankApiRoute="restoreUserBankApiRoute"
										:showUserBankApiRoute="showUserBankApiRoute"
										:updateUserBankApiRoute="updateUserBankApiRoute"
										:indexUserBankChronicleApiRoute="indexUserBankChronicleApiRoute"
										screenSize="large"
							            ref="bankLarge">
							        </user-show-bank-index>

								</div>
								<!-- /.tab-pane (bank) -->

								<div class="tab-pane" id="claim">
									<user-show-claim-index
							            :user="user"
							            :policies="policies"
							            :selectOptions="select_options"
										:indexUserClaimApiRoute="indexUserClaimApiRoute"
										:storeUserClaimApiRoute="storeUserClaimApiRoute"
										:showUserClaimRoute="showUserClaimRoute"
							            screenSize="large"
							            ref="claimLarge"
									>
									</user-show-claim-index>
								</div>
								<!-- /.tab-pane (claim) -->

								<div class="tab-pane" id="history">
									<index-chronicle
										:index-chronicle-route="indexUserChronicleApiRoute"
										ref="chronicles_user"
									></index-chronicle>
								</div>

							</div>
							<!-- /.tab-content -->
						</div>
						<!-- /.card-body -->
					</div>
					<!-- /.nav-tabs-custom -->
				</div>
				<!-- /.col -->
			</div>
			<!-- /.main row -->

			<!-- users-loans-index -->
			<div :class="{'d-none' : user.is_admin}">
				<users-loans-index
					v-if="policies.view_user_loan"
					:userId="user.id"
					:index-user-document-route="indexUserDocumentRoute"
					:create-users-loans-route="createUsersLoansRoute"
					:index-users-loans-route="indexUsersLoansRoute"
					:show-users-loans-route="showUsersLoansRoute"
					:edit-users-loans-route="editUsersLoansRoute"
					:create-user-loan-repayment-route="createUserLoanRepaymentRoute"
					:index-loan-tenures-api-route="indexLoanTenuresApiRoute"
				>
				</users-loans-index>
			</div>
			<!-- /.users-loans-index -->

			<!-- Edit User Modal -->
			<div class="modal fade no-print" id="modal-edit-user">
				<div class="modal-dialog modal-lg">
					<div class="modal-content">
						<div class="modal-header">
							<h4 class="modal-title">
								<i class="fas fa-fw fa-user-edit"></i>
								Edit {{ user.name }}
							</h4>
							<button type="button" class="close float-right" data-dismiss="modal" aria-label="Close" @click="closeSnotify">
								<i class="fas fa-fw fa-times"></i>
							</button>
						</div>
						<div class="modal-body">
							<h5><b>Personal Details</b></h5>
							<div class="row mt-1">
								<b class="col-md-3 align-self-center">Name</b>
								<div class="col-md-9">
									<input v-model="form.update.name" name="name" type="text" id="update_user_name" class="form-control" :class="{'is-invalid': errors.update.name}" :disabled="processing">
									<span v-if="errors.update.name" class="help-block small text-danger">
										{{ errors.update.name[0] }}
									</span>
								</div>
							</div>
							<div class="row mt-1">
								<b class="col-md-3 align-self-center">Full Name</b>
								<div class="col-md-9">
									<input v-model="form.update.real_name" name="real_name" type="text" id="real_name" class="form-control" :class="{'is-invalid': errors.update.real_name}" :disabled="processing">
									<span v-if="errors.update.real_name" class="help-block small text-danger">
										{{ errors.update.real_name[0] }}
									</span>
								</div>
							</div>
							<div class="row mt-1">
								<b class="col-md-3 align-self-center">E-Mail</b>
								<div class="col-md-9">
									<input v-model="form.update.email" name="email" type="text" id="update_email" class="form-control" :class="{'is-invalid': errors.update.email}" :disabled="processing == true">
									<span v-if="errors.update.email" class="help-block small text-danger">
										{{ errors.update.email[0] }}
									</span>
								</div>
							</div>
							<div class="row mt-1">
								<b class="col-md-3 align-self-center">Phone Number</b>
								<div class="col-md-9">
									<input v-model="form.update.phone" name="phone" type="text" id="phone" class="form-control" :class="{'is-invalid': errors.update.phone}" :disabled="processing">
									<span v-if="errors.update.phone" class="help-block small text-danger">
										{{ errors.update.phone[0] }}
									</span>
								</div>
							</div>
							<div class="row mt-1">
								<b class="col-md-3 align-self-center">Identification Number</b>
								<div class="col-md-9">
									<input v-model="form.update.id_number" name="id_number" type="text" id="id_number" class="form-control" :class="{'is-invalid': errors.update.id_number}" :disabled="processing">
									<span v-if="errors.update.id_number" class="help-block small text-danger">
										{{ errors.update.id_number[0] }}
									</span>
								</div>
							</div>
							<div class="row mt-1">
								<b class="col-md-3 align-self-center">Date of Birth</b>
								<div class="col-md-9">
									<input v-model="form.update.birth_date" name="birth_date" type="date" id="birth_date" class="form-control" :class="{'is-invalid': errors.update.birth_date}" :disabled="processing">
									<span v-if="errors.update.birth_date" class="help-block small text-danger">
										{{ errors.update.birth_date[0] }}
									</span>
								</div>
							</div>
							<div class="row mt-1">
								<b class="col-md-3 align-self-center">Nationality</b>
								<div class="col-md-9">
									<v-select
										name="country_id"
								     	v-model="form.update.country_id"
								     	:class="{'is-invalid': errors.update.country_id}"
								     	:disabled="processing"
								        :options="select_options.countries"
								        label="name"
								        index="id">
									</v-select>
									<span v-if="errors.update.country_id" class="help-block small text-danger">
										{{ errors.update.country_id[0] }}
									</span>
								</div>
							</div>
							<div class="row mt-1">
								<b class="col-md-3 align-self-center">Gender</b>
								<div class="col-md-9">
									<v-select
										name="gender"
										class="text-capitalize"
										:class="{'is-invalid': errors.update.gender}"
								     	v-model="form.update.gender"
								     	:disabled="processing"
								        :options="[{label: 'Male', value: 'm'}, {label: 'Female', value: 'f'}]"
								        label="label"
								        index="value">
									</v-select>
									<span v-if="errors.update.gender" class="help-block small text-danger">
										{{ errors.update.gender[0] }}
									</span>
								</div>
							</div>
							<div class="row mt-1">
								<b class="col-md-3 align-self-center">Race</b>
								<div class="col-md-9">
									<input v-model="form.update.race" name="race" type="text" id="race" class="form-control" :class="{'is-invalid': errors.update.race}" :disabled="processing">
									<span v-if="errors.update.race" class="help-block small text-danger">
										{{ errors.update.race[0] }}
									</span>
								</div>
							</div>
							<div class="row mt-1">
								<b class="col-md-3 align-self-center">Address</b>
								<div class="col-md-9">
									<textarea v-model="form.update.address" name="address" id="address" class="form-control" rows="2" :class="{'is-invalid': errors.update.address}" :disabled="processing"></textarea>
									<span v-if="errors.update.address" class="help-block small text-danger">
										{{ errors.update.address[0] }}
									</span>
								</div>

								<hr class="w-100">

								<div class="col-md-12">
									<div class="row">

										<div class="col-md-12" v-if="!user.is_admin">
											<h5><b>Additional Details</b></h5>
										</div>

										<div class="form-group col-md-6" v-if="!user.is_admin">
											<label for="referral_id">Referral</label>
											<v-select
												name="referral_id"
										     	v-model="form.update.referral_id"
										     	:class="{'is-invalid': errors.update.referral_id}"
										     	:disabled="processing"
										        :options="select_options.referrals"
										        label="name"
										        index="id">
											</v-select>
											<span v-if="errors.update.referral_id" class="help-block small text-danger">
												{{ errors.update.referral_id[0] }}
											</span>
										</div>

										<div class="form-group col-md-6" v-if="!user.is_admin">
											<label for="referral_id">Assigned To Agent</label>
											<v-select
												name="agent_id"
										     	v-model="form.update.agent_id"
										     	:class="{'is-invalid': errors.update.agent_id}"
										     	:disabled="processing"
										        :options="select_options.superiors"
										        label="name"
										        index="id">
											</v-select>
											<span v-if="errors.update.agent_id" class="help-block small text-danger">
												{{ errors.update.agent_id[0] }}
											</span>
										</div>

										<div class="form-group col-md-6" v-if="user.is_admin">
											<label for="commission_plan_id">Commission Plan</label>
											<v-select
												name="commission_plan_id"
										     	v-model="form.update.commission_plan_id"
										     	:class="{'is-invalid': errors.update.commission_plan_id}"
										     	:disabled="processing"
										        :options="select_options.commission_plans"
										        label="fullname"
										        index="id">
											</v-select>
											<span v-if="errors.update.commission_plan_id" class="help-block small text-danger">
												{{ errors.update.commission_plan_id[0] }}
											</span>
										</div>

										<div class="form-group col-md-6" v-if="user.is_admin">
											<label for="superior_agent_id">Assigned To Superior</label>
											<v-select
												name="superior_agent_id"
										     	v-model="form.update.superior_agent_id"
										     	:class="{'is-invalid': errors.update.superior_agent_id}"
										     	:disabled="processing"
										        :options="select_options.superiors"
										        label="name"
										        index="id">
											</v-select>
											<span v-if="errors.update.superior_agent_id" class="help-block small text-danger">
												{{ errors.update.superior_agent_id[0] }}
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-default float-right" data-dismiss="modal">Close</button>
							<button class="btn btn-success float-right" :disabled="processing" @click="editUser(user.id)" >
								<span v-if="processing">
									<i class="fas fa-fw fa-circle-notch fa-spin" aria-hidden="true"></i>
								</span>
								<span v-else>
									<i class="fas fa-fw fa-check-circle"></i>
								</span>
								Confirm
							</button>
						</div>
					</div>
				</div>
			</div>
			<!-- /.modal (update user) -->

			<!-- Update Employer Modal -->
			<div class="modal fade no-print" id="modal-update-employer">
				<div class="modal-dialog modal-md">
					<div class="modal-content">
						<div class="modal-header">
							<h4 class="modal-title text-capitalize">
								<i class="fas fa-fw fa-piggy-bank"></i>
								Update Employer of {{ user.name }}
							</h4>
							<button type="button" class="close float-right" data-dismiss="modal" aria-label="Close" @click="closeSnotify">
								<i class="fas fa-fw fa-times"></i>
							</button>
						</div>
						<div class="modal-body">
							<div class="row justify-content-center">
								<input type="hidden" v-model="form.update_employer.name">
								<div class="form-group col-md-12">
									<label for="employer_id">Employer</label>
									<v-select
										name="update_employer"
								     	v-model="form.update_employer.employer_id"
								     	:class="{'is-invalid': errors.update_employer.employer_id}"
								     	:disabled="processing"
								        :options="select_options.employers"
								        label="name"
								        index="id">
									</v-select>
									<span v-if="errors.update_employer.employer_id" class="help-block small text-danger">
										{{ errors.update_employer.employer_id[0] }}
									</span>
								</div>
								<div class="form-group col-md-12">
									<label for="occupation">Occupation</label>
									<div class="input-group">
										<div class="input-group-prepend">
											<span class="input-group-text"><i class="fas fa-fw fa-user-tie"></i></span>
										</div>
										<input v-model="form.update_employer.occupation" name="occupation" type="text" id="occupation" class="form-control" :class="{'is-invalid': errors.update_employer.occupation}" :disabled="processing == true">
									</div>
									<span v-if="errors.update_employer.occupation" class="help-block small text-danger">
										{{ errors.update_employer.occupation[0] }}
									</span>
								</div>
								<div class="form-group col-md-12">
									<label for="income">Income</label>
									<div class="input-group">
										<div class="input-group-prepend">
											<span class="input-group-text"><i class="fas fa-fw fa-dollar-sign"></i></span>
										</div>
										<input v-model="form.update_employer.income" name="income" type="text" id="income" class="form-control" :class="{'is-invalid': errors.update_employer.income}" :disabled="processing == true">
									</div>
									<span v-if="errors.update_employer.income" class="help-block small text-danger">
										{{ errors.update_employer.income[0] }}
									</span>
								</div>
							</div>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-default float-right" data-dismiss="modal" @click="closeSnotify">Close</button>
							<button class="btn btn-success float-right" :disabled="processing" @click="updateEmployer(userId)">
								<i class="fas fa-fw" :class="processing ? 'fa-circle-notch fa-spin' : 'fa-check-circle'" aria-hidden="true"></i>
								Confirm
							</button>
						</div>
					</div>
				</div>
			</div>
			<!-- /.modal (update employer) -->

			<!-- Assign Role Modal -->
			<div class="modal fade no-print" id="modal-assign-role" v-if="policies.roles_assign">
				<div class="modal-dialog modal-lg">
					<div class="modal-content">
						<div class="modal-header">
							<h4 class="modal-title">
								<i class="fas fa-fw" :class="form.assign.mode == 'update' ? ' fa-id-badge' : 'fa-user-tie'"></i>
								{{ form.assign.mode == 'update' ? 'Assign Role for ' : 'Upgrade User - ' }} {{ user.name }}
							</h4>
							<button type="button" class="close float-right" data-dismiss="modal" aria-label="Close" @click="closeSnotify">
								<i class="fas fa-fw fa-times"></i>
							</button>
						</div>
						<!-- <div class="modal-body" v-if="form.assign.mode == 'update'">
							<div class="card-body">
								<div class="form-check row">
									<label class="col-md-4" v-for="(item, key) in assign_roles">
					           			<input type="checkbox" class="form-check-input" :value="key" :key="key" v-model="form.assign.roles">
					           			{{ item }}
				                	</label>
								</div>
							</div>
						</div> -->
						<div class="modal-body">
							<div class="card-body">
								<roles-selection
									:roles="assign_roles"
									:value="form.assign.roles"
	            					@input="(newRoles) => {form.assign.roles = newRoles}"
	            					ref="roles_selection"
								></roles-selection>
							</div>

						</div>
						<!-- <div class="modal-body" v-if="form.assign.mode == 'upgrade'">
							<div class="card-body">
								<p>Please Choose Admin Role:</p>
								<div class="form-check row">
									<label class="col-md-4" v-for="(item, key) in assign_roles" v-if="key != 4">
					           			<input type="checkbox" class="form-check-input" :value="key" :key="key" v-model="form.assign.roles">
					           			{{ item }}
				                	</label>
								</div>
							</div>
						</div> -->
						<div class="modal-footer">
							<button type="button" class="btn btn-default" data-dismiss="modal" @click="closeSnotify">Close</button>
							<button class="btn btn-success float-right" :disabled="processing" @click="storeRole()">
								<i class="fas fa-fw" :class="processing ? 'fa-circle-notch fa-spin' : 'fa-check-circle'" aria-hidden="true"></i>
								Confirm
							</button>
						</div>
					</div>
				</div>
			</div>
			<!-- /.modal (assign role) -->

			<div class="modal fade no-print" id="modal-create-group">
				<div class="modal-dialog modal-lg">
					<div class="modal-content">
						<div class="modal-header">
							<h4 class="modal-title">
								<i class="fas fa-users"></i>
								Create User Group for {{ user.name }}
							</h4>
							<button type="button" class="close float-right" data-dismiss="modal" aria-label="Close" @click="closeSnotify(); clearModalData()">
								<i class="fas fa-times"></i>
							</button>
						</div>
						<div class="modal-body pb-0">
							<div class="small-box border-0 bg-light">
								<div class="inner">
									<div class="row justify-content-sm-center">
										<div class="col-sm-6">
											<div class="form-group">
												<label for="code">Owner</label>
												<input autocomplete="off"
													name="group_owner" type="text" id="group_owner"
													class="form-control"
													:value="user.name" :disabled="processing" readonly>
											</div>
										</div>

										<div class="col-sm-4">
											<div class="form-group">
												<label for="code">
													Group Code
													<i class="fas fa-question-circle ml-1" data-toggle="tooltip" data-placement="top" title="Group's code will only allow alphabets"></i>
												</label>
												<input @keypress="$_onlyCharacters"
													maxlength="5"
													name="code" type="text" id="code"
													class="form-control"
													:class="validateUserGroupCode()"
													v-model="form.create_group.code"
													autocomplete="off"
													:disabled="processing">
												<span v-if="errors.create_group.code" class="help-block text-danger small">
													{{ errors.create_group.code[0] }}
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="modal-footer border-top-0 pt-0">
							<button type="button" class="btn btn-default" @click="closeSnotify(); clearModalData()" data-dismiss="modal">
								Close
							</button>
							<button class="btn btn-success" @click="createGroup()" :disabled="processing">
								<i class="fas fa-fw" :class="processing ? 'fa-circle-notch fa-spin' : 'fa-check-circle'" aria-hidden="true"></i>
								Confirm
							</button>
						</div>
					</div>
				</div>
			</div>

			<!-- Assign group Modal -->
			<div class="modal fade no-print" id="modal-assign-group" v-if="policies.groups_assign">
				<div class="modal-dialog modal-lg">
					<div class="modal-content">
						<div class="modal-header">
							<h4 class="modal-title">
								<i class="fas fa-users"></i>
								Manage user groups
							</h4>
							<button type="button" class="close float-right" data-dismiss="modal" aria-label="Close" @click="closeSnotify">
								<i class="fas fa-times"></i>
							</button>
						</div>
						<div class="modal-body">
							<div class="row justify-content-md-center">
								<div class="col-md-6 text-center mb-3">
									<table class="table table-condensed" v-if="groups.current">
										<tr>
											<th class="border-top-0" colspan="2">Current Groups</th>
										</tr>
										<tr v-for="group in groups.current">
											<td>
												<h4 class="m-0">{{ group.code }}</h4>
											</td>
											<td>
												<button type="button" class="btn btn-sm btn-danger" @click="deleteUserGroup(group)">Remove</button>
											</td>
										</tr>
									</table>
									<span v-else>No Records</span>
								</div>
								<div class="col-md-6 text-center mb-3">
									<table class="table table-condensed" v-if="groups.existing">
										<tr>
											<th class="border-top-0" colspan="2">Existing Groups</th>
										</tr>
										<tr v-for="group in groups.existing">
											<td>
												<h4 class="m-0">{{ group.code }}</h4>
											</td>
											<td>
												<button type="button" class="btn btn-sm btn-success" @click="storeUserGroup(group.id)">Add</button>
											</td>
										</tr>
									</table>
									<span v-else>No Records</span>
								</div>
							</div>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-default" data-dismiss="modal" @click="closeSnotify">Close</button>
						</div>
					</div>
				</div>
			</div>
			<!-- /.modal (assign group) -->

			<!-- Edit Password Modal -->
			<div class="modal fade" id="modal-reset-password" v-if="policies.reset_password">
				<div class="modal-dialog modal-lg">
					<div class="modal-content">
						<div class="modal-header">
							<h4 class="modal-title">
								<i class="fas fa-key"></i>
								Reset Password
							</h4>
							<button type="button" class="close float-right" data-dismiss="modal" aria-label="Close" @click="closeSnotify">
								<i class="fas fa-fw fa-times"></i>
							</button>
						</div>
						<div class="modal-body">
							<div class="card-body">
								<div class="row justify-content-md-center">
									<div class="form-group col-md-8">
										<div class="row">
											<div class="form-group col-md-12">
												<label for="password">
													<i class="fas fa-fw fa-check"></i>
													New Password
												</label>
												<input v-model="form.reset_password.password" name="password" type="password" id="password" class="form-control" :class="{'is-invalid': errors.reset_password.password}" :disabled="processing">
												<span v-if="errors.reset_password.password" class="help-block text-danger">
													{{ errors.reset_password.password[0] }}
												</span>
											</div>
											<div class="form-group col-md-12">
												<label for="password_confirm">
													<i class="fas fa-fw fa-check-double"></i>
													Confirm New Password
												</label>
												<input v-model="form.reset_password.password_confirm" name="password_confirm" type="password" id="password_confirm" class="form-control" :class="{'is-invalid': errors.reset_password.password_confirm}" :disabled="processing">
												<span v-if="errors.reset_password.password_confirm" class="help-block text-danger">
													{{ errors.reset_password.password_confirm[0] }}
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-default float-right" data-dismiss="modal" @click="closeSnotify">Close</button>
							<button class="btn btn-success float-right" :disabled="processing" @click="editUserPassword">
								<span v-if="processing">
									<i class="fas fa-fw fa-circle-notch fa-spin" aria-hidden="true"></i>
								</span>
								<span v-else>
									<i class="fas fa-fw fa-check-circle"></i>
								</span>
								Confirm
							</button>
						</div>
					</div>
				</div>
			</div>
			<!-- /.modal (edit password) -->

		</div>
		<!-- /.container-fluid -->
		<vue-snotify></vue-snotify>
	</section>

</div>
<!-- /.content-wrapper -->
</template>

<script>

	import VueDataTable from "../../vue-data-table";
	import RolesSelection from './roles-selection';
	var qs = require('qs');

	export default{
		props: {
				userId : {
					type: [String, Number],
				},
				adminId : {
					type: [String, Number],
				},
				selectOptions : {},
				indexUserRoute : {},
				indexUserApiRoute : {},
				//createUserApiRoute : {},
				showUserRoute : {},
				showUserApiRoute : {},
				updateUserApiRoute : {},
				deleteUserApiRoute : {},
				storeUserEmployerApiRoute : {},
				indexUserDocumentRoute : {},
				indexUserRoleApiRoute : {},
				createUserRoleApiRoute : {},
				storeUserRoleApiRoute : {},
				indexUserBankApiRoute : {},
				createUserBankApiRoute : {},
				storeUserBankApiRoute : {},
				restoreUserBankApiRoute : {},
				showUserBankApiRoute : {},
				updateUserBankApiRoute : {},
				indexUserClaimApiRoute : {},
				storeUserClaimApiRoute : {},
				storeGroupApiRoute : {},
        		indexUserGroupsApiRoute : {},
        		storeUserGroupsApiRoute : {},
        		deleteUserGroupsApiRoute : {},
    			showUserClaimRoute : {},
    			indexUserChronicleApiRoute : {},
    			indexUserBankChronicleApiRoute : {},

    			indexUserDocumentRoute : {},
				createUsersLoansRoute : {},
				indexUsersLoansRoute : {},
				showUsersLoansRoute : {},
				editUsersLoansRoute : {},
				createUserLoanRepaymentRoute : {},
				indexLoanTenuresApiRoute : {},
    			print: {
                    type: Boolean,
                    default: false,
                },
		},

	    components:{
	        VueDataTable
	    },

	    data(){
	        return {

	        	columns:{},
	        	select_options:{},
	        	users: {
	                data: [],
	                pagination: {}
	            },
	        	user: {},
	        	country: {},
	        	roles: {},
	        	employer: {},
	        	groups:{
	        		current:{},
	        		existing:{},
	        	},
	        	processing: false,
	        	form: {
	        		filter: {
	        			name: '',
		            	real_name: '',
		            	id_number: '',
		            	email: '',
		            	gender: '',
		            	country_id: '',
		            	referral_id: '',
		            	kyc_status: '',
		            	created_from: '',
		            	created_until: '',
	        		},
	        		create: {
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
	        		update: {
	        			name: '',
	        			email: '',
		            	real_name: '',
		            	password: '',
		            	phone: '',
		            	address: '',
		            	gender: '',
		            	birth_date: '',
		            	country_id: '',
		            	id_number: '',
		            	referral_id: '',
		            	commission_plan_id: '',
		            	race: '',
		            	agent_id:'',
		            	superior_agent_id:'',
	        		},
	        		reset_password:{
	        			password: '',
		            	password_confirm: ''
	        		},
	        		update_employer: {
	        			employer_id: '',
	        			occupation: '',
		            	income: '',
	        		},
	        		create_group: {
	        			code: '',
	        			user_id: '',
	        		},
	        		assign: {
	        			roles: [],
	        			mode: '',
	        		},
	        		pin: '',
	        	},

	           	user_filters: {},

	        	errors: {
	        		update : [],
	        		create : [],
	        		create_group: {
	        			code: []
	        		},
	        		update_employer: [],
	        		assign_role: [],
	        		approve_claim: [],
	        		reset_password:[],
	        	},

	        	loading: {
	                user: false,
	            },

	            status: {
	                filters: '',
	            },
	            countries_select_options: [],
	            policies:{},
	            types: [],
	            assign_roles: {},
	            total: '',
	            from: '',
	            to: '',
                new_agent_prompt: false,
	        }
	    },

		mounted() {
	    	this.getSelectOptions();
	    	this.getUser();
	    	this.getUserRoles();

	    	$('.modal').on("hide.bs.modal", () => this.closeSnotify());
	    	$('.modal').on("hide.bs.modal", () => this.clearModalData());
	    },

	    methods: {

	    	showPortfolio(){
	    		return false;
	    	},

	    	getSelectOptions(){
	    		this.select_options	= JSON.parse(this.selectOptions);
	    	},

	    	getUser(){
	    		this.toggleLoading('user');
	    		axios.get(this.showUserApiRoute)
	                .then(response => {
	                	this.user = response.data.data;
	                	if(this.$_notEmpty(this.user.user_groups_as_admin)){
	                		this.user.user_groups_as_admin = _.orderBy(this.user.user_groups_as_admin, ['code'], ['desc']);
	                	}
	                	if(this.$_notEmpty(this.user.roles)){
							this.user.roles = _.orderBy(this.user.roles, ['name'], ['asc']);
						}
	                	this.employer = response.data.employer[0];
	                	this.country = response.data.data.country;
	                    this.policies = response.data.policies;
	                    this.roles = response.data.data.roles;

	                    if(this.policies.roles_assign){
	            			this.getRoles();
	            		}
	                })
	                .catch(
						(response) => {
	                    	console.log(response.data);
						}
					)
		        	.finally(() => {
		   				this.toggleLoading('user');
		   			});
	    	},

	    	getUserRoles(){
	    		if(this.policies.roles_assign){
		    		axios.get(this.indexUserRoleApiRoute)
		    			.then(response => {
		    				this.roles = response.data.data;
		    			})
		    			.catch(
		    				(response) => {
		    					console.log(response.data);
		    				}
		    			);
	    		}
	    	},

	    	getCountries(){
	    		axios.get(this.indexUserApiRoute)
		        	.then(response => {
		        		this.countries_select_options = response.data.select_options;
		            });
	    	},

	    	getRoles(){
	    		axios.get(this.createUserRoleApiRoute)
		        	.then(response => {
		        		this.assign_roles = response.data.roles;
		               });
	    	},

	        getUserGroups(){
            	axios.get(this.indexUserGroupsApiRoute)
            		.then(response => {
            			this.groups.current = _.sortBy(response.data.data, [function(o) { return o.code; }]);
            		});
            	axios.get(this.indexUserGroupsApiRoute, {
            	    params: {
            	        unattached: 'unattached'
            	      }
            	    })
	        		.then(response => {
	        			this.groups.existing = _.sortBy(response.data.data, [function(o) { return o.code; }]);
	        		});
            },

            getUserGroupsValidation(){
            	axios.get(this.indexUserGroupsApiRoute, {
            	    params: {
            	        unattached: 'unattached'
            	      }
            	    })
	        		.then(response => {
	        			this.groups.validation = response.data.data.map(({ code }) => code);
	        		});
            },

            validateUserGroupCode(){
            	if(this.groups.validation){
            		var validator = this.groups.validation;
            		if(validator.includes(this.form.create_group.code)){
            			this.errors.create_group.code[0] = 'Sorry, the group code entered is taken.';
            			return 'is-invalid';
            		}
            		else{
	            		this.errors.create_group.code[0] = '';
	            		return 'is-valid';
	            	}
            	}
            },

	    	indexUser(){
            	window.location.href = this.indexUserRoute;
            },

            showUser(user_id){
            	window.location.href = this.showUserRoute;
            },

            kycStatus(user_id){
            	window.location.href = this.indexUserDocumentRoute;
            },

            fillEditUser(user){
				this.user = user
				this.form.update.name = user.name
	           	this.form.update.email = user.email
	           	this.form.update.real_name = user.real_name
	           	this.form.update.phone = user.phone
	           	this.form.update.address = user.address
	           	this.form.update.gender = user.gender
	           	this.form.update.race = user.race
	           	if(user.birth_date){
		           	this.form.update.birth_date = moment(user.birth_date).format("YYYY-MM-DD")
	           	}
	           	this.form.update.country_id = user.country_id
	           	this.form.update.id_number = user.id_number
	           	if(user.referral){
	           		this.form.update.referral_id = user.referral.id;
	           	}
	           	else{
	           		this.form.update.referral_id = null;
	           	}
				if(user.commission_plan)
	           		this.form.update.commission_plan_id = user.commission_plan;

	           	if(user.superior_agent)
	           		this.form.update.superior_agent_id = user.superior_agent.id;

	           	if(user.agent)
	           		this.form.update.agent_id = user.agent.id;
            },

            fillUpdateEmployer(user){
            	this.user = user
            	if(this.employer){
            		this.form.update_employer.employer_id = this.employer.id
            	}
            	this.form.update_employer.occupation = user.occupation
	           	this.form.update_employer.income = user.income
	           	this.form.update_employer.name = user.name
            },

            editUser(user_id){
            	this.processing = true;
            	this.$snotify.confirm('Do you confirm?', 'Update User', {
                    closeOnClick: false,
                    buttons: [
                        {text: 'Yes', action: (toast) => this.patchUserRequest(toast, user_id), bold: false},
                        {text: 'No', action: (toast) => {this.closeSnotify();}},
                    ],
	        	});
            },

			patchUserRequest(toast, user_id){
            	this.closeSnotify();
  				this.errors.update = [];
  				axios.patch(this.updateUserApiRoute, this.form.update)
			  	   	.then(response => {
			  	   		this.processing = false;
			  	   		this.getUser();
				  	   	window.setTimeout(function(){
				  	   		$('#modal-edit-user').modal('hide');
				        }, 2000)
					  	this.$snotify.success('User details successfully updated!');
			  	    })
  					.catch(({response}) => {
  						this.processing = false;
  	   					this.$snotify.error(response.data.message);
  	   					this.errors.update = response.data.errors;
				});
  			},

  			updateEmployer(user_id){
            	this.processing = true;
            	this.$snotify.confirm('Do you confirm?', 'Update Employer', {
                    closeOnClick: false,
                    buttons: [
                        {text: 'Yes', action: (toast) => this.storeUserEmployerRequest(toast, user_id), bold: false},
                        {text: 'No', action: (toast) => {this.closeSnotify();}},
                    ],
	        	});
            },

			storeUserEmployerRequest(toast, user_id){
            	this.closeSnotify();
  				this.errors.update_employer = [];
  				axios.post(this.storeUserEmployerApiRoute, this.form.update_employer)
			  	   	.then(response => {
			  	   		this.processing = false;
			  	   		this.getUser();
				  	   	window.setTimeout(function(){
				  	   		$('#modal-update-employer').modal('hide');
				        }, 2000)
					  	this.$snotify.success('Employer details updated successfully!');
			  	    })
  					.catch(({response}) => {
  						this.processing = false;
  						console.log(response.data);
  	   					this.$snotify.error(response.data.message);
  	   					this.errors.update_employer = response.data.errors;
				});
  			},

  			deleteUser(user_id) {
            	this.processing = true;
            	this.$snotify.confirm('Do you confirm to delete?', 'Delete User', {
                    closeOnClick: false,
                    buttons: [
                        {text: 'Yes', action: (toast) => this.deleteUserRequest(toast, user_id), bold: false},
                        {text: 'No', action: (toast) => {this.closeSnotify();}},
                    ],
	        	});
            },

			deleteUserRequest(toast, user_id){
            	this.closeSnotify();
  				axios.delete(this.deleteUserApiRoute)
			  	   	.then(response => {
					  	this.$snotify.success(response.data.message);
			  	    })
  					.catch(
  						(response) => {
	  	   					this.$snotify.error(response.data.message);
	  	   					this.setErrors(response);
						}
					)
	  				.then(response => {
						setTimeout(() => window.location.href = this.indexUserRoute, 3000);
					});
  			},

            fillAssignRole(mode){

            	switch(mode){

            		case 'update':
            			this.form.assign.roles = this.roles.map(({ id }) => id);
            		break;

            		case 'upgrade':
            			this.form.assign.roles = [2,3];
            		break;
            	}

        		this.$refs.roles_selection.selectedValue(this.form.assign.roles);
            	this.form.assign.mode = mode;
            },

  			storeRole(){
            	this.processing = true;
            	switch(this.form.assign.mode){
            		case 'update':
            			var title = "Update Roles";
            		break;

            		case 'upgrade':
            			var title = "Upgrade to Agent";
            		break;
            	}
            	this.$snotify.confirm('Do you confirm?', title, {
                    closeOnClick: false,
                    buttons: [
                        {text: 'Yes', action: (toast) => this.storeUserRoleRequest(toast), bold: false},
                        {text: 'No', action: (toast) => {this.closeSnotify();}},
                    ],
	        	});
            },

            storeUserRoleRequest(toast, mode){
				this.closeSnotify();
  				this.errors.assign_role = [];
  				axios.post(this.storeUserRoleApiRoute, this.form.assign)
 					.then(response => {
		  	   		this.processing = false;
		  	   		this.getUser();
		  	   		this.getUserRoles();
			  	   	window.setTimeout(function(){
			  	   		$('#modal-assign-role').modal('hide');
			        }, 2000)
			        this.$snotify.success('Assigned Roles Updated Successfully.');
		  	    })
		  	    .catch(({response}) => {
 						this.processing = false;
 	   					this.$snotify.error(response.data.message);
 	   					this.errors.assign_role = response.data.errors;
				})
				.finally(() => {
			        if(this.form.assign.mode == 'upgrade'){
			        	this.new_agent_prompt = true;
			        }
			    });
  			},

  			createGroup() {
  				this.processing = true;
  				this.form.create_group.user_id = this.user.id;
             	this.$snotify.confirm('Create new group', 'Do you confirm?', {
                     closeOnClick: false,
                     buttons: [
                         {text: 'Yes', action: (toast) => this.storeGroupRequest(toast), bold: false},
                         {text: 'No', action: (toast) => {this.closeSnotify();}},
                     ],
 	        	});
            },

  			storeGroupRequest (toast){
              	this.closeSnotify();
              	this.errors.create_group = [];
    				axios.post(this.storeGroupApiRoute, this.form.create_group)
  			  	   	.then(response => {
  			  	   		$('#modal-create-group').modal('hide');
  					  	this.$snotify.success('New group successfully created!');
  					  	this.getUser();
  					  	this.getUserGroups();
  			  	    })
   					.catch(({response}) => {
   						this.$snotify.error('The given data is invalid');
   	   					this.errors.create_group = response.data.errors;
  					});
    		},

    		clearCreateGroup(){
  				this.form.create_group.user_id = '';
  				this.form.create_group.code = '';
  			},

  			storeUserGroup(group_id){
            	this.processing = true;
            	this.$snotify.confirm('Do you confirm?', 'Assign Group', {
                    closeOnClick: false,
                    buttons: [
                        {text: 'Yes', action: (toast) => this.storeUserGroupRequest(toast, group_id), bold: false},
                        {text: 'No', action: (toast) => {this.closeSnotify();}},
                    ],
	        	});
            },

            storeUserGroupRequest(toast, id){
				this.closeSnotify();
  				axios.post(this.storeUserGroupsApiRoute, {
  					user_group_id: id
  				})
 					.then(response => {
		  	   		this.processing = false;
		  	   		this.getUserGroups();
		  	   		this.getUser();
			        this.$snotify.success('User group added successfully.');
		  	    })
		  	    .catch(({response}) => {
			        this.$snotify.success('User group failed to assign.');
				});
  			},

  			deleteUserGroup(group) {
            	this.processing = true;
            	this.$snotify.confirm('Do you confirm to delete?', 'Remove User Group', {
                    closeOnClick: false,
                    buttons: [
                        {text: 'Yes', action: (toast) => this.deleteUserGroupRequest(toast, group), bold: false},
                        {text: 'No', action: (toast) => {this.closeSnotify();}},
                    ],
	        	});
            },

			deleteUserGroupRequest(toast, group){
            	this.closeSnotify();
  				axios.delete(this.deleteUserGroupsApiRoute.replace('user_groups', group.id))
			  	   	.then(response => {
			  	   		this.getUser();
					  	this.$snotify.success('User group removed successfully!');
					  	this.getUserGroups();
			  	    })
  					.catch(
  						(response) => {
	  	   					this.$snotify.error('User group failed to remove!');
						}
					);
  			},

  			editUserPassword(){
            	this.processing = true;
            	this.$snotify.confirm('Do you confirm?', 'Reset Password', {
                    closeOnClick: false,
                    buttons: [
                        {text: 'Yes', action: (toast) => this.patchUserPasswordRequest(toast), bold: false},
                        {text: 'No', action: (toast) => {this.closeSnotify();}},
                    ],
	        	});
            },

            patchUserPasswordRequest(toast){
				this.closeSnotify();
  				this.errors.assign_role = [];

  				axios.patch(this.updateUserApiRoute, this.form.reset_password)
 				.then(response => {
		  	   		this.processing = false;
		  	   		this.getUser();
		  	   		this.$snotify.success('User password is successfully updated.');
			  	   	$('#modal-reset-password').modal('hide');
		  	    })
		  	    .catch(({response}) => {
 						this.processing = false;
 	   					this.$snotify.error('Invalid input data!');
 	   					this.errors.reset_password = response.data.errors;
 	   					console.log(response.data);
				});
  			},

  			setErrors(response) {
  				console.log("Error");
  				console.log(response);
                this.errors = response.data.errors;
            },

            closeSnotify () {
            	this.processing = false;
            	this.$snotify.remove();
            },

  			chevronFunction() {
        		let chevron = document.getElementById("upload_claim_documents");

        		if (chevron.className === "fas fa-fw fa-chevron-down") {
        	  		chevron.className = 'fas fa-fw fa-chevron-up'
        		} else {
        			chevron.className = 'fas fa-fw fa-chevron-down'
        		}
        	},

        	showFunction(action, type) {

        		let pin = document.getElementById(action);

       			switch(type){
	       			case 'input_password':
		       			let button = document.getElementById(action + "_button");
		           		let title = document.getElementById(action + "_show");

		           		if (pin.type === "password") {
		           	  		pin.type = "text";
		           	  		button.className = "fas fa-eye-slash fa-fw";
		           	  		title.title = "Hide" ;
		           		} else {
		           	  		pin.type = "password";
		           	  		button.className = "fas fa-eye fa-fw";
		           	  		title.title = "Show";
		           		}

		           		break;

	       			case 'view_password':
	          			let viewable = null;

	       				if(action.includes('_pin')){
	          				viewable = this.bank.data.pin;
	          			}
	          			else
	      					if(action.includes('_password')){
	      						viewable = this.bank.data.password;
	      					}

	          			if(pin.innerHTML == viewable){
	      					pin.innerHTML = "******";
	      					pin.title = "Show";
	      				}
	      				else{
	      					pin.innerHTML = viewable;
	      					pin.title = "Hide";
	      				}

	          			break;
       			}

        	},

            toggleLoading(section){
	        	switch(section){
	        	case 'user':
	        		this.loading.user = !this.loading.user;
	        		break;
	        	// case 'bank':
	        	// 	this.loading.bank = !this.loading.bank;
	        	// 	break;
	        	// case 'claim':
	        	// 	this.loading.claim = !this.loading.claim;
	        	// 	break;

	        	}
	        },

            //	Modal Data Clearance
            clearModalData(){
	    		// this.$refs.chronicles_bank.clearChronicles();
	    		// this.clearCreateBank();
		    	// this.clearUpdateBank();
		    	// this.clearCreateClaim();
		    	this.clearCreateGroup();
	    	},
	    }

	}
</script>
