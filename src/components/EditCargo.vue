<template>
  <div>
    <h1>Uredi Teret</h1>
    <form @submit.prevent="updateCargo">
      <label>Naziv tereta: <input type="text" v-model="cargo.naziv_tereta"></label>
      <label>Težina: <input type="number" v-model="cargo.tezina"></label>
      <label>Količina: <input type="number" v-model="cargo.kolicina"></label>
      <label>Relacija: <input type="text" v-model="cargo.ruta"></label>
      <label>Način transporta: <input type="text" v-model="cargo.nacin_transporta"></label>
      <button type="submit">Ažuriraj</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      cargo: {}
    };
  },
  created() {
    this.fetchCargo();
  },
  methods: {
    async fetchCargo() {
      try {
        const response = await axios.get(`http://localhost:5000/api/cargos/${this.$route.params.id}`, {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
        });
        this.cargo = response.data;
      } catch (error) {
        console.error('Error fetching cargo:', error);
      }
    },
    async updateCargo() {
      try {
        await axios.patch(`http://localhost:5000/api/cargos/${this.cargo._id}`, this.cargo, {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
        });
        this.$router.push('/cargos-list');
      } catch (error) {
        console.error('Error updating cargo:', error);
      }
    }
  }
};
</script>

<style scoped>
</style>
