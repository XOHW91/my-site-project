import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomePage.vue'; // 경로를 올바르게 수정

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // 다른 라우트들...
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
