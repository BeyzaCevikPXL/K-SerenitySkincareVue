<script>
import productenData from '../producten.json'
import PopularProductsComponent from './components/PopularProductsComponent.vue'

export default {
  provide: {
    productenData
  },
  data() {
    return {
      productenData
    }
  },
  components: {
    PopularProductsComponent
  }
}
</script>

<template>
  <div>
    <PopularProductsComponent></PopularProductsComponent>
  </div>
    <div>
    <h1>Producten</h1>
    <ul>
      <li v-for="product in productenData" :key="product.id">
        <h2>{{ product.merk }} - {{ product.soort }}</h2>
        <p>{{ product.description }}</p>
        <img :src="product.image_path" alt="Product afbeelding" style="max-width: 200px; height: auto;" />
        <p>Prijs: €{{ product.price }}</p>
        <p>BTW Tarief: {{ product.vat_rate }}%</p>
        <p>Op voorraad: {{ product.stock_quantity }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
</style>
