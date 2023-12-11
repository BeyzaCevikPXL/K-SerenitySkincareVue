<script>
export default {
    inject: ['productenData'],
    computed: {
        popularProducts() {
            return this.productenData.sort((a, b) => b.stock_quantity - a.stock_quantity).slice(0, 3);
            // Sorteer de producten op voorraad en neem de eerste 3 met de minste voorraad
        }
    }
};
</script>
<template>
    <div>
        <h2>Meest Populaire Producten</h2>
        <ul>
        <li v-for="product in popularProducts" :key="product.id">
            <h3>{{ product.merk }} - {{ product.soort }}</h3>
            <p>Op voorraad: {{ product.stock_quantity }}</p>
        </li>
        </ul>
    </div>
</template>

<style>
    
</style>