<template>
  <div id="app">
      <nav-bar></nav-bar>
    <router-view/>
  </div>
</template>
<script>
import navBar from '@/components/navBar.vue';

export default {
  components: { navBar },
};
</script>

<style lang="scss">
  @import 'stylesheet.scss';
  #app{
    display: flex;
    height: 100vh;
  }
</style>
