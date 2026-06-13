import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView, meta: { title: 'Search Traffic Monetization' } },
  { path: '/privacy', name: 'privacy', component: () => import('../views/PrivacyPage.vue'), meta: { title: 'Privacy Policy' } },
  { path: '/terms', name: 'terms', component: () => import('../views/TermsPage.vue'), meta: { title: 'Terms of Service' } },
  { path: '/cookies', name: 'cookies', component: () => import('../views/CookiePage.vue'), meta: { title: 'Cookie Policy' } },
  { path: '/gdpr', name: 'gdpr', component: () => import('../views/GdprPage.vue'), meta: { title: 'GDPR Compliance' } },
  { path: '/:pathMatch(.*)*', name: 'notfound', component: () => import('../views/NotFound.vue'), meta: { title: 'Page Not Found' } }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth', top: 80 }
    }
    return { top: 0 }
  }
})

router.afterEach((to) => {
  const base = 'OXFeeds'
  document.title = to.meta?.title ? `${to.meta.title} — ${base}` : base
})

export default router
