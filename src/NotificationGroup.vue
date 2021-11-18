<script>
import { positions } from './constants'
export default {
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
      default: positions.top,
      validator(value) {
        return [positions.top, positions.bottom].includes(value)
      },
    },
  },
  render() {
    return this.$slots.default({
      group: this.group,
    })
  },
}
</script>

