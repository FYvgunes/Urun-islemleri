import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;
Vue.directive("color",{
})
new Vue({
  el: '#app',
  render: h => h(App)
})