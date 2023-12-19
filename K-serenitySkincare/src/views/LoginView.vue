<script>
import HeaderDarkComponent from '../components/HeaderDarkComponent.vue';
import { useCartStore } from "../store/cartStore.js"
export default {
    data() {
        return {
            title: "Login",
            emailtitle: "E-mailadres:",
            wachtwoord: "Wachtwoord:",
            buttonlogin: "Inloggen",
            forgot: "Wachtwoord vergeten",
            forgottext: "Vul het e-mailadres in waarmee u uw account heeft aangemaakt. We sturen u zodadelijk een e-mail met een link om een nieuw wachtwoord in te stellen.",
            resetbutton: "Verstuur resetlink",
            email: '',
            password: '',
            loginError: false,
            incorrect: "Incorrecte email of wachtwoord"
        }
    },
    inject: ['productenData'],
    components: {
        HeaderDarkComponent
    },
    methods: {
        async loginUser() {
            const cartStore = useCartStore();

            try {
                await cartStore.login({ email: this.email, password: this.password });

                if (cartStore.isLoggedIn) {
                    this.$router.push('/cart');
                } else {
                    console.log('Login failed');
                    this.loginError = true; 
                }
            } catch (error) {
                console.error('Error during login:', error);
                this.loginError = true;
            }
        },
        openModal() {
            this.$refs.modal.style.display = 'block';
        },
        closeModal() {
            this.$refs.modal.style.display = 'none';
        },
        sendResetEmail() {
            const resetEmail = document.getElementById('reset-email').value;
            alert('Resetlink verzonden naar het opgegeven e-mailadres: ' + resetEmail);
            this.$refs.modal.style.display = 'none';
        }
    }
}
</script>
<template>
    <HeaderDarkComponent></HeaderDarkComponent>
    <div class="centered-container">
        <div class="login-container">
            <h2>{{ title }}</h2>
            <form @submit.prevent="loginUser">
                <label for="email">{{ emailtitle }}</label>
                <input type="email" v-model="email" id="email" name="email" :class="{ 'error-border': loginError }" required><br>

                <label for="password">{{ wachtwoord }}</label>
                <input type="password" v-model="password" id="password" name="password" :class="{ 'error-border': loginError }" required><br>
                <p v-if="loginError" class="error-message">{{ incorrect }}</p> <!-- Show error message -->
                <button type="submit">{{ buttonlogin }}</button>
            </form>

            <p><a href="#" @click="openModal">{{ forgot }}</a></p>
        </div>
    </div>
    <div id="modal" class="modal" ref="modal">
        <div class="modal-content">
            <span class="close" @click="closeModal">&times;</span>
            <h2>{{ forgot }}</h2>
            <p>{{ forgottext }}</p>
            <label for="reset-email">{{ email }}</label>
            <input type="email" id="reset-email" name="reset-email" required><br>
            <button class="linkbtn" @click="sendResetEmail">{{ resetbutton }}</button>
        </div>
    </div>
</template>
<style></style>