<template>
  <div class="liste container">
    <h1>Voici une liste de recettes</h1>
    <div class="row mt-5">
      <div class="col-xl-3 col-lg-4 col-md-6 col-sm-8 col-12 p-1"
            v-for="(recipe, index) in recipes" :key="index">
        <Recipe :recipe="recipe">
        </Recipe>
      </div>
    </div>
    <button @click="loadMore" v-if="numberRecipes!==100"
    type="button" class="btn btn-primary btn-lg mt-4">Charger de nouveaux éléments</button>
  </div>
</template>
<script>
import axios from 'axios';
import store from '../store';
import Recipe from '../components/Liste/Recipe.vue';

export default {
  name: 'Liste',
  components: {
    Recipe,
  },
  data() {
    return {
      recipes: [],
      maxRecipes: 100,
      numberRecipes: 10,
    };
  },
  methods: {
    loadMore() {
      if (this.numberRecipes < this.maxRecipes) {
        this.numberRecipes += 10;
        axios
          .get(`https://api.spoonacular.com/recipes/complexSearch?query=pasta&number=${this.numberRecipes}&apiKey=f054396c469d420383f11fb458da02f9`)
          .then((response) => {
            const payload = response.data.results;
            this.recipes = payload;
            store.commit('addRecipes', { payload });
          });
      }
    },
  },
  mounted() {
    axios
      .get('https://api.spoonacular.com/recipes/complexSearch?query=pasta&number=10&apiKey=f054396c469d420383f11fb458da02f9')
      .then((response) => {
        const payload = response.data.results;
        this.recipes = payload;
        store.commit('setRecipes', { payload });
      });
    const lsFavorites = JSON.parse(localStorage.getItem('favorites'));
    if (lsFavorites) {
      store.commit('setFavorites', { lsFavorites });
    }
  },
};
</script>
