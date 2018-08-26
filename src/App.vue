<template>
    <div id="app">
        <el-container class="body">
            <el-header>
                <top></top>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <nav-menu></nav-menu>
                </el-aside>
                <el-main>
                    <router-view class="main"></router-view>
                </el-main>
            </el-container>
        </el-container>

    </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import navMenu from "@/components/NavMenu";
import top from "./components/top";
export default {
    name: "app",
    components: {
        HelloWorld,
        top,
        navMenu
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
