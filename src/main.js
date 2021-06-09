import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import jquery from './assets/js/jquery.min.js'

import 'lib-flexible/flexible.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
