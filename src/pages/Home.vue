<template>
  <div class="home-page">
    <!-- Background Image Slideshow -->
    <div
      class="background"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
    ></div>

    <!-- Overlay Content -->
    <div class="overlay">
      <h1>Welcome to Gebeya.Com</h1>
      <p>Discover your favorite products at unbeatable prices!</p>
      <button @click="goToShop">Shop Now</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import backgroundImage from '../assets/images/1.jpg'
import router from '../router'


const currentImage = ref(0)
let interval = null

onMounted(() => {
  interval = setInterval(() => {
    currentImage.value = (currentImage.value + 1) % 1  // Only 1 image, no change
  }, 4000)
})

onBeforeUnmount(() => {
  clearInterval(interval)
})

function goToShop() {
  // you can navigate or emit event here
  console.log('Redirect to shop')
  router.push('shop')
}
</script>

<style scoped>
.home-page {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: 0;
  margin-top: -31px;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: background-image 1s ease-in-out;
  z-index: 0; /* sit below overlay but inside home-page */
}

.overlay {
  position: relative;
  z-index: 1; /* above background */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: white;
  background-color: rgba(0, 0, 0, 0.4);
  text-align: center;
}

.overlay h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.overlay p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.overlay button {
  background-color: white;
  color: black;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.overlay button:hover {
  background-color: #ddd;
}
</style>
