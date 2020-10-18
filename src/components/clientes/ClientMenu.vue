<template>
  <div id="client_menu">
    <div class="icon_container toggler_container">
      <img
        src="../../assets/icons/client_menu/menu_toggler.png"
        alt=""
        class="menu_toggler"
      />
    </div>
    <div class="menu">
      <div v-for="(nav_item, index) in nav_items" :key="index" class="nav_item">
        <img :src="require(`../../assets/icons/client_menu/${nav_item.icon}.png`)"/>
        <div class="label subtitle">{{ nav_item.label }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue"
export default {
  setup() {
    const nav_items = ref([
      { label: "Detalhes", icon: "details" },
      { label: "Editar", icon: "edit" },
      { label: "Excluir", icon: "trash" },
    ])
    return {
      nav_items,
    }
  },
}
</script>

<style scoped>
#client_menu {
  position: relative;
}

.toggler_container {
  width: 20px;
}

.icon_container {
  cursor: pointer;
  justify-content: center;
  display: flex;
  align-items: center;
}

.icon_container img {
  filter: grayscale(100%);
  opacity: 0.5;
  transition: all 0.2s ease-in-out;
}

.icon_container:hover img {
  filter: grayscale(0);
  opacity: 1;
}

.menu {
  display: flex;
  flex-flow: column;
  cursor: pointer;
  position: absolute;
  top: 30px;
  background-color: var(--background);
  box-shadow: 0px 3px 9px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  padding: 0rem 0.5rem;
}

.nav_item {
  display: flex;
  align-items: center;
  padding: 0.6rem;
  background-color: transparent;
  border-radius: 10px;
  text-align: start;
  transition: all 0.2 ease-in-out;
}

.nav_item:hover {
  background-color: var(--accent);
  color: var(--background);
}
</style>
