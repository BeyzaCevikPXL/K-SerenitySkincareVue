import { defineStore } from 'pinia';
import productenData from '../../producten.json';

export const useProductenStore = defineStore('producten', {
  state: () => ({
    productenData: [],
  }),
  actions: {
    setProductenData() {
      this.productenData = productenData;
    },
  },
  getters: {
    getProductenData() {
      return this.productenData;
    },
  },
});