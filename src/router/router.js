import { createMemoryHistory, createRouter } from 'vue-router'
import MainPage from '@/pages/MainPage.vue';
import TestingPage from '@/pages/TestingPage.vue';
import AbuseName from '@/pages/AbuseName.vue';
import Search from '@/pages/Search.vue';
import News from '@/pages/News.vue';
import Todo from '@/pages/Todo.vue';
import DragAndDrop from '@/pages/DragAndDrop.vue';
import GsapScroll from '@/pages/GsapScroll.vue';
import GsapGorizontalScroll from '@/pages/GsapGorizontalScroll.vue';
import Slider from '@/pages/Slider.vue';
import Vuex from '@/pages/Vuex.vue';

const routes = [
  { name: 'main', component: MainPage, path: '/' },
  { name: 'testing', component: TestingPage, path: '/testing' },
  { name: 'abuse', component: AbuseName, path: '/abusive' },
  { name: 'search', component: Search, path: '/search' },
  { name: 'news', component: News, path: '/news' },
  { name: 'todo', component: Todo, path: '/todo' },
  { name: 'drag&drop', component: DragAndDrop, path: '/drag&drop' },
  { name: 'gsapscroll', component: GsapScroll, path: '/gsapscroll' },
  { name: 'gsapgorscroll', component: GsapGorizontalScroll, path: '/gsapgorscroll' },
  { name: 'slider', component: Slider, path: '/slider' },
  { name: 'vuex', component: Vuex, path: '/vuex' },
];

const router = createRouter({
  fallback: false,
  history: createMemoryHistory(),
  routes,
});

export default router;
