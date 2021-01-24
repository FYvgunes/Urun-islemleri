<template>
  <div>
    <p>newMemory Components</p>
    <button classs="btn-sm btn btn-primary" @click="counter++">Artır</button>
    <p>{{ counter }}</p>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      counter: 0
    }
  },
  activated() {
  console.log("activated");
  },
  deactivated() {
    console.log("Deactivated");
  }

}
</script>
