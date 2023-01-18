<script setup lang="ts">
import { provide } from "vue";
import { CONTEXT_KEY } from "./constants";
import type { Context } from "./types";

export interface Props {
  group?: string;
  position?: "top" | "bottom";
}

const props = withDefaults(defineProps<Props>(), {
  group: "",
  position: "top",
});

provide<Context>(CONTEXT_KEY, {
  group: props.group,
  position: props.position,
});
</script>

<template>
  <slot :group="group"></slot>
</template>
