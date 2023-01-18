import { Notification, NotificationSchema } from "./types";
declare type UserNotification<T extends NotificationSchema> = Omit<Notification<T>, "id">;
declare const createNotifier: <T extends NotificationSchema>() => (notification: UserNotification<T>, timeout: number) => () => void;
export default createNotifier;
