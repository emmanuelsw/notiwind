import { reactive } from 'vue'

export const state = reactive({
  notifications: [],
})

let count = 0
const DEFAULT_TIMEOUT = 3000

const generateId = () => {
  return count++
}

export const notify = (notification, timeout) => {
  notification.id = generateId()
  notification.group = notification.group || ''
  state.notifications.push(notification)
  setTimeout(() => {
    removeNotification(notification.id)
  }, timeout || DEFAULT_TIMEOUT)
}

export const removeNotification = (id) => {
  state.notifications.splice(state.notifications.findIndex(n => n.id === id), 1)
}
