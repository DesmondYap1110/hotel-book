<script setup>
import { toast} from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

import Swal from 'sweetalert2';

import { ref, onMounted } from 'vue';
import axios from 'axios';
import VueDataTable from "../../components/DataTable.vue";

const props = defineProps({
    showRoomTypesRoute: {
        type: String,
    },
    createRoomTypesRoute:{
        type:String,
    },
    deleteRoomTypesApiRoute:{
        type:String,
    },
    editRoomTypesRoute:{
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
            console.error('An error occurred while fetching room types:', error);
        })
        .finally(() =>{
            toggleLoading();
        });

};

const viewRoomType = (id) => {
    window.location.href = props.showRoomTypesRoute.replace('room_type_id', id);
}

const addNewRoomTypes =() =>{
    window.location.href = props.createRoomTypesRoute;
}

const notify = () => {
    toast.success('Succesfully Delete Room Type!!', {
        theme: 'colored',
        position: toast.POSITION.BOTTOM_RIGHT,
        timeout: 1000 // Set the duration in milliseconds (e.g., 2 seconds)
    });
}

const editRoomType =(id) =>{
    window.location.href = props.editRoomTypesRoute.replace('room_type_id',id);
}

const deleteRoomType =(id)=>{
    axios.delete(props.deleteRoomTypesApiRoute.replace('room_type_id',id))
    .then((response)=>{
        getRoomTypes();
        notify();

    })
    .catch((error) => {
            console.error('An error occurred while deleting room types:', error);
        });
}

onMounted(() => {
    getRoomTypes();
});

const showAlertConfirm = async (id) => {
  const result = await Swal.fire({
    title: 'Are you sure?',
    text: 'Are you sure want to delete this item!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  });

  if (result.isConfirmed) {
    deleteRoomType(id);
    // await Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
  }
};
</script>

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
                        <!-- <button v-on:click="showAlertConfirm">Confirm Me</button> -->
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
                            <div class="container" v-if="loading.roomTypes">
                                <div class="spinner"></div>
                            </div>
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
                                    <td width="10%">{{ item.quantity }}</td>
                                    <td width="15%" class="text-center">
                                        <button class="btn btn-sm btn-primary" @click="editRoomType(item.id)">
                                            <i class="fas fa-edit"></i>
                                        </button>
                                        <button class="btn btn-sm btn-success" @click="viewRoomType(item.id)">
                                            <i class="fas fa-eye"></i>
                                        </button>
                                        <button class="btn btn-sm btn-danger" @click="showAlertConfirm(item.id)">
                                            <i class="fas fa-trash"></i>
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



<style>
.thumbnail {
    width: 100px;
    height: 100px;
    object-fit: cover;
    object-position: 100% 0;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Adjust this to your layout */
}

.spinner {
    width: 4em;
    height: 4em;
    border: 0.5em solid rgba(0, 0, 0, 0.1);
    border-left-color: #7983ff;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
</style>
