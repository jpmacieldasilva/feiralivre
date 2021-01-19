import Vue from 'vue';
import VueRouter from 'vue-router';
import navBar from '@/components/navBar.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'navBar',
    component: navBar,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
