<template>
  <svg :type="type" :class="svgClass" :style="svgStyle" aria-hidden="true" v-bind="$attrs">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
export default defineComponent({
  name: 'SvgIcon',
  props: {
    icon: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'primary'
    },
    svgStyle: {
      type: Object,
      default: () => ({
        width: '20px',
        height: '20px'
      })
    }
  },
  setup(props) {
    const iconName = computed(() => `#icon-${props.icon}`)
    const svgClass = computed(() => {
      if (props.className) {
        return 'svg-icon ' + props.className
      } else {
        return 'svg-icon'
      }
    })

    return {
      iconName,
      svgClass
    }
  }
})
</script>

<style scoped>
.svg-icon {
  /* width: 20px;
  height: 20px; */
  fill: currentColor;
  overflow: hidden;
}
</style>