<template>
  <button @click="$emit('click')">
    <img :src="require(`../assets/icons/${icon}.png`)" alt="" />
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: String,
    icon: {
      String,
      default: "add",
    },
  },
}
</script>

<style scoped>
button {
  display: flex;
  outline: none;
  border: none;
  align-items: center;
  padding: 0.6rem 1.4rem;
  background-color: var(--accent);
  border-radius: 8px;
  color: var(--background);
  font-size: 1.1rem;
  cursor: pointer;
  white-space: nowrap;
}

img {
  margin-right: 1rem;
}
</style>
