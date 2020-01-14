// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { Button } from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import App from './App'
import router from './router'
import store from './store'
import Split from './components/Split/index.vue'

import './mock/mockServer' // 加载mockServer即可
import './filters' // 加载过滤器
import loading from './common/imgs/loading.gif'

Vue.use(VueLazyload, {
  loading
})

// 注册全局组件标签
Vue.component(Button.name, Button) // <mt-button>
Vue.component('Split', Split)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router, // 使用vue-router
  store // 使用vuex
})
