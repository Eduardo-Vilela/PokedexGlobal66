import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FavoritesView from '@/views/FavoritesView.vue'
import PokemonListView from '@/views/PokemonListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/pokemonList',
      name: 'PokemonList',
      component: PokemonListView
    },
    {
      path: '/favorites',
      name: 'Favorites',
      component: FavoritesView
    }
  ]
})

export default router
