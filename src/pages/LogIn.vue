<!-- src/views/LoginView.vue -->
<template>
  <div class="container">
    <div class="login-container" :style="{ backgroundImage: `url(${backgroundImage})` }">
      <div class="login-card">
        <h2 class="login-title">Login</h2>
        <form @submit.prevent="handleLogin">
          <label>Email</label>
          <input v-model="email" type="email" required />

          <label>Password</label>
          <input v-model="password" type="password" required />

          <button type="submit">Login</button>
          <p v-if="error" class="error-text">{{ error }}</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import backgroundImage from '../assets/images/1.jpg'

import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/userStore';

const authStore = useUserStore();
const router = useRouter();

const email = ref('');
const password = ref('');
const error = ref('');

const handleLogin = async () => {
  try {
    error.value = '';

    await authStore.login(email.value, password.value);
    router.push('/shop');
  } catch (e: any) {
    error.value = e.message || 'Login failed';
  }
};
</script>

<style scoped>
.container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: 0;
  margin-top: -31px;
}

.login-container {
  min-height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.login-card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.login-title {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin: 0.5rem 0 0.2rem;
  font-weight: bold;
}

input {
  padding: 0.6rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #b2967d;
  color: white;
  padding: 0.6rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

button:hover {
  background-color: #2980b9;
}

.error-text {
  color: red;
  margin-top: 0.5rem;
  font-size: 0.9rem;
  text-align: center;
}
</style>