import { createApp } from 'vue'
import Notifications from '../../dist/index.esm'
import App from './App.vue'
import './index.css'

createApp(App)
  .use(Notifications)
  .mount('#app')
