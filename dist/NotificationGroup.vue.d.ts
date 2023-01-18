export interface Props {
    group?: string;
    position?: "top" | "bottom";
}
declare const _sfc_main: import("vue").DefineComponent<{
    group: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    position: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}, {
    props: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    group: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    position: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}>>, {
    group: string;
    position: string;
}>;
export default _sfc_main;
