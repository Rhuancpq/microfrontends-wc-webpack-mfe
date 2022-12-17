<template>
  <div>
    <header-component></header-component>
  </div>
</template>

<script>
import { ref } from "vue";
import HeaderComponent from "./components/HeaderComponent.vue";
export default {
  components: {
    HeaderComponent,
  },
  setup() {},
};
</script>

<style scoped>
img {
  width: 200px;
}
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
