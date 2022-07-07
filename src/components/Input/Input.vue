<template>
  <div :class="classes">
    <input
      type="text"
      :value="inputValue"
      :name="inputName"
      :id="inputName"
      :placeholder="placeholder"
      :disabled="disabled"
      :small="small"
    />
    <div v-if="iconLeft !== ''" class="icon-left">
      <Icon :icon="iconLeft" width="14" height="14" />
    </div>
    <div v-if="iconRight !== ''" class="icon-right">
      <Icon :icon="iconRight" width="14" height="14" />
    </div>
  </div>
</template>

<script>
import './input.scss'
import Icon from '../Icon/Icon.vue'
import { reactive, computed } from 'vue'

export default {
  name: 'input',

  components: { Icon },

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
    iconLeft: {
      type: String,
      default: '',
    },
    iconRight: {
      type: String,
      default: '',
    },
  },

  setup(props) {
    props = reactive(props)

    return {
      classes: computed(() => ({
        input: true,
        'input--disabled': props.disabled,
        'input--error': props.error !== '',
        'input--icon-left': props.iconLeft !== '',
        'input--icon-right': props.iconRight !== '',
        'input--small': props.small,
      })),
    }
  },
}
</script>
