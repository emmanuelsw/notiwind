import { defineComponent as f, inject as h, reactive as y, computed as m, onMounted as w, openBlock as E, createBlock as F, TransitionGroup as G, unref as p, withCtx as C, renderSlot as v, provide as D, h as I } from "vue";
function M(e) {
  return { all: e = e || /* @__PURE__ */ new Map(), on: function(o, t) {
    var n = e.get(o);
    n ? n.push(t) : e.set(o, [t]);
  }, off: function(o, t) {
    var n = e.get(o);
    n && (t ? n.splice(n.indexOf(t) >>> 0, 1) : e.set(o, []));
  }, emit: function(o, t) {
    var n = e.get(o);
    n && n.slice().map(function(s) {
      s(t);
    }), (n = e.get("*")) && n.slice().map(function(s) {
      s(o, t);
    });
  } };
}
const a = M(), O = 0, U = () => O + 1, g = () => (e, o) => {
  const t = {
    ...e,
    id: U(),
    group: e.group || ""
  };
  return a.emit("notify", { notification: t, timeout: o }), () => a.emit("close", t.id);
}, T = "context", u = /* @__PURE__ */ f({
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
  setup(e, { emit: o }) {
    const t = e, n = h(T), s = y({ notifications: [], timeouts: {} }), r = m(
      () => s.notifications.filter((i) => i.group === n.group)
    ), N = m(() => n.position === "bottom" ? [...r.value].slice(0, t.maxNotifications) : [...r.value].reverse().slice(0, t.maxNotifications)), l = (i) => {
      s.notifications.splice(
        s.notifications.findIndex((c) => c.id === i),
        1
      ), clearTimeout(s.timeouts[i]);
    }, _ = ({
      notification: i,
      timeout: c
    }) => {
      s.notifications.push(i), s.timeouts[i.id] = window.setTimeout(() => {
        l(i.id);
      }, c || 3e3);
    }, x = (i) => {
      o("close"), l(i);
    };
    return w(() => {
      a.on("notify", _), a.on("close", l);
    }), (i, c) => (E(), F(G, {
      "enter-active-class": p(r).length > 1 ? [t.enter, t.moveDelay].join(" ") : t.enter,
      "enter-from-class": t.enterFrom,
      "enter-to-class": t.enterTo,
      "leave-active-class": t.leave,
      "leave-from-class": t.leaveFrom,
      "leave-to-class": t.leaveTo,
      "move-class": t.move
    }, {
      default: C(() => [
        v(i.$slots, "default", {
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
  setup(e) {
    const o = e;
    return D(T, {
      group: o.group,
      position: o.position
    }), (t, n) => v(t.$slots, "default", { group: e.group });
  }
});
function $(e) {
  e.config.globalProperties.$notify = g(), e.component("Notification", u), e.component("NotificationGroup", d), e.component("notification", u), e.component("notificationGroup", d);
}
const j = {
  install: $
};
function k() {
  return f(
    (o, { slots: t }) => () => I(u, o, t)
  );
}
const A = g();
export {
  u as Notification,
  d as NotificationGroup,
  g as createNotifier,
  j as default,
  k as defineNotificationComponent,
  A as notify
};
