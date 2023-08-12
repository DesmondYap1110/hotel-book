<script setup>
import { defineProps, ref,onMounted,computed} from "vue";


const props = defineProps({
    options: {
        type: Object,
        default: () => ({}),
    },
    roomType_id: {
        type: Number, // You can adjust the type as needed
        required: true // Or false, depending on whether it's required
    }
});

const roomTypes = ref({
    data: [],
});

onMounted(() => {
    getRoomType();
});

const getRoomType = () =>{

    axios.get(`/api/room-types/${props.roomType_id}`)
    .then((response) => {
            // Update the reactive properties with fetched data
            roomTypes.value.data = response.data.data;
        })
        .catch((error) => {
            console.error('An error occurred while fetching appointments:', error);
        });

}
const zoomedIndex = ref(-1);
const currentIndex = ref(0);
const isOverlayActive = ref(false);

const isPrevDisabled = computed(() => currentIndex.value === 0);
// const isNextDisabled = computed(() => currentIndex.value === roomTypes.value.data.images.length - 1);

const prev = () => {
  if (!isPrevDisabled.value) {
    currentIndex.value--;
    scrollToCurrent();
  }
};

const next = () => {
  if (!isNextDisabled.value) {
    currentIndex.value++;
    scrollToCurrent();
  }
};

const scrollToCurrent = () => {
  const slider = document.getElementById('slider-container');
  const currentSlide = slider.querySelector('.slide:nth-child(' + (currentIndex.value + 1) + ')');
  if (currentSlide) {
    slider.scrollLeft = currentSlide.offsetLeft - (slider.offsetWidth - currentSlide.offsetWidth) / 2;
  }
};

</script>

<template>
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a href="/admin/dashboard">Home</a>
                        </li>
                        <li class="breadcrumb-item">
                            <a href="/admin/appointments">RoomTypes</a>
                        </li>
                    </ol>
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
                                <!-- <tabs>
                                    <tab title="General" selected>
                                        <general @formChanged="handleFormChanged"></general>
                                    </tab>
                                    <tab title="Data">
                                        <detail :options="options" @DetailChanged="handleDetailChanged"></detail>
                                    </tab>
                                </tabs> -->
                                <div class="title-name">
                                    {{ roomTypes.data.name}}
                                </div>

                                <div>
                                    <div id="slider-container" class="slider">
                                        <div v-for="(image, index) in roomTypes.data.images" :key="index" class="slide">
                                            <img :src="'/storage/room_images/' + image.images" :class="{ 'zoomed': zoomedIndex === index }" @click="toggleZoom(index)" />
                                        </div>
                                        <div @click="prev" class="control-prev-btn" :class="{ 'disabled': isPrevDisabled }">
                                            <i class="fas fa-arrow-left"></i>
                                          </div>
                                          <div @click="next" class="control-next-btn" :class="{ 'disabled': isNextDisabled }">
                                            <i class="fas fa-arrow-right"></i>
                                          </div>
                                    </div>
                                    <!-- <div class="overlay" :class="{ 'active': isOverlayActive }"></div> -->
                                </div>

                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
@import "https://fonts.googleapis.com/css?family=Open+Sans:800&display=swap";

.title-name{
    font-size: 40px;
      font-weight: 600;
      background-image: linear-gradient(to left, #553c9a, #b393d3);
      color: transparent;
      background-clip: text;
      -webkit-background-clip: text;
    }

.slider {
    display: flex;
    height: 350px;
    max-height: auto;
    overflow-y: hidden;
    overflow-x: scroll !important;
    padding: 16px;
    transform: scroll(calc(var(--i, 0)/var(--n)*-100%));
    scroll-behavior: smooth;
}

.slider::-webkit-scrollbar {
    height: 5px;
    width: 150px;
    display: none;
}

.slider::-webkit-scrollbar-track {
    background: transparent;
}

.slider::-webkit-scrollbar-thumb {
    background: #888;
}

.slider::-webkit-scrollbar-thumb:hover {
    background: #555;
}

.slider img:hover {
    transform: scale(1.05);
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.15);
}

.slide {

    position: relative;
}

.slide img {
    height: 100%;
    width: 250px;
    margin: 0 10px;
    object-fit: cover;
    border-radius: 15px;
    cursor: pointer;
    transition: .25s ease-in-out;
}

.control-prev-btn {
    position: absolute;
    top: 50%;
    left: 0;
    background-color: rgba(255, 255, 255, 0.55);
    height: 100px;
    line-height: 100px;
    width: 45px;
    text-align: center;
    box-shadow: 0 1px 3px #888;
    user-select: none;
    color: #444;
    cursor: pointer;
}

.control-next-btn {
    position: absolute;
    top: 50%;
    right: 0;
    background-color: rgba(255, 255, 255, 0.55);
    height: 100px;
    line-height: 100px;
    width: 45px;
    text-align: center;
    box-shadow: 0 1px 3px #888;
    user-select: none;
    color: #444;
    cursor: pointer;
}

.slide img.zoomed {
    width: 500px;
    height: 600px;
    position: fixed;
    left: 25%;
    top: 0%;
    z-index: 1000;
    transform: scale(1) translatey(0) !important;

}

.overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, .45);
    top: 0;
    display: none;
}

.overlay.active {
    display: block;
}

@media only screen and (max-width: 420px) {
    .slider {
        padding: 0;
    }

    .slide {
        padding: 16px 10px;
    }

    .slide img {
        margin: 0;
    }

    .control-prev-btn {
        top: 37%;
    }

    .control-next-btn {
        top: 37%;
    }
}</style>
