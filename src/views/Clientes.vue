<template>
  <div>
    <app-navbar :links="['Lista', 'Detalhes']">
      <app-button label="Adicionar Novo" icon left>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="white" />
        </svg>
      </app-button>
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
