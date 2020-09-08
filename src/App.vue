<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/liste">Liste</router-link> |
      <router-link to="/favoris">Favoris</router-link>
    </div>
    <router-view/>
    <v-card height="140">
      <v-footer
        fixed
        class="font-weight-medium"
      >
          <div id="nav" style="margin:auto;">
            <router-link to="/">Home</router-link> |
            <router-link to="/liste">Liste</router-link> |
            <router-link to="/favoris">Favoris</router-link>
          </div>
        <v-col
          class="text-center"
          cols="12"
        >
          {{ new Date().getFullYear() }} — <strong>© Maëlla Bennecer</strong>
        </v-col>
      </v-footer>
    </v-card>
  </div>
</template>
<script>
import store from './store';

export default {
  data() {
    return {
    };
  },
  methods: {
  },
  mounted() {
    const lsFavorites = JSON.parse(localStorage.getItem('favorites'));
    if (lsFavorites) {
      store.commit('setFavorites', { lsFavorites });
    }
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  min-height: 100vh;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
