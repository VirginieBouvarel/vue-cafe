import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    itemsInCart: 0,
    restaurantName: "Café avec Vue",
    simpleMenu: [
      {
        name: "Croissant",
        image: {
          src: "img/croissant.jpg",
          alt: "Un croissant"
        },
        inStock: true,
        quantity: 1,
        price: 2.5
      },
      {
        name: "Baguette de pain",
        image: {
          src: "img/french-baguette.jpeg",
          alt: "Quatre baguettes de pain"
        },
        inStock: true,
        quantity: 1,
        price: 0.8
      },
      {
        name: "Éclair",
        image: {
          src: "img/eclair.jpg",
          alt: "Éclair au chocolat"
        },
        inStock: false,
        quantity: 1,
        price: 1.75
      }
    ],
  },
  getters: {
    getCurrentYear() {
      return new Date().getFullYear();
    }
  },
  mutations: {
    ADD_TO_SHOPPING_CART(state, number) {
      state.itemsInCart += number;
    },
  },
  actions: {
    updateShoppingCart({ commit }, quantity) {
      commit('ADD_TO_SHOPPING_CART', quantity);
  }
  },
  modules: {
  }
})
