import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import setRem from './utils/rem'
import defaultMixin from '@/mixin/default'
import Vconsole from 'vconsole' // 引入vconsole包

const vConsole = new Vconsole()
Vue.use(vConsole as any)
Vue.use(defaultMixin)

setRem(window, document)

Vue.config.productionTip = false
Vue.prototype.$store = store

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
