<template>
    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-body">
                            <data-table :columns="columns" :rows="rows" @edit-user="editUser"
                                @confirm-user-deletion="confirmUserDeletion"></data-table>
                        </div>
                        <pagination></pagination>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import DataTable from '../DataTable.vue';
import Pagination from '../Pagination.vue';
import { ref,onMounted } from 'vue';

const columns = ref([
    {
        name: 'ID',
    },
    {
        name: 'Room No',
    },
    {
        name: 'Room Floor',
    },
    {
        name: 'Room Type',
    },
    {
        name: 'Is Available',
    },
    {
        name: 'Action',
    },
]);


// const rows = ref([
//     {
//         id: 1,
//         room_no: 1001,
//         room_floor: 1,
//         room_type: 'Single',
//         is_available: true,
//     },
//     {
//         id: 2,
//         room_no: 1002,
//         room_floor: 2,
//         room_type: 'Double',
//         is_available: true,
//     },
// ]);

const appointments = ref([]);

const getAppointments = () => {

    alert('hi');
    axios.get('/api/types', {
        params: params,
    })
        .then((response) => {
            appointments.value = response.data;
            console.log(appointments);
        })
};

onMounted(() => {
    getAppointments();
})

const editUser = (id) => {
    alert(id);
};

const confirmUserDeletion = (id) => {
    alert(id);
};
</script>
