<template>
  <div id="app">
<div class="container">
  <div class="row">
    <div class="col-md-6 col-md-offset-3">
      <h3>Animation and Transistion </h3>

      <button class="btn btn-primary" @click="showJS = !showJS">Kutuyu Göster/ Gizle</button>
      <br><br>
      <transition>
        <div class="alert alert-success" v-show="showJS">Bu bir alert mesajıdır.</div>
      </transition>
      <hr>
      <button class="btn btn-primary" @click="Jsanimate = !Jsanimate">Kutuyu Göster/ Gizle</button>
      <br><br>
      <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @after-enter-cancelled="afterEnterCalled"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @after-leave-cancelled="afterLeaveCalled"

      >
        <div  style="width: 100px; height: 100px; background-color: #6a8d99;" v-show="Jsanimate">Bu bir alert mesajıdır.</div>
      </transition>
      <div class="btn btn-danger" @click="activecomponents='appHome'">Home</div>
      <div class="btn btn-primary" @click="activecomponents='appPost'">Post</div>
      <br>
      <br>
      <transition name="fade" mode="out-in">
        <component :is="activecomponents"></component>
      </transition>
      <div class="btn btn-primary" @click="addNewList">Yeni Eleman ekle</div>
<ul class="list-group">
  <transition-group name="slide" >
    <li :key="number" class="list-group-item" v-for="(number , index) in numberlist"  @click="removeElemant">{{number}}</li>
  </transition-group>

</ul>



    </div>

  </div>
</div>
  </div>
</template>

<script>
import Home from "./components/Home";
import  Post from  "./components/Post";
export default {
  name: 'app',
  components:{
    appHome : Home,
    appPost: Post
  },
  data () {
    return {
      showJS:false,
      activeEffect:"fade",
      Jsanimate:false,
      elementwidth:100,
      activecomponents:"appPost",
      numberlist:[1,2,3,4,5]
    }
  },
  methods:{
    beforeEnter(el){
      this.elementwidth=100;
      el.style.width=this.elementwidth+"px";
    },
    enter(el,done){
      let round = 1;
      const  interval = setInterval(()=>{
        el.style.width=(this.elementwidth+round*10)+"px";
        round++;
        if(round>20)
        {
          clearInterval(interval);
          done();
        }
      },50);

    },
    afterEnter(el){},
    afterEnterCalled(el){},
    beforeLeave(el){
      this.elementwidth=300;
      el.style.width=this.elementwidth+"px";
    },
    leave(el,done){
      let round = 1;
      const  interval = setInterval(()=>{
        el.style.width=(this.elementwidth-round*10)+"px";
        round++;
        if(round>20)
        {
          clearInterval(interval);
          done();
        }
      },50);
    },
    afterLeave(el){},
    afterLeaveCalled(el){},
    addNewList(){
      const position = Math.floor(Math.random()+this.numberlist.length);
      this.numberlist.splice(position,0,this.numberlist.length+1)
    },
    removeElemant(index){
      this.numberlist.splice(index,1);
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
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity 1s;
}
.fade-leave{

}
.fade-leave-active{
  transition: opacity 1s;
  opacity: 0;
}
.slide-enter{}
.slide-enter-active{
  animation: slide-in 1s ease-in-out forwards;
  transition: opacity 0.5s;
}
.slide-leave{}
.slide-leave-active{
  animation: slide-out 1s ease-out forwards;
  transition: opacity 3s;
  opacity: 0;
  position: absolute;
}
.slide-move{
  transition: transform 1s;
}


@keyframes slide-in {
  from{
    transform: translateY(20px);
  }
  to
  {
    transform: translateY(0px);
  }
}
@keyframes slide-out {
  from{
    transform: translateY(0px);
  }
  to
  {
    transform: translateY(20px);
  }
}
</style>
