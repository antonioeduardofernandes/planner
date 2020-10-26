<template>
  <div id="novo_cliente">
    <app-navbar
      :links="['Dados Pessoais', 'Prontuário', 'Relatórios', 'Documentos']"
    />
    <div class="content">
      <router-view />

      <div class="button_row">
        <button>
          Avançar
          <svg>
            <path
              d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import AppNavbar from "../../components/AppNavbar"
export default {
  components: {
    AppNavbar,
  },
}
</script>

<style>

#novo_cliente {
  height: 100%;
  display: flex;
  flex-flow: column;
}
.content {
  margin-top: 2rem;
  margin-left: 2rem;
  width: 100%;
  padding-right: 4rem;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
}

.button_row {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;
}

button {
  margin-right: 6rem;
  margin-top: 2rem;
}

.form .row {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
}

.form .row .input_container {
  margin-right: 4rem;
}


</style>
