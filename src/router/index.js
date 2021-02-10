import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Admin from "../views/Admin.vue";
import Librairie from "../views/Librairie";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Librairie',
    name: 'Librairie',
    component: Librairie
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: Admin
  },
]

const router = new VueRouter({
  routes
})

export default router


/* */