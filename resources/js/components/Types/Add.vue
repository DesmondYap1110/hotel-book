<script setup>
import uploadImage from '../uploadImage.vue'
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { ref, reactive } from 'vue';
import Toggle from '@vueform/toggle';
import store from '../../stores/beds';
import { useErrors } from '../../errors';
const { errors, get, record, clear } = useErrors();
import { useFacilitiesAndServicesStore } from '../../store/facilities';
const facilitiesAndServicesStore = useFacilitiesAndServicesStore();
const categories = facilitiesAndServicesStore.getCategories;


const beds = store.state.beds;

const uploadedImages = ref([]);

const notify = () => {
    toast.success('Succesfully Create Room Type!!', {
        theme: 'colored',
        position: toast.POSITION.BOTTOM_RIGHT,
    });
}

const form = reactive({
    name: '',
    quantity: '',
    description: '',
    max_adult: '',
    max_child: '',
    selectedBeds: {},
    selectedItems:[],
    room_prefix:'',
});

const max = ref(1000);

const imageSize = 2000000; // 2MB
const formatType = ['image/jpeg', 'image/png', 'image/jpg'];


const toggleBedSelection = (bed) => {
    if (bed.isSelected) {
        form.selectedBeds[bed.id] = {
            id: bed.id,
            isSelected: bed.isSelected,
            name: bed.name,
            quantity: bed.quantity,
        };
    } else {
        if (form.selectedBeds.hasOwnProperty(bed.id)) {
            delete form.selectedBeds[bed.id];
        }
    }
};

const resetForm = () => {
    form.name = '';
    form.quantity = '';
    form.description = '';
    form.max_adult = '';
    form.max_child = '';
    form.selectedBeds = {};
    form.selectedItems = [];
    form.room_prefix='';

    beds.forEach((bed, index) => {
        bed.isSelected = false;  // Reset isSelected to false
        bed.quantity = null;     // Reset quantity to null
        // You might need to reset other properties if necessary
    });
    uploadedImages.value = [];
    // Clear all errors
    Object.keys(errors).forEach(field => clear(field));

};

const submitForm = () => {

    const formData = new FormData();
    let index = 0; // Initialize the index

    for (const key in form) {
        if (key !== 'selectedBeds') {
            formData.append(key, form[key]);
        } else {
            for (const bedId in form.selectedBeds) {
                const bed = form.selectedBeds[bedId];
                for (const bedKey in bed) {
                    formData.append(`selectedBeds[${index}][${bedKey}]`, bed[bedKey]);
                }
                index++; // Increment the index for each bed
            }
        }
    }

    uploadedImages.value.forEach((image, index) => {
        formData.append(`images[${index}]`, image);
    });


    axios.post('/api/room-types', formData)
        .then((response) => {
            resetForm();
            // uploadImageRef.value.reset();
            window.dispatchEvent(new Event('resetChildComponent'));
            notify();
        })
        .catch((error) => {
            // errors.value.record(error.response.data.errors);
            record(error.response.data.errors);
        })
};

</script>

<style src="@vueform/toggle/themes/default.css"></style>
<style src="@vueform/multiselect/themes/default.css"></style>
<style>
.image-hotel {
    width: 100px;
    height: 100px;
}

html * {
    box-sizing: border-box;
}

p {
    margin: 0;
}

.upload__box {
    padding: 40px;
}

.upload__inputfile {
    width: .1px;
    height: .1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
}

.upload__btn {
    display: inline-block;
    font-weight: 600;
    color: #fff;
    text-align: center;
    min-width: 116px;
    padding: 5px;
    transition: all .3s ease;
    cursor: pointer;
    border: 2px solid;
    background-color: #4045ba;
    border-color: #4045ba;
    border-radius: 10px;
    line-height: 26px;
    font-size: 14px;
}

.upload__btn:hover {
    background-color: unset;
    color: #4045ba;
    transition: all .3s ease;
}

.upload__btn-box {
    margin-bottom: 10px;
}

.upload__img-wrap {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -10px;
}

.upload__img-box {
    width: 150px;
    padding: 0 10px;
    margin-bottom: 12px;
}

.upload__img-close {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 10px;
    right: 10px;
    text-align: center;
    line-height: 24px;
    z-index: 1;
    cursor: pointer;
}

.upload__img-close:after {
    content: '\2716';
    font-size: 14px;
    color: white;
}

.img-bg {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
    padding-bottom: 100%;
}

