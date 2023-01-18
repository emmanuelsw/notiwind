import { Notification, NotificationSchema } from "./types";
import events from "./events";

const count = 0;

const generateId = () => {
  const id = count + 1;
  return id;
};

type UserNotification<T extends NotificationSchema> = Omit<
  Notification<T>,
  "id" | "group"
> &
  Partial<Pick<Notification<T>, "group">>;

const createNotifier = <T extends NotificationSchema>() => {
  return (notification: UserNotification<T>, timeout: number) => {
    const identifiedNotification = {
      ...notification,
      id: generateId(),
      group: notification.group || "",
    } as Notification<T>;
    events.emit("notify", { notification: identifiedNotification, timeout });

    return () => events.emit("close", identifiedNotification.id);
  };
};

export default createNotifier;
