import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recipes: [],
  },
  mutations: {
    setRecipes(state, payload) {
      state.recipes = payload.payload;
    },
    addRecipes(state, payload) {
      state.recipes = payload.payload;
    },
  },
  getters: {
    getRecipes: (state) => state.recipes,
  },
  actions: {
  },
  modules: {
  },
});
