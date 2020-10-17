<template>
  <div id="app-navbar">
    <div
      v-for="(nav_item, index) in nav_items"
      :key="index"
      :class="['nav_item', { logoff: nav_item.label === 'Sair' }]"
    >
      <img
        :src="require(`../../assets/icons/sidebar/${nav_item.icon}.png`)"
        alt=""
      />
      <div class="label subtitle">{{ nav_item.label }}</div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue"
export default {
  setup() {
    const nav_items = ref([
      { label: "Clientes", icon: "clientes" },
      { label: "Documentos", icon: "docs" },
      { label: "Configurações", icon: "config" },
      { label: "Sair", icon: "logoff" },
    ])
    return {
      nav_items,
    }
  },
}
</script>

<style scoped>
#app-navbar {
  margin-top: 4rem;
  display: flex;
  flex-flow: column;
  cursor: pointer;
  width: 100%;
  height: 100vh;
  padding: 0 1rem;
}

.nav_item {
  display: flex;
  align-items: center;
  padding: 0.6rem;
}

.label {
  background-color: transparent;
  padding: 0.6rem 2rem 0.6rem 0.8rem;
  border-radius: 10px;
  text-align: start;
  margin-left: 2rem;
  transition: all .2s ease-in-out;
}

img {
  filter: grayscale(100%);
  opacity: .5;
  transition: all .2s ease-in-out;
}

.nav_item:hover .label {
  color: var(--white);
  background-color: var(--accent);
}

.nav_item:hover img {
  filter: grayscale(0);
  opacity: 1;
}

.logoff {
  margin-top: 10rem;
}
</style>
