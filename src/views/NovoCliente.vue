<template>
  <app-navbar
    :links="['Dados Pessoais', 'Prontuário', 'Relatórios', 'Documentos']"
  />
  <div class="content">
    <div class="avatar">
      <div class="avatar_image"></div>
      <div class="avatar_label subtitle">Alterar Foto</div>
    </div>
    <div class="form">
      <div class="row">
        <div class="input_container">
          <div class="label subtitle">Nome</div>
          <input type="text" />
        </div>
        <div class="input_container">
          <div class="label subtitle">CPF</div>
          <input type="number" />
        </div>
        <div class="input_container">
          <div class="label subtitle">Data de Nascimento</div>
          <input type="date" />
        </div>
      </div>
      <div class="row">
        <div class="input_container">
          <div class="label subtitle">Escolaridade</div>
          <input type="text" />
        </div>
        <div class="input_container">
          <div class="label subtitle">Profissão</div>
          <input type="text" />
        </div>
      </div>
      <div class="row">
        <div class="input_container">
          <div class="label subtitle">Renda</div>
          <input type="text" />
        </div>
        <div class="input_container">
          <div class="label subtitle">Possui filhos?</div>
          <input type="text" />
        </div>
        <div class="input_container">
          <div class="label subtitle">
            Quantas pessoas residem no mesmo imóvel?
          </div>
          <input type="text" />
        </div>
      </div>
    </div>
    <div class="row button_row">
      <app-button label="Avançar" icon="arrow" />
    </div>
  </div>
</template>

<script>
import AppButton from "../components/AppButton"
import AppNavbar from "../components/AppNavbar"
export default {
  components: {
    AppButton,
    AppNavbar,
  },
}
</script>

<style scoped>


.content {
  margin-top: 2rem;
  margin-left: 2rem;
  width: 100%;
  padding-right: 4rem;
  height: 100vh;
}

.avatar {
  display: flex;
  align-items: flex-end;
  margin-bottom: 3rem;
}

.avatar_image {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--gray);
  margin-right: 0.7rem;
}

.form {
  margin-top: 1rem;
}

.row {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}

.row .input_container {
  margin-right: 4rem;
}

.input_container .label {
  margin-bottom: 0.2rem;
}

.button_row {
  justify-content: flex-end;
  align-items: flex-end;
}

button {
  margin-right: 6rem;
  margin-top: 2rem;
}
</style>
