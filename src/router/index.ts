import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: "/intro",
    name: "Intro",
    component: () => import('@/views/IntroLoad.vue'),
  },
  {
    path: "/mint",
    name: "Mint",
    component: () => import('@/pages/Mint.vue'),
  },

  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/Home.vue')
  },
  {
    path: '/mint-collection',
    name: 'Mint Collection',
    component: () => import('../pages/Mint.vue')
  },

  {
    path: '/collections/ti-amo-da-vivere/product-details-:id',
    name: 'ProductDetail',
    component: () => import('../pages/ProductDetail.vue'),
    props: true
  },
  {
    path: '/collections/view-detail/:id',
    name: 'View Detail Collection',
    component: () => import('@/pages/ViewCollectionDetail.vue'),
    props: true
  },

  {
    path: '/item-details',
    name: 'itemDetails',
    component: () => import('../pages/ItemDetails.vue')
  },

  {
    path: '/collections',
    name: 'collections',
    component: () => import('../pages/Collections.vue')
  },
  {
    path: '/collections/:id',
    name: 'Ti Amo da vivere Collection',
    component: () => import('../pages/CollectionView.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        left: 0,
        top: 0
      }
    }
  }
})

export default router
