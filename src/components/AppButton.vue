<template>
  <div id="app_button">
    <div v-if="icon && left" class="icon left">
      <slot></slot>
    </div>
    <div class="label">{{ label }}</div>
    <div v-if="icon && right" class="icon right">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    right: Boolean,
    left: Boolean,
    label: String,
    icon: Boolean,
  },
}
</script>

<style scoped>
#app_button {
  background-color: var(--accent);
  display: flex;
  outline: none;
  border: none;
  align-items: center;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  color: var(--background);
  font-size: 1.1rem;
  cursor: pointer;
  justify-content: space-between;
  white-space: nowrap;
}

.icon {
  width: 14px;
  height: 14px;
  --icon-margin: 2rem;
}

.right {
  margin-left: var(--icon-margin);
}

.left {
  margin-right: var(--icon-margin);
}
</style>
