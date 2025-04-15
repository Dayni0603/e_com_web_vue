<template>
  <header class="shop-header">
    <div class="shop-name navigation">
      <h1>Gebeya.com</h1>
      <nav class="nav-links">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact">Contact Us</RouterLink>
      </nav>
    </div>
    <div class="cart-section">
      <div class="cart">
        🛒 <span class="count">{{ cart.length }}</span>
      </div>
      <div
        class="user-profile"
        @mouseover="showName = true"
        @mouseleave="showName = false"
      >
        <span v-if="!showName" class="user-icon">👤</span>
        <span v-else class="user-name">{{ userName }}</span>
      </div>
    </div>
  </header>
</template>

<script setup>
import { reactive, ref } from "vue";

const userName = "Danayit Mulugeta";
const cart = reactive([]);
const showName = reactive(false);
</script>

<style scoped>
.shop-container {
  font-family: lato, sans-serif;
  background: linear-gradient(to right, #f2f9ff, #ffffff);
  min-height: 100vh;
  color: #333;
}

.shop-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  background: #ffffff;
  padding: 1rem 2rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.05);
}

.shop-name h1 {
  margin: 0;
  font-size: 1.6rem;
  font-weight: 400;
  color: #b2967d;
}
.navigation {
  display: flex;
  gap: 20rem;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  text-decoration: none;
  color: #555;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #b2967d;
}

.cart-section {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.user-profile {
  cursor: pointer;
}

.user-icon {
  font-size: 1.5rem;
  background: #b2967d;
  color: white;
  padding: 0.6rem;
  border-radius: 50%;
}

.user-name {
  font-size: 1rem;
  font-weight: bold;
  color: #b2967d;
}

.cart {
  font-size: 1.4rem;
  position: relative;
}

.count {
  position: absolute;
  top: -8px;
  right: -12px;
  background: crimson;
  color: white;
  padding: 0.2rem 0.5rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: bold;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
}

.items-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Always 4 columns */
  gap: 2rem;
  padding: 0 2rem;
  justify-content: center; /* Center the grid if it doesn't take full width */
  max-width: 1200px; /* Optional: max width for better control */
  margin: 0 auto; /* Center the whole grid container */
}

.item-card {
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.item-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
}

.item-card img {
  width: 100%;
  border-radius: 12px;
  object-fit: cover;
  margin-bottom: 1rem;
}

.item-details h3 {
  margin: 0;
  font-size: 1.1rem;
}

.item-details p {
  font-weight: bold;
  color: #555;
}

.add-btn {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.6rem 1rem;
  background: linear-gradient(to right, #716b6b, #b2967d);
  border: none;
  color: white;
  border-radius: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(164, 164, 165, 0.3);
}

.add-btn:hover {
  transform: translateX(-50%) scale(1.05);
  background: linear-gradient(to right, #716b6b, #b2967d);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
