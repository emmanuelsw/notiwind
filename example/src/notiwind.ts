import {
  createNotifier,
  NotificationGroup,
  defineNotificationComponent,
  // eslint-disable-next-line import/no-relative-packages
} from '../..'
import { NotificationSchema } from './types'

export const notify = createNotifier<NotificationSchema>()
export const Notification = defineNotificationComponent<NotificationSchema>()
export { NotificationGroup }
