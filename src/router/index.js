import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WorkView from '../views/WorkView.vue'
import AboutView from '../views/AboutView.vue'
import NavView from '../views/NavView.vue'
import { setMetaTags } from '../composables/setMetaTags.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: HomeView,
        LeftSidebar: NavView,
      },
      meta: { title: 'Whitney Alexandra', description: 'Whitney Alexandra photography stylist.' },
    },
    {
      path: '/about',
      name: 'about',
      components: {
        default: AboutView,
        LeftSidebar: NavView,
      },
      meta: { title: 'About - Whitney Alexandra', description: 'About Whitney Alexandra.' },
    },
    {
      path: '/work/:slug',
      name: 'Work Gallery',
      components: {
        default: WorkView,
        LeftSidebar: NavView,
      },
      meta: { title: 'Work - Whitney Alexandra', description: 'The work of Whitney Alexandra' },
    },
  ],
})

router.beforeEach((to, from, next) => {
  setMetaTags({
    title: to.meta.title,
    description: to.meta.description,
  })
  next()
})

export default router
