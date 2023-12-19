<script>
import HeaderDarkComponent from '../components/HeaderDarkComponent.vue';
export default {
    data(){
        return{
            title: "Login",
            email: "E-mailadres:",
            wachtwoord: "Wachtwoord:",
            buttonlogin: "Inloggen",
            forgot: "Wachtwoord vergeten",
            forgottext: "Vul het e-mailadres in waarmee u uw account heeft aangemaakt. We sturen u zodadelijk een e-mail met een link om een nieuw wachtwoord in te stellen.",
            resetbutton: "Verstuur resetlink"
        }
    },
    inject: ['productenData'],
    components: {
        HeaderDarkComponent
    },
    methods: {
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
            <h2>{{title}}</h2>
            <form action="#" method="post">
                <label for="email">{{ email }}</label>
                <input type="email" id="email" name="email" required><br>

                <label for="password">{{  wachtwoord }}</label>
                <input type="password" id="password" name="password" required><br>

                <button type="submit">{{ buttonlogin}}</button>
            </form>

            <p><a href="#" @click="openModal">{{ forgot }}</a></p>
        </div>
    </div>
    <div id="modal" class="modal" ref="modal">
        <div class="modal-content">
            <span class="close" @click="closeModal">&times;</span>
            <h2>{{ forgot }}</h2>
            <p>{{ forgottext }}</p>
            <label for="reset-email">{{email}}</label>
            <input type="email" id="reset-email" name="reset-email" required><br>
            <button class="linkbtn" @click="sendResetEmail">{{resetbutton}}</button>
        </div>
    </div>
</template>
<style></style>