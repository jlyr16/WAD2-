<template>
  <div id="app">
    <img src="https://cdn-icons-png.flaticon.com/512/6723/6723392.png " width="200" height="200" alt="logo">
    <v-if v-if="!isAuthenticated">
      <v-button @click="login">Login</v-button>
    </v-if>
    <v-else>
      <v-button @click="logout">Logout</v-button>
    </v-else>
  </div>

    <glucoseGraph />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<script>
import HelloWorld from './components/HelloWorld.vue';
import glucoseGraph from './components/glucoseGraph.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    glucoseGraph,
  },
};

</script>
