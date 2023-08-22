<style scope>
.role-box{
	display: block;
	cursor: pointer;
}

legend {
   width: auto !important;
}

fieldset{

}


</style>

<template>

    <div>
    	<div class="text-capitalize row">

    		<div class="mb-3 col-sm-4" v-for="(category, key, index) in roles">
    			<fieldset class="border border-primary">
    				<legend class="m-0 p-2 text-center">{{ key }}</legend>
    				<div class="row mb-2">
	    				<div class="col-sm-12" v-for="(item, key) in category">
		    				<label class="p-2 pl-5 role-box" data-toggle="tooltip" data-placement="bottom" title="">
				      			<input type="checkbox" class="form-check-input" :value="key" :key="key" v-model="selection" @change="changeRoles">
				      			{{ item }}
				          	</label>
	    				</div>
	    			</div>
    			</fieldset>
    		</div>

		</div>
		<div class="row">
			<div class="col-sm-12 text-center">
				<button @click="clearSelection" class="btn pl-5 pr-5 btn-outline-primary">Clear All</button>
			</div>
		</div>

    </div>

</template>

<script>

    export default{
        props: {
            roles: {
            	type: Object,
            	required: false,
            	default: () => ({})
            },

            oldValues: {
            	type: Object,
            	required: false,
            	default: () => ({})
            },

            value: {
                type: Array,
                required: true
            }

         },

        data(){
        	return {
        		selection: []
        	}
        },

        mounted(){
        	//
        },



        methods: {

            selectedValue(selectedValues){
                this.selection = selectedValues;
                console.log(this.selection);
            },

            changeRoles(){

            	if(this.selection.includes('1') || this.selection.includes('2') || this.selection.includes('3')){
            		this.selection = this.selection.concat(Object.values(Object.keys(this.roles.loan)));
            		this.selection = this.selection.concat(Object.values(Object.keys(this.roles.user)));
            		this.selection = this.selection.concat(Object.values(Object.keys(this.roles.repayment)));
            		this.selection = this.selection.concat(Object.values(Object.keys(this.roles['cash advance'])));
            		this.selection = this.selection.concat(Object.values(Object.keys(this.roles.transaction)));
            		this.selection = this.selection.concat(Object.values(Object.keys(this.roles.claim)));
            		this.selection = this.selection.concat(Object.values(Object.keys(this.roles.report)));
            		this.selection = Array.from(new Set(this.selection));
            	}
            	this.$emit('input', this.selection)

            },

            clearSelection(){
            	this.selection = [];
            	this.$emit('input', this.selection)
            }

        },

    }

</script>
