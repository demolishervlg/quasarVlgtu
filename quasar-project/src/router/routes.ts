import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }]
  },
  {
    path: '/analytics',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/AnalyticsPage.vue') }]
  },
  {
    path: '/news',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/NewsEvents.vue') }]
  },
  {
    path: '/news/:link',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/NewsEventsDetail.vue') }]
  },
  {
    path: '/events',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/EventsPage.vue') }]
  },
  {
    path: '/events-add',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/EventsAddPage.vue') }]
  },
  {
    path: '/people',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/PeopleEventsPage.vue') }]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
