<template>
  <div class="header">
    <div class="header-links">
      <a href="">Link 1</a>
      <a href="">Link 2</a>
      <a href="">Link 3</a>
      <a href="">Link 4</a>
      <a href="">Link 5</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Header works",
    };
  },
};
</script>

<style scoped>
.header {
  background-color: palegreen;
  height: 60px;
  width: 100%;
}

.header-links {
  padding: 16px;
}

.header-links a {
  margin-right: 16px;
}
</style>
