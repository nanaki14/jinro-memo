import Vue from 'vue'
import App from './App'
import router from './router.js'
import store from './store.js'

Vue.config.productionTip = false

var vm = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

vm.$mount('#app')
