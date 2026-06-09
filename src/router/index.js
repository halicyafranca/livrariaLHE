import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import carrinhoView from '../views/CarrinhoView.vue'
import FavoritosView from '@/views/FavoritosView.vue'
const routes = [
  {path: '/home' , component:HomeView},
    {path: '/carrinho', component:carrinhoView},
    {path:'/favoritos' , component:FavoritosView}
]
const router = createRouter({
  history:createWebHistory(),
  routes,
})
export default router
