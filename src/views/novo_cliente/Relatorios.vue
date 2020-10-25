<template>
  <div id="relatorios">
    <div>Add profile</div>

    <div class="new_profile">
      <div class="header">
        <input type="date" />
      </div>
      <textarea class="text" placeholder="Insira aqui os dados do relatório" />
      <app-button label="Salvar" left>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z"
          />
        </svg>
      </app-button>
    </div>
  </div>
</template>

<script>
import AppButton from "../../components/AppButton"
export default {
  components: {
    AppButton,
  },
}
</script>

<style scoped>
#relatorios {
  display: flex;
  width: 100%;
  grid-template-columns: 80px 1fr;
  justify-content: space-between;
}

.new_profile {
  width: 600px;
  height: 400px;
  border: 1px solid var(--gray);
  overflow: hidden;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  position: relative;
}

.header {
  padding: 1rem;
  color: var(--placeholder);
}

input[type="date"] {
  color: var(--placeholder);
  background-color: transparent;
}

textarea {
  width: 100%;
  height: 100%;
  border: none;
  border-top: 1px solid var(--gray);
  padding: 2rem;
  outline: none;
  resize: none;
}

textarea::placeholder {
  color: var(--placeholder);
  transition: all 0.2s ease-in-out;
}

textarea:focus::placeholder {
  transform: translateX(-10px);
  opacity: 0;
}
</style>
