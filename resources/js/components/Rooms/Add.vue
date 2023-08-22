<template>
    <div class="card">
        <div class="card-body">

            <div>
                <h5>Select Room Types</h5>
                <div v-if="isLoading">Loading...</div>
                <div v-else>
                  <button
                    v-for="type in roomTypes.data"
                    :key="type.id"
                    @click="handleTypeClick(type)"
                    :class="{ active: type.id === activeTypeId }"
                  >
                    {{ type.name }}
                  </button>
                </div>
              </div>
        </div>
    </div>

    <div class="card"  v-if="showForm">
        <div class="card-body">
            <Form>
                <div class="row">
                     <div class="col-md-6">
                        <div class="form-group">
                            <label for="room_type">Room Type</label>
                            <input v-model="form.room_type" type="text" class="form-control flatpickr" id="room_type" disabled>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="room_no">Room No</label>
                            <input v-model="form.room_no" type="text" class="form-control flatpickr" id="room_no">

                        </div>
                    </div>

                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="room_floor">Room Unit and Floor</label><span class="pl-3">Example 03-10 (floor-unit)</span>
                            <input v-model="form.room_unit_floor" type="text" class="form-control flatpickr" id="room_floor">

                        </div>
                    </div>

                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </Form>
        </div>
    </div>
</template>



<script setup>
import { userRoomTypeStore  } from '../../store/roomType'; // Adjust the path to your store
import { ref,reactive} from 'vue';
const roomTypeStore = userRoomTypeStore();
const roomTypes = roomTypeStore.getRoomTypes;
const isLoading = roomTypeStore.isLoading;

const activeTypeId = ref(null);
const showForm = ref(false); // Reactive variable to control form visibility

roomTypeStore.fetchRoomTypes();

const handleTypeClick = (type)=>{
console.log(type);
activeTypeId.value = type.id;
form.room_type_id = type.id;
form.room_type = type.name;
showForm.value = true; // Show the form when a button is clicked
}

const form = reactive({
  room_type_id:'',
  room_type:'',
  room_no:'',
  room_unit_floor:'',
});

</script>


<style>
  .active {
    background-color: #007bff;
    color: #fff;
  }

  /* Additional styling for button appearance */
  button {
    border: 1px solid #ccc;
    padding: 8px 16px;
    margin: 4px;
    cursor: pointer;
    background-color: #fff;
    color: #333;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  button:hover {
    background-color: #f0f0f0;
  }
</style>






