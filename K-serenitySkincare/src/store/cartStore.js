// cartStore.js

import { defineStore } from 'pinia';

export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    cartItems: [],
    isLoggedIn: false,
    currentUser: null,
    users: [
      {
        email: 'beyzacevik09@gmail.com',
        password: 'beyza',
        address: {
          naam: 'beyza',
          achternaam: 'cevik',
          land: 'België',
          straat: 'lalastraat',
          straatnr: '1',
          postcode: '1111',
          city: 'lala',
          gsm: '+123456789',
        }
      },
      {
        email: 'robin.braibant@pxl.be',
        password: 'robin',
        address: {
          naam: 'robin',
          achternaam: 'braibant',
          land: 'België',
          straat: 'lalastraat',
          straatnr: '1',
          postcode: '1111',
          city: 'lala',
          gsm: '+123456789',
        }
      }
    ]
  }),
  actions: {
    addToCart({ product, quantity }) {
      const existingCartItemIndex = this.cartItems.findIndex(item => item.product.id === product.id);

      if (existingCartItemIndex !== -1) {
        this.cartItems[existingCartItemIndex].quantity += quantity;
      } else {
        this.cartItems.push({ product, quantity });
      }
    },
    removeFromCart(productId) {
      const index = this.cartItems.findIndex(item => item.product.id === productId);
      if (index !== -1) {
        this.cartItems = this.cartItems.filter(item => item.product.id !== productId);
      }
    },
    login(userCredentials) {
      const foundUser = this.users.find(
        user =>
          user.email === userCredentials.email &&
          user.password === userCredentials.password
      );

      if (foundUser) {
        this.currentUser = { ...foundUser }; 
        this.isLoggedIn = true; 
      } else {
        this.currentUser = null; 
        this.isLoggedIn = false; 
      }
    },
    logout() {
      this.cartItems = [];
      this.isLoggedIn = false;
    },
    clearCart() {
      this.cartItems = []; 
    },
  },
  getters: {
    cartItemsCount(state) {
      let totalQuantity = 0;
      for (const item of state.cartItems) {
        totalQuantity += item.quantity;
      }
      return totalQuantity;
    },
    getQuantityForProduct: (state) => (productId) => {
      const item = state.cartItems.find((item) => item.product.id === productId);
      return item ? item.quantity : 0;
    },
  },
});
