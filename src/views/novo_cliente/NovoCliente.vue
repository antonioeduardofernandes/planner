<template>
  <app-navbar
    :links="['Dados Pessoais', 'Prontuário', 'Relatórios', 'Documentos']"
  />
  <div class="content">
    <router-view />
    <div class="button_row">
      <app-button label="Avançar" icon="arrow" />
    </div>
  </div>
</template>

<script>
import AppButton from "../../components/AppButton"
import AppNavbar from "../../components/AppNavbar"
export default {
  components: {
    AppButton,
    AppNavbar,
  },
}
</script>

<style>
.content {
  margin-top: 2rem;
  margin-left: 2rem;
  width: 100%;
  padding-right: 4rem;
  height: 100vh;
}

.form {
  margin-top: 1rem;
}

.button_row {
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}

button {
  margin-right: 6rem;
  margin-top: 2rem;
}

.form .row {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}

.form .row .input_container {
  margin-right: 4rem;
}
</style>
