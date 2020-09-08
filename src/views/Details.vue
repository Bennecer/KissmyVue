<template>
  <div class="details container">
    <h1>Détails de la recette {{currentRecipe.title}}</h1>
    <div class="d-flex justify-content-between">
      <a v-if="!isFirst" style="font-size:50px" href="#" aria-label="Previous">
        <a @click="goPrev()" aria-hidden="true">&laquo;</a >
      </a>
      <div class="recipe card mt-5 p-2" style="width: 80%; margin:auto">
        <img style="width:20rem; margin:auto"
        class="card-img-top" :src="currentRecipe.image" alt="">
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
      <a v-if="!isLast" style="font-size:50px" href="#" aria-label="Next">
        <a @click="goNext()" aria-hidden="true">&raquo;</a>
      </a>
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
    isFavorite: Boolean,
  },
  components: {
  },
  data() {
    return {
      recipes: store.getters.getRecipes,
      favorites: store.getters.getFavorites,
      recipeDetails: undefined,
      currentRecipe: undefined,
      isFirst: false,
      isLast: false,
      prevRecipe: undefined,
      NextRecipe: undefined,
    };
  },
  methods: {
    goPrev() {
      this.currentRecipe = this.prevRecipe;
      this.refresh();
    },
    goNext() {
      this.currentRecipe = this.nextRecipe;
      this.refresh();
    },
    refresh() {
      //  To set the arrows
      if (!this.isFavorite) {
        const index = this.recipes.findIndex((obj) => obj.id === this.currentRecipe.id);
        if (index === 0) this.isFirst = true;
        else {
          this.isFirst = false;
          this.prevRecipe = this.recipes[index - 1];
        }
        if (index === this.recipes.length - 1) this.isLast = true;
        else {
          this.isLast = false;
          this.nextRecipe = this.recipes[index + 1];
        }
        const details = {
          recipes: this.recipes,
          favorites: this.favorites,
          currentRecipe: this.currentRecipe,
          isFavorite: this.isFavorite,
        };
        JSON.parse(localStorage.getItem('details'));
        localStorage.setItem('details', JSON.stringify(details));
      } else {
        const index = this.favorites.findIndex((obj) => obj.id === this.currentRecipe.id);
        if (index === 0) this.isFirst = true;
        else {
          this.isFirst = false;
          this.prevRecipe = this.favorites[index - 1];
        }
        if (index === this.favorites.length - 1) this.isLast = true;
        else {
          this.isLast = false;
          this.nextRecipe = this.favorites[index + 1];
        }
        const details = {
          recipes: this.recipes,
          favotites: this.favorites,
          currentRecipe: this.currentRecipe,
          isFavorite: this.isFavorite,
        };
        JSON.parse(localStorage.getItem('details'));
        localStorage.setItem('details', JSON.stringify(details));
      }
    },
  },
  created() {
    this.currentRecipe = this.recipe;
    if (this.currentRecipe) {
      const details = {
        recipes: this.recipes,
        currentRecipe: this.currentRecipe,
      };
      JSON.parse(localStorage.getItem('details'));
      localStorage.setItem('details', JSON.stringify(details));
    } else {
      const getDetails = JSON.parse(localStorage.getItem('details'));
      this.currentRecipe = getDetails.currentRecipe;
      this.recipes = getDetails.recipes;
      this.isFavorite = getDetails.isFavorite;
      this.favorites = getDetails.favorites;
    }
    axios
      .get(`https://api.spoonacular.com/recipes/${this.currentRecipe.id}/information?&apiKey=77b59e30cbfc48ee86936d91ffd0d2db`)
      .then((response) => {
        this.recipeDetails = response.data;
        this.refresh();
      });
  },
};
</script>
