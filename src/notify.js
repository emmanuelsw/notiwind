import { events } from './events'

let count = 0

const generateId = () => {
  return count++
}

export const notify = (notification, timeout) => {
  notification.id = generateId()
  notification.group = notification.group || ''
  events.emit('notify', { notification, timeout })
}
