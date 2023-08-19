<template>

    <div>
        <section id="our-service-area">
            <div class="booking-sec">
                <div class="container">
                    <div class="justify-content-center">
                        <div class="row">
                            <div class="col-lg-3 col-lg-offset-3 col-md-3 col-md-offset-3 col-sm-12">
                                <div class="single-field ">
                                    <div class="form-group">
                                        <h4>
                                            <label for="amount">Amount*</label>
                                        </h4>
                                        <input v-model="form.amount" name="amount" type="text" id="amount" class="form-control" :class="{'is-invalid': errors.amount}" :disabled="processing">
                                        <span v-if="errors.amount" class="help-block text-danger">
                                            {{ errors.amount[0] }}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-3 col-sm-12">
                                <div class="single-field">
                                    <div class="form-group">
                                        <h4>
                                            <label for="period">Period*</label>
                                        </h4>
                                        <input v-model="form.period" name="period" type="text" id="period" class="form-control" :class="{'is-invalid': errors.period}" :disabled="processing">
                                        <span v-if="errors.period" class="help-block text-danger">
                                            {{ errors.period[0] }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-12">
                                <div class="single-field">
                                    <div class="form-group">
                                        <h4>
                                            <label for="period">Interest*</label>
                                        </h4>
                                        <input v-model="form.interest" name="interest" type="text" id="interest" class="form-control" :class="{'is-invalid': errors.interest}" :disabled="processing">
                                        <span v-if="errors.interest" class="help-block text-danger">
                                            {{ errors.interest[0] }}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-3 col-sm-12">
                                <div class="single-field">
                                    <div class="form-group">
                                        <h4>
                                            <label for="period">Interest Type*</label>
                                        </h4>
                                        <select :disabled="this.processing" name="payment_type" v-model="form.interest_type" class="form-control text-capitalize" :class="{'is-invalid': errors.interest_type }">
                                            <option v-for="(value, key) in interest_types" :key="key" :value="key" v-if="key != 'capital settlement'">{{ value }}</option>
                                        </select>
                                        <span v-if="errors.interest_type" class="help-block text-danger">
                                            {{ errors.interest_type[0] }}
                                        </span>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="row justify-content-center">
                            <div class="col-lg-3 col-md-3 col-sm-4 col-md-offset-4"  style="margin-top:1.5rem">
                                <div class="single-field">
                                    <button class="testtest btn calculate" @click="getCalculatedRepayments()">Calculate</button>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-4"  style="margin-top:1.5rem">
                                <div class="single-field">
                                    <a @click="reset()" class="testtest text-white btn reset">Reset</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <div v-if="repayments.length" class="mb-5">
            <section class="mb-5" id="hide1">
                <div class="container">
                    <hr style="border-top: dashed 1.5px #fd0000; margin: 10px 0px" />
                </div>
            </section>

            <section class="cx-section pb-100 text-center hidden-xs hidden-sm" id="hide2">
                <div class="container">
                    <h1 class="font-weight-bold text-capitalize">{{ type_title }}</h1>
                    <table class="container1">
                        <thead>
                            <tr>
                                <th width="15%"><h1>Term</h1></th>
                                <th width="20%"><h1>Total</h1></th>
                                <th width="20%"><h1>Interest</h1></th>
                                <th width="20%"><h1>Capital</h1></th>
                                <th width="25%"><h1>Remaining Capital</h1></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in repayments">
                                <td>{{ item.period }}</td>
                                <td>{{ item.total }}</td>
                                <td>{{ item.interest }}</td>
                                <td>{{ item.capital }}</td>
                                <td>{{ item.remaining_capital }}</td>
                            </tr>
                        </tbody>
                        <tfoot v-if="summary">
                            <tr>
                                <td colspan="2"></td>
                                <td>Total Interest</td>
                                <td>Total Capital</td>
                                <td>Total Repayment</td>
                            </tr>
                            <tr>
                                <td class="text-white" colspan="2">Capital: {{ summary.input_capital }}</td>
                                <td>{{ summary.total_interest }}</td>
                                <td>{{ summary.total_capital }}</td>
                                <td>{{ summary.total_repayment }}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </section>
        </div>

        <vue-snotify></vue-snotify>

    </div>

    </template>

    <script>

        var qs = require('qs');

        export default {

             props: [
                 'get-calculated-repayments-api-route',
                 'select-options'
               ],

            data(){
                return {
                    repayments: {},
                    summary: {},
                    type_title: '',
                    form:{
                        amount: '',
                        period: '',
                        interest: '',
                        interest_type: '',
                    },
                    errors: {},
                    interest_types:{},
                    processing: false
                }
            },

            mounted() {
                this.getSelectOptions();
                this.getParams();
            },

            methods: {

                getParams(){
                    let uri = window.location.search.substring(1);
                    let params = new URLSearchParams(uri);

                    if(params.get("amount")){
                        this.form.amount = params.get("amount")
                    }
                    if(params.get("product")){
                        this.form.interest_type = params.get("product")
                    }
                    if(params.get("period")){
                        this.form.period = params.get("period")
                    }
                    if(params.get("interest")){
                        this.form.interest = params.get("interest")
                    }
                    if(params.has('amount') || params.has('product') || params.has('period') || params.has('interest')){
                        this.getCalculatedRepayments();
                    }
                },

                getSelectOptions() {
                    this.interest_types = JSON.parse(this.selectOptions);
                    this.form.interest_type = this.interest_types.fixed;
                },

                getCalculatedRepayments() {
                    axios.get(this.getCalculatedRepaymentsApiRoute, {
                        'params': this.form,
                        'paramsSerializer': function(params) {
                        return qs.stringify(params, {arrayFormat: 'repeat'})
                        },
                    })
                    .then(response => {
                        this.type_title = this.form.interest_type;
                        this.repayments = response.data.data;
                        this.summary = response.data.summary;
                    })
                    .catch(error => {
                        if(error.response.status == 422){
                            this.$snotify.error('The given data is invalid!');
                            this.errors = error.response.data.errors;
                        }
                        else
                            this.$snotify.error('Failed to calculate loan repayment!');
                        console.log(error.response);
                    });
                },

                reset(){
                    window.location.reload();
                }

            }

        }
    </script>
