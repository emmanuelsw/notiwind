import { Notification } from "./types";
declare type Events = {
    notify: {
        notification: Notification;
        timeout?: number;
    };
    close: number;
};
declare const events: import("mitt").Emitter<Events>;
export default events;
