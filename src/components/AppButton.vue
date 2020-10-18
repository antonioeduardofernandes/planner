<template>
  <button>
    <img src="../assets/icons/add.png" alt="" />
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: String,
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

button:hover img {
  transform: rotate(90deg);
}

img {
  margin-right: 1rem;
  transition: all 0.4s ease-in-out;
}
</style>
