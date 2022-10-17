<template>
  <div id="app">
    <img
      alt="Vue logo"
      src="https://cdn-icons-png.flaticon.com/512/7564/7564629.png"
    />
    <HelloWorld msg="hello!!!!!!" />
    <glucoseGraph msg="hello" />
  </div>
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
