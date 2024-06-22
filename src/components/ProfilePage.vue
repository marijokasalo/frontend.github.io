<template>
  <div>
    <div class="zaglavlje">
      <div class="header">
        <router-link to="/dashboard" class="logo-text">Cargoo</router-link>
      </div>
    </div>
    <div class="profile">
      <div class="profile-pic-container">
        <img :src="profilePic" alt="Profile Picture" class="profile-pic">
      </div>
      <div class="profile-info" v-if="driver">
        <div class="profile-column">
          <h2>Osobni Podaci</h2>
          <p><strong>Ime:</strong> {{ driver.name }}</p>
          <p><strong>Prezime:</strong> {{ driver.surname }}</p>
          <p><strong>Datum rođenja:</strong> {{ formatDate(driver.dob) }}</p>
          <p><strong>OIB:</strong> {{ driver.oib }}</p>
          <p><strong>Email:</strong> {{ driver.email }}</p>
          <p><strong>Telefon:</strong> {{ driver.phone }}</p>
          <p><strong>Adresa:</strong> {{ driver.address }}</p>
          <p><strong>Broj vozačke dozvole:</strong> {{ driver.drivingLicenseNumber }}</p>
        </div>
        <div class="cargos-section">
          <h2>Tereti za isporuku</h2>
          <table>
            <thead>
              <tr>
                <th>Naziv tereta</th>
                <th>Težina</th>
                <th>Količina</th>
                <th>Relacija</th>
                <th>Način transporta</th>
                <th>Akcije</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="cargo in cargos" :key="cargo._id" :class="getStatusClass(cargo)">
                <td>{{ cargo.naziv_tereta }}</td>
                <td>{{ cargo.tezina }}</td>
                <td>{{ cargo.kolicina }}</td>
                <td>{{ cargo.ruta }}</td>
                <td>{{ cargo.nacin_transporta }}</td>
                <td>
                  <button v-if="cargo.status !== 'delivered'" @click="toggleCargoStatus(cargo)" class="btn">
                    {{ cargo.status === 'inTransit' ? 'Finish' : 'Start' }}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ProfilePage',
  data() {
    return {
      driver: null,
      cargos: [],
    };
  },
  computed: {
    profilePic() {
      return this.driver && this.driver.gender === 'male' ? 'male-icon.png' : 'female-icon.png';
    }
  },
  methods: {
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    },
    async loadDriverProfile() {
      try {
        const response = await axios.get('http://localhost:5000/api/users/profile', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        this.driver = response.data;
        this.loadCargos();
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    },
    async loadCargos() {
      try {
        const response = await axios.get(`http://localhost:5000/api/cargos?driverId=${this.driver._id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        this.cargos = response.data;
      } catch (error) {
        console.error('Error fetching cargos:', error);
      }
    },
    async toggleCargoStatus(cargo) {
      try {
        const newStatus = cargo.status === 'inTransit' ? 'delivered' : 'inTransit';
        await axios.post('http://localhost:5000/api/users/update-load-status', {
          driverId: this.driver._id,
          status: newStatus,
        }, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        cargo.status = newStatus;
      } catch (error) {
        console.error('Error updating cargo status:', error);
      }
    },
    getStatusClass(cargo) {
      if (cargo.status === 'inTransit') {
        return 'in-transit';
      } else if (cargo.status === 'delivered') {
        return 'delivered';
      }
      return '';
    }
  },
  created() {
    this.loadDriverProfile();
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

.profile {
  padding: 20px;
  text-align: center;
}

.profile-pic-container {
  margin: 0 auto;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid #2a3d45;
  margin-bottom: 20px;
}

.profile-pic {
  width: 100%;
  height: auto;
}

.profile-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-column {
  width: 80%;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.profile-column h2 {
  color: #2a3d45;
  margin-bottom: 10px;
}

.profile-column p {
  margin: 5px 0;
  font-size: 16px;
}

.profile-column strong {
  color: #2a3d45;
}

.cargos-section {
  width: 80%;
}

.cargos-section h2 {
  color: #2a3d45;
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
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

.btn {
  padding: 5px 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
}

.btn:hover {
  background-color: #0056b3;
}
</style>
