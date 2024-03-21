import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MotionPathPlugin from "gsap/MotionPathPlugin";
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')