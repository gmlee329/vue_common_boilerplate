<template>
  <header>
    <nav>
      <router-link to="/home">Home</router-link> |
      <router-link to="/sample">sample</router-link> |
      <router-link to="/404">404 Error Page</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppLayoutLinks',
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/header.scss";
nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: $HEADER_COLOR;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
