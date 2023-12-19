<script>
export default {
  data(){
    return{
      munt: "€ "
    }
  },
  inject: ['productenData'],
  props: {
    product: Object
  },
  methods: {
    selectProduct() {
      if (this.product && this.product.id) {
        //test
        console.log('Clicked product:', this.product);
        this.$router.push(`/product/${this.product.id}`);
      } else {
        console.error('Product or product id is missing or undefined');
      }
    }
  }
}
</script>
<template>
  <div class="product-card" @click="selectProduct">
    <router-link :to="`/product/${product.id}`">
      <a :href="`/product/${product.id}`">
        <img :src="product.image_path[0]" :alt="`Product ${product.id}`">
        <h2>{{ product.merk }}</h2>
        <p>{{ product.soort }}</p>
        <p class="prijskleur">{{ munt + product.price.toFixed(2) }}</p>
      </a>
    </router-link>
  </div>
</template>

<style ></style>
