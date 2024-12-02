import { inject } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WorkView from '../views/WorkView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectView from '../views/ProjectView.vue'
import NavView from '../views/NavView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: HomeView,
        LeftSidebar: NavView
      },
      meta: { title: 'Home' }
    },
    {
      path: '/about',
      name: 'about',
      components: {
        default: AboutView,
        LeftSidebar: NavView
      },
      meta: { title: 'About' }
    },
    {
      path: '/work/:slug',
      name: 'Work Gallery',
      components: {
        default: WorkView,
        LeftSidebar: NavView
      },
      meta: { title: 'Work' }

    },
  ],
})

router.beforeEach((to, from, next) => {
  console.log(to);
  document.title = to.meta.title;
  next();
});

export default router
