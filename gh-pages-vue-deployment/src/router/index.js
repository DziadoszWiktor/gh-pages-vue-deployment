import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CameraView from '../views/CameraView.vue'
import FirebaseView from '../views/FirebaseView.vue'


/*

{
    path: '/camera',
    name: 'CameraView',
    component: CameraView
  }

*/

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/camera',
    name: 'camera',
    component: CameraView
  },
  {
    path: '/firebase',
    name: 'firebase',
    component: FirebaseView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
