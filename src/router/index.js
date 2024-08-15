import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RuangMeeting from '../views/RuangMeeting.vue'
import PesanRuang from '../views/PesanRuang.vue'


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
    },
    {
      path: '/pesanruang',
      name: 'pesanRuang',
      component: PesanRuang
    }
  ]
})

export default router
