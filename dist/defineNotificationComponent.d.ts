import { VNode } from 'vue';
import { NotificationSchema, Notification } from './types';

export interface SlotProps<T extends NotificationSchema> {
    notifications: Notification<T>[];
    close: (id: Notification['id']) => void;
    hovering: (id: Notification['id'], value: boolean, timeout?: number) => void;
}
declare function defineNotificationComponent<T extends NotificationSchema>(): import('vue').DefineSetupFnComponent<Partial<{
    maxNotifications: number;
    enter: string;
    enterFrom: string;
    enterTo: string;
    leave: string;
    leaveFrom: string;
    leaveTo: string;
    move: string;
    moveDelay: string;
}> & Omit<{
    readonly maxNotifications: number;
    readonly enter: string;
    readonly enterFrom: string;
    readonly enterTo: string;
    readonly leave: string;
    readonly leaveFrom: string;
    readonly leaveTo: string;
    readonly move: string;
    readonly moveDelay: string;
    readonly onClose?: (() => any) | undefined;
} & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, "maxNotifications" | "enter" | "enterFrom" | "enterTo" | "leave" | "leaveFrom" | "leaveTo" | "move" | "moveDelay">, {}, {}, Partial<{
    maxNotifications: number;
    enter: string;
    enterFrom: string;
    enterTo: string;
    leave: string;
    leaveFrom: string;
    leaveTo: string;
    move: string;
    moveDelay: string;
}> & Omit<{
    readonly maxNotifications: number;
    readonly enter: string;
    readonly enterFrom: string;
    readonly enterTo: string;
    readonly leave: string;
    readonly leaveFrom: string;
    readonly leaveTo: string;
    readonly move: string;
    readonly moveDelay: string;
    readonly onClose?: (() => any) | undefined;
} & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, "maxNotifications" | "enter" | "enterFrom" | "enterTo" | "leave" | "leaveFrom" | "leaveTo" | "move" | "moveDelay"> & {}, import('vue').PublicProps> & {
    new (): {
        $slots: {
            default: (arg: SlotProps<T>) => VNode[];
        };
    };
};
export default defineNotificationComponent;
