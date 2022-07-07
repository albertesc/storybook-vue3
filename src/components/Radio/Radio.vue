<template>
  <div :class="classes">
    <label>
      <input
        type="radio"
        :name="inputName"
        :id="inputName"
        :disabled="disabled"
        :checked="checked"
      />
      <span v-if="label">{{ label }}</span>
    </label>
  </div>
</template>

<script>
import './radio.scss'
import { reactive, computed } from 'vue'

export default {
  name: 'radio',

  props: {
    inputName: {
      type: String,
      default: '',
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
      default: '',
    },
  },

  setup(props) {
    props = reactive(props)

    return {
      classes: computed(() => ({
        radio: true,
        'radio--disabled': props.disabled,
        'radio--error': props.error !== '',
      })),
    }
  },
}
</script>
