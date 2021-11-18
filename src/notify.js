import { events } from './events'
import { eventsType } from './constants'

let count = 0

const generateId = () => {
  return count++
}

export const notify = (notification, timeout) => {
  notification.id = generateId()
  notification.group = notification.group || ''
  events.emit(eventsType.notify, { notification, timeout })
}
