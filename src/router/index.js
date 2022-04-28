import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '@/pages/Login/Login';
import Layout from '@/components/Layout/Layout';

Vue.use(VueRouter)

const routes = [
  {path: '/', redirect: '/app/home'},
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/app',
    name: 'Layout',
    component: Layout,
    beforeEnter: (to, from, next) => {
      
        
     let token = localStorage.getItem('token');
     if(token) {
        next();
       } else {
        next({path: '/login'});
       }        
    },
      children:[
      {
        path: 'home',
        name: 'Home',
        component: HomeView
      },
      {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
