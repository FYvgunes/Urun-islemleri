import Vue from 'vue'
import App from './App.vue'
import VueRouter from  "vue-router";  //vur-router import ediyoruz
import  {routes} from "./routes"; //routes.js dosyamızı burada import ediyoruz.

//vue Router kullanmak için Vue.use kullanıyoruz
Vue.use(VueRouter);

const  router = new VueRouter({
  routes,
  mode:"history" //hash default olarak çalışlırıs. Url kısmında # gelmesini sağlar
});

router.beforeEach((to,from,next) =>{
  next()
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
