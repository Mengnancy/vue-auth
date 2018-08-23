import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "../components/HelloWorld";
Vue.use(Router);

const router = new Router({
  routes: [
    // 动态路径参数 以冒号开头
    {
      path: '/',
      name: 'home',
      component: HelloWorld
    },{
      path: '/HelloWorld',
      name: 'hello',
      component: HelloWorld
    }
  ]
})

export default router;