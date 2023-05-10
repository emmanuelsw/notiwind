import { Notification, NotificationSchema } from "./types";
type UserNotification<T extends NotificationSchema> = Omit<Notification<T>, "id" | "group"> & Partial<Pick<Notification<T>, "group">>;
declare const createNotifier: <T extends NotificationSchema>() => (notification: UserNotification<T>, timeout?: number) => () => void;
export default createNotifier;
