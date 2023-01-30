import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VideoBackground from '/node_modules/vue-responsive-video-background-player/dist/vue-responsive-video-background-player.umd.js'


createApp(App).use(store).use(router).component('video-background', VideoBackground).mount('#app')
