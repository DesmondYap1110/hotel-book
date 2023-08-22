<style>
.orgchart .hierarchy::before {
  content: "";
  position: absolute;
  top: -11px;
  left: 0;
  width: 100%;
  border-top: 2px solid rgba(0, 123, 255, 0.8);
  box-sizing: border-box;
}

.orgchart .node .title {
  box-sizing: border-box;
  padding: 2px;
  width: 130px;
  text-align: center;
  font-size: 0.75rem;
  font-weight: bold;
  height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  background-color: rgba(0, 123, 255, 0.8);
  color: #fff;
  border-radius: 4px 4px 0 0;
}

.orgchart .node .content {
  box-sizing: border-box;
  padding: 2px;
  height: 20px;
  font-size: 0.625rem;
  border: 1px solid rgba(0, 123, 255, 0.8);
  border-radius: 0 0 4px 4px;
  text-align: center;
  background-color: #fff;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.orgchart .nodes.vertical .hierarchy::before,
.orgchart .nodes.vertical .hierarchy::after {
  box-sizing: border-box;
  content: '';
  position: absolute;
  left: -6px;
  border-color: rgba(0, 123, 255, 0.8);
  border-style: solid;
  border-width: 0 0 2px 2px;
}

.orgchart .nodes.vertical::before {
  content: '';
  display: inline-block;
  position: relative;
  height: 14px;
  width: 2px;
  left: -9px;
  background-color: rgba(0, 123, 255, 0.8);
}

.orgchart .node:not(:only-child)::after {
  content: "";
  position: absolute;
  bottom: -11px;
  left: calc(50% - 1px);
  width: 2px;
  height: 9px;
  background-color: rgba(0, 123, 255, 0.8);
}

.orgchart > ul > li > ul li > .node::before {
  content: "";
  position: absolute;
  top: -11px;
  left: calc(50% - 1px);
  width: 2px;
  height: 9px;
  background-color: rgba(0, 123, 255, 0.8);
}
</style>

<template>
  <div class="content-wrapper">
    <section class="content-header">
      <div class="container-fluid">
        <div class="row justify-content-between">
          <div class="col-sm-4 col-xs-4">
            <div class="card m-0 d-inline-block">
                <div class="card-header">
                    <h5 class="m-0">
                      <i class="fas fa-sitemap fa-rotate-270"></i> Agent Structure
                    </h5>
                </div>
            </div>
          </div>
          <div class="col-sm-8 col-xs-8 align-self-center">
            <ol class="breadcrumb float-sm-right text-primary">
              <li class="breadcrumb-item">
                <a href="#">
                  <i class="fas fa-fw fa-users"></i> Users
                </a>
              </li>
              <li class="breadcrumb-item active">Agent Structure</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <div class="card card-primary">
              <div class="card-header" data-card-widget="collapse">
                <h3 class="card-title">
                  <i class="fas fa-filter"></i> Filter
                </h3>
                <div class="card-tools">
                  <button type="button" class="btn btn-tool" data-card-widget="collapse">
                    <i class="fas fa-minus"></i>
                  </button>
                </div>
              </div>
              <div class="card-body">
                <div class="row justify-content-center">
                  <div class="col-md-8 col-sm-12">
                    <fieldset class="border border-grey">
                      <legend class="mb-0 ml-3 text-left">
                        <span>Viewing Mode</span>
                        <!--i class="fas fa-fw fa-exclamation-circle" title=""></i-->
                      </legend>
                      <div class="row">
                        <div class="col-sm-12">
                          <div class="form-row m-4 justify-content-around">
                            <div class="mr-3" v-if="policy.admin_view_company_agents">
                              <input type="radio" v-model="viewing_mode" value="company" id="company_structure" @click="removeChart(); resetSearch()">
                              <label class="form-check-label" for="company_structure">
                                Company Structure
                                <i class="fas fa-fw fa-info-circle" title="View all agents within the company."></i>
                              </label>
                            </div>
                            <div class="mr-3">
                              <input type="radio" v-model="viewing_mode" value="agent" id="agent_structure" @click="removeChart(); resetSearch()">
                              <label class="form-check-label" for="agent_structure">
                                Agent Structure
                                <i class="fas fa-fw fa-info-circle" title="View agent's individual downline structure."></i>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
                <!-- <div class="d-flex flex-row-reverse col-10" v-if="viewing_mode == 'agent'">
                  <b class="float-right align-self-end small font-italic text-muted">By Agents</b>
                </div> -->
                <div class="row" v-if="viewing_mode == 'company'">
                  <div class="col-md-6 col-sm-12">

                  </div>
                </div>
                <div class="row justify-content-center my-3" v-if="viewing_mode == 'agent'">
                  <div class="col-md-8 col-lg-4">
                    <div class="form-group">
                      <label for="agent_id">Select Agent*</label>
                      <v-select
                        name="selected_agent"
                        class="text-capitalize"
                        v-model="form.agent_id"
                        :options="select_options.agents"
                        label="name"
                        index="id"
                        id="agent_id"
                        placeholder="Please choose one"
                        @change="filterAgent">
                      </v-select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-footer">
                <div class="row justify-content-between">
                  <p class="d-inline font-italic font-weight-light"><small>The asterisk field is required.</small></p>
                  <div class="float-right d-inline">
                    <!-- <button class="btn btn-primary mr-1" id="generate" v-if="viewing_mode == 'agent'">
                      <i class="fas fa-cog" aria-hidden="true"></i> Load Agent Structure
                    </button> -->
                    <button class="btn btn-primary mr-1" @click="getCompanyStructure" v-if="viewing_mode == 'company' && policy.admin_view_company_agents">
                      <i class="fas fa-fw fa-project-diagram" aria-hidden="true"></i> Load Company Structure
                    </button>
                    <button class="btn btn-outline-primary" id="empty" @click="removeChart(); resetSearch()">
                      <i class="fas fa-fw fa-ban" aria-hidden="true"></i> Reset Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="card card-primary card-outline" v-if="viewing_mode">
              <div class="card-header border-bottom-0">
                <h3 class="card-title">
                  {{ viewing_mode == 'agent' ? 'Showing Agent Structure' + (user.name ? ' of ' + user.name : '') : 'Showing Company Structure' }}
                </h3>
              </div>
              <div class="card-body text-center row justify-content-center">
                <div class="col-10 card" id="chart-container"></div>
              </div>
              <div class="card-footer justify-content-between">
                <div class="small font-italic">
                    The <i class="fas fa-user"></i> icon indicates that the particular user has downline(s).
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import "../../jquery.orgchart.js";
var qs = require('qs');
import CustomDirectives from '../../directives/customDirectives';

export default{
  props: {
    indexUserRoute: {
        type: String,
    },
    indexUserApiRoute: {
        type: String,
    },
    indexUserDownlineApiRoute: {
        type: String,
    },
    showUserApiRoute: {
        type: String,
    },
    policyCheckApiRoute: {
        type: String,
    },
    selectOptionApiRoute: {
        type: String,
    },
  },

  data(){
    return {
      params: {
        view: {
          'mode': '',
        },
        select_option: {
          'select_option': 'agents',
        },
        policy: {
          'policy': 'admin_view_company_agents',
        }
      },
      form: {
        agent_id: '',
      },
      user: {
        'id': '',
        'name': '',
        'real_name': '',
        'prefix': '',
        'children': [],
      },
      company_structure: [],
      company_param: {
        has_downlines: false,
      },
      select_options: {
        agents: [],
      },
      agentChartGenerated: false,
      viewing_mode: '',
      policy: {},
    }

  },

  mounted() {
    this.getPolicy();
    this.getSelectOption();
  },

  methods: {
    filterAgent(){
      if(this.user.id){
        this.getUser();
      }
      else{
        if(this.form.agent_id){
          this.getUser();
        }
      }
    },

    getCompanyStructure(){
      this.removeChart();
      this.params.view.mode = 'zero-level-agents';
      axios.get(this.indexUserApiRoute, {
          'params': this.params.view,
          'paramsSerializer': function(params) {
             return qs.stringify(params, {arrayFormat: 'bracket'})
          },
      })
      .then(response => {
        console.log(response.data);
        this.company_structure = response.data.data;
      })
      .finally(() => {
          this.company_structure.forEach((obj) => {
            this.loadChart(obj);
          });
      });
    },

    getUser(){
      axios.get(this.showUserApiRoute.replace('user_id', this.form.agent_id))
      .then(response => {
        this.user.id = response.data.data.id;
        this.user.name = response.data.data.name;
        this.user.real_name = response.data.data.real_name;
        this.user.prefix = response.data.data.prefix;
        this.params.view.mode = 'downlines';
      })
      .finally(() => {
        this.getChildren();
      });
    },

    getChildren(){
      if(this.agentChartGenerated){
        this.toggleAgentChartGenerate();
      }
      this.removeChart();
      axios.get(this.indexUserDownlineApiRoute.replace('user_id', this.form.agent_id), {
          'params': this.params.view,
          'paramsSerializer': function(params) {
             return qs.stringify(params, {arrayFormat: 'bracket'})
          },
      })
      .then(response => {
        this.user.children = response.data.children;
        //this.user.children.forEach(addChildrenArrayFunction);
        if(this.$_notEmpty(this.user.children)){
          this.user.has_downline_agent = true;
          this.user.relationship = '001';
        }
        if(!this.agentChartGenerated){
          this.loadChart(this.user);
          this.toggleAgentChartGenerate();
        }
      });
    },

    loadChart(data){
      var ajaxURLs = {
        'children': this.indexUserDownlineApiRoute,
      };
      $('#chart-container').orgchart({
        'data': data,
        'nodeTitle': 'prefix',
        'nodeContent': 'name',
        'toggleSiblingsResp': 'true',
        // 'zoom': 'true',
        'pan': 'true',
        'chartClass': 'position-relative',
        'direction': 'l2r',
        'ajaxURL': ajaxURLs,
        'redirectUrl': '/admin/users/',
        // 'zoominLimit': '1.5',
        // 'zoomoutLimit': '0.75',
        // 'initCompleted': function() {
        //   $('#generate').on('click', function (argument) {
        //     oc.init({ 'data': data });
        //   });
        // }
      });
    },

    getPolicy(){
      axios.get(this.policyCheckApiRoute, {
          'params': this.params.policy,
          'paramsSerializer': function(params) {
             return qs.stringify(params, {arrayFormat: 'bracket'})
          },
      })
      .then(response => {
        this.policy = response.data;
      });
    },

    getSelectOption(){
      axios.get(this.selectOptionApiRoute, {
          'params': this.params.select_option,
          'paramsSerializer': function(params) {
             return qs.stringify(params, {arrayFormat: 'bracket'})
          },
      })
      .then(response => {
        this.select_options.agents = response.data;
      });
    },

    removeChart(){
      $('div').remove(".orgchart, .position-relative");
    },

    resetSearch(){
      this.user.id = '';
      this.user.name = '';
      this.user.real_name = '';
      this.user.prefix = '';
      this.user.relationship = '';
      this.user.has_downline_agent = false;
      this.user.children = [];
      this.company_structure = [];
      this.form.agent_id = '';
    },

    toggleAgentChartGenerate(){
      this.agentChartGenerated = !this.agentChartGenerated;
    },
  }
}
</script>
