<template>
  <div class="game-area">
    <p>{{Answer}}</p>

    <h2 class="title">Poğaca <span>Nerede ?</span></h2>
    <h4 class="desctiption">Açık kartlarlardan biriini seçtinkten sonra kapalalı olan kartlara tıklayınız</h4>
    <div class="container">
      <transition-group name="rotate-all" appear class="container">
        <app-card
            :key="card.id"
            :class="{'shadow':selectedCard==card.id}"
            @click.native="selectedCard = card.id"
            v-for="card in cards"
            :card="card">


        </app-card>
      </transition-group>


    </div>

    <div class="container">
      <transition name="rotate" mode="out-in">
        <component
            @click.native="showCard(Answer)"
            :card="Answer"
            :is="activeCard"
        >

        </component>
      </transition>


    </div>
  </div>


</template>
<script>
import Card from "./Card";
import DefaultCard from "./DefaultCard";

export default {
  components: {
    appCard: Card,
    appDefaultCard: DefaultCard
  },
  data() {
    return {
      selectedCard: null,
      activeCard: "app-default-card",
      Answer: {},
      cards: [
        {id: 1, component: "app-card", images: "/src/assets/card-1.jpg"},
        {id: 2, component: "app-card", images: "/src/assets/card-2.jpg"},
        {id: 3, component: "app-card", images: "/src/assets/card-3.jpg"},
        {id: 4, component: "app-card", images: "/src/assets/card-4.jpg"},
        {id: 5, component: "app-card", images: "/src/assets/card-5.jpg"}
      ]
    }
  },
  methods: {
    showCard(answer) {
      if(this.selectedCard == null){
        alert("Lütfen bir kart seçiniz");
      }else
      {
        this.activeCard = answer.component;
        setTimeout(() => {
          if(answer.id == this.selectedCard){
           this.$emit("activeComponentEvent","app-celebrate");
          }
          else
          {
            this.$emit("activeComponentEvent","app-failure");
          }
        },3000)


      }

    }
  },
  created() {
    let answer = Math.ceil(Math.random() * this.cards.length);
    this.Answer = this.cards[answer - 1];

  }

}

</script>
<style>
.title {
  font-size: 28px;
  color: darkmagenta;
  text-align: center;
  font-weight: 600;
}

.title span {
  color: palevioletred;
}

.desctiption {
  font-weight: 400;
  font-size: 20px;
  text-align: center;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
}
/* AÇIK KARTLARIN ANIMASYON ÖZELLİKLERİN EKLENMESİ İÇİM YAPİLDI*/
.rotate-all-enter {
}
.rotate-all-enter-active {
  animation: rotate-all 2s ease-in-out forwards;
}
.rotate-all-leave {
}
.rotate-all-leave-active {
}

/* AÇIK KARTLARIN ANIMASYON ÖZELLİKLERİN EKLENMESİ İÇİM YAPİLDI*/
.rotate-enter{}
.rotate-enter-active{
  animation: rotate-in 1s ease-in-out forwards;
}
.rotate-leave{}
.rotate-leave-active{
  animation: rotate-out 1s ease-in-out forwards;
}
@keyframes rotate-in {
  from{
    transform: rotateY(90deg);
  }
  to{
    transform: rotateY(0);
  }
}
@keyframes rotate-in {
 from{
   transform: rotateY(0deg);
 }
  to{
    transform: rotateY(90deg);
  }
}

@keyframes rotate-all {
  from {
    transform: rotateY(0);
  }
  to {
    transform: rotateY(720deg);
  }

}

.shadow {
  box-shadow: 0 5px 40px #42b983 !important;
  transition: box-shadow .3s;
}

</style>
