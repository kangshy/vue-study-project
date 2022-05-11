import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue';
import FirstView from '../views/FirstView.vue';
import SecondView from '../views/SecondView.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/first',
    name: 'home',
    component: FirstView
  },
  {
    path: '/second',
    name: 'home',
    component: SecondView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
