<template>
  <div>
    <div class="zaglavlje">
      <div class="header">
        <router-link to="/" class="logo-text">Cargoo</router-link>
      </div>
    </div>
    <h1>Drivers List</h1>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Date of Birth</th>
          <th>OIB</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Driving License Number</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="driver in drivers" :key="driver._id" :class="getStatusClass(driver)">
          <td>{{ driver.name }}</td>
          <td>{{ driver.surname }}</td>
          <td>{{ new Date(driver.dob).toLocaleDateString() }}</td>
          <td>{{ driver.oib }}</td>
          <td>{{ driver.email }}</td>
          <td>{{ driver.phone }}</td>
          <td>{{ driver.address }}</td>
          <td>{{ driver.drivingLicenseNumber }}</td>
          <td>{{ getStatusMessage(driver) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'DriversList',
  data() {
    return {
      drivers: [],
    };
  },
  async created() {
    try {
      const response = await axios.get('http://localhost:5000/api/users/drivers');
      this.drivers = response.data;
    } catch (error) {
      console.error("Error fetching drivers:", error);
    }
  },
  methods: {
    getStatusMessage(driver) {
      if (driver.currentLoad && driver.currentLoad.status === 'inTransit') {
        return 'U tranzitu';
      } else if (driver.currentLoad && driver.currentLoad.status === 'delivered') {
        return 'Dostavljeno';
      }
      return 'Nema tereta';
    },
    getStatusClass(driver) {
      if (driver.currentLoad && driver.currentLoad.status === 'inTransit') {
        return 'in-transit';
      } else if (driver.currentLoad && driver.currentLoad.status === 'delivered') {
        return 'delivered';
      }
      return '';
    },
  },
};
</script>

<style>
.zaglavlje {
  font-family: Arial, sans-serif;
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

.logo {
  margin-right: 25px;
}

.logo-text {
  font-size: 28px;
  color: #ffffff;
  letter-spacing: 1px;
  text-decoration: none;
}

h1 {
  text-align: center;
  margin-top: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

table, th, td {
  border: 1px solid #ddd;
}

th, td {
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

.in-transit {
  background-color: yellow;
}

.delivered {
  background-color: green;
  color: white;
}
</style>
