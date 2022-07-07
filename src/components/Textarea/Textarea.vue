<template>
  <textarea
    :value="inputValue"
    :name="inputName"
    :id="inputName"
    :class="classes"
    :placeholder="placeholder"
    :disabled="disabled"
  ></textarea>
</template>

<script>
import './textarea.scss'
import { reactive, computed } from 'vue'

export default {
  name: 'textarea',

  props: {
    inputName: {
      type: String,
      default: '',
      required: true,
    },
    inputValue: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
      default: '',
    },
    small: {
      type: Boolean,
      default: false,
    },
    resize: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    props = reactive(props)

    return {
      classes: computed(() => ({
        textarea: true,
        'textarea--disabled': props.disabled,
        'textarea--error': props.error !== '',
        'textarea--small': props.small,
        'textarea--resize': props.resize,
      })),
    }
  },
}
</script>
