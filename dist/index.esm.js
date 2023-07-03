import y from "mitt";
import { defineComponent as f, inject as G, reactive as M, computed as d, onMounted as U, openBlock as w, createBlock as O, TransitionGroup as C, unref as v, withCtx as D, renderSlot as g, provide as $, h as B } from "vue";
const c = y();
let T = 0;
const b = () => {
  const o = T;
  return T += 1, o;
}, _ = () => (o, i) => {
  const t = {
    ...o,
    id: b(),
    group: o.group || ""
  };
  return c.emit("notify", { notification: t, timeout: i }), () => c.emit("close", t.id);
}, I = "context", u = /* @__PURE__ */ f({
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
    const t = o, r = G(I), s = M({ notifications: [], timeouts: {} }), a = d(
      () => s.notifications.filter((e) => e.group === r.group)
    ), E = d(() => r.position === "bottom" ? [...a.value].slice(0, t.maxNotifications) : [...a.value].reverse().slice(0, t.maxNotifications)), m = (e, n) => {
      s.timeouts[e] = window.setTimeout(() => {
        n !== -1 && l(e);
      }, Math.max(n || 3e3, 0));
    }, l = (e) => {
      s.notifications.splice(
        s.notifications.findIndex((n) => n.id === e),
        1
      ), clearTimeout(s.timeouts[e]);
    }, x = ({
      notification: e,
      timeout: n
    }) => {
      s.notifications.push(e), m(e.id, n);
    }, h = (e) => {
      i("close"), l(e);
    }, F = (e, n, p) => {
      n ? clearTimeout(s.timeouts[e]) : m(e, p);
    };
    return U(() => {
      c.on("notify", x), c.on("close", l);
    }), (e, n) => (w(), O(C, {
      "enter-active-class": v(a).length > 1 ? [t.enter, t.moveDelay].join(" ") : t.enter,
      "enter-from-class": t.enterFrom,
      "enter-to-class": t.enterTo,
      "leave-active-class": t.leave,
      "leave-from-class": t.leaveFrom,
      "leave-to-class": t.leaveTo,
      "move-class": t.move
    }, {
      default: D(() => [
        g(e.$slots, "default", {
          notifications: v(E),
          close: h,
          hovering: F
        })
      ]),
      _: 3
    }, 8, ["enter-active-class", "enter-from-class", "enter-to-class", "leave-active-class", "leave-from-class", "leave-to-class", "move-class"]));
  }
}), N = /* @__PURE__ */ f({
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
    }), (t, r) => g(t.$slots, "default", { group: o.group });
  }
});
function j(o) {
  o.config.globalProperties.$notify = _(), o.component("Notification", u), o.component("NotificationGroup", N), o.component("notification", u), o.component("notificationGroup", N);
}
const K = {
  install: j
};
function P() {
  return f(
    (i, { slots: t }) => () => B(u, i, t)
  );
}
const S = _();
export {
  u as Notification,
  N as NotificationGroup,
  _ as createNotifier,
  K as default,
  P as defineNotificationComponent,
  S as notify
};
