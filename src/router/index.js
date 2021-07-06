import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/Main.vue'


const routes = [
 {path: '/main' , name: 'Main' , component: Main , alias: '/'},
 {path: '/news' , name: 'News' , component: () => import('@/views/News.vue') },
 {path: '/news/:id' , name: 'NewsDaughter' , component: () => import('@/views/NewsDaughter.vue') , props: true },
 {path: '/:notFound(.*)' , name: 'NotFound' , component: () => import('@/views/NotFound.vue') },
 {path: '/weather/:currentWeather' , name: 'currentWeather' , component: () => import('@/views/CurrentWeather.vue'), props: true}
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

export default router
