// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', DateFilter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyC1tC1EeIuNBbUMYIoUPbmyvtELArmc5VQ',
      authDomain: 'meetup-babaa.firebaseapp.com',
      databaseURL: 'https://meetup-babaa.firebaseio.com',
      projectId: 'meetup-babaa',
      storageBucket: 'meetup-babaa.appspot.com'
    })
  }
})
