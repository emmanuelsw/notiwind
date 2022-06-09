declare module 'notiwind' {
    import {Plugin} from 'vue'
    const Notifications: Plugin
    export default Notifications

    interface Notification {
        group?: string,
        [key: string]: any,
    }

    export function notify(notification: Notification, time: number): void
}
