import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '@/views/home.vue';
import profile from '@/components/profile.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'home',
    component: home,
  },
  {
    path: '/',
    name: 'profile',
    component: profile,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
