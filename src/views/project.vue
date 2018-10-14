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
import HelloWorld from "@/components/HelloWorld";
import navMenu from "@/components/NavMenu";
import top from "@/components/top";
export default {
    name: "project",
    components: {
        HelloWorld,
        top,
        navMenu
    }
};
</script>

<style>
</style>