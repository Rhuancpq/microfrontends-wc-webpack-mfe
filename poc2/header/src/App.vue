<template>
  <div>
    <h3>Vue Microfrontend</h3>
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
  setup() {
    const count = ref(0);
    const inc = () => {
      count.value++;
    };

    return {
      count,
      inc,
    };
  },
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
