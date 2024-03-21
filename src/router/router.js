import { createWebHistory, createRouter } from "vue-router";
import MainPage from '@/pages/MainPage';
import TestingPage from '@/pages/TestingPage';
import AbuseName from '@/pages/AbuseName';
import Search from '@/pages/Search';
import News from '@/pages/News';
import Todo from '@/pages/Todo';
import DragAndDrop from '@/pages/DragAndDrop';
import ChatGpt from '@/pages/ChatGpt';
import GsapScroll from '@/pages/GsapScroll';
import GsapGorizontalScroll from '@/pages/GsapGorizontalScroll';
import SliderGpt from '@/pages/SliderGpt';

const routes = [
  { name: 'main', component: MainPage, path: '/' },
  { name: 'testing', component: TestingPage, path: '/testing' },
  { name: 'abuse', component: AbuseName, path: '/abusive' },
  { name: 'search', component: Search, path: '/search' },
  { name: 'news', component: News, path: '/news' },
  { name: 'todo', component: Todo, path: '/todo' },
  { name: 'drag&drop', component: DragAndDrop, path: '/drag&drop' },
  { name: 'chatgpt', component: ChatGpt, path: '/chatgpt' },
  { name: 'gsapscroll', component: GsapScroll, path: '/gsapscroll' },
  { name: 'gsapgorscroll', component: GsapGorizontalScroll, path: '/gsapgorscroll' },
  { name: 'slidergpt', component: SliderGpt, path: '/slidergpt' },
];

const router = createRouter({
  fallback: false,
  history: createWebHistory(),
  routes,
});

export default router;
