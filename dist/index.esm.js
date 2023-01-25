import h from "mitt";
import { defineComponent as f, inject as E, reactive as F, computed as m, onMounted as G, openBlock as w, createBlock as C, TransitionGroup as D, unref as p, withCtx as I, renderSlot as T, provide as U, h as $ } from "vue";
const c = h();
let d = 0;
const B = () => {
  const o = d;
  return d += 1, o;
}, g = () => (o, n) => {
  const t = {
    ...o,
    id: B(),
    group: o.group || ""
  };
  return c.emit("notify", { notification: t, timeout: n }), () => c.emit("close", t.id);
}, N = "context", u = /* @__PURE__ */ f({
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
    const t = o, r = E(N), i = F({ notifications: [], timeouts: {} }), a = m(
      () => i.notifications.filter((e) => e.group === r.group)
    ), _ = m(() => r.position === "bottom" ? [...a.value].slice(0, t.maxNotifications) : [...a.value].reverse().slice(0, t.maxNotifications)), l = (e) => {
      i.notifications.splice(
        i.notifications.findIndex((s) => s.id === e),
        1
      ), clearTimeout(i.timeouts[e]);
    }, x = ({
      notification: e,
      timeout: s
    }) => {
      i.notifications.push(e), i.timeouts[e.id] = window.setTimeout(() => {
        l(e.id);
      }, s || 3e3);
    }, y = (e) => {
      n("close"), l(e);
    };
    return G(() => {
      c.on("notify", x), c.on("close", l);
    }), (e, s) => (w(), C(D, {
      "enter-active-class": p(a).length > 1 ? [t.enter, t.moveDelay].join(" ") : t.enter,
      "enter-from-class": t.enterFrom,
      "enter-to-class": t.enterTo,
      "leave-active-class": t.leave,
      "leave-from-class": t.leaveFrom,
      "leave-to-class": t.leaveTo,
      "move-class": t.move
    }, {
      default: I(() => [
        T(e.$slots, "default", {
          notifications: p(_),
          close: y
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
    return U(N, {
      group: n.group,
      position: n.position
    }), (t, r) => T(t.$slots, "default", { group: o.group });
  }
});
function M(o) {
  o.config.globalProperties.$notify = g(), o.component("Notification", u), o.component("NotificationGroup", v), o.component("notification", u), o.component("notificationGroup", v);
}
const k = {
  install: M
};
function A() {
  return f(
    (n, { slots: t }) => () => $(u, n, t)
  );
}
const L = g();
export {
  u as Notification,
  v as NotificationGroup,
  g as createNotifier,
  k as default,
  A as defineNotificationComponent,
  L as notify
};
