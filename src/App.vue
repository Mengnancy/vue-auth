<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
import login from "./views/Login";
export default {
    name: "app",
    components: {
        login
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
    /* margin-top: 60px; */
    height: 100%;
    width: 100%;
}
* {
    margin: 0;
    padding: 0;
}
html,
body {
    height: 100%;
    width: 100%;
}
.body {
    height: 100%;
}
</style>
