<template>
  <div class="container">
    <h1>Trucks List</h1>
    <table>
      <thead>
        <tr>
          <th>Marka</th>
          <th>Model</th>
          <th>Broj Šasije</th>
          <th>Datum Prve Registracije</th>
          <th>Datum Zadnje Registracije</th>
          <th>Broj Prometne Knjige</th>
          <th>Broj Police Osiguranja</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="truck in trucks" :key="truck._id">
          <td>{{ truck.brand }}</td>
          <td>{{ truck.model }}</td>
          <td>{{ truck.chassisNumber }}</td>
          <td>{{ new Date(truck.firstRegistrationDate).toLocaleDateString() }}</td>
          <td>{{ new Date(truck.lastRegistrationDate).toLocaleDateString() }}</td>
          <td>{{ truck.trafficBookNumber }}</td>
          <td>{{ truck.insurancePolicyNumber }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      trucks: [],
    };
  },
  async created() {
    try {
      const response = await axios.get('http://localhost:5000/api/trucks');
      this.trucks = response.data;
    } catch (error) {
      alert('Error fetching trucks: ' + (error.response?.data?.message || error.message));
    }
  },
};
</script>

<style scoped>
.container {
  width: 90%;
  margin: auto;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
</style>
