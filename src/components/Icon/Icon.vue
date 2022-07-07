<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="none"
    :viewBox="`0 0 ${width} ${height}`"
    :width="width"
    :height="height"
    :class="$attrs.class"
  >
    <component :is="icon" />
  </svg>
</template>

<script>
import icons from './icons'

export default {
  name: 'Icon',
  components: {
    ...icons,
  },
  props: {
    width: {
      type: String,
      default: '20',
    },
    height: {
      type: String,
      default: '20',
    },
    class: {
      type: String,
      default: '',
    },
  },
  computed: {
    icon() {
      return this.$attrs.icon
    },
  },
}
</script>
