import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

Vue.http.options.root = "https://vueresource-c42a2-default-rtdb.firebaseio.com/users.json"

Vue.http.interceptors.push((request, next) =>{
  next(response =>{
    response.json=()=>{
      return{
        Userlist:response.body
      }
    }
  });
});
new Vue({
  el: '#app',
  render: h => h(App)
})
