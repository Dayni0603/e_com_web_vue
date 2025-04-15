<template>
  <h5>Home</h5>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useProductStore } from "../stores/productStore";

const store = useProductStore();

onMounted(() => {
  store.loadProducts();
});
</script>
