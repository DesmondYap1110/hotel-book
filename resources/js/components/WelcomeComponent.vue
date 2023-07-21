<template>
    <div class="card">
        <div class="card_image">
          <img  src="https://www.fitbit.com/global/content/dam/fitbit/global/marketing-pages/home/tablet/home-product-tile-smartwatches-sense2-fall22.png" alt="" />
        </div>
        <div class="card_header">
          <h2 class="card_header__title">Smart Watch</h2>
        </div>
        
    </div>
</template>

<script setup>

</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@500;700;900&display=swap");


.card {
  width: 320px;
  padding: 20px;
  background-color: #f1f3f4;
  font-family: "Roboto", sans-serif;
  border-radius: 5px;
}

.card:hover::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

.card_image {
  margin-bottom: 20px;
  height: 150px;
}

.card_image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.card_header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.card_header__title {
  font-size: 24px;
  font-weight: 700;
  margin: 0;
}


.card_description__content-text {
  font-size: 14px;
  color: #787878;
  font-weight: 500;
}


.card_button .btn {
  color: #fff;
  padding: 14px 25px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.card_button__secondary {
  background-color: #14828c;
}


</style>


