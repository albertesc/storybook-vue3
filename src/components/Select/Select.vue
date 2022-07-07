<template>
  <div :class="classes">
    <select
      :value="inputValue"
      :name="inputName"
      :id="inputName"
      :disabled="disabled"
    >
      <option v-if="placeholder" value="" disabled hidden>
        {{ placeholder }}
      </option>
      <option v-for="(option, index) in options" :value="index" :key="index">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
import './select.scss'
import { reactive, computed } from 'vue'

export default {
  name: 'input',

  props: {
    inputName: {
      type: String,
      default: '',
      required: true,
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
    options: {
      type: Array,
      default: () => [],
    },
  },

  setup(props) {
    props = reactive(props)

    return {
      classes: computed(() => ({
        select: true,
        'select--small': props.small,
        'select--disabled': props.disabled,
        'select--error': props.error !== '',
      })),
    }
  },
}
</script>
