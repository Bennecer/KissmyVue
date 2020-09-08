<template>
  <div class="liste container">
    <h1>Voici une liste de recettes</h1>
    <div class="card" v-for="(recipe, index) in recipes" :key="index">
      <p>{{recipe.title}}</p>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'Liste',
  components: {
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
