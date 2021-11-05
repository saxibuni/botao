<template>
  <component
    :is="scrollerTag"
    ref="scrollView"
    class="scroll-container"
    :style="{
      ...scrollerStyle,
      'touch-action': 'none'
    }"
  >
    <component
      :is="wrapperTag"
      ref="scroller"
      :style="{
        ...wrapperStyle,
        'pointer-events':this.pointerEvent
      }"
      class="scroll-wrapper"
      :class="wrapperClass"
    >
      <slot />
    </component>
  </component>
</template>

<script lang="ts">
import ScrollView from "./ScrollView";
export default ScrollView;
</script>
<style lang="scss">
.scroll-container {
  height: 100%;
  overflow: hidden;
  position: relative;
  .scroll-wrapper{flex-shrink: 0}
  .bscroll-vertical-scrollbar {
    z-index: 0 !important;
  }
}
</style>

