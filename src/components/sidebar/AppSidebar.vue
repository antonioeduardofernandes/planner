<template>
  <div id="app_sidebar">
    <div class="user_avatar">
      <img src="../../assets/user-avatar.jpeg" alt="user_avatar" />
    </div>
    <div class="user_details">
      <p class="name title2">{{ user.name }}</p>
      <p class="crp subtitle">{{ user.crp }}</p>
    </div>
    <sidebar-nav />
  </div>
</template>

<script>
import { ref } from "vue"
import SidebarNav from "./SidebarNav"
export default {
  components: {
    SidebarNav,
  },
  setup() {
    const user = ref({
      name: "Marcely Mesquita",
      crp: "99/999.999",
    })
    return { user }
  },
}
</script>

<style scoped>
#app_sidebar {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 2rem 1rem;
  background-color: var(--background-secondary);
}

.user_avatar img {
  --avatar-size: 60px;
  width: var(--avatar-size);
  height: var(--avatar-size);
  border-radius: 50%;
}

.user_details {
  text-align: center;
}
</style>
