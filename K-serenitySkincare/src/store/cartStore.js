// cartStore.js

import { defineStore } from 'pinia';

export const useCartStore = defineStore( {
  id: 'cart',
  state: () => ({
    cartItems: []
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
  }
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
