import y from "mitt";
import { defineComponent as u, inject as G, reactive as M, computed as v, onMounted as U, openBlock as w, createBlock as O, TransitionGroup as C, withCtx as D, renderSlot as g, provide as $, h as A } from "vue";
const r = y();
let T = 0;
const B = () => {
  const o = T;
  return T += 1, o;
}, _ = () => (o, i) => {
  const t = {
    ...o,
    id: B(),
    group: o.group || ""
  };
  return r.emit("notify", { notification: t, timeout: i }), () => r.emit("close", t.id);
}, I = "context", l = /* @__PURE__ */ u({
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
  setup(o, { emit: i }) {
    const t = o, f = i, m = G(I), s = M({ notifications: [], timeouts: {} }), a = v(
      () => s.notifications.filter((e) => e.group === m.group)
    ), h = v(() => m.position === "bottom" ? [...a.value] : [...a.value].reverse()), p = (e, n) => {
      s.timeouts[e] = window.setTimeout(
        () => {
          n !== -1 && c(e);
        },
        Math.max(n || 3e3, 0)
      );
    }, c = (e) => {
      s.notifications.splice(
        s.notifications.findIndex((n) => n.id === e),
        1
      ), clearTimeout(s.timeouts[e]);
    }, E = ({ notification: e, timeout: n }) => {
      s.notifications.length !== t.maxNotifications && (s.notifications.push(e), p(e.id, n));
    }, F = (e) => {
      f("close"), c(e);
    }, x = (e, n, d) => {
      n ? clearTimeout(s.timeouts[e]) : p(e, d);
    };
    return U(() => {
      r.on("notify", E), r.on("close", c);
    }), (e, n) => (w(), O(C, {
      "enter-active-class": a.value.length > 1 ? [t.enter, t.moveDelay].join(" ") : t.enter,
      "enter-from-class": t.enterFrom,
      "enter-to-class": t.enterTo,
      "leave-active-class": t.leave,
      "leave-from-class": t.leaveFrom,
      "leave-to-class": t.leaveTo,
      "move-class": t.move
    }, {
      default: D(() => [
        g(e.$slots, "default", {
          notifications: h.value,
          close: F,
          hovering: x
        })
      ]),
      _: 3
    }, 8, ["enter-active-class", "enter-from-class", "enter-to-class", "leave-active-class", "leave-from-class", "leave-to-class", "move-class"]));
  }
}), N = /* @__PURE__ */ u({
  inheritAttrs: !1,
  __name: "NotificationGroup",
  props: {
    group: { default: "" },
    position: { default: "top" }
  },
  setup(o) {
    const i = o;
    return $(I, {
      group: i.group,
      position: i.position
    }), (t, f) => g(t.$slots, "default", { group: t.group });
  }
});
function b(o) {
  o.config.globalProperties.$notify = _(), o.component("Notification", l), o.component("NotificationGroup", N), o.component("notification", l), o.component("notificationGroup", N);
}
const K = {
  install: b
};
function P() {
  return u(
    (i, { slots: t }) => () => A(l, i, t)
  );
}
const S = _();
export {
  l as Notification,
  N as NotificationGroup,
  _ as createNotifier,
  K as default,
  P as defineNotificationComponent,
  S as notify
};
