<template>
  <div>
<app-header></app-header>
    <transition name="fade" mode="out-in">
      <router-view></router-view>

    </transition>

<app-footer></app-footer>

  </div>
</template>

<script>
import Header from "./components/shared/header";
import Footer from "./components/shared/footer";


export default {
  components: {
    appHeader: Header,
    appFooter: Footer


  },
  created() {
    this.$store.dispatch("getTradeResult")
    this.$store.dispatch("initApp")
  }
};
</script>

<style>
body{
  background-color: #cdcdcd;
}
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: .5s opacity ease-out;
}
.fade-leave{}
.fade-leave-active{
  opacity: 0;
}
</style>
