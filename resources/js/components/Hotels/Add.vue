<script setup>
import uploadImage from '../uploadImage.vue'
import 'vue3-toastify/dist/index.css';
import { ref,reactive } from 'vue';
import { useErrors } from '../../errors';
const { errors, get, record, clear } = useErrors();


const uploadedImages = ref([]);

const form = reactive({
    name: '',
    quantity: '',
    description: '',
    policies:'',
    check_in_from:'',
    check_out_from:'',
    check_in_until:'',
    check_out_until:'',
    receptional_open_until:'',
    landmarkDistancePairs: [
        { landmark: '', distance: '' }
    ]

});

const resetForm = () => {
    form.name = '';
    form.quantity = '';
    form.description = '';

    uploadedImages.value = [];
    // Clear all errors
    Object.keys(errors).forEach(field => clear(field));

};

const submitForm = () => {

    const formData = new FormData();
    let index = 0; // Initialize the index



    uploadedImages.value.forEach((image, index) => {
        formData.append(`images[${index}]`, image);
    });


    axios.post('/api/hotels', formData)
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

const addMore = () => {
    form.landmarkDistancePairs.push({ landmark: '', distance: '' });
};

const remove = (index) => {
    form.landmarkDistancePairs.splice(index, 1);
};

</script>

<template>

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

                                    <div class="form-group">
                                        <label for="policies">Hotel Policies</label>
                                        <textarea v-model="form.policies" :maxlength="max" class="form-control"
                                            id="policies" rows="3" name="policies"
                                            placeholder="Enter policies"></textarea>
                                        <span class="message-counter">{{ form.policies.length }}/{{ max }}</span>
                                        <div>
                                            <span class="help is-danger" v-text="get('policies')"></span>
                                        </div>

                                    </div>


                                    <div class="form-group">
                                        <label for="check_in_from">
                                            Check In From:
                                        </label>
                                        <input  v-model="form.check_in_from" class="form-control" placeholder="Enter check_in_from"
                                            id="check_in_from" name="check_in_from">
                                        <div>
                                            <span class="help is-danger" v-text="get('check_in_from')"></span>
                                        </div>

                                    </div>


                                    <div class="form-group">
                                        <label for="check_out_from">
                                            Check In From:
                                        </label>
                                        <input  v-model="form.check_out_from" class="form-control" placeholder="Enter check_out_from"
                                            id="check_out_from" name="check_out_from">
                                        <div>
                                            <span class="help is-danger" v-text="get('check_out_from')"></span>
                                        </div>

                                    </div>


                                    <div class="form-group">
                                        <label for="check_in_until">
                                            Check In From:
                                        </label>
                                        <input  v-model="form.check_in_until" class="form-control" placeholder="Enter check_in_until"
                                            id="check_in_until" name="check_in_until">
                                        <div>
                                            <span class="help is-danger" v-text="get('check_in_until')"></span>
                                        </div>

                                    </div>

                                    <div class="form-group">
                                        <label for="check_out_until">
                                            Check In From:
                                        </label>
                                        <input  v-model="form.check_out_until" class="form-control" placeholder="Enter check_out_until"
                                            id="check_out_until" name="check_out_until">
                                        <div>
                                            <span class="help is-danger" v-text="get('check_out_until')"></span>
                                        </div>

                                    </div>

                                    <div class="form-group">
                                        <label for="receptional_open_until">
                                            Reception open until:
                                        </label>
                                        <input  v-model="form.receptional_open_until" class="form-control" placeholder="Enter receptional_open_until"
                                            id="receptional_open_until" name="receptional_open_until">
                                        <div>
                                            <span class="help is-danger" v-text="get('receptional_open_until')"></span>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                    <!-- <div class="col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <p id="form-sub-title">
                                    Landmark
                                </p>
                                <div class="card-text">
                                    <div class="form-group row">
                                        <div class="col-md-6" v-for="(item, index) in form.landmarkDistancePairs" :key="index">
                                            <div class="form-group row">
                                                <div class="col-md-6">
                                                    <label :for="'landmark' + index">Landmark:</label>
                                                    <input type="text" v-model="item.landmark" class="form-control" :placeholder="'Enter landmark ' + (index + 1)" :id="'landmark' + index" :name="'landmark' + index">
                                                    <div>
                                                        <span class="help is-danger" v-text="get('landmark.'+ index)"></span>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label :for="'distance' + index">Distance:</label>
                                                    <input type="text" v-model="item.distance" class="form-control" :placeholder="'Enter distance ' + (index + 1)" :id="'distance' + index" :name="'distance' + index">
                                                    <div>
                                                        <span class="help is-danger" v-text="get('distance.' + index)"></span>
                                                    </div>
                                                </div>
                                                <div class="col-md-1">
                                                    <button @click="remove(index)" class="cl-btn cl-btn--danger" :disabled="index === 0">Remove</button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <button @click="addMore" class="cl-btn cl-btn--dark">Add More</button>
                                </div>
                            </div>
                        </div>

                    </div> -->


                </div>


                <div class="row">
                    <div class="col-md-12  text-right">
                        <button type="button" class="cl-btn cl-btn--light" @click="resetForm()">Cancel</button>
                        <button type="button" @click="submitForm" class="cl-btn cl-btn--primary ml-2">Save</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
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
