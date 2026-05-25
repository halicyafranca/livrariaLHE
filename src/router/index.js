import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LivrariaView from '../views/LivrariaView.vue'
import carrinhoView from '../views/CarrinhoView.vue'
const routes = [
  {path: '/home' , component:HomeView},
  {path: '/livraria', component:LivrariaView},
    {path: '/carrinho', component:carrinhoView}

]
const router = createRouter({
  history:createWebHistory(),
  routes,
})
export default router
