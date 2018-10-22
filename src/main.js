import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import store from './store'
import router from './router'
import * as util from "./assets/util.js";


Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (util.getSession("sessionId")) {
    next();
  } else {
    if (to.path == "/login") {
      next();
    } else {
      next("/login");
    }
  }
});

new Vue({
  el: "#app",
  store,
  router,
  render: h => h(App)
}).$mount('#app')
