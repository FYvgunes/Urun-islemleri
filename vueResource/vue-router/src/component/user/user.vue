<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <hr>
        <router-view></router-view>
        <hr>
      </div>
      <div class="btn btn-success" @click="navigaToHome">Home Sayfasına git</div>
    </div>
  </div>
</template>
<script>
export  default {
  data(){
    return{
      id:this.$route.params.id
    }
  },
  methods:{
   navigaToHome(){
     //this.$router.push("/");
     //this.$router.push({path : '/'});
     this.$router.push({name :'anasayfa'});
   }
  },
  watch:{
    "$route"(to,from){
      this.id=to.params.id;
    }
  }
}
</script>
