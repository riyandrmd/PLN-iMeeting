import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RuangMeeting from '../views/RuangMeeting.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/ruangmeeting',
      name: 'ruangMeeting',
      component: RuangMeeting
    }
  ]
})

export default router
