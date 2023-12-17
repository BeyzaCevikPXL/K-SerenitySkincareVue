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
        // If the product already exists in the cart, update its quantity
        this.cartItems[existingCartItemIndex].quantity += quantity;
      } else {
        // If the product is not in the cart, add it with the specified quantity
        this.cartItems.push({ product, quantity });
      }
    },
    removeFromCart(index) {
      this.items.splice(index, 1);
    },
  },
  // Add other actions as needed: updateCart, clearCart, etc.
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
    // Add other getters as needed: totalPrice, cartItems, etc.
  },
});
