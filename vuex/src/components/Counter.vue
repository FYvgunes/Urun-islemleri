<template>

  <div>
    <div class="btn btn-danger" @click="inremenentCounter"> + Arttr</div>
    <div class="btn btn-success" @click="decremenentCounter"> - Azalt</div>
  </div>


</template>

<script>
export default {
  methods:{
    inremenentCounter(){
      // this.$emit("counterEvent",1);
      this.$store.state.counter++;
    },
    decremenentCounter(){
      //this.$emit("counterEvent",-1);
      this.$store.state.counter--;
    }
  }
}
</script>
