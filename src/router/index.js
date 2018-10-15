import Vue from "vue";
import Router from "vue-router";
import Login from "@/views/login"
import Product from "@/views/product"
import project from "@/views/project"
import UserManage from "@/views/UserManage"
Vue.use(Router);

const router = new Router({
  routes: [
    // 动态路径参数 以冒号开头
    {
      path: '/',
      name: 'home',
      component: Login
    }, {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/project',
      component: project,
      children: [{
        path: '/product',
        name: 'product',
        component: Product
      }, {
        path: '/userManage',
        name: 'userManage',
        component: UserManage
      }]
    }
  ]
})

export default router;