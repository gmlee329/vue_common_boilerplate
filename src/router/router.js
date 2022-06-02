import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Main',
    redirect: '/home',
  },
  {
    path: '*',
    name: '404',
    component: () => import('@/views/error/404.vue'),
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'AppLayoutHome',
    },
  },
  {
    path: '/sample',
    name: 'sample',
    component: () => import('../views/sample/sampleView.vue'),
    meta: {
      layout: 'AppLayoutSample',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
