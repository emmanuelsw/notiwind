import mitt from 'mitt'
import { Notification } from './types'

type Events = {
  notify: { notification: Notification; timeout?: number }
  close: number
  hovering: { id: number; value: boolean; timeout?: number }
}

const events = mitt<Events>()

export default events
