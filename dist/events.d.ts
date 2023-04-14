import { Notification } from "./types";
declare type Events = {
    notify: {
        notification: Notification;
        timeout?: number;
    };
    close: number;
    hovering: {
        id: number;
        value: boolean;
        timeout?: number;
    };
};
declare const events: import("mitt").Emitter<Events>;
export default events;
