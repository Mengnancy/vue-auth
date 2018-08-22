<template>
  <div id="app">

    <top></top>
    <router-view id="main"></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import top from "./components/head";
export default {
    name: "app",
    components: {
        HelloWorld,
        top
    }
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
