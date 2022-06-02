<template>
  <div class="home">
    <h1>
      this is home page layout
    </h1>
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'AppLayoutHome',
  components: {},
};
</script>

<style scoped>
div.home {
  border: solid 2px crimson;
}
</style>
