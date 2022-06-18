declare module "notiwind" {
  type Stuff = string;
  type Notification = {
    group: string;
    title: string;
    text: string;
  };
  function notify(notification: Notification, timeout: number): void;
}
