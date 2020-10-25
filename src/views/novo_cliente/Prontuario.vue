<template>
  <div id="profile">
    <div>
      <div class="title">CID</div>
      <select name="cid">
        <option value="">Selecione</option>
        <option v-for="(cid, index) in 10" :key="index" value="cid"
          >CID {{ cid }}</option
        >
      </select>
    </div>

    <div class="lists">
      <div>
        <div class="title">Sintomas</div>
        <div class="list_container">
          <div class="list" v-for="(sintoma, index) in sintomas" :key="index">
            <div class="item">
              <app-checkbox
                :label="sintoma.name"
                :checked="sintomasApresentados.includes(sintoma.value)"
                @click="toggleSymptom(sintoma.value)"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="title">Vicios</div>
        <div class="list_container">
          <div class="list" v-for="(vicio, index) in vicios" :key="index">
            <div class="item">
              <app-checkbox
                :label="vicio.name"
                :checked="viciosApresentados.includes(vicio.value)"
                @click="toggleAddiction(vicio.value)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
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
    let sintomasApresentados = ref([])
    let viciosApresentados = ref([])

    const sintomas = ref([
      { name: "Ansiedade alta", value: "ansiedade" },
      { name: "Tremores e tonturas", value: "tremores/tonturas" },
      { name: "Sudorese", value: "sudorese" },
      { name: "Fobia", value: "fobia" },
      { name: "Taquicardia", value: "taquicardia" },
    ])

    const vicios = ref([
      { name: "Álcool", value: "alcool" },
      { name: "Tabaco", value: "tabaco" },
      { name: "Drogas ilícitas", value: "drogas" },
      { name: "Tecnologia", value: "tecnologia" },
      { name: "Redes sociais", value: "redes sociais" },
      { name: "Medicamentos", value: "medicamentos" },
      { name: "Jogos de azar e apostas", value: "jogos" },
      { name: "Jogos eletrônicos ", value: "jogos de azar" },
    ])

    const toggleSymptom = item => {
      sintomasApresentados.value.includes(item)
        ? (sintomasApresentados.value = sintomasApresentados.value.filter(
            e => e != item
          ))
        : sintomasApresentados.value.push(item)
    }
    const toggleAddiction = item => {
      viciosApresentados.value.includes(item)
        ? (viciosApresentados.value = viciosApresentados.value.filter(
            e => e != item
          ))
        : viciosApresentados.value.push(item)
    }
    return {
      sintomas,
      vicios,
      sintomasApresentados,
      viciosApresentados,
      toggleSymptom,
      toggleAddiction,
    }
  },
}
</script>

<style scoped>
.lists {
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.list_container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
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
