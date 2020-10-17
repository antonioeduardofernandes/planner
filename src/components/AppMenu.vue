<template>
  <div id="app_menu">
    <div class="links">
      <div
        class="link subtitle"
        @click="$emit('click')"
        v-for="(link, index) in links"
        :key="index"
      >
        {{ link }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // Get a list of links to display
  props: {
    links: Array,
  },
}
</script>

<style scoped>
#app_menu {
  width: 100%;
  border-bottom: 1px solid var(--gray);
  margin: 3rem 0;
}

.links {
  display: flex;
  align-items: center;
  margin: 0.6rem 2rem;
}

.link {
  margin-right: 3rem;
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.link:hover {
  color: var(--text);
}

.link:hover::after {
  content: " ";
  bottom: -9px;
  left: 0;
  right: 0;
  position: absolute;
  display: block;
  border-bottom: 4px solid var(--accent);
  background-color: red;
}
</style>
