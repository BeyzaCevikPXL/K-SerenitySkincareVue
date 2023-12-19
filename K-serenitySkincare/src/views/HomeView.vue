<script>
import PopularProductsComponent from '../components/PopularProductsComponent.vue'
import HeaderWhiteComponent from '../components/HeaderWhiteComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
import '@fortawesome/fontawesome-free/css/all.css';

export default {
  data(){
    return{
      title: "Korean Skincare",
      subtitle: "Because gorgeous, glowing skin is for everyone.",
      button: "Winkel nu",
      subtexttitle: "Onze huidverzorgingsfilosofie",
      subtext: "Ontdek de geheimen van stralende en gezonde huidverzorging met onze collectie hoogwaardige Koreaanse skincare producten. Van zachte reiniging tot revitaliserende serums, wij bieden een uitgebreid assortiment aan producten die voldoen aan jouw unieke huidbehoeften. Laat je huid stralen met onze zorgvuldig geselecteerde formules, gebaseerd op jarenlange Koreaanse schoonheidstradities. Start vandaag nog je reis naar een stralende huid met onze skincare essentials.",
      contacttitle: "CONTACT",
      contactmailtitle: "EMAIL",
      contactmail: "info@kserenityskincare.be",
      contacttelefoontitle: "TELEFOON",
      contacttel: "+32 123 45 67 89",
      contactsocialstitle: "SOCIALS",
      contactimage: '../src/assets/Layer 2.png'
    }
  },
  inject:  ['productenData'],
  components: {
    PopularProductsComponent,
    HeaderWhiteComponent,
    FooterComponent
  }
}
</script>

<template>
  <div>
    <HeaderWhiteComponent />
  </div>
  <div class="background">
    <div class="content">
      <h1>{{ title }}</h1>
      <p>{{ subtitle }}</p>
      <router-link to="/products"><button>{{ button }}</button></router-link>
    </div>
  </div>
  <div class="info">
    <div class="title">
      <h2>{{ subtexttitle }}</h2>
    </div>
    <div class="uitleg">
        <p>{{ subtext }}
        </p>
      </div>
  </div>
  <div>
    <PopularProductsComponent></PopularProductsComponent>
  </div>
  <div class="contact">
    <div class="title">
      <img :src="contactimage" alt="contact image">
      <h2>{{ contacttitle }}</h2>
    </div>
    <div class="gegevens">
        <h2>{{contactmailtitle}}</h2>
        <p>{{ contactmail }}</p>
        <h2>{{contacttelefoontitle}}</h2>
        <p>{{ contacttel }}</p>
        <h3>{{contactsocialstitle}}</h3>
        <a href="#"><i class="fa-brands fa-square-instagram fa-2xl"></i></a>
        <a href="#"><i class="fa-brands fa-square-x-twitter fa-2xl"></i></a>
    </div>
  </div> 
  <div>
    <FooterComponent></FooterComponent>
  </div>
</template>

<style scoped>
</style>
