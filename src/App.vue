<template>
  <div id="app">
    <app-sidebar />
    <div class="main">
      <div class="title main_title">{{ $route.meta.title }}</div>
      <div class="main_content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import AppSidebar from "./components/AppSidebar"
export default {
  components: {
    AppSidebar,
  },
}
</script>

<style>
:root {
  --accent: var(--teal);
  --background: #ffffff;
  --background-secondary: #f5f6f9;
  --text: #484d56;
  --gray: #e5e5e5;
  --white: #ffffff;
  --placeholder: #8e95a0;
  --yellow: #e9c46a;
  --danger: #e9726a;
  --teal: #01c4d4;
  --purple: #6a6fe9;
}

*,
html,
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  font-size: 13px;
  user-select: none;
}

body {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  font-size: 1.1rem;
}

#app {
  height: 100%;
  width: 100vw;
  background-color: var(--background-secondary);
  color: var(--text);
  display: grid;
  grid-template-columns: 100px 1fr;
}
</style>
