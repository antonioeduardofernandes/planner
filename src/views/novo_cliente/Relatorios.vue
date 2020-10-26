<template>
  <div id="reports">
    <div class="records">
      <div class="title2">Arquivos</div>
      <records-list />
    </div>
    <new-record/>
  </div>
</template>

<script>
import RecordsList from "../../components/novo_cliente/records/RecordsList"
import NewRecord from "../../components/novo_cliente/records/NewRecord"
export default {
  components: {
    NewRecord,
    RecordsList,
  },
}
</script>

<style scoped>
#reports {
  display: flex;
  justify-content: space-between;
}

.title2{
  margin-bottom: 2rem;

}
</style>
