<template>
    <div class="upload__box">
      <div class="upload__btn-box">
        <label class="upload__btn">
          <p>Upload images</p>
          <input type="file" multiple data-max_length="20" class="upload__inputfile" @change="handleFileChange">
        </label>
      </div>
      <div class="upload__img-wrap">
        <div v-for="(image, index) in uploadedImages" :key="index" class="upload__img-box">
          <div :style="{ backgroundImage: `url(${getImageUrl(image)})` }" :data-number="index" :data-file="image.name" class="img-bg">
            <div class="upload__img-close" @click="removeImage(index)"></div>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script setup>
  import { ref } from 'vue';

  const uploadedImages = ref([]);
  const maxImageCount = 20;

  const handleFileChange = (e) => {
    const filesArr = Array.from(e.target.files);
    filesArr.forEach((file) => {
      if (!file.type.match('image.*')) {
        return;
      }

      if (uploadedImages.value.length >= maxImageCount) {
        return;
      }

      uploadedImages.value.push(file);
    });
  };

  const removeImage = (index) => {
    uploadedImages.value.splice(index, 1);
  };

  const getImageUrl = (image) => URL.createObjectURL(image);
  </script>

<style scoped>
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
  width: 0.1px;
  height: 0.1px;
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
  transition: all 0.3s ease;
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
  transition: all 0.3s ease;
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
  width: 200px;
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
</style>
