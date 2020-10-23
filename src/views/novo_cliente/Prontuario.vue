<template>
  <div id="profile">
    <div class="option_container">
      <div class="title">Sintomas</div>
      <div class="list" v-for="(sintoma, index) in sintomas" :key="index">
        <div class="item">
          <app-checkbox :label="sintoma.name" :value="sintoma.value" />
        </div>
      </div>
    </div>

    <!-- <div class="option_container">
      <div class="title">Vícios</div>
      <div class="list" v-for="(vicio, index) in vicios" :key="index">
        <div class="item">
          <input type="checkbox" :name="vicio.value" :id="vicio.value" />
          <label :for="vicio.value">{{ vicio.name }}</label>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { ref } from "vue"
import AppCheckbox from "../../components/form/AppCheckbox"
export default {
  components: {
    AppCheckbox,
  },
  setup() {
    const sintomas = ref([
      { name: "Depressão", value: "depressao" },
      { name: "Insônia", value: "insonia" },
      // { name: "Insônia", value: "insonia" },
      // { name: "Insônia", value: "insonia" },
      // { name: "Insônia", value: "insonia" },
      // { name: "Insônia", value: "insonia" },
      // { name: "Insônia", value: "insonia" },
      // { name: "Insônia", value: "insonia" },
      // { name: "Insônia", value: "insonia" },
      // { name: "Insônia", value: "insonia" },
      // { name: "Insônia", value: "insonia" },
      // { name: "Insônia", value: "insonia" },
      // { name: "Insônia", value: "insonia" },
    ])
    const vicios = ref([{ name: "Álcool", value: "alcool" }])
    return { sintomas, vicios }
  },
}
</script>

<style scoped>
#profile {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.list {
  display: grid;
  grid-template-columns: minmax(100px) 1fr;
}
.item {
  display: flex;
  align-items: center;
  margin-top: 1rem;
}

label {
  margin-left: 0.4rem;
  cursor: pointer;
}
</style>
