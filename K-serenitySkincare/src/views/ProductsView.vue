<script>
import ProductCardComponent from './ProductCardComponent.vue';

export default {
  components: {
    ProductCardComponent 
  },
  inject: ['productenData'],
}
</script>

<template>
    <div>
      <h1>Alle Producten</h1>
      <div class="products-container">
        <ProductCardComponent v-for="product in productenData" :key="product.id" :product="product" />
      </div>
    </div>
  </template>
  

  
  <style>
  </style>
  