<script>
export default {
    data(){
        return{
            title: "Meest Populaire Producten"
        }
    },
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
    <div class="producten">
        <h2>{{ title }}</h2>
        <div v-for="product in popularProducts" :key="product.id" class="product">
            <a><img :src="product.image_path[0]" alt="Product afbeelding" />
            <h2>{{ product.merk }} </h2>
            <h2>{{ product.soort }}</h2>
            <p>€{{ product.price.toFixed(2) }}</p></a>
        </div>
    </div>
</template>

<style>
    
</style>