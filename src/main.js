// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// import Vue from 'vue'
// import App from './App'
// import router from './router'

// Vue.config.productionTip = false

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })


import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/index'
import store from './store/'
Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  //去掉url里面的#
  mode: 'history',
})

new Vue({
  router,
  store
}).$mount('#app')
// 直接挂载到入口文件index.html 的 id=app 的dom 元素上