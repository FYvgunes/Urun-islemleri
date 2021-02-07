<template>
  <div class="card">
    <img :src="card.images" :alt="card.images">
  </div>
</template>
<script>
export  default {
  props:["card"]

}
</script>
<style scoped>
.card{
  width: 200px;
  height: 232px;
  border-radius: 5px;
  border: 1px solid #666;
  transition: box-shadow .5s;
  margin-right: 20px;
}
card:last-child{
  margin-right: 0;
}
.card:hover{
  box-shadow: 0 5px 28px #666;
  transition: box-shadow .5s;
}
</style>
