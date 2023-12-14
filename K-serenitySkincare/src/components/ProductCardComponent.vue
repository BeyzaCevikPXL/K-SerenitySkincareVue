<script>
export default {
  inject: ['productenData'],
  props: {
    product: Object
  }
}
</script>
<template>
<!--   <div class="product-grid">
    <div class="product-row"> -->
      <div class="product-card">
        <a :href="`/product/${product.id}`">
          <img :src="product.image_path[0]" :alt="`Product ${product.id}`">
          <h2>{{ product.merk }}</h2>
          <p>{{ product.soort }}</p>
          <p class="prijskleur">€{{ product.price.toFixed(2) }}</p>
        </a>
      </div>
<!--     </div>
  </div> -->
</template>

<style >
</style>
