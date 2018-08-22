import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "../components/HelloWorld";
Vue.use(Router);

const router = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    {
      path: '/',
      name: '首页',
      component: HelloWorld
    }
  ]
})

export default router;