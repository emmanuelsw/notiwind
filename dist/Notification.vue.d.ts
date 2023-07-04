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
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    maxNotifications: {
        type: import("vue").PropType<number>;
        default: number;
    };
    enter: {
        type: import("vue").PropType<string>;
        default: string;
    };
    enterFrom: {
        type: import("vue").PropType<string>;
        default: string;
    };
    enterTo: {
        type: import("vue").PropType<string>;
        default: string;
    };
    leave: {
        type: import("vue").PropType<string>;
        default: string;
    };
    leaveFrom: {
        type: import("vue").PropType<string>;
        default: string;
    };
    leaveTo: {
        type: import("vue").PropType<string>;
        default: string;
    };
    move: {
        type: import("vue").PropType<string>;
        default: string;
    };
    moveDelay: {
        type: import("vue").PropType<string>;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: () => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    maxNotifications: {
        type: import("vue").PropType<number>;
        default: number;
    };
    enter: {
        type: import("vue").PropType<string>;
        default: string;
    };
    enterFrom: {
        type: import("vue").PropType<string>;
        default: string;
    };
    enterTo: {
        type: import("vue").PropType<string>;
        default: string;
    };
    leave: {
        type: import("vue").PropType<string>;
        default: string;
    };
    leaveFrom: {
        type: import("vue").PropType<string>;
        default: string;
    };
    leaveTo: {
        type: import("vue").PropType<string>;
        default: string;
    };
    move: {
        type: import("vue").PropType<string>;
        default: string;
    };
    moveDelay: {
        type: import("vue").PropType<string>;
        default: string;
    };
}>> & {
    onClose?: (() => any) | undefined;
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
}>, {
    default?(_: {
        notifications: {
            [x: string]: unknown;
            id: number;
            group: string;
        }[];
        close: (id: number) => void;
        hovering: (id: number, value: boolean, timeout?: number | undefined) => void;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
