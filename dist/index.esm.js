import x from "mitt";
import { defineComponent as f, inject as F, reactive as h, computed as m, onMounted as y, openBlock as G, createBlock as M, TransitionGroup as U, unref as p, withCtx as w, renderSlot as T, provide as O, h as C } from "vue";
const r = x();
let d = 0;
const D = () => {
  const o = d;
  return d += 1, o;
}, N = () => (o, n) => {
  const t = {
    ...o,
    id: D(),
    group: o.group || ""
  };
  return r.emit("notify", { notification: t, timeout: n }), () => r.emit("close", t.id);
}, g = "context", u = /* @__PURE__ */ f({
  __name: "Notification",
  props: {
    maxNotifications: { default: 10 },
    enter: { default: "" },
    enterFrom: { default: "" },
    enterTo: { default: "" },
    leave: { default: "" },
    leaveFrom: { default: "" },
    leaveTo: { default: "" },
    move: { default: "" },
    moveDelay: { default: "" }
  },
  emits: ["close"],
  setup(o, { emit: n }) {
    const t = o, c = F(g), i = h({ notifications: [], timeouts: {} }), a = m(
      () => i.notifications.filter((e) => e.group === c.group)
    ), _ = m(() => c.position === "bottom" ? [...a.value].slice(0, t.maxNotifications) : [...a.value].reverse().slice(0, t.maxNotifications)), l = (e) => {
      i.notifications.splice(
        i.notifications.findIndex((s) => s.id === e),
        1
      ), clearTimeout(i.timeouts[e]);
    }, I = ({
      notification: e,
      timeout: s
    }) => {
      i.notifications.push(e), i.timeouts[e.id] = window.setTimeout(() => {
        s !== -1 && l(e.id);
      }, Math.max(s || 3e3, 0));
    }, E = (e) => {
      n("close"), l(e);
    };
    return y(() => {
      r.on("notify", I), r.on("close", l);
    }), (e, s) => (G(), M(U, {
      "enter-active-class": p(a).length > 1 ? [t.enter, t.moveDelay].join(" ") : t.enter,
      "enter-from-class": t.enterFrom,
      "enter-to-class": t.enterTo,
      "leave-active-class": t.leave,
      "leave-from-class": t.leaveFrom,
      "leave-to-class": t.leaveTo,
      "move-class": t.move
    }, {
      default: w(() => [
        T(e.$slots, "default", {
          notifications: p(_),
          close: E
        })
      ]),
      _: 3
    }, 8, ["enter-active-class", "enter-from-class", "enter-to-class", "leave-active-class", "leave-from-class", "leave-to-class", "move-class"]));
  }
}), v = /* @__PURE__ */ f({
  __name: "NotificationGroup",
  props: {
    group: { default: "" },
    position: { default: "top" }
  },
  setup(o) {
    const n = o;
    return O(g, {
      group: n.group,
      position: n.position
    }), (t, c) => T(t.$slots, "default", { group: o.group });
  }
});
function $(o) {
  o.config.globalProperties.$notify = N(), o.component("Notification", u), o.component("NotificationGroup", v), o.component("notification", u), o.component("notificationGroup", v);
}
const A = {
  install: $
};
function L() {
  return f(
    (n, { slots: t }) => () => C(u, n, t)
  );
}
const K = N();
export {
  u as Notification,
  v as NotificationGroup,
  N as createNotifier,
  A as default,
  L as defineNotificationComponent,
  K as notify
};
