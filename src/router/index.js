import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/home/Home.vue"
import Life from "../views/Life/Life.vue"
import Marketing from "../views/marketing/Marketing.vue"
import Creativity from "../views/creativity/Creativity.vue"
import Social from "../views/social/Social.vue"
import Authors from "../views/authors/Authors.vue"
import Contact from "../components/contactFrom/ContactForm.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/life',
      name: 'life component',
      component: Life
    }
    ,
    {
      path: '/marketing',
      name: 'marketing component',
      component: Marketing
    },
    {
      path: '/creativity',
      name: 'creativity component',
      component: Creativity
    },
    {
      path: '/social',
      name: 'social component',
      component: Social
    },
    {
      path: '/authors',
      name: 'authors component',
      component: Authors
    },
    {
      path: '/contact',
      name: 'contact component',
      component: Contact
    }
  ]
})

export default router
