import { h, TransitionGroup } from 'vue';

function mitt(n){return {all:n=n||new Map,on:function(t,e){var i=n.get(t);i?i.push(e):n.set(t,[e]);},off:function(t,e){var i=n.get(t);i&&(e?i.splice(i.indexOf(e)>>>0,1):n.set(t,[]));},emit:function(t,e){var i=n.get(t);i&&i.slice().map(function(n){n(e);}),(i=n.get("*"))&&i.slice().map(function(n){n(t,e);});}}}

const events = mitt();

var script$1 = {
  inject: {
    context: { default: { group: '', position: 'top' } },
  },
  props: {
    maxNotifications: {
      type: Number,
      default: 10,
    },
    enter: {
      type: String,
      default: ''
    },
    enterFrom: {
      type: String,
      default: ''
    },
    enterTo: {
      type: String,
      default: ''
    },
    leave: {
      type: String,
      default: ''
    },
    leaveFrom: {
      type: String,
      default: ''
    },
    leaveTo: {
      type: String,
      default: ''
    },
    move: {
      type: String,
      default: ''
    },
    moveDelay: {
      type: String,
      default: ''
    }
  },
  emits: ['close'],
  data() {
    return {
      notifications: [],
    }
  },
  computed: {
    sortedNotifications() {
      if (this.context.position === 'bottom') {
        return [...this.notificationsByGroup]
          .slice(0, this.maxNotifications)
      }

      // if not bottom reverse the array
      return [...this.notificationsByGroup]
        .reverse()
        .slice(0, this.maxNotifications)
    },
    notificationsByGroup() {
      return this.notifications.filter((n) => n.group === this.context.group)
    },
  },
  mounted() {
    events.on('notify', this.add);
  },
  methods: {
    add({ notification, timeout}) {
      const DEFAULT_TIMEOUT = 3000;

      this.notifications.push(notification);

      setTimeout(() => {
        this.remove(notification.id);
      }, timeout || DEFAULT_TIMEOUT);
    },
    close(id) {
      this.$emit('close');
      this.remove(id);
    },
    remove(id) {
      this.notifications.splice(this.notifications.findIndex(n => n.id === id), 1);
    }
  },
  render() {
    return h(
      TransitionGroup,
      {
        'enter-active-class':
          this.notificationsByGroup.length > 1
            ? [this.enter, this.moveDelay].join(' ')
            : this.enter,
        'enter-from-class': this.enterFrom,
        'enter-to-class': this.enterTo,
        'leave-active-class': this.leave,
        'leave-from-class': this.leaveFrom,
        'leave-to-class': this.leaveTo,
        'move-class': this.move,
      },
      {
        default: () => {
          return this.$slots.default({
            notifications: this.sortedNotifications,
            close: this.close,
          })
        }
      }
    )
  },
};

script$1.__file = "src/Notification.vue";

var script = {
  provide() {
    return {
      ['context']: { group: this.group, position: this.position },
    }
  },
  props: {
    group: {
      type: String,
      default: '',
    },
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'bottom'].includes(value)
      },
    },
  },
  render() {
    return this.$slots.default({
      group: this.group,
    })
  },
};

script.__file = "src/NotificationGroup.vue";

let count = 0;

const generateId = () => {
  return count++
};

const notify = (notification, timeout) => {
  notification.id = generateId();
  notification.group = notification.group || '';
  events.emit('notify', { notification, timeout });
};

/* eslint-disable vue/component-definition-name-casing */

function install(app) {
  app.config.globalProperties.$notify = notify;
  app.component('Notification', script$1);
  app.component('NotificationGroup', script);

  // Compatibility with the old component names
  app.component('notification', script$1);
  app.component('notificationGroup', script);
}

var index = {
  install,
};

export { index as default, notify };
