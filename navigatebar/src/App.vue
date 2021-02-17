<template>
  <div id="app">
    <NavigationMobile/>
  <div class="content" :class="{'open':shovNav}">
    <div class="top-bar">
      <div id="navigate-icon" v-if="mobileView" @click="shovNav = !shovNav">
        <i class="fas fa-bars"></i>
      </div>
      <navigation v-if="!mobileView"/>
    </div>
    <Content/>
  </div>
  </div>
</template>

<script>

import navigation from "./component/navigation.vue";
import NavigationMobile from "./component/NavigationMobile";
import Content from "./component/Content";


export default {
  components: { navigation },
  name: 'app',
  data () {
    return {
     mobileView : false,
     shovNav: true
    }
  },
  methods:{
    handleView(){
      this.mobileView = window.innerWidth <= 990;
    }

  },
  components:{
    navigation,
    Content,
     NavigationMobile
   

  },
  created(){
    this.handleView();
    window.addEventListener('resize',this.handleView);
  }
}
</script>

<style lang="scss" scope>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css");
*{
  font-size:1rem;
}
body{
  
width: 100%;
height: 100vh;
margin: 0;
padding: 0;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
backGround-color:#7ca971;

}

#app {
 position: relative;
 width: calc(100% - 20px);
 height: calc(100vh - 20px);
 padding: 10px;
 color:#333;
 overflow: hidden;
}
.top-bar{
  display: flex;
  width: 100%;
}
.content{
  
  position: absolute;
  top:20px;
  width: calc(100% - 40px);
  height: calc(100vh - 60px);
  padding: 20px;
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 2px 2px 2px 1px rgba(0,0,0,0.2);
  transition: 1s transform cubic-bezier(0,.12,.11,.99);

}
.open{
  transform: translateX(300px);
}
#navigate-icon{
  z-index: 1000;
  padding: 10px 10px 20px;
  margin-right: 10px;
  cursor: pointer;

  i{
    
    font-size: 2rem;
  }
}


</style>
