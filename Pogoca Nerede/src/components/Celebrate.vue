<template>
  <div class="container">
    <h1>Tebrikler Bildiniz </h1>
    <button @click="newGame">Yeni Oyun</button>
  </div>
</template>
<script>
export  default {
  methods:{
    newGame(){
      setInterval(()=>{
        this.$emit("activeComponentEvent", "app-game-card")
      },1000)

    }
  }
}

</script>
<style scoped>
.container{
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
flex-direction:column ;
 /*!**! background-color: darkgreen;*/
  margin: 0;
  padding: 0;
  position: absolute;
  left: 0;
  top: 0;

}
.container h1{

  color: #111111;
  font-size: 2rem;


}
.container button{
  background-color: #050562;
  color: #fff;
  width: 200px;
  height: 60px;
  font-size: 23px;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
}

</style>
