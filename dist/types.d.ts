export declare type NotificationSchema = Record<string, unknown>;
export declare type Notification<T extends NotificationSchema = NotificationSchema> = {
    id: number;
    group: string;
} & T;
export declare type Context = {
    group?: string;
    position?: "top" | "bottom";
};
export declare type ExtractComponentProps<TComponent> = TComponent extends new () => {
    $props: infer P;
} ? P : never;
