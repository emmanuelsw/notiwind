import type { App } from 'vue'
import createNotifier from './createNotifier'
import Notification from './Notification.vue'
import NotificationGroup from './NotificationGroup.vue'

function install(app: App) {
  app.config.globalProperties.$notify = createNotifier()

  app.component('Notification', Notification)
  app.component('NotificationGroup', NotificationGroup)

  // Compatibility with the old component names
  app.component('notification', Notification)
  app.component('notificationGroup', NotificationGroup)
}

const plugin = {
  install,
}

export default plugin
