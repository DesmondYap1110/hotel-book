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
import DataTable from '../DataTable.vue';
import Pagination from '../Pagination.vue';
import { ref } from 'vue';

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

const rows = ref([
    {
        id: 1,
        room_no: 1001,
        room_floor: 1,
        room_type: 'Single',
        is_available: true,
    },
    {
        id: 2,
        room_no: 1002,
        room_floor: 2,
        room_type: 'Double',
        is_available: true,
    },
]);


const editUser = (id) => {
    alert(id);
};

const confirmUserDeletion = (id) => {
    alert(id);
};
</script>
