import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/HomePage.vue'),
    },
    {
      path: '/marketing-publicidad-guatemala',
      name: 'marketing',
      component: () => import('@/pages/MarketingPage.vue'),
    },
    {
      path: '/software-empresarial',
      name: 'software',
      component: () => import('@/pages/SoftwarePage.vue'),
    },
    {
      path: '/soluciones-industriales',
      name: 'industrial',
      component: () => import('@/pages/IndustrialPage.vue'),
    },
    {
      path: '/luna-films',
      name: 'luna-films',
      component: () => import('@/pages/LunaFilmsPage.vue'),
    },
    {
      path: '/portafolio',
      name: 'portfolio',
      component: () => import('@/pages/PortfolioPage.vue'),
    },
    {
      path: '/contacto',
      name: 'contact',
      component: () => import('@/pages/ContactPage.vue'),
    },
  ],
})

export default router
