import type { PropType as __PropType } from 'vue';
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
        type: __PropType<number | undefined>;
        required: false;
        default: number;
    };
    enter: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    enterFrom: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    enterTo: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    leave: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    leaveFrom: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    leaveTo: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    move: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    moveDelay: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "close"[], "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    maxNotifications: {
        type: __PropType<number | undefined>;
        required: false;
        default: number;
    };
    enter: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    enterFrom: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    enterTo: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    leave: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    leaveFrom: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    leaveTo: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    move: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    moveDelay: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
}>> & {
    onClose?: ((...args: any[]) => any) | undefined;
}, {
    maxNotifications: number | undefined;
    enter: string | undefined;
    enterFrom: string | undefined;
    enterTo: string | undefined;
    leave: string | undefined;
    leaveFrom: string | undefined;
    leaveTo: string | undefined;
    move: string | undefined;
    moveDelay: string | undefined;
}>;
export default _sfc_main;
