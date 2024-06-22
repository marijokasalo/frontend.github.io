<template>
  <div>
    <div class="zaglavlje">
      <div class="header">
        <router-link to="/" class="logo-text">Cargoo</router-link>
      </div>
    </div>
    <div class="register">
      <div class="register-container">
        <h2>Registracija</h2>
        <form @submit.prevent="register">
          <label>Korisničko ime: <input type="text" v-model="username" required></label>
          <label>Ime: <input type="text" v-model="name" required></label>
          <label>Prezime: <input type="text" v-model="surname" required></label>
          <label>Datum rođenja: <input type="date" v-model="dob" required></label>
          <label>OIB: <input type="text" v-model="oib" required></label>
          <label>Email: <input type="email" v-model="email" required></label>
          <label>Telefon: <input type="text" v-model="phone" required></label>
          <label>Adresa: <input type="text" v-model="address" required></label>
          <label>Broj vozačke dozvole: <input type="text" v-model="drivingLicenseNumber" required></label>
          <label>Lozinka: <input type="password" v-model="password" required></label>
          <label>Spol:
            <select v-model="gender" required>
              <option value="male">Muški</option>
              <option value="female">Ženski</option>
            </select>
          </label>
          <button type="submit">Registriraj</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'RegisterPage',
  data() {
    return {
      username: "",
      name: "",
      surname: "",
      dob: "",
      oib: "",
      email: "",
      phone: "",
      address: "",
      drivingLicenseNumber: "",
      password: "",
      gender: "male",
    };
  },
  methods: {
    async register() {
      try {
        const registrationData = {
          username: this.username,
          name: this.name,
          surname: this.surname,
          dob: this.dob,
          oib: this.oib,
          email: this.email,
          phone: this.phone,
          address: this.address,
          drivingLicenseNumber: this.drivingLicenseNumber,
          password: this.password,
          gender: this.gender
        };

        const response = await axios.post('http://localhost:5000/api/users/register', registrationData);

        if (response.status === 201) {
          alert('Registracija uspješna');
          this.$router.push('/login');
        } else {
          alert('Registracija neuspješna');
        }
      } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
          alert(`Registracija neuspješna: ${error.response.data.message}`);
        } else {
          alert('Registracija neuspješna');
        }
      }
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

.register {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: calc(100vh - 80px);
  background-color: #f0f0f0;
  padding-top: 40px;
}

.register-container {
  width: 1000px;
  padding: 40px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.register-container h2 {
  margin-bottom: 20px;
  color: #2a3d45;
}

form label {
  display: block;
  margin-bottom: 10px;
  font-size: 16px;
}

form input[type="text"],
form input[type="email"],
form input[type="date"],
form input[type="password"],
form select {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ddd;
}

form button {
  width: 100%;
  padding: 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

form button:hover {
  background-color: #0056b3;
}
</style>
