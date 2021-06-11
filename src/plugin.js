/* eslint-disable vue/component-definition-name-casing */

import Notification from './Notification.vue'
import NotificationGroup from './NotificationGroup.vue'
import { notify } from './notify'

export function install(app) {
  app.config.globalProperties.$notify = notify
  app.component('Notification', Notification)
  app.component('NotificationGroup', NotificationGroup)

  // Compatibility with the old component names
  app.component('notification', Notification)
  app.component('notificationGroup', NotificationGroup)
}
