<script>
export default {
  inject: ['productenData'],
  props: {
    product: Object
  }
}
</script>

<template>
  <div>
    <img :src="product.image_path" alt="Product afbeelding" />
    <h3>{{ product.merk }} </h3>
    <h3>{{ product.soort }}</h3>
    <p>€{{ product.price }}</p>
  </div>
</template>

<style scoped></style>
  