import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

const router = new VueRouter({
    routes: [
      // 动态路径参数 以冒号开头
      { path: '/user/:id', component: User }
    ]
  })

export default router; 