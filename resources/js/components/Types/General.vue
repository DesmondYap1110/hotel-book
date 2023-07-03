<script setup>
import { ref, reactive, watch, getCurrentInstance } from 'vue';

// import { QuillEditor } from '@vueup/vue-quill'
// import '@vueup/vue-quill/dist/vue-quill.snow.css';

const max = ref(1000);
const images = ref([]);

const onFileChange = (e) => {
    const selectedFiles = e.target.files;
    for (let i = 0; i < selectedFiles.length; i++) {
        const file = selectedFiles[i];
        const reader = new FileReader();
        reader.onload = () => {
            images.value.push({ url: reader.result, file });
        };
        reader.readAsDataURL(file);
    }
};

const removeImage = (index) => {
    images.value.splice(index, 1);
};

const form = reactive({
    name: '',
    images: images.value,
    message: '',
});
const { emit } = getCurrentInstance();

watch(form, (newForm) => {
    emit('formChanged', newForm);
}, { deep: true });

// let timeoutId;
// watch(form, (newForm) => {
//   clearTimeout(timeoutId); // Clear the previous timeout

//   timeoutId = setTimeout(() => {
//     // Emit the formChanged event after 10 seconds of inactivity
//     emit('formChanged', newForm);
//   }, 10000); // 10 seconds delay
// }, { deep: true });


</script>
<!-- <style src="@vueform/multiselect/themes/default.css"></style> -->
<style src="@vueform/toggle/themes/default.css"></style>
<style>
.image-hotel {
    width: 100px;
    height: 100px;
}
</style>
<template>
    <div class="card">
        <div class="card-body">
            <form @submit.prevent="">
                <div class="form-group">
                    <label for="name">
                        Name:
                    </label>
                    <input type="name" v-model="form.name" class="form-control" placeholder="Enter name" id="name"
                        name="name">
                </div>

                <div class="card">
                    <div class="card-body text-center">
                        <div class="small font-italic text-muted mb-4">
                            JPG or PNG no larger than 5 MB
                        </div>

                        <input type="file" multiple @change="onFileChange">
                        <div class="image-preview" v-for="(image, index) in images" :key="index">
                            <img :src="image.url" alt="Preview" class="image-hotel" />
                            <div>
                                <button @click="removeImage(index)">Remove</button>
                            </div>

                        </div>
                    </div>
                </div>
                <!-- <QuillEditor theme="snow" /> -->
                <!-- <QuillEditor :modules="modules" toolbar="full" /> -->
                <!-- <QuillEditor toolbar="minimal"/> -->


                <div class="form-group">
                    <label for="description">Description</label>
                    <textarea v-model="form.message" :maxlength="max" class="form-control" id="description" rows="3"
                        name="description" placeholder="Enter description"></textarea>
                    <span class="message-counter">{{ form.message.length }}/{{ max }}</span>
                </div>

            </form>
        </div>
    </div>
</template>