#form-sub-title {
    font-size: 18px;
    font-weight: 600;
    line-height: 1.4;
    margin-bottom: 15px;
    color: #1896bd;
}
</style>

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
            <form @submit.prevent="" enctype="multipart/form-data">
                <div class="row d-flex">
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <p id="form-sub-title">
                                    General
                                </p>
                                <div class="card-text">
                                    <div class="form-group">
                                        <label for="name">
                                            Name:
                                        </label>
                                        <input type="name" v-model="form.name" class="form-control" placeholder="Enter name"
                                            id="name" name="name">
                                        <div>
                                            <span class="help is-danger" v-text="get('name')"></span>
                                        </div>

                                    </div>

                                    <!-- <vue-multi-image-upload @data-image="images" :max="10" :data-reset="component"
                                        :options="options" :image-size="imageSize" :image-format="formatType" /> -->
                                    <uploadImage ref="uploadImageRef" v-model:uploadedImages="uploadedImages"></uploadImage>



                                    <!-- <button @click="component.clear = true">Clear</button> -->

                                    <div class="form-group">
                                        <label for="description">Description</label>
                                        <textarea v-model="form.description" :maxlength="max" class="form-control"
                                            id="description" rows="3" name="description"
                                            placeholder="Enter description"></textarea>
                                        <span class="message-counter">{{ form.description.length }}/{{ max }}</span>
                                        <div>
                                            <span class="help is-danger" v-text="get('description')"></span>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <p id="form-sub-title">
                                    Detail
                                </p>
                                <div class="card-text">

                                    <div class="card">
                                        <div class="card-body">
                                            <label for="bed">Beds:</label>
                                            <div v-for="(item, index) in beds" :key="item.id">
                                                <p>
                                                    <Toggle :value="item.id" v-model="item.isSelected"
                                                        @change="toggleBedSelection(item)" />
                                                    <span class="pl-3">{{ item.name }}</span>
                                                    <div v-if="item.isSelected" class="mt-2 form-group">
                                                            <input type="number" min="1" max="5" class="form-control"
                                                                placeholder="Enter quantity of bed"
                                                                :name="'selectedBeds.' + index + '.quantity'"
                                                                v-model="item.quantity" @change="toggleBedSelection(item)">
                                                            <div>
                                                                <span class="help is-danger"
                                                                    v-text="get('selectedBeds.' + index + '.quantity')"></span>
                                                            </div>
                                                    </div>

                                                </p>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="row">
                                        <div class="form-group col-md-6">
                                            <label for="max_adult">Max Adult:</label>
                                            <input type="number" class="form-control" placeholder="Enter max adult"
                                                name="max_adult" v-model="form.max_adult">
                                            <div>
                                                <span class="help is-danger" v-text="get('max_adult')"></span>
                                            </div>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="max_children">Max Children:</label>
                                            <input type="number" class="form-control" placeholder="Enter max children"
                                                name="max_children" v-model="form.max_child">
                                            <div>
                                                <span class="help is-danger" v-text="get('max_children')"></span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="form-group col-md-12">
                                            <label for="quantity">Quantity:</label>
                                            <input type="number" class="form-control" placeholder="Enter room quantity"
                                                name="quantity" v-model="form.quantity">
                                            <div>
                                                <span class="help is-danger" v-text="get('quantity')"></span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="room-name-prefix">
                                        <div class="form-group col-md-12">
                                            <label for="room-name-prefix">Room Name Prefix:</label>
                                            <input  class="form-control" placeholder="Enter room name prefix exp:'s'-(auto generate room number)"
                                                name="room-name-prefix" v-model="form.room_prefix">
                                            <div>
                                                <span class="help is-danger" v-text="get('room-name-prefix')"></span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <p id="form-sub-title">
                                    Facilities and Services
                                </p>
                                <div class="card-text">
                                    <div class="row">
                                        <div v-for="category in categories" :key="category.name"
                                            class="col-lg-4 col-md-6 col-sm-12 mb-4">
                                            <h5>{{ category.name }}</h5>
                                            <ul class="list-unstyled">
                                                <li v-for="item in category.items" :key="item.id">
                                                    <label class="form-check">
                                                        <input type="checkbox" :value="item.id" v-model="form.selectedItems"
                                                            class="form-check-input">
                                                        {{ item.name }}
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12  text-right">
                        <button type="button" class="btn btn-primary" @click="resetForm()">Cancel</button>
                        <button type="button" @click="submitForm" class="btn btn-warning ml-2">Save</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
.list-none {
    list-style: none;
}
</style>
