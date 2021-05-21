<script>
import { TransitionGroup, h } from 'vue'
import { state, removeNotification } from './notify.js'

export default {
  inject: {
    context: { default: { group: '', position: 'top' } },
  },
  props: {
    maxNotifications: {
      type: Number,
      default: 10,
    },
    transitionGroupClasses: {
      default: () => {
        return {
          enterActiveClassDelayed: 'transform ease-out duration-300 transition delay-300',
          enterActiveClass: 'transform ease-out duration-300 transition',
          enterFromClass: 'translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-4',
          enterToClass: 'translate-y-0 opacity-100 sm:translate-x-0',
          leaveActiveClass: 'transition ease-in duration-500',
          leaveFromClass: 'opacity-100',
          leaveToClass: 'opacity-0',
          moveClass: 'transition duration-500',
        }
      },
    },
  },
  render() {
    return h(
      TransitionGroup,
      {
        'enter-active-class':
          this.notificationsByGroup.length > 1
            ? this.transitionGroupClasses.enterActiveClassDelayed
            : this.transitionGroupClasses.enterActiveClass,
        'enter-from-class': this.transitionGroupClasses.enterFromClass,
        'enter-to-class': this.transitionGroupClasses.enterToClass,
        'leave-active-class': this.transitionGroupClasses.leaveActiveClass,
        'leave-from-class': this.transitionGroupClasses.leaveFromClass,
        'leave-to-class': this.transitionGroupClasses.leaveToClass,
        'move-class': this.transitionGroupClasses.moveClass,
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
  data() {
    return {
      notifications: state.notifications,
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
  methods: {
    close(id) {
      this.$emit('close')
      removeNotification(id)
    },
  },
}
</script>