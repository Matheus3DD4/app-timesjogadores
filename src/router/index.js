import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import TimesView from '@/views/TimesView.vue';
import JogadoresView from '@/views/JogadoresView.vue';
import EditorasView from '@/views/EditorasView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/times', name: 'times', component: TimesView },
    { path: '/jogadores', name: 'jogadores', component: JogadoresView },
    { path: '/editoras', name: 'editoras', component: EditorasView },
  ],
});

export default router
