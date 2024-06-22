<template>
  <div class="login-page">
    <div class="login-bg"></div>
    <div class="login-container">
      <div class="login-header">
        <img src="@/assets/cargoo-logo.png" alt="Cargoo Logo" class="logo">
      </div>
      <h2>Dobrodošli</h2>
      <form @submit.prevent="login">
        <label>
          Korisničko ime:
          <input type="text" v-model="username" required>
        </label>
        <label>
          Šifra:
          <input type="password" v-model="password" required autocomplete="current-password">
        </label>
        <button type="submit">Sign in</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
  name: 'LoginPage',
  setup() {
    const router = useRouter();
    return { router };
  },
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://localhost:5000/api/users/login', {
          username: this.username,
          password: this.password
        });

        if (response.data.token) {
          localStorage.setItem('token', response.data.token);
          this.router.push('/home');
        } else {
          alert('Login failed');
        }
      } catch (error) {
        alert('Login failed: ' + (error.response?.data?.message || error.message));
      }
    }
  }
};
</script>

<style scoped>
.login-page {
  display: flex;
  height: 100vh;
}

.login-bg {
  background-image: url('@/assets/login.jpeg');
  background-size: cover;
  background-position: center;
  width: 70%;
  position: relative;
}

.login-container {
  width: 30%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
}

.login-header {
  margin-bottom: 20px;
}

.logo {
  width: 150px;
}

h2 {
  margin-bottom: 20px;
  color: #2a3d45;
}

form {
  width: 100%;
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 20px;
  color: #2a3d45;
}

input {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border-radius: 5px;
  border: 1px solid #ddd;
}

button {
  padding: 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}
</style>
