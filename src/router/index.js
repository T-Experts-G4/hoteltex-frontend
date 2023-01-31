import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/SobreView.vue')
  },
  {
    path: '/gastronomia',
    name: 'gastronomia',
    component: () => import('../views/GastronomiaView.vue')
  },
  {
    path: '/acomodacoes',
    name: 'acomodacoes',
    component: () => import('../views/AcomodacaoView.vue')
  },
  {
    path: '/Contato',
    name: 'Contato',
    component: () => import('../views/ContatoView.vue')
  },
  {
    path: '/Reservas',
    name: 'Reservas',
    component: () => import('../views/ReservasView.vue')
  },
  {
    path: '/LoginView',
    name: 'LoginView',
    component: () => import('../views/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
