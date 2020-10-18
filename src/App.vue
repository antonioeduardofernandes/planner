<template>
  <div id="app">
    <app-sidebar />
    <div class="main">
      <div class="title main_title">{{ $route.name }}</div>
      <div class="main_content">
        <router-view></router-view>
      </div>
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
@import url("./styles/input.css");
@import url("./styles/select.css");

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
  font-size: 1.1rem;
}

#app {
  height: 100vh;
  width: 100vw;
  background-color: var(--background);
  color: var(--text);
  display: grid;
  grid-template-columns: 240px 1fr;
}

.title {
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

.main_title {
  margin: 2rem 2rem 0rem 2rem;
}
</style>
