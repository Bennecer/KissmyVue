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
  </div>
</template>
<script>
import axios from 'axios';
import Recipe from '../components/Liste/Recipe.vue';

export default {
  name: 'Liste',
  components: {
    Recipe,
  },
  data() {
    return {
      recipes: [],
    };
  },
  mounted() {
    axios
      .get('https://api.spoonacular.com/recipes/complexSearch?query=pasta&number=10&apiKey=e69a8c024cf84245b7ff80de5079c78d')
      .then((response) => {
        console.log(response.data.results);
        this.recipes = response.data.results;
      });
  },
};
</script>
