<script>
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
}
</script>

