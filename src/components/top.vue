<template>
    <div>
        <el-row type="flex" class="g-head" :gutter="20">
            <el-col :span="5">
                <div>
                    <a href="https://github.com/Mengnancy/Nancy-Access-Control" target="_blank" title="作品管理系统" class="logo">作品管理系统</a>
                </div>
            </el-col>
            <el-col :span="3" :offset="8">
                <icon-base width="18" height="18" icon-name="user" icon-color="red">
                    <icon-user></icon-user>
                </icon-base>
                <span>
                    小明
                </span>
            </el-col>
            <el-col :span="2">
                <router-link :to="{path: '/'}">
                    <icon-base width="18" height="18" icon-name="home">
                        <icon-home></icon-home>
                    </icon-base>
                    <span>
                        首页
                    </span>
                </router-link>
            </el-col>
            <el-col :span="2">
                <a href="javascript:;" @click="logout">
                    <icon-base width="18" height="18" icon-name="exit">
                        <icon-exit></icon-exit>
                    </icon-base>
                    <span>
                        退出
                    </span>
                </a>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import iconBase from "./IconBase";
import iconExit from "./icon/IconExit";
import iconHome from "./icon/IconHome";
import iconUser from "./icon/IconUser";
import axios from "axios";
import * as util from "../assets/util.js";
export default {
    name: "top",
    components: {
        iconBase,
        iconExit,
        iconHome,
        iconUser
    },
    data() {
        return {};
    },
    methods: {
        logout() {
            this.$confirm("退出登录", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            })
                .then(() => {
                    axios.get("/access/auth/logout").then(res => {
                        if (res.data.code == 1) {
                            util.removeSession("sessionId");
                            this.$router.push({ path: "/" });
                        } else {
                            return Promise.reject({
                                message: "退出登陆失败"
                            });
                        }
                    });
                })
                .catch();
        }
    }
};
</script>

<style lang="scss" scoped>
.el-row {
    background: #f87307;
    height: 100%;
    /* height: 60px; */
}
.el-col {
    margin: auto 0;
}
.user {
    display: inline;
}
</style>