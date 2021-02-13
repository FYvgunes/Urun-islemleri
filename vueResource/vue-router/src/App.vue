<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <br>
        <app-header>
        </app-header>
        <br>
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>

      </div>
    </div>
  </div>

</template>

<script>
import Header from  "./component/header";
export default {
  components:{
    appHeader: Header
  },
  name: 'app',



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
.slide-enter{}
.slide-enter-active{
  animation: slide-in 0.5s ease-out forwards;
  transition: opacity 0.5s;


}
.slide-leave{}
.slide-leave-active{
  animation: slide-out 0.5s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;

}
@keyframes slide-in {
  to{
    transform: translateY(10px);
  }
  from{
 transform: translateY(0px);
  }
}
@keyframes slide-out {
  to{
transform: translateY(0px);
  }
  from{
 transform: translateY(10px);
  }

}

</style>
