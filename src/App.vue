<template>
  <div id="app">
    <img
      src="https://cdn-icons-png.flaticon.com/512/6723/6723392.png "
      width="200"
      height="200"
      alt="logo"
    />
  </div>

  DiaBEATes

 

  <postcomponent />
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
import postcomponent from './components/postcomponent.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    glucoseGraph,
    postcomponent,
  },
};
</script>
