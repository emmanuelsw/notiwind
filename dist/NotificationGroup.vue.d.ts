export interface Props {
    group?: string;
    position?: "top" | "bottom";
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    group: {
        type: import("vue").PropType<string>;
        default: string;
    };
    position: {
        type: import("vue").PropType<"top" | "bottom">;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    group: {
        type: import("vue").PropType<string>;
        default: string;
    };
    position: {
        type: import("vue").PropType<"top" | "bottom">;
        default: string;
    };
}>>, {
    group: string;
    position: "top" | "bottom";
}>, {
    default?(_: {
        group: string;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
