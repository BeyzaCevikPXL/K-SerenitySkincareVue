<script>
import { useCartStore } from '../store/cartStore.js';
import FooterComponent from '../components/FooterComponent.vue'
import HeaderDarkComponent from '../components/HeaderDarkComponent.vue'

export default {
    data() {
        return {
            title: "Winkelwagen",
            producttitle: "Producten",
            merk: "Merk",
            soort: "Soort",
            subtotaal: "Subtotaal:",
            remove: "Verwijder",
            totalproducts: "Totaal producten:",
            btw: "Btw 21%:",
            total: "Totaal:",
            button: "BESTELLEN:"

        }
    },
    components: {
        HeaderDarkComponent,
        FooterComponent
    },
    computed: {
        cartItems() {
            const cartStore = useCartStore();
            return cartStore.cartItems;
        }
    },
    methods: {
        removeFromCart(productId) {
            console.log('Removing product with ID:', productId);

            try {
                const cartStore = useCartStore();
                cartStore.removeFromCart(productId);
            } catch (error) {
                console.error('Error removing product:', error);
            }
        },
        calculateTotalProducts() {
            return this.cartItems.reduce((total, item) => total + item.quantity, 0);
        },
        calculateSubtotal() {
            return this.cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
        },
        calculateBTW() {
            return this.calculateSubtotal() * 0.21;
        },
        calculateTotal() {
            return this.calculateSubtotal() + this.calculateBTW();
        },
        goBack() {
            this.$router.go(-1);
        }
    }
}
</script>
<template>
    <HeaderDarkComponent></HeaderDarkComponent>
    <div class="shopping-cart">
        <div class="shopping-title">
            <h1>{{ title }}</h1>
        </div>
        <div class="shopping-body">
            <div v-if="cartItems.length > 0" class="shopping-cart-items">
                <div v-for="(item, index) in cartItems" :key="index" class="shopping-cart-item">
                    <h2 class="shopping-product-title">{{ item.product.name }}</h2>
                    <div class="shopping-product-details">
                        <div class="shopping-product-image">
                            <img :src="item.product.image_path[0]" alt="Product Image">
                        </div>
                        <div class="shopping-info">
                            <p class="shopping-product-merk"><b>{{ item.product.merk }}</b></p>
                            <p class="shopping-product-soort">{{ item.product.soort }}</p>
                            <div class="shopping-quantity">
                                <input type="number" v-model="item.quantity" min="1" class="shopping-quantity-input">
                            </div>
                            <p class="shopping-subtotal">€ {{ (item.product.price * item.quantity).toFixed(2) }}</p>
                            <button @click="removeFromCart(item.product.id)" class="shopping-remove-button">{{ remove
                            }}</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cart-summary" v-if="cartItems.length > 0">
                <h2>Winkelwagenoverzicht</h2>
                <div class="summary-grid">
                    <div class="summary-label">{{ totalproducts }}</div>
                    <div class="summary-value">{{ calculateTotalProducts() }}</div>

                    <div class="summary-label">{{ subtotaal }}</div>
                    <div class="summary-value">€ {{ calculateSubtotal().toFixed(2) }}</div>

                    <div class="summary-label">{{ btw }}</div>
                    <div class="summary-value">€ {{ calculateBTW().toFixed(2) }}</div>
                    <div class="summary-label"><b>{{ total }}</b></div>
                    <div class="summary-value"><b>€ {{ calculateTotal().toFixed(2) }}</b></div>
                </div>
                <button class="checkout-button">{{ button }}</button>
            </div>
        </div>
        <div class="empty-cart-message" v-if="cartItems.length === 0">
            <p>Je winkelwagen is leeg</p>
            <button @click="goBack" class="go-back-button">Ga terug</button>
        </div>
    </div>
    <FooterComponent></FooterComponent>
</template>
<style></style>