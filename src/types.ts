export type NotificationSchema = Record<string, unknown>;

export type Notification<T extends NotificationSchema = NotificationSchema> = {
  id: number;
  group: string;
} & T;

export type Context = {
  group?: string;
  position?: "top" | "bottom";
};

export type ExtractComponentProps<TComponent> = TComponent extends new () => {
  $props: infer P;
}
  ? P
  : never;
