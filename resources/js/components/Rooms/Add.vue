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

    <div class="card" v-if="showForm">
        <div class="card-body">
            <div>
                <h5>Current Rooms</h5>
                <div v-if="isLoadingRooms">Loading...</div>
                <div v-else>
                  <span
                    v-for="type in selectedRooms"
                    :key="type.id"
                    class="room-box"
                  >
                    {{ selectedRoomType.room_prefix+'-'+type.room_number }}
                </span>
                </div>
              </div>
        </div>
    </div>



    <div class="card"  v-if="showForm">
        <div class="card-body">
          <div class="mb-2">Available Room To Create: {{computedAvailableQuantity}}</div>
            <form @submit.prevent="" id="roomCreateForm">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="room_type">Quantity</label>
                            <input v-model="form.quantity" @input="updateRoomNumbers" type="number" name="quantity" class="form-control" id="quantity" min="1" :max="computedAvailableQuantity">
                            <div>
                                <span class="help is-danger" v-text="get('quantity')"></span>
                            </div>
                            <div>
                              <span class="help is-danger" v-if="form.quantity > computedAvailableQuantity">
                                Quantity cannot exceed the available quantity</span>
                          </div>
                        </div>
                    </div>

                    <div class="col-md-6" v-if="computedAvailableQuantity">
                        <div class="form-group">
                            <label for="room_type">Room Type</label>
                            <input v-model="form.room_type" type="text" class="form-control flatpickr" id="room_type" disabled>
                        </div>
                    </div>
                </div>

                <div class="row ml-2" v-if="computedIsRoomAvailable">
                    <div class="row" v-for="(room, index) in form.room_number" :key="index">
                        <div class="col-md-6">
                            <div class="form-group">
                            <label for="room_number">Room No {{ index + 1 }}</label>
                            <input v-model="form.room_number[index]" type="text" class="form-control" :id="'room_number_' + index">
                            <div>
                                <span class="help is-danger" v-text="get('room_number.' + index)"></span>
                            </div>
                            </div>
                        </div>
                    </div>

                </div>


                <div class="row">
                    <div class="col-md-12  text-right">
                        <button type="button"  class="btn btn-primary" @click="resetForm()">Cancel</button>
                        <button type="button" :disabled="form.quantity > computedAvailableQuantity" @click="submitForm" class="btn btn-warning ml-2">Save</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>



<script setup>
import { userRoomTypeStore  } from '../../store/roomType'; // Adjust the path to your store
import { userRoomsStore  } from '../../store/room'; // Adjust the path to your store

import { ref,reactive,onMounted,computed} from 'vue';

import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

import { useErrors } from '../../errors';
const { errors, get, record, clear } = useErrors();

const roomTypeStore = userRoomTypeStore();
const roomTypes = roomTypeStore.getRoomTypes;
const isLoading = roomTypeStore.isLoading;

const roomsStore = userRoomsStore();
const isLoadingRooms = roomsStore.isLoading;



const activeTypeId = ref(null);
const showForm = ref(false); // Reactive variable to control form visibility


onMounted(async () => {
roomTypeStore.fetchRoomTypes();
roomsStore.fetchRooms();
});

const selectedRoomType = ref([]);
const selectedRooms = ref([]);
const availableQuantity = ref([]);
const isRoomAvailable = ref(false);


const computedAvailableQuantity = computed(() => {
  return availableQuantity.value;
});

const computedIsRoomAvailable = computed(() =>{
    if(availableQuantity.value != 0){
        return isRoomAvailable.value = true;
    }
})

const handleTypeClick = async (type) => {
  activeTypeId.value = type.id;
  form.room_type_id = type.id;
  form.room_type = type.name;
  showForm.value = true;

  try {
    const roomsData = roomsStore.getRooms.data; // Access the getter directly
    const rooms = roomsData.filter(room => room.room_type_id === type.id);
    selectedRooms.value = rooms;

    selectedRoomType.value = roomTypes.data.find(roomType => roomType.id === type.id);
    availableQuantity.value = selectedRoomType.value.quantity - selectedRooms.value.length;


  } catch (error) {
    console.error('Error fetching rooms:', error);
  }
};




const form = reactive({
    quantity: 0,
  room_type_id:'',
  room_type:'',
  room_number: [],
});

const notify = () => {
    toast.success('Succesfully Create Room!!', {
        theme: 'colored',
        position: toast.POSITION.BOTTOM_RIGHT,
    });
}

const resetForm =()=>{
    form.room_number = [];
    form.quantity = 0 ;
    Object.keys(errors).forEach(field => clear(field));
}

const submitForm = () => {
  axios.post('/api/rooms', form)
    .then(async (response) => {
      roomsStore.clearData();
      await roomsStore.fetchRooms(); // Wait for fetchRooms to complete
      try {
        const roomsResponse = roomsStore.getRooms; // Get rooms
        const roomsData = roomsResponse.data; // Assuming 'data' is the array of rooms
        selectedRooms.value = roomsData.filter(room => room.room_type_id === form.room_type_id);
      } catch (error) {
        console.error('Error filtering rooms:', error);
      }
      resetForm();
      notify();
    })
    .catch((error) => {
      record(error.response.data.errors);
    });
};


const updateRoomNumbers = () => {
  form.room_number = new Array(Number(form.quantity)).fill('');
};

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
  .room-box {
    display: inline-block;
    padding: 8px;
    margin: 4px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
</style>






