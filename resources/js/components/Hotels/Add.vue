<script setup>
import uploadImage from '../uploadImage.vue'
import 'vue3-toastify/dist/index.css';
import { ref,reactive } from 'vue';
import { useErrors } from '../../errors';
const { errors, get, record, clear } = useErrors();

const max = ref(1000);
const uploadedImages = ref([]);

const form = reactive({
    name: '',
    description: '',
    address: '',
    city: '',
    state: '',
    country: '',
    postal_code: '',
    phone_number: '',
    website_url: '',
    chain_name: '',
    policies: '',
    cancellation_policies: '',
    check_in_from: '',
    check_in_until: '',
    check_out_from: '',
    check_out_until: '',
    registration_no:'',


});

const resetForm = () => {

   Object.keys(form).forEach(key => {
    form[key] = ''
  });

    uploadedImages.value = [];
    // Clear all errors
    Object.keys(errors).forEach(field => clear(field));

};

const submitForm = () => {

     Object.keys(errors).forEach(field => clear(field));
    const formData = new FormData();
    let index = 0; // Initialize the index

    for (const key in form) {
        formData.append(key, form[key])
    }


    uploadedImages.value.forEach((image, index) => {
        formData.append(`images[${index}]`, image);
    });



    axios.post('/admin/hotels', formData)
        .then((response) => {
            resetForm()
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
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a href="/admin/dashboard">Home</a>
                        </li>
                        <li class="breadcrumb-item">
                            <a href="/admin/hotels">Hotels</a>
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
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <p id="form-sub-title">
                                    Details
                                </p>
                                <div class="card-text">
                                    <div class="form-group">
                                        <label for="name">
                                            Hotel Name:
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
                                        <label for="address">
                                            Address:
                                        </label>
                                        <input type="address" v-model="form.address" class="form-control" placeholder="Enter address"
                                            id="address" name="address">
                                        <div>
                                            <span class="help is-danger" v-text="get('address')"></span>
                                        </div>

                                    </div>

                                    <div class="row">

                                        <div class="form-group col-md-6">
                                            <label for="city">
                                                City:
                                            </label>
                                            <input type="city" v-model="form.city" class="form-control" placeholder="Enter city"
                                                id="city" name="city">
                                            <div>
                                                <span class="help is-danger" v-text="get('city')"></span>
                                            </div>

                                        </div>

                                        <div class="form-group col-md-6">
                                            <label for="state">
                                                State:
                                            </label>
                                            <input type="state" v-model="form.state" class="form-control" placeholder="Enter state"
                                                id="state" name="state">
                                            <div>
                                                <span class="help is-danger" v-text="get('state')"></span>
                                            </div>

                                        </div>

                                    </div>

                                    <div class="row">

                                        <div class="form-group col-md-6">
                                            <label for="country">
                                                Country:
                                            </label>
                                            <input type="country" v-model="form.country" class="form-control" placeholder="Enter country"
                                                id="country" name="country">
                                            <div>
                                                <span class="help is-danger" v-text="get('country')"></span>
                                            </div>

                                        </div>

                                        <div class="form-group col-md-6">
                                            <label for="state">
                                                Postal Code:
                                            </label>
                                            <input type="postal_code" v-model="form.postal_code" class="form-control" placeholder="Enter postal_code"
                                                id="postal_code" name="postal_code">
                                            <div>
                                                <span class="help is-danger" v-text="get('postal_code')"></span>
                                            </div>

                                        </div>

                                    </div>

                                    <div>
                                        <div class="form-group">
                                            <label for="phone_number">
                                                Phone Number:
                                            </label>
                                            <input type="phone_number" v-model="form.phone_number" class="form-control" placeholder="Enter phone number"
                                                id="phone_number" name="phone_number">
                                            <div>
                                                <span class="help is-danger" v-text="get('phone_number')"></span>
                                            </div>

                                        </div>

                                        <div class="form-group">
                                            <label for="website_url">
                                                Website URL:
                                            </label>
                                            <input type="website_url" v-model="form.website_url" class="form-control" placeholder="Enter website url"
                                                id="website_url" name="website_url">
                                            <div>
                                                <span class="help is-danger" v-text="get('website_url')"></span>
                                            </div>

                                        </div>
                                    </div>

                                     <div class="form-group">
                                        <label for="registration_no">
                                           Registrtion Number:
                                        </label>
                                        <input type="registration_no" v-model="form.registration_no" class="form-control" placeholder="Enter Registration Number"
                                            id="registration_no" name="registration_no">
                                        <div>
                                            <span class="help is-danger" v-text="get('registration_no')"></span>
                                        </div>

                                    </div>


                                    <div class="form-group">
                                        <label for="chain_name">
                                            Hotel Brand/Chain Name:
                                        </label>
                                        <input type="chain_name" v-model="form.chain_name" class="form-control" placeholder="Enter Brand/Chain Name"
                                            id="chain_name" name="chain_name">
                                        <div>
                                            <span class="help is-danger" v-text="get('chain_name')"></span>
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
                                        <label for="cancellation_policies">Cancellation Policies</label>
                                        <textarea v-model="form.cancellation_policies" :maxlength="max" class="form-control"
                                            id="cancellation_policies" rows="3" name="cancellation_policies"
                                            placeholder="Enter cancellation policies"></textarea>
                                        <span class="message-counter">{{ form.policies.length }}/{{ max }}</span>
                                        <div>
                                            <span class="help is-danger" v-text="get('policies')"></span>
                                        </div>

                                    </div>

                                    <div class="row">
                                        <div class="form-group col-md-6">
                                            <label for="check_in_from">Check-In From:</label>
                                            <input
                                                type="time"
                                                v-model="form.check_in_from"
                                                class="form-control"
                                                id="check_in_from"
                                                name="check_in_from"
                                            />
                                            <div>
                                                <span class="help is-danger" v-text="get('check_in_from')"></span>
                                            </div>
                                        </div>


                                       <div class="form-group col-md-6">
                                            <label for="check_in_until">Check-In Until:</label>
                                            <input
                                                type="time"
                                                v-model="form.check_in_until"
                                                class="form-control"
                                                id="check_in_until"
                                                name="check_in_until"
                                            />
                                            <div>
                                                <span class="help is-danger" v-text="get('check_in_until')"></span>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="row">

                                        <div class="form-group col-md-6">
                                            <label for="check_out_from">Check-Out From:</label>
                                            <input
                                                type="time"
                                                v-model="form.check_out_from"
                                                class="form-control"
                                                id="check_out_from"
                                                name="check_out_from"
                                            />
                                            <div>
                                                <span class="help is-danger" v-text="get('check_out_from')"></span>
                                            </div>
                                        </div>

                                        <div class="form-group col-md-6">
                                            <label for="check_out_until">Check-Out Until:</label>
                                            <input
                                                type="time"
                                                v-model="form.check_out_until"
                                                class="form-control"
                                                id="check_out_until"
                                                name="check_out_until"
                                            />
                                            <div>
                                                <span class="help is-danger" v-text="get('check_out_until')"></span>
                                            </div>
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
                                                    <button @click="remove(index)" class="btn btn-danger" :disabled="index === 0">Remove</button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <button @click="addMore" class="btn btn-primary">Add More</button>
                                </div>
                            </div>
                        </div>

                    </div> -->


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
