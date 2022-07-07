<template>
  <button type="button" :class="classes" @click="onClick">
    <slot />
  </button>
</template>

<script>
import './button.scss'
import { reactive, computed } from 'vue'

export default {
  name: 'button-primary',

  props: {
    primary: {
      type: Boolean,
      default: true,
    },
    line: {
      type: Boolean,
      default: false,
    },
    link: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props)

    return {
      classes: computed(() => ({
        button: true,
        'button--primary': props.primary,
        'button--secondary': !props.primary,
        'button--line': props.line,
        'button--link': props.link,
        'button--small': props.small,
      })),
      onClick() {
        emit('click')
      },
    }
  },
}
</script>
