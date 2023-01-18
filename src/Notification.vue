<script setup lang="ts">
import { computed, inject, onMounted, reactive, TransitionGroup } from "vue";
import { CONTEXT_KEY } from "./constants";
import events from "./events";
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

interface State {
  notifications: Notification[];
  timeouts: Record<string, number>;
}

const props = withDefaults(defineProps<Props>(), {
  maxNotifications: 10,
  enter: "",
  enterFrom: "",
  enterTo: "",
  leave: "",
  leaveFrom: "",
  leaveTo: "",
  move: "",
  moveDelay: "",
});

const emit = defineEmits<{ (e: "close"): void }>();

const context = inject<Context>(CONTEXT_KEY) as Context;
const state = reactive<State>({ notifications: [], timeouts: {} });

const notificationsByGroup = computed(() =>
  state.notifications.filter((n) => n.group === context.group)
);
const sortedNotifications = computed(() => {
  if (context.position === "bottom") {
    return [...notificationsByGroup.value].slice(0, props.maxNotifications);
  }

  return [...notificationsByGroup.value]
    .reverse()
    .slice(0, props.maxNotifications);
});

const remove = (id: Notification["id"]) => {
  state.notifications.splice(
    state.notifications.findIndex((n) => n.id === id),
    1
  );

  clearTimeout(state.timeouts[id]);
};

const add = ({
  notification,
  timeout,
}: {
  notification: Notification;
  timeout: number;
}) => {
  const DEFAULT_TIMEOUT = 3000;

  state.notifications.push(notification);

  state.timeouts[notification.id] = window.setTimeout(() => {
    remove(notification.id);
  }, timeout || DEFAULT_TIMEOUT);
};

const close = (id: Notification["id"]) => {
  emit("close");
  remove(id);
};

onMounted(() => {
  events.on("notify", add);
  events.on("close", remove);
});
</script>

<template>
  <TransitionGroup
    :enter-active-class="
      notificationsByGroup.length > 1
        ? [props.enter, props.moveDelay].join(' ')
        : props.enter
    "
    :enter-from-class="props.enterFrom"
    :enter-to-class="props.enterTo"
    :leave-active-class="props.leave"
    :leave-from-class="props.leaveFrom"
    :leave-to-class="props.leaveTo"
    :move-class="props.move"
  >
    <slot :notifications="sortedNotifications" :close="close"></slot>
  </TransitionGroup>
</template>
