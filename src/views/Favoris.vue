<template>
  <div class="favoris container">
    <h1>Voici vos favoris</h1>
    <h5 v-if="favorites.length == 0">Vous n'avez pas de favoris pour l'instant</h5>
    <div class="row mt-5">
      <div class="col-xl-3 col-lg-4 col-md-6 col-sm-8 col-12 p-1"
            v-for="(recipe, index) in favorites" :key="index">
        <Recipe :recipe="recipe">
        </Recipe>
      </div>
    </div>
  </div>
</template>
<script>
import store from '../store';
import Recipe from '../components/Liste/Recipe.vue';

export default {
  name: 'Favoris',
  components: {
    Recipe,
  },
  data() {
    return {
      favorites: [],
    };
  },
  methods: {
  },
  mounted() {
    const lsFavorites = JSON.parse(localStorage.getItem('favorites'));
    if (lsFavorites) {
      this.favorites = lsFavorites;
      store.commit('setFavorites', { lsFavorites });
    }
  },
};
</script>
