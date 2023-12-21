<script>
import ProductCardComponent from '../components/ProductCardComponent.vue'
import HeaderDarkComponent from '../components/HeaderDarkComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default {
  data() {
    return {
      title: "Onze Producten",
      subtitle: "Ontdek onze uitgebreide collectie Koreaanse skincare producten.",
      filtertitle: "Filter op merk:",
      filtertitletwo: "Filter op prijs:",
      pagination: "Vorige",
      paginationvolgende: "Volgende",
      currentPage: 1,
      itemsPerPage: 8,
      selectedBrandFilter: '',
      selectedPriceFilter: '',
      filtermerk: "Alle merken",
      filteroptie1: "0 - 10",
      filteroptie2: "10 - 20",
      filteroptie3: "20 - 30",
      filteroptie4: "30 - 40",
      filteroptie5: "40 - 50",
      filterprijs: "Alle prijzen"
    }
  },
  components: {
    ProductCardComponent,
    HeaderDarkComponent,
    FooterComponent
  },
  inject: ['productenData'],
  computed: {
    totalPages() {
      //afronden math ceil
      return Math.ceil(this.filteredProducts.length / this.itemsPerPage);
    },
    filteredProducts() {
      let products = [...this.productenData];

      if (this.selectedBrandFilter) {
        products = products.filter(product => product.merk === this.selectedBrandFilter);
      }

      if (this.selectedPriceFilter) {
        if (this.selectedPriceFilter !== 'all') {
        const [minPrice, maxPrice] = this.selectedPriceFilter.split('-');
        products = products.filter(product => product.price >= minPrice && product.price < maxPrice);
      }}

      return products;
    },
    displayedProducts() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.filteredProducts.slice(startIndex, endIndex);
    },
    uniqueBrands() {
      const brands = new Set();
      this.productenData.forEach(product => {
        brands.add(product.merk); 
      });
      return Array.from(brands);
    },
  },
  methods: {
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    setCurrentPage(page) {
      this.currentPage = page;
    },
    handleBrandFilterChange(value) {
      this.selectedBrandFilter = value;
      this.currentPage = 1; 
    },
    handlePriceFilterChange(range) {
      if (range === 'all') {
        this.selectedPriceFilter = null; 
      } else {
        this.selectedPriceFilter = range; 
      }
    },
    //debugg
    onProductSelected(selectedProduct) {
      console.log('Clicked product:', selectedProduct);
      if (selectedProduct && selectedProduct.id) {
        this.$router.push(`/product/${selectedProduct.id}`);
      } else {
        console.error('Selected product or product id is missing or undefined');
      }
    },
  },
}
</script>

<template>
  <div>
    <HeaderDarkComponent></HeaderDarkComponent>
  </div>
  <div class="producten-titel">
    <h1>{{ title }}</h1>
    <p>{{ subtitle }}</p>
  </div>
  <div class="background-producten">
    <!-- Filter sectie -->
    <div class="filter">
      <div class="filter-col">
        <label for="merk-filter">{{ filtertitle }}</label>
        <select id="merk-filter" class="prijs-filter" @change="handleBrandFilterChange($event.target.value)">
          <option value="">{{ filtermerk }}</option>
          <option v-for="brand in uniqueBrands" :key="brand" :value="brand">{{ brand }}</option>
        </select>
        <!--moet js nog doen-->
        <label for="prijs-filter" class="prijs-filter-groot">{{ filtertitletwo }}</label>
        <select id="prijs-filter" class="prijs-filter" @change="handlePriceFilterChange($event.target.value)">
          <option value="all">{{ filterprijs }}</option>
          <option value="0-10">{{filteroptie1}}</option>
          <option value="10-20">{{filteroptie2}}</option>
          <option value="20-30">{{filteroptie3}}</option>
          <option value="30-40">{{filteroptie4}}</option>
          <option value="40-50">{{filteroptie5}}</option>
        </select>
      </div>
    </div>
    <div class="product-grid">
      <div class="product-row">
        <ProductCardComponent v-for="product in displayedProducts" :key="product.id" :product="product"
          class="product-card" @product-selected="onProductSelected" />
      </div>

    </div>
    <div class="pagination">
      <button @click="previousPage" :disabled="currentPage === 1">&laquo; {{ pagination }}</button>
      <button v-for="page in totalPages" :key="page" @click="setCurrentPage(page)"
        :class="{ active: currentPage === page }">{{ page }}</button>
      <button @click="nextPage" :disabled="currentPage === totalPages">{{ paginationvolgende }} &raquo;</button>
    </div>
  </div>
  <div>
    <FooterComponent></FooterComponent>
  </div>
</template>
  

  
<style></style>
  