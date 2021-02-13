<template>
  <div id="app">
   <div class="container">
     <div class="row">
       <div class="col-md-6 col-md-offset-3">
         <h3>Vue Resource</h3>
         <div class="form-group">
           <input type="text" class="form-control" v-model="userName">
         </div>
         <div class="btn btn-primary" @click="saveUser">Kaydet</div>
         <div class="btn btn-success" @click="getUser">Verileri Getir</div>
         <hr>
         <ul class="list-group">
           <li class="list-group-item" v-for="user in userList">
             {{user.data.userName}}
             <button class="btn btn-danger" @click="DeleteUser(user.key)">Sil</button>
           </li>
         </ul>
       </div>
     </div>
   </div>
  </div>
</template>


<script>
export default {
  name: 'app',
  data () {
    return {
     userName: null,
      userList:[]

    }
  },
  methods:{
    saveUser(){
      this.$http.post("",{userName:this.userName})
      .then((response)=>{
        console.log(response);
      })

    },
    getUser(){
      this.$http.get("users.json")
        .then((response) =>{
          return response.json();

        }).then(data => {
          for(let key in data.userList){
            this.userList.push({
              key:key,
              data:data.userList[key]
            });
          }
        })


    },
    DeleteUser(userkey){
      this.$http.delete("users" +userkey+".json")
      .then(response =>{
        console.log(response);
      })

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
</style>
