<template>
  <div id="hover_card">
    <div class="container">
      <slot></slot>
    </div>
    <div class="card">{{ message }}</div>
  </div>
</template>

<script>
export default {
  props: {
    message: String,
  },
}
</script>

<style scoped>
#hover_card {
  position: relative;
  display: flex;
}

.card {
  position: absolute;
  opacity: 0;
  transition: all 0.2s ease-in-out;
  background-color: var(--background);
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  border-radius: 3.87931px;
  padding: 1rem;
  bottom: 30px;
  left: 10px;
  display: flex;
  align-items: center;
  transform: translateY(10px);
  white-space: nowrap;
  pointer-events: none;
}

.container {
  display: flex;
  align-items: center;
}

.container:hover ~ .card {
  opacity: 1;
  transform: translateY(0);
}
</style>
