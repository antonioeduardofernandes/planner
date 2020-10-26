<template>
  <div id="new_profile">
    <div class="header">
      <input type="date" />
      <div class="buttons">
        <svg width="18" height="18" viewBox="0 0 18 18">
          <path
            d="M14 0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V4L14 0ZM9 16C7.34 16 6 14.66 6 13C6 11.34 7.34 10 9 10C10.66 10 12 11.34 12 13C12 14.66 10.66 16 9 16ZM12 6H2V2H12V6Z"
          />
        </svg>

        <svg width="14" height="14" viewBox="0 0 14 14">
          <path
            d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
          />
        </svg>
      </div>
    </div>
    <textarea class="text" placeholder="Insira aqui os dados do relatório" />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
#new_profile {
  width: 680px;
  height: 400px;
  border: 1px solid var(--gray);
  overflow: hidden;
  display: flex;
  flex-flow: column;
}

.header {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  color: var(--placeholder);
}

.buttons {
  display: flex;
  align-items: center;
  margin-right: 2rem;
  width: 80px;
  justify-content: space-between;
}

.buttons svg {
  fill: var(--placeholder);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}

.buttons svg:hover {
  fill: var(--accent);
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
