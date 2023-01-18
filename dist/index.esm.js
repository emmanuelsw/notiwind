import y from "mitt";
import { defineComponent as f, inject as h, reactive as E, computed as m, onMounted as F, openBlock as G, createBlock as w, TransitionGroup as C, unref as p, withCtx as D, renderSlot as v, provide as I, h as U } from "vue";
const c = y(), $ = 0, B = () => $ + 1, T = () => (o, n) => {
  const t = {
    ...o,
    id: B(),
    group: o.group || ""
  };
  return c.emit("notify", { notification: t, timeout: n }), () => c.emit("close", t.id);
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
    const t = o, r = h(g), i = E({ notifications: [], timeouts: {} }), a = m(
      () => i.notifications.filter((e) => e.group === r.group)
    ), N = m(() => r.position === "bottom" ? [...a.value].slice(0, t.maxNotifications) : [...a.value].reverse().slice(0, t.maxNotifications)), l = (e) => {
      i.notifications.splice(
        i.notifications.findIndex((s) => s.id === e),
        1
      ), clearTimeout(i.timeouts[e]);
    }, _ = ({
      notification: e,
      timeout: s
    }) => {
      i.notifications.push(e), i.timeouts[e.id] = window.setTimeout(() => {
        l(e.id);
      }, s || 3e3);
    }, x = (e) => {
      n("close"), l(e);
    };
    return F(() => {
      c.on("notify", _), c.on("close", l);
    }), (e, s) => (G(), w(C, {
      "enter-active-class": p(a).length > 1 ? [t.enter, t.moveDelay].join(" ") : t.enter,
      "enter-from-class": t.enterFrom,
      "enter-to-class": t.enterTo,
      "leave-active-class": t.leave,
      "leave-from-class": t.leaveFrom,
      "leave-to-class": t.leaveTo,
      "move-class": t.move
    }, {
      default: D(() => [
        v(e.$slots, "default", {
          notifications: p(N),
          close: x
        })
      ]),
      _: 3
    }, 8, ["enter-active-class", "enter-from-class", "enter-to-class", "leave-active-class", "leave-from-class", "leave-to-class", "move-class"]));
  }
}), d = /* @__PURE__ */ f({
  __name: "NotificationGroup",
  props: {
    group: { default: "" },
    position: { default: "top" }
  },
  setup(o) {
    const n = o;
    return I(g, {
      group: n.group,
      position: n.position
    }), (t, r) => v(t.$slots, "default", { group: o.group });
  }
});
function M(o) {
  o.config.globalProperties.$notify = T(), o.component("Notification", u), o.component("NotificationGroup", d), o.component("notification", u), o.component("notificationGroup", d);
}
const k = {
  install: M
};
function A() {
  return f(
    (n, { slots: t }) => () => U(u, n, t)
  );
}
const L = T();
export {
  u as Notification,
  d as NotificationGroup,
  T as createNotifier,
  k as default,
  A as defineNotificationComponent,
  L as notify
};
