import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage from '@/components/HomePage.vue';
import AppWithVuex from '@/components/AppWithVuex.vue';
import AppWithoutVuex from '@/components/AppWithoutVuex.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: HomePage },
  { path: '/with-vuex', component: AppWithVuex },
  { path: '/without-vuex', component: AppWithoutVuex },
];

export const router = new VueRouter({
  routes,
});
