<template>
<div class="home">
  <nav-bar></nav-bar>
  <bussiness-list></bussiness-list>
</div>
</template>

<script>
import bussinessList from '@/components/bussinessList.vue';
import navBar from '@/components/navBar.vue';

export default {
  components: { navBar, bussinessList },
};
</script>

<style>
.home{
    width: 100vw;
    height: 100vh;
    display: flex;
}

</style>
