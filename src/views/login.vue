<template>
    <div class="login">
        <div class="login-frame">
            <div class="login-head">
                User Login
            </div>
            <el-form class="login-form" label-width="80px">
                <el-form-item label="账号">
                    <el-input v-model="username" placeholder="请输入账号"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input type="password" v-model="password" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="text">注册</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button class="loginButton" type="primary" @click.native="login">登陆</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import * as util from "../assets/util.js";
export default {
    name: "Login",
    components: {},
    data() {
        return {
            username: "",
            password: ""
        };
    },
    methods: {
        login() {
            console.info("login");
            if (!this.username) {
                this.$message.error("请填写用户名！");
                return;
            }
            if (!this.password) {
                this.$message.error("请填写密码！");
                return;
            }
            var loginParams = new URLSearchParams();
            loginParams.append("username", this.username);
            loginParams.append("password", this.password);

            axios
                .post("/access/auth/login", loginParams)
                .then(res => {
                    if (res.data.code == 1) {
                        util.session("sessionId", res.data.data);
                        this.$router.push({ path: "/project" });
                    } else {
                        return Promise.reject({
                            message: "登录异常！"
                        });
                    }
                })
                .catch(util.catchError);
        }
    }
};
</script>

<style>
.login {
    background: linear-gradient(
        to bottom,
        rgb(227, 191, 176),
        rgb(125, 99, 136)
    );
    height: 100%;
    position: relative;
}
.login-frame {
    width: 300px;
    height: 300px;
    background: black;
    color: white;
    border-radius: 10px;
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
.login-head {
    background: #1f1f1f;
    height: 30px;
    width: 100%;
    border-radius: 10px;
    text-align: center;
    line-height: 30px;
}
.login-form {
    text-align: center;
    line-height: 270px;
}
.el-form-item__label {
    color: white !important;
}
.el-input {
    width: 175px !important;
}
</style>