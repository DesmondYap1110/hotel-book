<script setup>
import Tabs from '../Tabs.vue';
import Tab from '../Tab.vue';
import General from '../Types/General.vue';
import Detail from '../Types/Detail.vue';
import { defineProps, ref, provide } from "vue";


const props = defineProps({
    options: {
        type: Object,
        default: () => ({}),
    },
});

const options = ref(props.options);

provide('options', options);


const form = ref({
    name: '',
    images: [],
    message: '',
    price: '',
    selectedBeds: [],
    max_adult: '',
    max_child: '',
    area: '',
    status: '',
});


const handleSubmit = () => {
    axios.post('/admin/room_types', form)
        .then((response) => {
            console.log('Appointment created successfully!');
        })
        .catch((error) => {
            console.log('Failed');
            // actions.setErrors(error.response.data.errors);
        })
};

</script>
<style src="@vueform/toggle/themes/default.css"></style>
<style>
.image-hotel {
    width: 100px;
    height: 100px;
}
</style>

<template>
    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <Form @submit="handleSubmit">
                        <button type="submit" class="btn btn-primary">Submit</button>
                        <div class="card">
                            <div class="card-body">

                                <tabs>
                                    <tab title="General" selected>
                                        <general @formChanged="handleFormChanged"></general>
                                    </tab>
                                    <tab title="Data">
                                        <detail :options="options" @DetailChanged="handleDetailChanged"></detail>
                                    </tab>

                                </tabs>


                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    </div>
</template>
