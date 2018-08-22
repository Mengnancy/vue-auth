<template>
    <div>
        <el-row type="flex" class="g-head">
            <a href="https://github.com/Mengnancy/Nancy-Access-Control" target="_blank" title="作品管理系统" class="logo">作品管理系统</a>
            <div>
                <div class="usermenu">
                    欢迎您：
                    <!-- 欢迎您：{{user.name}} -->
                    <router-link :to="{path: '/'}">
                        <icon-base width="30" height="30" icon-name="write">
                            <icon-home></icon-home>
                        </icon-base>首页</router-link>
                    <a href="javascript:;" @click="logout">
                        <icon-base width="30" height="30" icon-name="write">
                            <icon-exit></icon-exit>
                        </icon-base>退出</a>
                </div>
            </div>
        </el-row>
    </div>
</template>

<script>
import iconBase from "./IconBase";
import iconExit from "./icon/IconExit";
import iconHome from "./icon/IconHome";
export default {
    name: "head",
    components: {
        iconBase,
        iconExit,
        iconHome
    }
};
</script>

<style>
</style>