<template>
  <div id="app">
    <app-sidebar />
    <div class="main">
      main-section
    </div>
  </div>
</template>

<script>
import AppSidebar from "./components/sidebar/AppSidebar"
export default {
  components: {
    AppSidebar,
  },
}
</script>

<style>
:root {
  --color-accent: #6a6fe9;
  --color-background: #ffffff;
  --color-background-secondary: #eef1f2;
  --color-text: #484d56;
  --color-warning: #e9c46a;
  --color-danger: #e9726a;
  --color-placeholder: #8e95a0;
  --color-text-white: #e5e5e5;
}

::selection {
  display: none;
}

*,
html,
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  font-size: 13px;
}

body {
  width: 100vw;
  height: 100%;
  overflow: hidden;
}

#app {
  height: 100vh;
  width: 100vw;
  background-color: var(--color-background);
  color: var(--color-text);
  display: grid;
  grid-template-columns: 260px 1fr;
}

.title1 {
  font-size: 2rem;
  font-weight: bold;
}

.title2 {
  font-size: 1.3rem;
  font-weight: bold;
}

.subtitle {
  font-size: 1.1rem;
  color: var(--color-placeholder);
}

.placeholder {
  color: var(--color-placeholder);
}
</style>
