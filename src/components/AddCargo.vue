<template>
  <div>
    <div class="zaglavlje">
      <div class="header">
        <router-link to="/dashboard" class="logo-text">Cargoo</router-link>
      </div>
    </div>
    <h1>Dodaj novi teret</h1>
    <form id="cargo_Form" @submit.prevent="submitCargo">
      <label>Ime: <input type="text" id="ime" required v-model="cargo.ime"></label>
      <label>Prezime: <input type="text" id="prezime" required v-model="cargo.prezime"></label>
      <label>Naziv firme: <input type="text" id="kompanija" required v-model="cargo.kompanija"></label>
      <label>OIB: <input type="text" id="oib" required v-model="cargo.oib"></label>
      <label>Težina: <input type="text" id="tezina" required v-model="cargo.tezina"></label>
      <label>Količina: <input type="text" id="kolicina" required v-model="cargo.kolicina"></label>
      <label>Naziv tereta: <input type="text" id="naziv_tereta" required v-model="cargo.naziv_tereta"></label>
      <label>Relacija tereta: <input type="text" id="ruta" required v-model="cargo.ruta"></label>
      <label>Tip tereta: <input type="text" id="tip_tereta" required v-model="cargo.tip_tereta"></label>
      <label>Sadržaj tereta: <input type="text" id="sadrzaj_tereta" required v-model="cargo.sadrzaj_tereta"></label>
      <label>Način transporta: <input type="text" id="nacin_transporta" required v-model="cargo.nacin_transporta"></label>
      <label>Kontakt mail: <input type="text" id="mail" required v-model="cargo.mail"></label>
      <label>Kontakt telefon: <input type="text" id="broj_telefona" required v-model="cargo.broj_telefona"></label>
      <button type="submit">Dodaj teret</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      cargo: {
        ime: '',
        prezime: '',
        kompanija: '',
        oib: '',
        tezina: '',
        kolicina: '',
        naziv_tereta: '',
        ruta: '',
        tip_tereta: '',
        sadrzaj_tereta: '',
        nacin_transporta: '',
        mail: '',
        broj_telefona: ''
      }
    };
  },
  methods: {
    async submitCargo() {
      try {
        await axios.post('http://localhost:5000/api/cargos', this.cargo);
        const broj_narudzbe = 'CARGOO-' + Date.now();
        alert('Teret dodan. Broj narudžbe je: ' + broj_narudzbe);
        this.resetForm();
      } catch (error) {
        alert('Failed to submit cargo: ' + error.response.data.message);
      }
    },
    resetForm() {
      this.cargo = {
        ime: '',
        prezime: '',
        kompanija: '',
        oib: '',
        tezina: '',
        kolicina: '',
        naziv_tereta: '',
        ruta: '',
        tip_tereta: '',
        sadrzaj_tereta: '',
        nacin_transporta: '',
        mail: '',
        broj_telefona: ''
      };
    }
  }
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  padding: 20px;
}

.zaglavlje {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

.header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  padding: 20px;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.1);
}

.logo {
  margin-right: 15px;
}

.logo-text {
  font-size: 24px;
  color: #333;
  text-decoration: none;
}

form {
  background-color: #f8f9fa;
  border-radius: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 600px;
  margin: auto;
}

form input[type="text"], form select {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

form button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

form button:hover {
  background-color: #0056b3;
}
</style>
