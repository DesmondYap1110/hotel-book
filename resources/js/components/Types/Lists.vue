<template>
    <WelcomeComponent></WelcomeComponent>
    <!-- <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-body">

                            <EasyDataTable :headers="headers" :items="items" />

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div> -->
</template>

<script setup>
import DataTable from '../DataTable.vue';
import Pagination from '../Pagination.vue';
import { ref, onMounted, reactive } from 'vue';
import EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
import WelcomeComponent from '../WelcomeComponent.vue';
// const columns = ref([
//     {
//         name: 'Name',
//     },
//     {
//         name: 'Beds',
//     },
//     {
//         name: 'People',
//     },
//     {
//         name: 'Quantity',
//     },
//     {
//         name: 'Price',
//     },

//     {
//         name: 'Status',
//     },
//     {
//         name: 'Action',
//     },
// ]);

const headers = [
    { text: 'ID', value: 'id', sortable: true },
    { text: 'NAME', value: 'name',sortable: true },
    { text: 'QUANTITY', value: 'quantity', sortable: true },
    { text: 'PEOPLE', value: 'max_adult', sortable: true },


];



const example = reactive([
  {
    player: 'Stephen Curry',
    team: 'GSW',
    number: 30,
    position: 'G',
    indicator: { height: '6-2', weight: 185 },
    lastAttended: 'Davidson',
    country: 'USA',
  },
  {
    player: 'Atephen Curry',
    team: 'GSW',
    number: 30,
    position: 'G',
    indicator: { height: '6-2', weight: 185 },
    lastAttended: 'Davidson',
    country: 'USA',
  },
  // ...
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

const items = reactive([]);

const getAppointments = () => {
    axios.get('/api/types')
        .then((response) => {

            const dataArray = Object.values(response.data.data);
      items.push(...dataArray);
    // const dataArray = response.data.data.map(item => {
    //     return { id: item.id, name: item.name ,quantity:item.quantity, people:{adult: item.max_adult, children: item.max_child}};
    //   });
    //   items.push(...dataArray);
      console.log(items);
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


