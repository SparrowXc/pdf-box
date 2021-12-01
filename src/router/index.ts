import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router';
import { App } from 'vue';
import useGuard from './guard';

const Home = import('@/views/home/Home.vue');

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'Home',
    },
    component: () => Home,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 加载全局导航守卫
useGuard(router);

export function setupRouter(app: App<Element>) {
  app.use(router);
}
