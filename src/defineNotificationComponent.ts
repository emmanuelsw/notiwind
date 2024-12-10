import { defineComponent, h, VNode } from 'vue'
import NotificationComponent from './Notification.vue'
import { ExtractComponentProps, NotificationSchema, Notification } from './types'

export interface SlotProps<T extends NotificationSchema> {
  notifications: Notification<T>[]
  close: (id: Notification['id']) => void
  hovering: (id: Notification['id'], value: boolean, timeout?: number) => void
}

function defineNotificationComponent<T extends NotificationSchema>() {
  const wrapper = defineComponent(
    (props: ExtractComponentProps<typeof NotificationComponent>, { slots }) => {
      return () => {
        return h(NotificationComponent, props, slots)
      }
    },
  )
  return wrapper as typeof wrapper & {
    new (): {
      $slots: {
        default: (arg: SlotProps<T>) => VNode[]
      }
    }
  }
}

export default defineNotificationComponent
