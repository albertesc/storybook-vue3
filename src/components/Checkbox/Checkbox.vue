<template>
  <div :class="classes">
    <label>
      <input
        type="checkbox"
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
import './checkbox.scss'
import { reactive, computed } from 'vue'

export default {
  name: 'checkbox',

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
        checkbox: true,
        'checkbox--disabled': props.disabled,
        'checkbox--error': props.error !== '',
      })),
    }
  },
}
</script>
