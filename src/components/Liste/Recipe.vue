<template>
  <div class="recipe card" style="width: 15rem; margin:auto">
    <img class="card-img-top" :src="recipe.image" alt="">
    <div class="card-body">
      <h5 class="card-title">{{recipe.title}}</h5>
      <router-link :to="{ name: 'Details', params: { recipe, isFavorite } }"
      class="btn btn-info">Plus de détails</router-link>
      <button @click="toggleFavorite"
        v-if="!isFavorite" class="btn btn-warning mt-2">Ajouter aux favoris</button>
      <button @click="toggleFavorite"
        v-else class="btn btn-danger mt-2">Retirer des favoris</button>
    </div>
  </div>
</template>

<script>
import store from '../../store';

export default {
  name: 'Recipe',
  props: {
    recipe: Object,
  },
  data() {
    return {
      isFavorite: false,
      favorites: store.getters.getFavorites,
    };
  },
  methods: {
    toggleFavorite() {
      const payload = this.recipe;
      if (this.isFavorite) store.commit('removeFavorites', { payload });
      else store.commit('addFavorites', { payload });
      this.isFavorite = !this.isFavorite;
    },
  },
  mounted() {
    this.favorites = store.getters.getFavorites;
    this.isFavorite = this.favorites.includes(this.recipe);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
