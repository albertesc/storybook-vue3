<template>
  <a :class="classes" :target="target" :href="href">
    {{ text }}
    <span v-if="target === '_blank'" class="icon">
      <Icon icon="iconExternal" width="9" height="13" />
    </span>
  </a>
</template>

<script>
import './link.scss'
import Icon from '../Icon/Icon.vue'
import { reactive, computed } from 'vue'

export default {
  name: 'link',
  components: { Icon },

  props: {
    href: {
      type: String,
      default: '',
      required: true,
    },
    text: {
      type: String,
      default: '',
      required: true,
    },
    target: {
      type: String,
      default: '_self',
    },
    strong: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, { emit }) {
    props = reactive(props)

    return {
      classes: computed(() => ({
        link: true,
        'link--strong': props.strong,
      })),
    }
  },
}
</script>
