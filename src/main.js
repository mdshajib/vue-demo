import Vue from 'vue'
import App from './App.vue'

import router from './router'
import './axios'
import '../src/assets/css/styles.css';

import VueToastr2 from 'vue-toastr-2'
import 'vue-toastr-2/dist/vue-toastr-2.min.css'
window.toastr = require('toastr')
Vue.use(VueToastr2)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
