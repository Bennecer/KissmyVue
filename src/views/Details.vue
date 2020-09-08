<template>
  <div class="details container">
    <h1>Détails de la recette {{currentRecipe.title}}</h1>
    <div class="recipe card mt-5 p-2" style="width: 80%; margin:auto">
      <img style="width:20rem; margin:auto" class="card-img-top" :src="currentRecipe.image" alt="">
      <div class="card-body">
        <p class="card-text">
          Ready in {{recipeDetails.readyInMinutes}} minutes, {{recipeDetails.servings}} servings
        </p>
        <p class="card-text" v-html="recipeDetails.summary"></p>
        <p class="card-text" v-html="recipeDetails.instructions"></p>
        <p class="class-text">Ingredients :</p>
        <ul class="list-group list-group-flush">
          <li :key="index" v-for="(ingredient, index) in recipeDetails.extendedIngredients"
          class="list-group-item">
          {{ingredient.measures.metric.amount}}
          {{ingredient.measures.metric.unitLong}}
          {{ingredient.originalName}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import store from '../store';

export default {
  name: 'Details',
  props: {
    recipe: Object,
  },
  components: {
  },
  data() {
    return {
      recipes: store.getters.getRecipes,
      recipeDetails: undefined,
      currentRecipe: undefined,
    };
  },
  methods: {
  },
  created() {
    this.currentRecipe = this.recipe;
    if (this.currentRecipe) {
      JSON.parse(localStorage.getItem('details'));
      localStorage.setItem('details', JSON.stringify(this.currentRecipe));
    } else {
      this.currentRecipe = JSON.parse(localStorage.getItem('details'));
    }
    axios
      .get(`https://api.spoonacular.com/recipes/${this.currentRecipe.id}/information?&apiKey=c39e878d83084f2784fd646d286bff52`)
      .then((response) => {
        this.recipeDetails = response.data;
        console.log(this.recipeDetails);
      });
  },
};
</script>
