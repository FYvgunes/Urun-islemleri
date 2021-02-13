<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h3>UserDetails Component</h3>
        <p>Kullanıcı Bilgileri : {{ $route.params.id }}</p>
        <router-link
        tag="button"
        class="btn btn-primary"
        :to="{name:'useredit' ,params:{id:$route.params.id}}"
        >
        Kullanıcıyı Düzenle
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export  default {
  beforeRouteEnter(to,from,enter){
    alert("conponent bağlı kontrol");
    next(false)
  }
}
</script>
