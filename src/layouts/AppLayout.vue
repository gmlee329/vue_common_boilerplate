<template>
<!--  <AppHeader></AppHeader>-->
  <main>
  <Header></Header>
  <component :is="layout">
    <slot />
  </component>
  </main>
</template>

<script>
// import AppHeader from '@/components/common/AppHeader';
const defaultLayout = 'AppLayoutDefault';

export default {
  name: 'AppLayout',
  components: {
    // AppHeader,
    // AppLayoutLinks,
  },
  computed: {
    layout() {
      const layout = this.$route.meta.layout || defaultLayout
      return () => import(`@/layouts/${layout}.vue`)
    },
  },
};
</script>

<style scoped>

</style>
