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
      return Math.ceil(this.productenData.length / this.itemsPerPage);
    },
    displayedProducts() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.productenData.slice(startIndex, endIndex);
    },
  },
  inject: ['productenData'],
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
        <select id="merk-filter">
          <option value="merk1">Merk 1</option>
          <option value="merk2">Merk 2</option>
        </select>
        <!--moet js nog doen-->
        <label for="prijs-filter" class="prijs-filter">{{ filtertitletwo }}</label>
        <input type="range" id="prijs-filter" min="0" max="1000">
      </div>
    </div>
    <div class="product-grid">
      <div class="product-row">
        <ProductCardComponent v-for="product in displayedProducts" :key="product.id" :product="product"
          class="product-card" />
      </div>

    </div>
    <div class="pagination">
      <button @click="previousPage" :disabled="currentPage === 1">&laquo; {{ pagination }}</button>
      <button v-for="page in totalPages" :key="page" @click="setCurrentPage(page)" :class="{ active: currentPage === page }">{{ page }}</button>
      <button @click="nextPage"  :disabled="currentPage === totalPages">{{ paginationvolgende }} &raquo;</button>
    </div>
  </div>
  <div>
    <FooterComponent></FooterComponent>
  </div>
</template>
  

  
<style></style>
  