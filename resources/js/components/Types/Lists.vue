<template>
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-md-6">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a href="/admin/dashboard">Home</a>
                        </li>
                        <li class="breadcrumb-item">
                            <a href="/admin/appointments">RoomTypes</a>
                        </li>
                    </ol>
                </div>
                <div class="col-md-6">
                    <div class="d-flex justify-content-end">
                        <button class="btn btn-primary" @click="addNewRoomTypes()">Add RoomTypes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-body">
                            <vue-data-table :numbering="true" :columns="columns.roomTypes" :items.sync="roomTypes.data"
                                :paginate="true" :pagination="roomTypes.pagination" pagination-method="get"
                                :loading="loading.roomTypes">

                                <template v-slot:items="{ item, index }">
                                    <td class="text-capitalize">
                                        <img :src="'/storage/room_images/' + item.images[0].images" class="thumbnail" />
                                    </td>
                                    <td class="text-capitalize">{{ item.name }}</td>
                                    <td class="text-capitalize">
                                        <div class="row">
                                            <span v-if="item.single_bed" class="badge badge-light  col-md-4">Single
                                                Bed</span>
                                            <span v-if="item.queen_bed" class="badge badge-primary  col-md-4">Queen
                                                Bed</span>
                                            <span v-if="item.king_bed" class="badge badge-info  col-md-4">King Bed</span>
                                        </div>
                                    </td>
                                    <td width="15%">
                                        <div class="row">
                                            <span v-if="item.max_adult">Adult<i class="fa fa-male col-md-6"
                                                    aria-hidden="true"></i>{{ item.max_adult }}</span>
                                            <span v-if="item.max_child">children<i class="fa fa-child col-md-6"
                                                    aria-hidden="true"></i>{{ item.max_child }}</span>
                                        </div>
                                    </td>
                                    <td width="15%">{{ item.quantity }}</td>

                                    <td width="10%" class="text-center">
                                        <button class="btn btn-sm btn-success" @click="viewRoomType(item.id)">
                                            <i class="fas fa-eye"></i>
                                        </button>
                                    </td>
                                </template>
                            </vue-data-table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import VueDataTable from "../../components/DataTable.vue";

const props = defineProps({
    showRoomTypesRoute: {
        type: String,
    },
    createRoomTypesRoute:{
        type:String,
    }
});

const columns = {
    roomTypes: [

        {
            name: 'Image',
            field: 'image',

        },
        {
            name: 'Name',
            field: 'name',
            sortable: 'name'
        },
        {
            name: 'Bed',
            field: 'bed',

        },
        {
            name: 'People',
            field: 'people',

        },
        {
            name: 'Quantity',
            field: 'quantity',
            sortable: 'quantity'
        },
        {
            name: 'Action'
        }
    ]
};


const loading = ref({
    roomTypes: false
});

// Define the reactive property 'rows'
const roomTypes = ref({
    data: [],
    pagination: {}
});

const toggleLoading = (type) => {
    loading[type] = !loading[type];
};

// Define the function to fetch appointments
const getRoomTypes = () => {
    axios.get('/api/room-types')
        .then((response) => {
            // Update the reactive properties with fetched data
            roomTypes.value.data = response.data.data;
            roomTypes.value.pagination.links = response.data.links;
            roomTypes.value.pagination.meta = response.data.meta;
        })
        .catch((error) => {
            console.error('An error occurred while fetching appointments:', error);
        });

};

const viewRoomType = (id) => {
    window.location.href = props.showRoomTypesRoute.replace('room_type_id', id);
}

const addNewRoomTypes =() =>{
    window.location.href = props.createRoomTypesRoute;
}

onMounted(() => {
    getRoomTypes();
});
</script>

<style>
.thumbnail {
    width: 100px;
    height: 100px;
    object-fit: cover;
    object-position: 100% 0;
}
</style>
