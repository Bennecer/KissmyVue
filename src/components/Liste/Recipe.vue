<template>
  <div class="recipe card" style="width: 15rem; margin:auto">
    <img class="card-img-top" :src="recipe.image" alt="">
    <div class="card-body">
      <h5 class="card-title">{{recipe.title}}</h5>
      <router-link :to="{ name: 'Details', params: { recipe } }"
      class="btn btn-info stretched-link">Plus de détails</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recipe',
  props: {
    recipe: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
