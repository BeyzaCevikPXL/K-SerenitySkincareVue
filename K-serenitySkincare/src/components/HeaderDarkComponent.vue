<script>
import { useCartStore } from '../store/cartStore.js';

export default {
    data() {
        return {
            logo: '../src/assets/Logo-zwart.svg',
            alinks: ["Home",
                "Products",
                "Login",
                "Cart"
            ],
            isScrolled: false,
        }
    },
    computed: {
        cartItemsCount() {
            const cartStore = useCartStore(); 
            return cartStore.cartItemsCount; 
        }
    },
    watch: {
    cartItemsCount(newValue) {
      this.cartCount = newValue; // Update cartCount bij elk add
    }
  },
}
/*         mounted() {
            window.addEventListener('scroll', this.handleScroll);
        },
        methods: {
            handleScroll() {
                this.isScrolled = window.scrollY > 100;
                if (!this.isScrolled) {
                    window.removeEventListener('scroll', this.handleScroll);
                }
            },
        }, */
</script>

<template>
    <div class="container__nav">
        <div class="logo">
            <img :src="logo" alt="logo">
        </div>
        <div :class="{ 'scrolled': isScrolled }" id="navbarpro">
            <ul>
                <li v-for="(link, index) in alinks" :key="index">
                    <router-link :to="link.toLowerCase() === 'home' ? '/' : `/${link.toLowerCase()}`">{{ link }}
                        <span v-if="link.toLowerCase() === 'cart' && cartItemsCount > 0">({{ cartItemsCount }})</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<style></style>