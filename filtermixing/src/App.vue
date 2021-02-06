<template>
  <div id="app">
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Filter & Mixins</h3>
        <p>{{message | touppercase | tolovercase }}</p>
<button class="btn btn-primary" @click="products.push('veysel')">Ekle </button>
        <input type="text" v-model="searctext">
        <hr>
        <ul>
          <li  v-for="product in filtered" > {{product}}</li>
          <br>
        </ul>
        <app-list></app-list>


      </div>
    </div>
  </div>
  </div>
</template>

<script>
import filterList from "./filterList";
import {productMixin} from "./productlist";

export default {
  mixins:[productMixin],
  name: 'app',
  components:{
    appList:filterList
  },
  data () {
    return {
      message: 'Welcome to Your Vue.js App',
      searctext:''
    }
  },
  filters:{
    touppercase(value){
      return value.toUpperCase();
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
