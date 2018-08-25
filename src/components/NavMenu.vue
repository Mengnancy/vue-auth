<template>
    <div>
        <el-row class="tac">
            <el-col>
                <el-menu default-active="product" router class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                    <el-menu-item index="1" route="login">
                        <i class="el-icon-menu"></i>
                        <span slot="title">作品管理</span>
                    </el-menu-item>
                    <el-menu-item index="userManage">
                        <i class="el-icon-setting"></i>
                        <span slot="title">用户管理</span>
                    </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name: "NavMenu",
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
};
</script>
<style>
/* .navMenu {
    width: 150px;
    height: 100%;
} */
.el-menu-vertical-demo:not(.el-menu--collapse) {
    min-height: 800px;
}
</style>
