<script>
import FooterComponent from '../components/FooterComponent.vue'
export default {
    props: {
        productenData: {
        type: Array,
        required: true
        }
    },
    data(){
        return{
            activeImageIndex: 0,
            stock: "Op voorraad: ",
            button: "In Winkelwagen"
        }
    },
    components: {
        FooterComponent
    },
    inject: ['productenData'],
    computed: {
        currentProduct() {
        return this.productenData[this.activeImageIndex];
        }
    },
    methods: {
        prevImage() {
            this.activeImageIndex = (this.activeImageIndex - 1 + this.productenData.length) % this.productenData.length;
        },
        nextImage() {
            this.activeImageIndex = (this.activeImageIndex + 1) % this.productenData.length;
        }
    }
}
</script>
<template>
    <div class="background-producten">
      <div class="product-content">
        <div class="product-page">
            <div class="image-carousel">
          <div v-for="(product, index) in productenData" :key="index" :class="{ 'image': true, 'active': index === activeImageIndex }" :data-index="index">
            <img :src="product.image_path[0]" :alt="'Image ' + (index + 1)">
          </div>
          <div class="carousel-arrows">
            <span @click="prevImage()">←</span>
            <span @click="nextImage()">→</span>
          </div>
        </div>
    
        <div class="product-details">
          <div class="brand">{{ currentProduct.merk }}</div>
          <div class="product-name">{{ currentProduct.soort }}</div>
          <div class="description">{{ currentProduct.description }}</div>
          <div class="price">{{ currentProduct.price }}</div>
          <div class="availability">{{ currentProduct.stock_quantity }}</div>
          <div class="quantity">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
          <button class="add-to-cart"></button>
        </div>
        </div>
      </div>
    </div>
    <FooterComponent></FooterComponent>
</template>
<style>
    
</style>