<template>
  <transition-group name="componentTransition" mode="out-in">
    <component
        key="mainComponent"
        @activeComponentEvent = "activeComponent = $event"
        :is="activeComponent">
    </component>
    <canvas key="canvas" id="canvas"  v-show="activeComponent == 'app-celebrate'"></canvas>
  <npm i/transition-group>

</template>
<script>
import GameCard from "./components/GameCard";
import Failure from "./components/Failure";
import Celebrate from "./components/Celebrate";

export default {
  data(){
    return{
      activeComponent :"app-game-card"
    }
  },
  components:{
    appGameCard : GameCard,
    appFailure : Failure,
    appCelebrate : Celebrate
  }

}
</script>
<style >
.componentTransition-enter{}
.componentTransition-enter-active{
  animation: componentTrasns-in .3s ease-in-out forwards;
}
.componentTransition-leave{}
.componentTransition-leave-active{
  animation: componentTrasns-out.3s ease-in-out forwards;
}

@keyframes  componentTrasns-in {
  from{
    transform: translateX(-1000px);
    opacity: 1;
  }
  to{
    transform: translateX(0px);
    opacity: 1;
  }
}
@keyframes  componentTrasns-out {
from{
  transform: translateX(0px);
  opacity: 1;
}
  to{
    transform: translateX(1000px);
    opacity: 0;
  }
}

</style>
