<script>
export default {
    data() {
            return {
                logo: '../src/assets/Logo-White.svg',
                alinks: [ "Home",
                "Producten",
                "Login",
                "Cart"
                ],
                isScrolled: false
            }
        },
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
}
</script>

<template>
    <div class="container__nav">
        <div class="logo">
            <img :src="logo" alt="logo">
        </div>
        <div :class="{ 'scrolled': isScrolled }" id="navbar">
            <ul>
                <li v-for="(link, index) in alinks" :key="index">
                    <router-link :to="link.toLowerCase() === 'home' ? '/' : `/${link.toLowerCase()}`">{{ link }}</router-link>
                </li>
            </ul>
        </div>
    </div>

</template>

<style>
    
</style>