<script setup>

import { ref, reactive } from 'vue';
import Toggle from '@vueform/toggle'
import Multiselect from '@vueform/multiselect'

// defineProps({
//     options: Object,
// });


const form = reactive({
    name: '',
    images: [],
    message: '',
    price: '',
    selectedBeds: [],
    max_adult: '',
    max_child: '',
    area: '',
    status: '',
});

const max = ref(1000);

const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const maxLength = e.target.getAttribute('data-max_length');

    files.forEach(file => {
        if (!file.type.match('image.*')) {
            return;
        }

        if (form.images.length >= maxLength) {
            return false;
        } else {
            const reader = new FileReader();
            reader.onload = () => {
                form.images.push({ src: reader.result, name: file.name });
            };
            reader.readAsDataURL(file);
        }
    });
};

const removeFile = (index) => {
    form.images.splice(index, 1);
};


const beds = ref([
    {
        id: 1,
        name: 'Single',
        isSelected: false,
        quantity: '',
    },
    {
        id: 2,
        name: 'Queen',
        isSelected: false,
        quantity: '',
    },
    {
        id: 3,
        name: 'King',
        isSelected: false,
        quantity: '',
    },

]);

const toggleBedSelection = (bed) => {

    const selected = bed.isSelected;
    if (selected) {
        form.selectedBeds.push(bed);
    } else {
        const index = form.selectedBeds.findIndex(b => b.id === bed.id);
        if (index !== -1) {
            form.selectedBeds.splice(index, 1);
        }
    }

}

const submitForm = () => {
    axios.post('/admin/room_types', form)
    .then((response) => {
        toastr.success('Appointment created successfully!');
    })
    .catch((error) => {
        // actions.setErrors(error.response.data.errors);
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
                    <h1 class="m-0">
                        <span v-if="editMode">Edit</span>
                        <span v-else>Create</span>
                        Appointment
                    </h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item">
                            <router-link to="/admin/dashboard">Home</router-link>
                        </li>
                        <li class="breadcrumb-item">
                            <router-link to="/admin/appointments">Room Types</router-link>
                        </li>
                        <li class="breadcrumb-item active">
                            <span v-if="editMode">Edit</span>
                            <span v-else>Create</span>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
    <div>
        <form @submit.prevent="">
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
                                </div>

                                <div class="card">
                                    <div class="card-body text-center">
                                        <div class="upload__box">
                                            <div class="upload__btn-box">
                                                <label class="upload__btn">
                                                    <p>Upload images</p>
                                                    <input type="file" multiple data-max_length="20"
                                                        @change="handleFileChange" class="upload__inputfile">
                                                </label>
                                            </div>
                                            <div class="upload__img-wrap">
                                                <div v-for="(image, index) in form.images" :key="index"
                                                    class="upload__img-box">
                                                    <div :style="{ backgroundImage: 'url(' + image.src + ')' }"
                                                        :data-number="index" :data-file="image.name" class="img-bg">
                                                        <div class="upload__img-close" @click="removeFile(index)"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>




                                <div class="form-group">
                                    <label for="description">Description</label>
                                    <textarea v-model="form.message" :maxlength="max" class="form-control" id="description"
                                        rows="3" name="description" placeholder="Enter description"></textarea>
                                    <span class="message-counter">{{ form.message.length }}/{{ max }}</span>
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
                                                    :name="'items.' + index + '.quantity'" v-model="item.quantity">
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
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="max_children">Max Children:</label>
                                        <input type="number" class="form-control" placeholder="Enter max children"
                                            name="max_children" v-model="form.max_child">
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <button @click="submitForm" class="btn btn-info"><i class="fas fa-save m-2"></i>Save Changes</button>
                </div>

            </div>
        </form>
    </div>
</template>

