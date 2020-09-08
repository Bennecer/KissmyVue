import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recipes: [],
    favorites: [],
  },
  mutations: {
    setRecipes(state, payload) {
      state.recipes = payload.payload;
    },
    addRecipes(state, payload) {
      state.recipes = payload.payload;
    },
    setFavorites(state, payload) {
      state.favorites = payload.lsFavorites;
    },
    addFavorites(state, payload) {
      state.favorites.push(payload.payload);
      JSON.parse(localStorage.getItem('favorites'));
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    removeFavorites(state, payload) {
      const index = state.favorites.findIndex((obj) => obj.id === payload.payload.id);
      state.favorites.splice(index, 1);
      JSON.parse(localStorage.getItem('favorites'));
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
  },
  getters: {
    getRecipes: (state) => state.recipes,
    getFavorites: (state) => state.favorites,
  },
  actions: {
  },
  modules: {
  },
});
