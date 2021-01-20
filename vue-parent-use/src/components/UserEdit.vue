<template>
  <div class="col-md-6">
    <h3>Child Component</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid at atque delectus eaque esse fugit illo inventore laboriosam, laudantium, modi neque perferendis qui quod rem. Nulla quaerat reprehenderit voluptate.</p>
    <p>Kullanıcı Adı : {{ name }}</p>
  </div>
</template>

<script>
export default {
  name: "UserEdit"
}
</script>

<style scoped>
div{
  background-color: red;
  padding: 15px 20px;
}

</style>
