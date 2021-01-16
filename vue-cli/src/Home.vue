<template>
<div>
  <p>
    Lambanın Durumu : {{status}}
  </p>
  <button @click="openlamb">Lamba Kapat</button>
</div>
</template>

<script>
export default {
data:function (){
  return{
    status:"Kapalı"
  }
},
  methods:{
  openlamb: function (){
    this.status="Açık"
  }
  }
}
</script>

