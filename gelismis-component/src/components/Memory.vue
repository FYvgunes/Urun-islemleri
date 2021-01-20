<template>
  <div>
    <slot name="padding"></slot>
    <slot name="test"></slot>
    <slot name="heading"></slot>
    <div>
      <div class="memory">
        <slot name="author">
          <h3>Author</h3>
          <p>Buraya birsey eklendmediğinden burası çalıştı</p>
        </slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["content"]
};
</script>
<style scoped>
div {
  width: 500px;
  height: 50px;
  font-size: 20px;
  background-color: yellow;
  box-shadow: 5px 5px 20px 5px #111;
}
</style>
