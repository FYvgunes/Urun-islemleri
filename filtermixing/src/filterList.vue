<template>
<div>
  <hr>
  <input type="text" v-model="searctext">
  <hr>
  <ul>
    <li  v-for="product in filtered" > {{product}}</li>
    <br>
  </ul>
</div>
</template>
<script>
import  {productMixin} from "./productlist";

export default {
  mixins:[productMixin]
}
</script>
