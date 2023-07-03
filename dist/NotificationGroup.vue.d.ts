import type { PropType as __PropType } from 'vue';
export interface Props {
    group?: string;
    position?: "top" | "bottom";
}
declare const _sfc_main: import("vue").DefineComponent<{
    group: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    position: {
        type: __PropType<"top" | "bottom" | undefined>;
        required: false;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    group: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    position: {
        type: __PropType<"top" | "bottom" | undefined>;
        required: false;
        default: string;
    };
}>>, {
    group: string | undefined;
    position: "top" | "bottom" | undefined;
}>;
export default _sfc_main;
