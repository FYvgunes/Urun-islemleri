<template>
<div class="container">
  <h1>Parant Component (user)</h1>
  <p>Burası parant component yani herşeyi import ettiğimiz component</p>
  <button @click="changename">Adını Değiştir</button>
  <p>Child componenti üzerinden gelen veri : {{ childData }}</p>
  <hr>
  <div class="row">
    <app-user-details @data="childData=$event" :name="title"></app-user-details>
    <app-user-edit></app-user-edit>
  </div>



</div>
</template>

<script>
import  UserDetails from "./userdetails";
import UserEdit from "./UserEdit";
export default {
  components:{
    appUserDetails : UserDetails,
    appUserEdit : UserEdit,
  },
  data : function (){
    return {
      title:"Veysel",
      childData:""
    }
  },
  methods : {
    changename(){
      this.title = "Güneş"
    }
  }
}
</script>

<style >
div.container{
  margin-top: 30px;
  padding: 20px 40px;
  background-color: #6a8d99;
  border:1px solid #666;
}
div.row{
  display: flex;
  align-items: center;
  justify-content: space-between;
}

</style>
