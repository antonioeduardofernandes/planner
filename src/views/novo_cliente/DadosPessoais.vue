<template>
  <div class="form">
    <div class="avatar">
      <div class="avatar_image"></div>
      <div class="avatar_label subtitle">Alterar Foto</div>
    </div>
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
        <select name="escolaridade">
          <option value="">Selecione</option>
          <option
            v-for="(item, index) in escolaridade"
            :key="index"
            value="item.value"
            >{{ item.label }}</option
          >
        </select>
      </div>
      <div class="input_container">
        <div class="label subtitle">Profissão</div>
        <input type="text" />
      </div>
    </div>
    <div class="row">
      <div class="input_container">
        <div class="label subtitle">Renda</div>
        <select name="renda">
          <option value="">Selecione</option>
          <option
            v-for="(item, index) in renda"
            :key="index"
            value="item.value"
            >{{ item.label }}</option
          >
        </select>
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
</template>

<script>
import { ref } from "vue"

export default {
  setup() {
    const escolaridade = ref([
      {
        label: "Ensino fundamental incompleto",
        value: "fundamental_incompleto",
      },
      { label: "Ensino fundamental completo", value: "fundamental_completo" },
      { label: "Ensino médio incompleto", value: "medio_incompleto" },
      { label: "Ensino médio completo", value: "medio_completo" },
    ])
    const renda = ref([
      { label: "Formal", value: "formal" },
      { label: "Informal", value: "informal" },
    ])
    return { escolaridade, renda }
  },
}
</script>

<style scoped>
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
</style>
