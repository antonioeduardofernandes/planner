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
  --accent: #6a6fe9;
  --background: #ffffff;
  --background-secondary: #eef1f2;
  --text: #484d56;
  --gray: #e5e5e5;
  --white: #ffffff;
  --placeholder: #8e95a0;
  --warning: #e9c46a;
  --danger: #e9726a;
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
  background-color: var(--background);
  color: var(--text);
  display: grid;
  grid-template-columns: 240px 1fr;
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
  color: var(--placeholder);
}

.placeholder {
  color: var(--placeholder);
}
</style>
