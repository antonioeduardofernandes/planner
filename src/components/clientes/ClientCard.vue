<template>
  <div id="client_card">
    <div class="left_content">
      <div class="avatar">
        <img :src="require(`../../assets/${client.avatar}`)" alt="" />
      </div>
      <div class="subtitle name">{{ client.name }}</div>
    </div>
    <hover-card :message="client.phone" class="icon_container">
      <img src="../../assets/icons/phone.png" alt="" />
    </hover-card>
    <hover-card :message="client.email" class="icon_container">
      <img src="../../assets/icons/email.png" alt="" />
    </hover-card>
    <client-menu />
  </div>
</template>

<script>
import { ref } from "vue"
import HoverCard from "../HoverCard"
import ClientMenu from "../clientes/ClientMenu"
export default {
  components: {
    HoverCard,
    ClientMenu,
  },
  props: {
    client: Object,
  },

  setup() {
    const menu = ref(true)
    const toggleMenu = () => (menu.value = true)
    return { toggleMenu, menu }
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

.icon_container {
  cursor: pointer;
  width: 20px;
  justify-content: center;
  display: flex;
  align-items: center;
}

.icon_container img {
  filter: grayscale(100%);
  opacity: 0.4;
  transition: all 0.2s ease-in-out;
}

.icon_container:hover img {
  filter: grayscale(0);
  opacity: 1;
}
</style>
