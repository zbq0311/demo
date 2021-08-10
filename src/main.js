import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/index.css'// 引入全局样式
import ElementUI from 'element-ui'// 引入组件
import 'element-ui/lib/theme-chalk/index.css'// 引入样式

Vue.config.productionTip = false

// 为vue开发的额外插件，需要用Vue。use()集成到Vue的类身上(让所有对象使用)
// Vue的插件：vue-router element-ui vuex ...
// 不是Vue的插件(独立使用)：axios moment md5...
Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
