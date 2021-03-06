// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import apiService from './services/api'

Vue.use(Vuetify)
Vue.use(apiService)

Vue.config.productionTip = false

import('../node_modules/vuetify/dist/vuetify.min.css')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
