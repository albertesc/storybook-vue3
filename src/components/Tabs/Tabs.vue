<template>
  <div :class="classes">
    <div class="tabs__menu">
      <span
        v-for="(title, index) in tabTitles"
        :key="index"
        :class="{ active: title === selectedTitle }"
        class="item"
        @click="selectedTitle = title"
      >
        <a>{{ title }}</a>
      </span>
    </div>
    <div class="tabs__content">
      <slot />
    </div>
  </div>
</template>

<script>
import './tabs.scss'
import { ref, provide, reactive, computed } from 'vue'

export default {
  name: 'Tabs',

  props: {
    horizontal: {
      type: Boolean,
      default: false,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, { slots }) {
    props = reactive(props)

    const tabTitles = ref(slots.default().map((tab) => tab.props.title))
    const selectedTitle = ref(tabTitles.value[0])

    provide('selectedTitle', selectedTitle)

    return {
      selectedTitle,
      tabTitles,
      classes: computed(() => ({
        tabs: true,
        'tabs--horizontal': props.horizontal,
        'tabs--vertical': props.vertical,
      })),
    }
  },
}
</script>
