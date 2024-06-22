<template>
  <div>
    <div class="zaglavlje">
      <div class="header">
        <router-link to="/" class="logo-text">Cargoo</router-link>
      </div>
    </div>
    <main>
      <div class="lijevi">
        <ul>
          <li><router-link to="/login" class="btn">Prijavi se</router-link></li>
          <li><router-link to="/add-cargo" class="btn">Naruči dostavu</router-link></li>
        </ul>
      </div>
      <div class="desni">
        <h1>Informacije o kompaniji</h1>
        <p>Predstavljamo vam Cargoo</p>
        <p>inovativnu aplikaciju koja revolucionira način upravljanja kamionima i praćenja prijevoza tereta. 
          Cargoo je vaš pouzdani partner u optimizaciji logistike i efikasnijem vođenju vašeg transportnog poslovanja. 
          S Cargoo aplikacijom, praćenje prijevoza tereta nikada nije bilo lakše. 
          Bez obzira jeste li vozač kamiona ili menadžer transporta, Cargoo vam pruža sve potrebne alate za brzo i precizno upravljanje svakim aspektom vašeg prijevoznog procesa.
          Od praćenja rute i utovara do upravljanja dokumentima i komunikacije s klijentima, 
          Cargoo je sveobuhvatno rješenje koje vam omogućuje da održite kontrolu nad vašim teretom u svakom trenutku.
          Neka Cargoo bude vaš partner u uspjehu vašeg transportnog poslovanja. 
          Iskoristite prednosti jednostavnosti, pouzdanosti i efikasnosti koje pruža naša aplikacija i podignite svoje poslovanje na novu razinu.
          Preuzmite Cargoo danas i osigurajte siguran i efikasan prijevoz vašeg tereta uz minimalan napor i maksimalnu kontrolu.</p>
      </div>
    </main>
    <footer class="footer">
      <div class="footer-content">
        <h2>Kontakt informacije</h2>
        <p>Naziv kompanije: Cargoo</p>
        <p>Email: info@cargoo.com</p>
        <p>Telefon: +123 456 789</p>
        <p>Radno vrijeme: Pon - Pet, 9:00 - 17:00</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'DashboardPage'
};
</script>

<style>
body, html {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-color: #8c2929;
}

.zaglavlje {
  margin: 0;
  padding: 0;
}

.header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #fdfdfd;
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

main {
  display: flex;
  padding: 40px;
}

.lijevi {
  width: 35%;
  margin-right: 3%;
  padding: 20px;
  background-color: #eff6ff;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
}

.desni {
  width: 35%;
  flex-grow: 1;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
}

.desni h1 {
  color: #2a3d45;
  margin-bottom: 30px;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

ul li {
  margin-bottom: 20px;
}

.btn {
  display: block;
  width: 100%;
  padding: 15px 0;
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

.footer {
  background-color: #2a3d45;
  color: white;
  padding: 20px;
  text-align: center;
}

.footer-content {
  max-width: 800px;
  margin: auto;
}

.footer-content h2 {
  margin: 0 0 10px;
}

.footer-content p {
  margin: 5px 0;
}

@media only screen and (max-width: 768px) {
  main {
    flex-direction: column;
  }

  .lijevi, .desni {
    width: 100%;
    margin: 0;
    margin-bottom: 20px;
  }
}
</style>
