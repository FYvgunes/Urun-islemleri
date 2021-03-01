<template>
  <div id="app">
<div class="col-md-6 col-md-offset-3">
  <h1 class="text-center">Vuex</h1>
  <app-result :counter="counter"></app-result>
  <hr>
  <app-counter @counterEvent="counter += $event" ></app-counter>
</div>
  </div>
</template>

<script>
import Result from "./components/Result";
import  Counter from "./components/Counter";
export default {


  name: 'app',
  data () {
return{
  counter:0
}
  },
  components:{
    appResult:Result,
    appCounter:Counter
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
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
