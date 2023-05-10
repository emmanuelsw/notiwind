import { Notification } from "./types";
type Events = {
    notify: {
        notification: Notification;
        timeout?: number;
    };
    close: number;
};
declare const events: import("mitt").Emitter<Events>;
export default events;
