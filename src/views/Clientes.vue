<template>
  <div>
    <app-navbar :links="['Lista', 'Detalhes']">
      <app-button label="Adicionar Novo"/>
    </app-navbar>
    <client-list :clients="clientes" />
  </div>
</template>

<script>
import { ref } from "vue"
import AppButton from "../components/AppButton"
import AppNavbar from "../components/AppNavbar"
import ClientList from "../components/clientes/ClientList"

export default {
  components: {
    AppButton,
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
