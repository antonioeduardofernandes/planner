<template>
  <div id="client_card">
    <div class="left_content">
      <div class="avatar">
        <img :src="require(`../../assets/${client.avatar}`)" alt="" />
      </div>
      <div class="subtitle name">{{ client.name }}</div>
    </div>
    <svg
      v-for="(icon, index) in icons"
      :key="index"
      width="18"
      height="20"
      viewBox="0 0 22 14"
    >
      <path :d="icon" />
    </svg>
    <svg width="4" height="16" viewBox="0 0 4 16">
      <path
        d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z"
        fill="#484D56"
      />
    </svg>
  </div>
</template>

<script>
import { ref } from "vue"
export default {
  props: {
    client: Object,
  },
  setup() {
    const icons = ref([
      "M3.62 7.79C5.06 10.62 7.38 12.93 10.21 14.38L12.41 12.18C12.68 11.91 13.08 11.82 13.43 11.94C14.55 12.31 15.76 12.51 17 12.51C17.55 12.51 18 12.96 18 13.51V17C18 17.55 17.55 18 17 18C7.61 18 0 10.39 0 1C0 0.45 0.45 0 1 0H4.5C5.05 0 5.5 0.45 5.5 1C5.5 2.25 5.7 3.45 6.07 4.57C6.18 4.92 6.1 5.31 5.82 5.59L3.62 7.79Z",
      "M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z",
    ])
    return { icons }
  },
}
</script>

<style scoped>
#client_card {
  display: flex;
  align-items: center;
  width: 450px;
  border-bottom: 1px solid var(--gray);
  justify-content: space-between;
  padding: 1rem;
}

.left_content {
  display: flex;
  align-items: center;
  margin-right: 2rem;
}

.name {
  margin-left: 2rem;
  width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

svg {
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}

path {
  fill: var(--placeholder);
}

svg:hover path {
  fill: var(--accent);
}

svg:last-of-type {
  margin-right: 1rem;
}
</style>
