<template>
  <div class="col-md-6">
    <h3>Child Component</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid at atque delectus eaque esse fugit illo inventore laboriosam, laudantium, modi neque perferendis qui quod rem. Nulla quaerat reprehenderit voluptate.</p>
    <p>Kullanıcı Adı : {{ name }}</p>
    <p>Tersten Kullancıı Adı: {{ switchName() }}</p>
    <button @click="sendToParents">Veriyi Parent' a Gönder</button>
  </div>
</template>

<script>
export default {
  props:["name"],
  methods:{
    switchName(){
      return this.name.split("").reverse().join("");
    },
    sendToParents(){
      this.$emit("data","Veysel Güneş Fırat üniversitesi")
    }

  }
}
</script>

<style scoped>
div{
  background-color: yellow;
  padding: 15px 20px;
}
</style>
