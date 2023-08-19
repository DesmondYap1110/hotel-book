<template>
    <div class="form-horizontal col-12 overlay-wrapper">
        <span class="overlay" v-if="loading_chronicles">
               <img src="/images/loading1.gif" width="50px" height="50px">
               <span class="sr-only">Loading...</span>
        </span>
        <div class="timeline" v-if="chronicles.data.length">

            <div class="time-label" v-if="chronicles.data.length">
                <span class="bg-navy"><b>Present</b></span>
            </div>
            <div v-for="chronicle in chronicles.data" :title="chronicle.extras.title + ' - ' + chronicle.created_at" v-if="isHiddenAspect(chronicle)">
                <i class="fas fa-fw" :class="chronicle.extras.icon"></i>
                <div class="timeline-item">
                    <div class="timeline-header">
                        <b>{{ chronicle.extras.title }}</b>
                        <span class="time float-right">{{ chronicle.created_at }}</span>
                    </div>
                    <div class="timeline-body small">
                        <span class="d-inline">{{ chronicle.extras.action }}</span>
                        <a class="d-inline" data-toggle="modal" :href="'#chronicle-details-'+chronicle.id" title="View All" v-if="chronicle.method == 'created'">
                            <i class="fas fa-eye text-primary"></i>
                        </a>
                        <a class="d-inline" data-toggle="modal" :href="'#chronicle-updates-'+chronicle.id" title="View Details" v-if="viewDetails(chronicles.model, chronicle)">
                            <i class="fas fa-eye text-primary"></i>
                        </a>
                    </div>
                    <div class="modal fade" :id="'chronicle-details-'+chronicle.id">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4><i class="fas fa-fw fa-info"></i> {{ chronicles.model }} Details</h4>
                                    <button type="button" class="close float-right" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true"><i class="fas fa-fw fa-times"></i></span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <div class="card card-light p-3">
                                        <div class="d-flex flex-row" style="margin: 0" v-for="(value, key) in chronicle.original_attributes">
                                            <b class="col-md-3 text-capitalize d-inline">{{ key }}</b> <b class="d-inline">:</b>
                                            <div class="col-md-8 d-inline m-0">{{ value ? value : '-- null --' }}</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default float-right" data-dismiss="modal" aria-label="Close">
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" :id="'chronicle-updates-'+chronicle.id">
                        <div class="modal-dialog modal-xl">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4><i class="fas fa-fw fa-pen"></i> Changed Attributes</h4>
                                    <button type="button" class="close float-right" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true"><i class="fas fa-fw fa-times"></i></span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <div class="card card-light p-3">
                                        <div class="d-flex flex-row callout callout-info mb-1 py-1" style="margin: 0">
                                            <b class="col-md-2 d-inline">Attributes</b>
                                            <b v-if="chronicle.original_attributes" class="d-inline text-danger" :class="chronicle.original_attributes ? 'col-md-5' : ''">
                                                <i class="fas fa-fw fa-times-circle"></i>
                                                Previous Value
                                            </b>
                                            <b class="d-inline text-info" :class="chronicle.original_attributes ? 'col-md-5' : 'col-md-10'">
                                                <i class="fas fa-fw" :class="(chronicles.model == 'User' && chronicle.method == 'store') ? 'fa-exchange-alt fa-rotate-90' : 'fa-check-circle'"></i>
                                                {{ (chronicles.model == 'User' && chronicle.method == 'store') ? 'Role Changes' : 'Current Value' }}
                                            </b>
                                        </div>
                                        <div class="callout callout-danger mb-1" style="margin: 0">
                                            <div class="d-flex flex-row" v-for="(value, key) in chronicle.original_attributes" v-if="chronicle.original_attributes && !chronicle.changed_attributes">
                                                <b class="col-md-2 text-capitalize d-inline" v-if="isHiddenKey(key)">{{ key }}</b>
                                                <div class="col-md-5 d-inline m-0" v-if="isHiddenKey(key)">{{ value ? value : '-- null --' }}</div>
                                            </div>
                                            <div class="d-flex flex-row" v-for="(value, key) in chronicle.changed_attributes" v-if="!chronicle.original_attributes && chronicle.changed_attributes">
                                                <b class="col-md-2 text-capitalize d-inline" v-if="isHiddenKey(key)">{{ key }}</b>
                                                <div v-if="isArray(value)" class="col-md-10 d-inline m-0">
                                                    <span class="badge ml-1" v-for="role in value" :class="key == 'attached' ? 'badge-primary' : key == 'detached' ? 'badge-danger' : 'badge-info'">
                                                        {{ role }}
                                                    </span>
                                                </div>
                                                <div class="col-md-5 d-inline m-0" v-else>
                                                    <p class="m-0" v-if="isHiddenKey(key)">
                                                        {{ value ? value : '-- null --' }}
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="d-flex flex-row" v-for="(value, key) in chronicle.original_attributes" v-if="chronicle.original_attributes && chronicle.changed_attributes">
                                                <b class="col-md-2 text-capitalize d-inline" v-if="isHiddenKey(key)">{{ key }}</b>
                                                <div v-if="isArray(value)" class="col-md-10 d-inline m-0">
                                                    <span class="badge ml-1" v-for="role in value" :class="key == 'attached' ? 'badge-primary' : key == 'detached' ? 'badge-danger' : 'badge-info'">
                                                        {{ role }}
                                                    </span>
                                                </div>
                                                <div class="col-md-5 d-inline m-0 text-muted" v-else>
                                                    <p class="m-0" v-if="isHiddenKey(key)" id="original_value">
                                                        {{ (key == 'password' || key == 'pin') ? '-- classified --' : value ? value : '-- null --' }}
                                                    </p>
                                                </div>
                                                <div class="d-inline m-0" v-for="(value_1, key_1) in chronicle.changed_attributes" :class="chronicle.original_attributes ? 'col-md-5' : 'col-md-10'" v-if="key_1 == key">
                                                    <p class="m-0" v-if="isHiddenKey(key_1)" id="changed_value">
                                                        {{ (key == 'password' || key == 'pin') ? '-- classified --' : value_1 ? value_1 : '-- null --' }}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default float-right" data-dismiss="modal" aria-label="Close">
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="chronicles.data.length" :title="show_more_button ? 'See older histories' : 'You have reached the end of all histories.'">
                <i class="fas fa-fw bg-navy" :class="loading_chronicles ? 'fa-circle-notch fa-spin' : show_more_button ? 'fa-ellipsis-h' :  'fa-clock'" aria-hidden="true"></i>
                <div class="text-center" v-if="show_more_button">
                    <span v-if="loading_chronicles">
                        <i class="fas fa-circle-notch fa-spin text-primary" aria-hidden="true"></i>
                    </span>
                    <button type="button" class="btn btn-sm btn-flat text-primary" @click="getMoreChronicles()" v-else>
                        <b>See More</b>
                    </button>
                </div>
            </div>
        </div>
        <div v-else class="p-3 d-flex flex-column align-content-center border justify-content-center border-dotted overlay-wrapper">
            <img alt="" src="/images/icons/icons8-empty-box.png" width="60" height="60" class="m-auto">
            <small class="text-muted font-italic m-auto">No History</small>
        </div>
        <p class="small font-italic" v-if="chronicles.data[0]">
            ** Histories are ordered chronologically.
        </p>
    </div>

    </template>

    <script>

    export default{
        props: [
            'index-chronicle-route'
        ],

        data(){
            return {
                chronicles: {
                    data: [],
                    pagination: {},
                    model: '',
                    policies: {},
                },
                loading_chronicles: false,
                show_more_button: false,
            }
        },

        methods: {
            getChronicles(nextpage){
                this.toggleLoading();
                axios.get(nextpage ? this.chronicles.pagination.links.next : this.indexChronicleRoute)
                    .then(response => {
                        this.chronicles.data = nextpage ? _.concat(this.chronicles.data, response.data.data) : response.data.data;
                        this.chronicles.pagination.links = response.data.links;
                        this.chronicles.pagination.meta = response.data.meta;
                        this.chronicles.model = response.data.model;
                        this.chronicles.policies = response.data.policies;
                        if(this.chronicles.pagination.meta.last_page > this.chronicles.pagination.meta.current_page){
                            this.show_more_button = true;
                        }
                        else{
                            this.show_more_button = false;
                        }
                    })
                    .catch((response) => {
                           this.$snotify.error('Failed to Load Chronicles.');
                    })
                    .finally(() => {
                           this.toggleLoading();
                    });
            },

            getMoreChronicles(){
                this.getChronicles(true);
            },

            clearChronicles(){
                this.chronicles.data = [];
                this.chronicles.pagination = {};
                this.chronicles.model = '';
                this.chronicles.policies = {};
            },

            viewDetails(model, chronicle){
                if(chronicle.method == 'updated')
                    if(chronicle.changed_attributes.prefix)
                        return false;
                    else
                        if(chronicle.changed_attributes.user_group_id)
                            return false;
                        else
                            if(chronicle.changed_attributes.password && model == 'User')
                                return false;
                            else
                                if(!chronicle.changed_attributes.status)
                                    return true;

                if(model == 'User' && chronicle.method == 'store')
                    return chronicle.changed_attributes.attached ? true : false;
            },

            toggleLoading: function(){
                this.loading_chronicles = !this.loading_chronicles;
            },

            isCreation(title){
                return title.includes("Creation");
            },

            isArray(value){
                return Array.isArray(value);
            },

            isHiddenKey(key){
                   if(key == 'updated_at')
                       return false;
                   else
                       return true;
            },

            isHiddenAspect(chronicle){
                if(chronicle.method == 'updated')
                       if(chronicle.changed_attributes.remember_token)
                              return false;
                      else
                          return true;
                else
                    return true;
            },

            closeSnotify () {
                this.processing = false;
                this.$snotify.remove();
            },

        }
    }
    </script>
