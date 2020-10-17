<template>
  <div id="client_list">
    <client-card v-for="(client, index) in clients" :key="index" :client="client"/>
  </div>
</template>

<script>
import ClientCard from "./ClientCard"
export default {
  components: {
    ClientCard,
  },
  props: {
    clients: Array,
  },
}
</script>

<style scoped>
#client_list {
  margin-left: 2rem;
}
</style>
