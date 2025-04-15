<template>
  <div class="shop-container">
    <Header />
    <div>
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
</script>

<style scoped>
.shop-container {
  font-family: lato, sans-serif;
  background: linear-gradient(to right, #f2f9ff, #ffffff);
  min-height: 100vh;
  color: #333;
}
</style>
