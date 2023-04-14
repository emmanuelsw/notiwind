import G from "mitt";
import { defineComponent as f, inject as w, reactive as C, computed as d, onMounted as D, openBlock as U, createBlock as $, TransitionGroup as B, unref as v, withCtx as I, renderSlot as N, provide as M, h as O } from "vue";
const c = G();
let T = 0;
const b = () => {
  const o = T;
  return T += 1, o;
}, _ = () => (o, n) => {
  const t = {
    ...o,
    id: b(),
    group: o.group || ""
  };
  return c.emit("notify", { notification: t, timeout: n }), () => c.emit("close", t.id);
}, x = "context", u = /* @__PURE__ */ f({
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
    const t = o, r = w(x), s = C({ notifications: [], timeouts: {} }), a = d(
      () => s.notifications.filter((e) => e.group === r.group)
    ), h = d(() => r.position === "bottom" ? [...a.value].slice(0, t.maxNotifications) : [...a.value].reverse().slice(0, t.maxNotifications)), m = (e, i) => {
      s.timeouts[e] = window.setTimeout(() => {
        l(e);
      }, i || 3e3);
    }, l = (e) => {
      s.notifications.splice(
        s.notifications.findIndex((i) => i.id === e),
        1
      ), clearTimeout(s.timeouts[e]);
    }, y = ({
      notification: e,
      timeout: i
    }) => {
      s.notifications.push(e), m(e.id, i);
    }, E = (e) => {
      n("close"), l(e);
    }, F = (e, i, p) => {
      i ? clearTimeout(s.timeouts[e]) : m(e, p);
    };
    return D(() => {
      c.on("notify", y), c.on("close", l);
    }), (e, i) => (U(), $(B, {
      "enter-active-class": v(a).length > 1 ? [t.enter, t.moveDelay].join(" ") : t.enter,
      "enter-from-class": t.enterFrom,
      "enter-to-class": t.enterTo,
      "leave-active-class": t.leave,
      "leave-from-class": t.leaveFrom,
      "leave-to-class": t.leaveTo,
      "move-class": t.move
    }, {
      default: I(() => [
        N(e.$slots, "default", {
          notifications: v(h),
          close: E,
          hovering: F
        })
      ]),
      _: 3
    }, 8, ["enter-active-class", "enter-from-class", "enter-to-class", "leave-active-class", "leave-from-class", "leave-to-class", "move-class"]));
  }
}), g = /* @__PURE__ */ f({
  __name: "NotificationGroup",
  props: {
    group: { default: "" },
    position: { default: "top" }
  },
  setup(o) {
    const n = o;
    return M(x, {
      group: n.group,
      position: n.position
    }), (t, r) => N(t.$slots, "default", { group: o.group });
  }
});
function j(o) {
  o.config.globalProperties.$notify = _(), o.component("Notification", u), o.component("NotificationGroup", g), o.component("notification", u), o.component("notificationGroup", g);
}
const L = {
  install: j
};
function K() {
  return f(
    (n, { slots: t }) => () => O(u, n, t)
  );
}
const P = _();
export {
  u as Notification,
  g as NotificationGroup,
  _ as createNotifier,
  L as default,
  K as defineNotificationComponent,
  P as notify
};
