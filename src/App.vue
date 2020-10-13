<template>
  <div id="app"></div>
</template>

<style>
:root {
  --color-accent: #6a6fe9;
  --color-background: #ffffff;
  --color-background-secondary: #eef1f2;
  --color-text: #484d56;
  --color-warning: #e9c46a;
  --color-danger: #e9726a;
  --color-placeholder: #484d56;
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
}

body {
  width: 100vw;
  height: 100%;
  font-size: 12px;
  overflow: hidden;
}

#app {
  height: 100vh;
  width: 100%;
  background-color: var(--color-background);
  color: var(--color-text);
}
</style>
