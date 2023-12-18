<script>
import FooterComponent from '../components/FooterComponent.vue'
import HeaderDarkComponent from '../components/HeaderDarkComponent.vue';
import { useCartStore } from '../store/cartStore.js';

export default {
  components: {
    FooterComponent,
    HeaderDarkComponent
  },
  data() {
    return {
      product: null,
      activeImageIndex: 0,
      selectedQuantity: 1,
    };
  },
  inject: ['productenData'],
  created() {
    const productId = parseInt(this.$route.params.productId);
    const foundProduct = this.productenData.find((product) => product.id === productId);

    if (foundProduct) {
      this.product = foundProduct;
    } else {
      console.error('Product not found.'); //gemaakt om errors te catchen
    }
  },
  methods: {
    prevImage() {
      console.log('Previous Image Clicked');
      this.activeImageIndex = (this.activeImageIndex - 1 + this.product.image_path.length) % this.product.image_path.length;
    },
    nextImage() {
      this.activeImageIndex = (this.activeImageIndex + 1) % this.product.image_path.length;
    },
    decreaseQuantity() {
      if (this.selectedQuantity > 1) {
        this.selectedQuantity--;
      }
    },
    increaseQuantity() {
      if (this.selectedQuantity < this.maxAvailableQuantity) {
        this.selectedQuantity++;
      }
    },
    addToCart() {
      const selectedProduct = this.product;
      const selectedQuantity = this.selectedQuantity;

      const cartStore = useCartStore();
      const quantityInCart = cartStore.getQuantityForProduct(selectedProduct.id);
      const totalQuantity = quantityInCart + selectedQuantity;

      if (totalQuantity <= this.maxAvailableQuantity) {
        cartStore.addToCart({ product: selectedProduct, quantity: selectedQuantity });

        console.log(`Added ${selectedQuantity} of ${selectedProduct.merk} to the cart.`);
      } else {
        console.log('Adding more exceeds available stock.');
      }
    }
  },
  computed: {
    displayAvailability() {
      return this.product.stock_quantity > 0 ? 'In Stock' : 'UITVERKOCHT';
    },
    isSoldOut() {
      return this.displayAvailability === 'UITVERKOCHT';
    },
    maxAvailableQuantity() {
      return this.product.stock_quantity;
    }
  }
}
</script>
<template>
  <div>
    <HeaderDarkComponent></HeaderDarkComponent>
  </div>
  <div class="background-producten">
    <div class="product-content">
      <div class="product-page">
        <div class="image-carousel">
          <div v-for="(image, index) in product.image_path" :key="index"
            :class="{ 'image': true, 'active': index === activeImageIndex }" :data-index="index">
            <img :src="image" :alt="'Image ' + (index + 1)">
          </div>
          <div class="carousel-arrows">
            <span @click="prevImage()">←</span>
            <span @click="nextImage()">→</span>
          </div>
        </div>
        <div class="product-details">
          <div class="brand">{{ product.merk }}</div>
          <div class="product-name">{{ product.soort }}</div>
          <div class="availability" :class="{ 'sold-out': isSoldOut }">{{ displayAvailability }}</div>
          <div class="description">{{ product.description }}</div>
          <div class="price">Price: €{{ product.price }}</div>
          <div class="quantity">
            <button @click="decreaseQuantity">-</button>
            <input type="number" v-model="selectedQuantity" min="1" :max="maxAvailableQuantity">
            <button @click="increaseQuantity">+</button>
          </div>
          <button @click="addToCart" class="add-to-cart">Add to Cart</button>
        </div>
      </div>


    </div>
  </div>
  <FooterComponent></FooterComponent>
</template>
<style></style>