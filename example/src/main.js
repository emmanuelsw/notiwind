import { createApp } from 'vue'
// import Notifications from "notiwind"
import Notifications from '../../src/index'
import App from './App.vue'
import './index.css'

createApp(App)
  .use(Notifications)
  .mount('#app')
