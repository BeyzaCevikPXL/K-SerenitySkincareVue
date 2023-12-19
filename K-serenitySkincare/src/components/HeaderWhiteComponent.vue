<script>
import { useCartStore } from '../store/cartStore.js';

export default {
    data() {
        return {
            logo: '../src/assets/Logo-White.svg',
            alinks: ["Home",
                "Products",
                "Login",
                "Cart"
            ],
            isScrolled: false,
            uitloggen: "Logout"
        }
    },
    actions: {

        logout() {
            this.isLoggedIn = false;
        },
    },
    computed: {
        cartItemsCount() {
            const cartStore = useCartStore();
            return cartStore.cartItemsCount;
        },
        isLoggedIn() {
            const cartStore = useCartStore();
            return cartStore.isLoggedIn;
        },
    },
    watch: {
        cartItemsCount(newValue) {
            this.cartCount = newValue;
        }
    },
    methods: {
        logoutUser() {
            const cartStore = useCartStore();
            cartStore.logout();
            this.$router.push('/login');
        },
    }
}
</script>

<template>
    <div class="container__nav">
        <div class="logo">
            <img :src="logo" alt="logo">
        </div>
        <div id="navbar">
            <ul>
                <li v-for="(link, index) in alinks" :key="index">
                    <router-link v-if="link.toLowerCase() !== 'login' || !isLoggedIn"
                        :to="link.toLowerCase() === 'home' ? '/' : `/${link.toLowerCase()}`">{{ link }}
                        <span v-if="link.toLowerCase() === 'cart' && cartItemsCount > 0">({{ cartItemsCount }})</span>
                    </router-link>
                    <button v-else @click="logoutUser" class="loguit">{{ uitloggen }}</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<style></style>