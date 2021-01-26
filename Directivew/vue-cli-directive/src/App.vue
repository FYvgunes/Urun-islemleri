<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
          <h3>Vuejs ile Gelen Directive Tanımları</h3>
          <p v-text="'Denme yanımla metıdu her zaman iyidir'"></p>
          <p v-html="'<strong>Burası biraz farklı oldu v-html kodu ile yazıldı<strong>'"></p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
          <h3>Custom Directive</h3>
          <p v-color:background.delay="'green'">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque autem
            eligendi iure nostrum quam quod veritatis voluptatum. Earum esse eum natus quia tempore!</p>

        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
          <h3>Custom Directiv"e</h3>
          <p v-color.delay="'red'">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque autem eligendi
            iure nostrum quam quod veritatis voluptatum. Earum esse eum natus quia tempore!</p>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
