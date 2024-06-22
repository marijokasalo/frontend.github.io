<template>
  <div>
    <div class="zaglavlje">
      <div class="header">
        <router-link to="/dashboard" class="logo-text">Cargoo</router-link>
      </div>
    </div>
    <div class="content">
      <h1>Cargos List</h1>
      <input type="text" placeholder="Search for..." v-model="searchQuery" />
      <table class="cargo-table">
        <thead>
          <tr>
            <th>Ime</th>
            <th>Prezime</th>
            <th>Kompanija</th>
            <th>OIB</th>
            <th>Naziv Tereta</th>
            <th>Tip Tereta</th>
            <th>Sadržaj Tereta</th>
            <th>Težina</th>
            <th>Količina</th>
            <th>Ruta</th>
            <th>Način Transporta</th>
            <th>Akcije</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cargo in filteredCargos" :key="cargo._id">
            <td>{{ cargo.ime }}</td>
            <td>{{ cargo.prezime }}</td>
            <td>{{ cargo.kompanija }}</td>
            <td>{{ cargo.oib }}</td>
            <td>{{ cargo.naziv_tereta }}</td>
            <td>{{ cargo.tip_tereta }}</td>
            <td>{{ cargo.sadrzaj_tereta }}</td>
            <td>{{ cargo.tezina }}</td>
            <td>{{ cargo.kolicina }}</td>
            <td>{{ cargo.ruta }}</td>
            <td>{{ cargo.nacin_transporta }}</td>
            <td>
              <router-link :to="{ name: 'edit-cargo', params: { id: cargo._id } }" class="btn edit">Uredi</router-link>
              <button @click="assignCargo(cargo)" class="btn assign">Dodijeli</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CargosList',
  data() {
    return {
      cargos: [],
      searchQuery: '',
      selectedCargo: null,
    };
  },
  computed: {
    filteredCargos() {
      return this.cargos.filter(cargo =>
        Object.values(cargo).some(value =>
          value.toString().toLowerCase().includes(this.searchQuery.toLowerCase())
        )
      );
    },
  },
  async created() {
    try {
      const response = await axios.get('http://localhost:5000/api/cargos');
      this.cargos = response.data;
    } catch (error) {
      alert('Failed to fetch cargos: ' + (error.response?.data?.message || error.message));
    }
  },
  methods: {
    async assignCargo(cargo) {
      try {
        const driverId = prompt("Enter the Driver ID to assign this cargo to:");
        if (driverId) {
          await axios.post('http://localhost:5000/api/cargos/assign', { cargoId: cargo._id, driverId });
          alert('Cargo assigned successfully');
        }
      } catch (error) {
        alert('Failed to assign cargo: ' + (error.response?.data?.message || error.message));
      }
    },
  },
};
</script>

<style scoped>
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

.logo-text {
  font-size: 28px;
  color: #ffffff;
  letter-spacing: 1px;
  text-decoration: none;
}

.content {
  padding: 20px;
}

.cargo-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.cargo-table th, .cargo-table td {
  padding: 15px;
  text-align: left;
  border: 1px solid #ddd;
}

.cargo-table th {
  background-color: #f2f2f2;
}

.cargo-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.btn {
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
}

.btn.edit {
  background-color: #ffc107;
}

.btn.assign {
  background-color: #28a745;
}

.btn:hover {
  background-color: #0056b3;
}

input[type="text"] {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
  margin-bottom: 20px;
}
</style>
