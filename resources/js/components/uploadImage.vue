<template>
    <div class="card">
        <div class="card-body">
            <!-- <div class="upload__box"> -->
                <!-- <div class="upload__btn-box">
                    <label class="upload__btn">
                        <p>Upload Images</p>
                        <input type="file" multiple data-max_length="20" class="upload__inputfile"
                            @change="handleFileChange">
                    </label>
                </div> -->
                <!-- <label id="idlabel" class="mdl-button mdl-js-button mdl-button--raised">
                    <input type="file" id="files" name="files[]"  multiple  @change="handleFileChange"/>
                    <i class="fa fa-camera"></i>
                  </label> -->
                  <div class="file-input">
                    <input
                      type="file"
                      name="file-input"
                      id="file-input"
                      class="file-input__input"
                      multiple  @change="handleFileChange"
                    />
                    <label class="file-input__label" for="file-input">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="upload"
                        class="svg-inline--fa fa-upload fa-w-16"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                        ></path>
                      </svg>
                      <span>Upload file</span></label
                    >
                  </div>

                <div class="upload__img-wrap">
                    <div v-for="(image, index) in uploadedImages" :key="index" class="upload__img-box">
                        <div :style="{ backgroundImage: `url(${getImageUrl(image)})` }" :data-number="index"
                            :data-file="image.name" class="img-bg">
                            <div class="upload__img-close" @click="removeImage(index)"></div>
                        </div>
                    </div>
                </div>
                <div v-if="uploadedImages.length">
                    <button @click="reset()">Clear</button>
                </div>
            <!-- </div> -->
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, defineEmits, watch  } from 'vue';

defineExpose({
    reset,
});

const props = defineProps({
    uploadedImages: {
    },

});

const emit = defineEmits();
// const uploadedImages = ref([]);
const uploadedImages = ref(props.uploadedImages);
const maxImageCount = 20;

// Watch for changes in the props.uploadedImages
watch(() => props.uploadedImages, (newValue, oldValue) => {
  uploadedImages.value = [...newValue]; // Make a copy of newValue to avoid reactivity issues
});

const handleFileChange = (e) => {
    const filesArr = Array.from(e.target.files);
    filesArr.forEach((file) => {
        if (!file.type.match('image.*')) {
            return;
        }

        if (uploadedImages.value.length >= maxImageCount) {
            return;
        }
        console.log(file);
        uploadedImages.value.push(file);
    });
};

const removeImage = (index) => {
    uploadedImages.value.splice(index, 1);
};

const getImageUrl = (image) => URL.createObjectURL(image);

 // Emit the uploadedImages array to the parent component
 const emitImages = (images) => {
    emit('update:uploadedImages', images);
  };

  // Watch for changes in uploadedImages and emit them
  watch(uploadedImages, (newValue) => {
    emitImages(newValue);
  });

  // Fetch and populate uploadedImages, then emit the initial value
  onMounted(() => {
    // ... Fetch and populate uploadedImages ...

    // Emit the initial value
    emitImages(uploadedImages.value);
  });

const reset =()=>{
    uploadedImages.value = [];
    console.log("Delete image");
}

// Listen for the reset event from the parent component
watch(() => {
  window.addEventListener('resetChildComponent', reset);
});

</script>

<style>
.file-input__input {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }

  .file-input__label {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 600;
    color: #fff;
    font-size: 14px;
    padding: 10px 12px;
    background-color: #4245a8;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  }

  .file-input__label svg {
    height: 16px;
    margin-right: 4px;
  }

.img-bg {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
    padding-bottom: 100%;
}

</style>
