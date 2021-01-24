<template>
  <div class="container">
    <div class="row">
      <div class="col-md-5">
        <hr />
        <hr />
        <button
          @click="selectedComponent = 'appMemory'"
          class="btn-sm btn btn-primary"
        >
          appMemory
        </button>
        <button
          @click="selectedComponent = 'appNewMemory'"
          class="btn-sm btn btn-primary"
        >
          appNewMemory
        </button>
        <button
          @click="selectedComponent = 'appAuthor'"
          class="btn-sm btn btn-primary"
        >
          appAuthor
        </button>

        <hr />
        <p>{{ selectedComponent }}</p>
        <hr />
        <keep-alive>
          <component :is="selectedComponent">
            <h3 slot="padding">Vue Js Öğrenmek için geceleri yatmıyor</h3>
            <h1 slot="">Bilgi Emek İster</h1>
          </component>
        </keep-alive>

      </div>
    </div>
  </div>
</template>

<script>
import Memory from "./components/Memory";
import Author from "./components/Author";
import newMemory from "./components/newMemory";

export default {
  data: function() {
    return {
      selectedComponent: "appMemory"
    };
  },
  components: {
    appMemory: Memory,
    appAuthor: Author,
    appNewMemory: newMemory
  }
};
</script>

<style></style>
