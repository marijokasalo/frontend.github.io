<template>
  <div>
    <div class="header">
      <router-link to="/" class="logo-text">Cargoo</router-link>
    </div>
    <div class="register-truck-container">
      <h2>Registracija Kamiona</h2>
      <form @submit.prevent="registerTruck">
        <div class="form-group">
          <label for="brand">Marka:</label>
          <input type="text" id="brand" v-model="brand" required />
        </div>
        <div class="form-group">
          <label for="model">Model:</label>
          <input type="text" id="model" v-model="model" required />
        </div>
        <div class="form-group">
          <label for="chassisNumber">Broj Šasije:</label>
          <input type="text" id="chassisNumber" v-model="chassisNumber" required />
        </div>
        <div class="form-group">
          <label for="firstRegistrationDate">Datum Prve Registracije:</label>
          <input type="date" id="firstRegistrationDate" v-model="firstRegistrationDate" required />
        </div>
        <div class="form-group">
          <label for="lastRegistrationDate">Datum Zadnje Registracije:</label>
          <input type="date" id="lastRegistrationDate" v-model="lastRegistrationDate" required />
        </div>
        <div class="form-group">
          <label for="trafficBookNumber">Broj Prometne Knjige:</label>
          <input type="text" id="trafficBookNumber" v-model="trafficBookNumber" required />
        </div>
        <div class="form-group">
          <label for="insurancePolicyNumber">Broj Police Osiguranja:</label>
          <input type="text" id="insurancePolicyNumber" v-model="insurancePolicyNumber" required />
        </div>
        <button type="submit" class="btn">Registriraj Kamion</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'RegisterTruck',
  data() {
    return {
      brand: '',
      model: '',
      chassisNumber: '',
      firstRegistrationDate: '',
      lastRegistrationDate: '',
      trafficBookNumber: '',
      insurancePolicyNumber: '',
    };
  },
  methods: {
    async registerTruck() {
      try {
        await axios.post('http://localhost:5000/api/trucks/register', {
          brand: this.brand,
          model: this.model,
          chassisNumber: this.chassisNumber,
          firstRegistrationDate: this.firstRegistrationDate,
          lastRegistrationDate: this.lastRegistrationDate,
          trafficBookNumber: this.trafficBookNumber,
          insurancePolicyNumber: this.insurancePolicyNumber,
        });
        alert('Kamion uspješno registriran');
      } catch (error) {
        alert('Greška prilikom registracije kamiona: ' + (error.response?.data?.message || error.message));
      }
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #ADD8E6;
  padding: 20px;
  width: 100%;
  height: 5%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
}

.logo-text {
  font-size: 28px;
  color: #ffffff;
  letter-spacing: 1px;
  text-decoration: none;
}

.register-truck-container {
  padding: 20px;
  margin-top: 80px;
}

h2 {
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 600px;
  margin: 0 auto;
}

label {
  font-weight: bold;
}

input {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px;
  font-size: 16px;
  color: white;
  background-color: #007BFF;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
