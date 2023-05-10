import { VNode } from "vue";
import { NotificationSchema, Notification } from "./types";
interface SlotProps<T extends NotificationSchema> {
    notifications: Notification<T>[];
    close: (id: Notification["id"]) => void;
}
declare function defineNotificationComponent<T extends NotificationSchema>(): {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<Readonly<{
            maxNotifications?: number | undefined;
            enter?: string | undefined;
            enterFrom?: string | undefined;
            enterTo?: string | undefined;
            leave?: string | undefined;
            leaveFrom?: string | undefined;
            leaveTo?: string | undefined;
            move?: string | undefined;
            moveDelay?: string | undefined;
            onClose?: ((...args: any[]) => any) | undefined;
            key?: string | number | symbol | undefined;
            ref?: import("vue").VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            onVnodeBeforeMount?: ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeMounted?: ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUpdate?: ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUpdated?: ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUnmount?: ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUnmounted?: ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            class?: unknown;
            style?: unknown;
        }> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, undefined>;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
            maxNotifications?: number | undefined;
            enter?: string | undefined;
            enterFrom?: string | undefined;
            enterTo?: string | undefined;
            leave?: string | undefined;
            leaveFrom?: string | undefined;
            leaveTo?: string | undefined;
            move?: string | undefined;
            moveDelay?: string | undefined;
            onClose?: ((...args: any[]) => any) | undefined;
            key?: string | number | symbol | undefined;
            ref?: import("vue").VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            onVnodeBeforeMount?: ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeMounted?: ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUpdate?: ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUpdated?: ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUnmount?: ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUnmounted?: ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            class?: unknown;
            style?: unknown;
        }>, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string>, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<{
        maxNotifications?: number | undefined;
        enter?: string | undefined;
        enterFrom?: string | undefined;
        enterTo?: string | undefined;
        leave?: string | undefined;
        leaveFrom?: string | undefined;
        leaveTo?: string | undefined;
        move?: string | undefined;
        moveDelay?: string | undefined;
        onClose?: ((...args: any[]) => any) | undefined;
        key?: string | number | symbol | undefined;
        ref?: import("vue").VNodeRef | undefined;
        ref_for?: boolean | undefined;
        ref_key?: string | undefined;
        onVnodeBeforeMount?: ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeMounted?: ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeBeforeUpdate?: ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeUpdated?: ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeBeforeUnmount?: ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        onVnodeUnmounted?: ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[] | undefined;
        class?: unknown;
        style?: unknown;
    }> & import("vue").ShallowUnwrapRef<() => VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>> & {
        [x: string]: never;
    } & import("vue").MethodOptions & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<{
    maxNotifications?: number | undefined;
    enter?: string | undefined;
    enterFrom?: string | undefined;
    enterTo?: string | undefined;
    leave?: string | undefined;
    leaveFrom?: string | undefined;
    leaveTo?: string | undefined;
    move?: string | undefined;
    moveDelay?: string | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    key?: string | number | symbol | undefined;
    ref?: import("vue").VNodeRef | undefined;
    ref_for?: boolean | undefined;
    ref_key?: string | undefined;
    onVnodeBeforeMount?: ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void) | ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void)[] | undefined;
    onVnodeMounted?: ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void) | ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void)[] | undefined;
    onVnodeBeforeUpdate?: ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, oldVNode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void) | ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, oldVNode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void)[] | undefined;
    onVnodeUpdated?: ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, oldVNode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void) | ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, oldVNode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void)[] | undefined;
    onVnodeBeforeUnmount?: ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void) | ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void)[] | undefined;
    onVnodeUnmounted?: ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void) | ((vnode: VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) => void)[] | undefined;
    class?: unknown;
    style?: unknown;
}>, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default: (arg: SlotProps<T>) => VNode[];
    };
});
export default defineNotificationComponent;
