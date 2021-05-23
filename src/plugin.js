import Notification from './Notification.vue'
import NotificationGroup from './NotificationGroup.vue'
import { notify } from './notify'

export function install(app) {
  app.config.globalProperties.$notify = notify
  app.component('Notification', Notification)
  app.component('NotificationGroup', NotificationGroup)
}
