<template>
 <main class="items-grid">
    <ProductCard
      v-for="product in store.products"
      :key="product.id"
      :product="product"
      @order="handleOrder"
    />
  </main>

</template>

<script setup>
import { onMounted } from 'vue'
import { useProductStore } from '../stores/productStore'
import ProductCard from '../components/ProductCard.vue'

const store = useProductStore()

function handleOrder(product){
console.log(product);
}

onMounted(() => {
  store.loadProducts()
})
</script>

<style scoped>
.items-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: auto;
}

.item-card {
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  position: relative;
  min-height: 380px;
}

.item-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
}

/* Image container fix */
.image-container {
  width: 100%;
  max-height: 250px;
  background: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.image-container img {
  max-width: 100%;
  max-height: 220px;
  object-fit: contain;
}

/* Text + button area */
.item-details {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: flex-end;
  position: relative;
}

.product-name {
  margin: 0;
  font-size: 1.2rem;
  color: #333;
}

.product-price {
  font-size: 1rem;
  color: #777;
  margin: 0.5rem 0 1.5rem;
}

/* Order button */
.add-btn {
  padding: 0.6rem 1rem;
  background: linear-gradient(to right, #716b6b, #b2967d);
  border: none;
  color: white;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: opacity 0.3s ease, transform 0.3s ease;
  opacity: 0;
  transform: translateY(10px);
}

/* Reveal on hover */
.item-card:hover .add-btn {
  opacity: 1;
  transform: translateY(0);
}


</style>
