<script>
import FooterComponent from '../components/FooterComponent.vue'
import { useCartStore } from '../store/cartStore.js';


export default {
    data() {
        return {
            gobackbutton: "Ga terug",
            title: "Checkout",
            subtitle: "Afleveradres",
            checkboxje: "Ander factuuradres?",
            subtwee: "Factuuradres",
            subdrie: "Overzicht",
            aantal: "Aantal: ",
            totaalsub: "Subtotaal",
            totaalbtw: "Btw 21%:",
            totaal: "TOTAAL:",
            buttonbevestig: "BEVESTIG BETALING",
            showBillingForm: false,
            munt: "€"

        }
    },
    components: {
        FooterComponent
    },
    methods: {
        goBack() {
            this.$router.go(-1);
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
        confirmPayment() {
            this.$router.push('/confirmed');
        },
    },
    computed: {
        cartItems() {
            const cartStore = useCartStore();
            return cartStore.cartItems;
        },
        loggedInUser() {
            const cartStore = useCartStore();
            return cartStore.currentUser;
        }
    },
}
</script>
<template>
    <div class="checkout-body">
        <div class="logo">
            <img src="../assets/Logo-zwart.svg" alt="logo">
        </div>
        <div class="checkout-container">
            <div class="center-title">
                <h1>{{ title }}</h1>
                <button @click="goBack" class="go-back-button">{{ gobackbutton }}</button>
            </div>
            <div class="flex-checkout">
                <div class="address-section">
                    <h3>{{ subtitle }}</h3>
                    <form class="shipping-form" id="shippingForm">
                        <input type="text" id="firstName" name="firstName" placeholder="Voornaam" v-model="loggedInUser.address.naam" required><br>
                        <input type="text" id="lastName" name="lastName" placeholder="Achternaam" v-model="loggedInUser.address.achternaam" required><br>
                        <input type="text" id="country" name="country" placeholder="Land" v-model="loggedInUser.address.land" required><br>
                        <input type="text" id="address" name="address" placeholder="Straat" v-model="loggedInUser.address.straat" required><br>
                        <input type="text" id="husnummer" name="huisnummer" placeholder="Huisnummer" v-model="loggedInUser.address.straatnr" required><br>
                        <input type="text" id="postalCode" name="postalCode" placeholder="Postcode" v-model="loggedInUser.address.postcode" required><br>
                        <input type="text" id="city" name="city" placeholder="Plaats" v-model="loggedInUser.address.city" required><br>
                        <input type="text" id="phoneNumber" name="phoneNumber" placeholder="GSM-nummer" v-model="loggedInUser.address.gsm" required><br>
                    </form>
                    <input type="checkbox" id="differentBilling" v-model="showBillingForm">
                    <label for="differentBilling">{{ checkboxje }}</label>
                    <div v-show="showBillingForm">
                        <h3>{{ subtwee }}</h3>
                        <form class="shipping-form" id="billingForm">
                            <input type="text" id="firstName" name="firstName" placeholder="Voornaam" required><br>
                            <input type="text" id="lastName" name="lastName" placeholder="Achternaam" required><br>
                            <input type="text" id="country" name="country" placeholder="Land" required><br>
                            <input type="text" id="address" name="address" placeholder="Straat" required><br>
                            <input type="text" id="huisnummer" name="huisnummer" placeholder="Huisnummer" required><br>
                            <input type="text" id="postalCode" name="postalCode" placeholder="Postcode" required><br>
                            <input type="text" id="city" name="city" placeholder="Plaats" required><br>
                            <input type="text" id="phoneNumber" name="phoneNumber" placeholder="GSM-nummer" required><br>
                        </form>
                    </div>

                </div>
                <div class="checkout-order-summary">
                    <div v-for="(item, index) in cartItems" :key="index" class="checkout-product-item">
                        <img :src="item.product.image_path[0]" alt="Product Image">
                        <div class="checkout-product-details">
                            <p class="checkout-brand-name">{{ item.product.soort }}</p>
                            <p class="checkout-detail-quantity"> {{ aantal + item.quantity }}</p>
                        </div>
                    </div>
                    <div class="total-section">
                        <div class="total-summary-label">{{ totaalsub }}</div>
                        <div class="total-summary-value">{{ munt + calculateSubtotal().toFixed(2) }}</div>
                        <div class="total-summary-label">{{ totaalbtw }}</div>
                        <div class="total-summary-value">{{ munt + calculateBTW().toFixed(2) }}</div>
                        <div class="total-summary-label"><b>{{ totaal }}</b></div>
                        <div class="total-summary-value">{{ munt + calculateTotal().toFixed(2) }}</div>
                    </div>
                    <button @click="confirmPayment" id="confirmButton">{{ buttonbevestig }}</button>
                </div>
            </div>
        </div>
    </div>
    <FooterComponent></FooterComponent>
</template>
<style></style>