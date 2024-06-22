<template>
  <div>
    <div class="zaglavlje">
      <div class="header">
        <router-link to="/dashboard" class="logo-text">Cargoo</router-link>
      </div>
    </div>
    <div class="home">
      <div class="button-container">
        <h1>Dobrodošli u Cargoo</h1>
        <router-link to="/register" class="btn">Registriraj</router-link>
        <router-link to="/add-cargo" class="btn">Dodaj Teret</router-link>
        <router-link to="/cargos-list" class="btn">Lista Tereta</router-link>
        <router-link to="/drivers-list" class="btn">Lista Vozača</router-link>
        <router-link to="/profile" class="btn">Profil</router-link>
        <router-link to="/register-truck" class="btn">Registriraj Kamion</router-link>
        <router-link to="/truck-page" class="btn">Lista Kamiona</router-link>
        <router-link to="/about-us" class="btn">O Nama</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  beforeCreate() {
    if (!localStorage.getItem('token')) {
      this.$router.push('/login');
    }
  }
};
</script>

<style>
body, html {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
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

.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px);
  background-color: #f0f0f0;
  padding-top: 40px;
}

.button-container {
  text-align: center;
}

.button-container h1 {
  margin-bottom: 20px;
  color: #2a3d45;
}

.btn {
  display: block;
  width: 200px;
  margin: 10px auto;
  padding: 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #0056b3;
}
</style>
