import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Places from "../views/Tarife.vue";
import Details from "../views/Details.vue";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/tarife",
    name: "Tarife",
    component: Places
  },
  {
    path: "/details/:id",
    name: "Details",
    props: true,
    component: Details
  },
  {
    path: '/hardware',
    name: 'Hardware',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "hardware" */ '../views/Hardware.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
