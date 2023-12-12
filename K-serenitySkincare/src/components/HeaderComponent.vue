<script>
export default {
    data() {
            return {
                logo: '../assets/Logo-White.svg',
                alinks: [ "Home",
                "Producten",
                "Login"
                ]
            }
        },
}
</script>

<template>
    <div class="container__nav">
        <div class="logo">
            <img :src="logo" alt="logo">
        </div>
        <div class="navbar" id="navbarjs">
            <ul>
                <li v-for="(link, index) in alinks" :key="index">
                    <router-link :to="`${link.toLowerCase()}`">{{ link }}</router-link>
                </li>
            </ul>
        </div>
    </div>

</template>

<style>
    
</style>