<template>
  <div id="app_menu">
    <slot></slot>
    <div class="menu"></div>
  </div>
</template>

<script>
import { watchEffect } from "vue"
export default {
  setup(props) {
    watchEffect(() => {
      console.log(props.toggled)
    })
  },
  props: {
    toggled,
  },
}
</script>

<style></style>
