<template>
  <div id="app">
    <div class="zaglavlje">
      <div class="header">
        <router-link to="/" class="logo-text">Cargoo</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
body, html {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

.zaglavlje {
  margin: 0;
  padding: 0;
}

.header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #2a3d45;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.logo-text {
  font-size: 28px;
  color: #ffffff;
  letter-spacing: 1px;
  text-decoration: none;
}
</style>
