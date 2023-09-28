import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainPage from '../views/MainPage.vue'
import NewsCard from '../views/NewsCard.vue'
import ANewsCard from '../views/A-NewsCard.vue'
import ANewsCard2 from '../views/A-NewsCard2.vue'
import ANewsCard3 from '../views/A-NewsCard3.vue'
import ANewsCard4 from '../views/A-NewsCard4.vue'
import ANewsCard5 from '../views/A-NewsCard5.vue'
import ANewsCard6 from '../views/A-NewsCard6.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/news',
      name: 'news',
      component: NewsCard
    },
    {
      path: '/ANewsCard',
      name: 'ANewsCard',
      component: ANewsCard
    },
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/HomeView',
      name: 'HomeView',
      component: HomeView
      //importเข้ามาตั้งแต่ยังไม่กด(ด้านบน^)
    },
    {
      path: '/news2',
      name: 'news2',
      component: ANewsCard2
    },
    {
      path: '/news3',
      name: 'news3',
      component: ANewsCard3
    },
    {
      path: '/news4',
      name: 'news4',
      component: ANewsCard4
    },
    {
      path: '/news5',
      name: 'news5',
      component: ANewsCard5
    },
    {
      path: '/news6',
      name: 'news6',
      component: ANewsCard6
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
      //ไม่ค่อยได้ใช้importเข้ามาตอนกดลิงค์
    }
  ]
})

export default router;