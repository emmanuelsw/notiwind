declare const notify: (notification: Omit<import("./types").Notification<import("./types").NotificationSchema>, "id" | "group"> & Partial<Pick<import("./types").Notification<import("./types").NotificationSchema>, "group">>, timeout?: number | undefined) => () => void;
export default notify;
