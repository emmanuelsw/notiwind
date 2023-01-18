import type { Context, Notification } from "./types";
export interface Props {
    maxNotifications?: number;
    enter?: string;
    enterFrom?: string;
    enterTo?: string;
    leave?: string;
    leaveFrom?: string;
    leaveTo?: string;
    move?: string;
    moveDelay?: string;
}
declare const _sfc_main: import("vue").DefineComponent<{
    maxNotifications: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    enter: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    enterFrom: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    enterTo: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    leave: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    leaveFrom: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    leaveTo: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    move: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    moveDelay: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}, {
    props: any;
    emit: (e: "close") => void;
    context: Context;
    state: {
        notifications: {
            [x: string]: unknown;
            id: number;
            group: string;
        }[];
        timeouts: Record<string, number>;
    };
    notificationsByGroup: import("vue").ComputedRef<{
        [x: string]: unknown;
        id: number;
        group: string;
    }[]>;
    sortedNotifications: import("vue").ComputedRef<{
        [x: string]: unknown;
        id: number;
        group: string;
    }[]>;
    remove: (id: Notification["id"]) => void;
    add: ({ notification, timeout, }: {
        notification: Notification;
        timeout: number;
    }) => void;
    close: (id: Notification["id"]) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "close"[], "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    maxNotifications: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    enter: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    enterFrom: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    enterTo: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    leave: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    leaveFrom: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    leaveTo: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    move: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    moveDelay: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}>> & {
    onClose?: ((...args: any[]) => any) | undefined;
}, {
    maxNotifications: number;
    enter: string;
    enterFrom: string;
    enterTo: string;
    leave: string;
    leaveFrom: string;
    leaveTo: string;
    move: string;
    moveDelay: string;
}>;
export default _sfc_main;
