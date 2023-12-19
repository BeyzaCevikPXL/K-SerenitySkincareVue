<script>
import FooterComponent from '../components/FooterComponent.vue';
import { useCartStore } from '../store/cartStore.js';

export default {
    data() {
        return {
            title: "Betaald!",
            subtitle: "Uw betaling is geslaagd.",
            button: "Keer terug naar de producten",
            aantal: 'Aantal: ',
            munt: "€ ",
            overzicht: "Wat u heeft gekocht:",
            totaal: "TOTAAL: "
        }
    },
    components: {
        FooterComponent
    },
    computed: {
        cartItems() {
            const cartStore = useCartStore();
            return cartStore.cartItems;
        }
    },
    methods: {
        calculateSubtotal() {
            return this.cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
        },
        calculateBTW() {
            return this.calculateSubtotal() * 0.21;
        },
        calculateTotal() {
            return this.calculateSubtotal() + this.calculateBTW();
        },
        clearCart() {
            const cartStore = useCartStore();
            cartStore.clearCart(); 
        }
    }
}
</script>
<template>
    <div class="body-bevestig">
        <div class="logo">
            <img src="../assets/Logo-zwart.svg" alt="logo">
        </div>
        <div class="bevestig-flex">
            <h1>{{ title }}</h1>
            <h3>{{ subtitle }}</h3>
            <router-link to="/products"><button @click="clearCart">{{ button }}</button></router-link>
        </div>
        <div class="bevestig-producten">
            <h2>{{ overzicht }}</h2>
            <div class="total-summary-label"><b>{{ totaal }}</b></div>
            <div class="total-summary-value">{{ munt + calculateTotal().toFixed(2) }}</div>
            <div v-for="(item, index) in cartItems" :key="index" class="bevestig-producten-items">
                <img :src="item.product.image_path[0]" alt="Product Image">
                <div class="bevestig-product">
                    <h3>{{ item.product.merk }}</h3>
                    <p>{{ item.product.soort }}</p>
                    <p class="bevestig-quantity">{{ aantal + item.quantity }}</p>
                    <p>{{ munt + item.product.price }}</p>
                </div>
            </div>

        </div>
    </div>
    <FooterComponent></FooterComponent>
</template>
<style></style>