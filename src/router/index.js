import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BuscadorCapitulos from '@/views/BuscadorCapitulos.vue'
import BuscadorEspadas from '@/views/BuscadorEspadas.vue'
import BuscadorLocalizaciones from '@/views/BuscadorLocalizaciones.vue'
import BuscadorPersonajes from '@/views/BuscadorPersonajes.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', component: HomeView
    },
    {
      path: '/capitulos', component: BuscadorCapitulos
    },
    {
      path: '/espadas', component: BuscadorEspadas
    },
    {
      path: '/localizaciones', component: BuscadorLocalizaciones
    },
    {
      path: '/personajes', component: BuscadorPersonajes
    }
  ],
})

export default router
