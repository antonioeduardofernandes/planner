<template>
  <div>
    <app-navbar :links="['Lista', 'Detalhes']" />
    <client-list :clients="clientes" />
  </div>
</template>

<script>
import { ref } from "vue"
import AppNavbar from "../components/AppNavbar"
import ClientList from "../components/clientes/ClientList"

export default {
  components: {
    AppNavbar,
    ClientList,
  },
  setup() {
    const clientes = ref([
      {
        name: "Andressa Carlin",
        avatar: "andressa_carlin.png",
        phone: "(21) 9999-9999",
        email: "andressa_carlin_email@email.com",
      },
    ])
    return { clientes }
  },
}
</script>

<style scoped></style>
