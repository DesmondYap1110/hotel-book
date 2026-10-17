<script setup>
import axios from 'axios';
import { ref, onMounted, inject} from 'vue';

const roomId = inject('roomTypeId');

const roomTypes = ref({
    data: [],
});

onMounted(() => {
    getRoomType();
});

const getRoomType = () =>{

    axios.get(`/api/room-types/${roomId}`)
    .then((response) => {
            // Update the reactive properties with fetched data
            roomTypes.value.data = response.data.data;
        })
        .catch((error) => {
            console.error('An error occurred while fetching appointments:', error);
        });

}
</script>


<template>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div>
                    <span>Name</span>
                    <span>{{roomTypes.data.name}}</span>
                </div>
                <div>
                    <span>Images</span>
                    <span v-for="image in roomTypes.data.images">
                        <img :src="'/storage/room_images/' + image.images" class="thumbnail" />
                    </span>
                </div>
                <div>
                    <span>Description</span>
                    <div class="cl-rich-text" v-html="roomTypes.data.description"></div>
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
</style>

