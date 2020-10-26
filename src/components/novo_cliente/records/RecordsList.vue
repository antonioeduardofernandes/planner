<template>
  <div id="folders" v-for="(record, index) in records" :key="index">
    <div class="folder">
      <svg width="20" height="16" viewBox="0 0 20 16">
        <path
          d="M8 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V4C20 2.9 19.1 2 18 2H10L8 0Z"
        />
      </svg>
      <div class="label">{{ record.month }}/{{ record.year }}</div>
    </div>
    <div class="files" v-for="(file, index) in record.files" :key="index">
      <svg width="14" height="16" viewBox="0 0 14 16">
        <path
          d="M12.4444 1.55556H9.19333C8.86667 0.653333 8.01111 0 7 0C5.98889 0 5.13333 0.653333 4.80667 1.55556H1.55556C0.7 1.55556 0 2.25556 0 3.11111V14C0 14.8556 0.7 15.5556 1.55556 15.5556H12.4444C13.3 15.5556 14 14.8556 14 14V3.11111C14 2.25556 13.3 1.55556 12.4444 1.55556ZM7 1.55556C7.42778 1.55556 7.77778 1.90556 7.77778 2.33333C7.77778 2.76111 7.42778 3.11111 7 3.11111C6.57222 3.11111 6.22222 2.76111 6.22222 2.33333C6.22222 1.90556 6.57222 1.55556 7 1.55556ZM8.55556 12.4444H3.11111V10.8889H8.55556V12.4444ZM10.8889 9.33333H3.11111V7.77778H10.8889V9.33333ZM10.8889 6.22222H3.11111V4.66667H10.8889V6.22222Z"
        />
      </svg>

      {{ file.date }}
    </div>
  </div>
</template>

<script>
import { ref } from "vue"
export default {
  setup() {
    const records = ref([
      {
        month: "mar",
        year: 2020,
        files: [
          {
            date: "10/03/2020",
            text: "alkfsdja;lalfksjdfl;ajsdf;alksdjfasd;lfkajsdf;lkj",
          },
          {
            date: "10/03/2020",
            text: "alkfsdja;lalfksjdfl;ajsdf;alksdjfasd;lfkajsdf;lkj",
          },
        ],
      },
      {
        month: "abr",
        year: 2020,
        files: [
          {
            date: "10/04/2020",
            text: "alkfsdja;lalfksjdfl;ajsdf;alksdjfasd;lfkajsdf;lkj",
          },
        ],
      },
    ])
    return { records }
  },
}
</script>

<style scoped>
.folder {
  display: flex;
  align-items: center;
  color: var(--placeholder);
  margin-bottom: 0.4rem;
  padding: 0.4rem 4rem 0.5rem .6rem;
  border-radius: 4px;
  cursor: pointer;
}

.files {
  display: flex;
  align-items: center;
  color: var(--placeholder);
  margin-bottom: 1rem;
  margin-left: 2rem;
  cursor: pointer;
}

svg path {
  fill: var(--placeholder);
}

.folder:hover svg path {
  fill: var(--white);
}

.folder:hover {
  background-color: var(--yellow);
  color: var(--white);
}

svg {
  margin-right: 1rem;
}
</style>
