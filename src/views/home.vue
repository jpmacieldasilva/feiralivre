<template>
<div class="home">
  <bussiness-list></bussiness-list>
</div>
</template>

<script>
import bussinessList from '@/components/bussinessList.vue';

export default {
  components: { bussinessList },
};
</script>

<style>
.home{
    width: 100vw;
    height: 100vh;
    display:flex
}
</style>
