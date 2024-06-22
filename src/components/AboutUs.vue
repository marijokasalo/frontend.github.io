<template>
  <div>
    <div class="header">
      <router-link to="/" class="logo-text">Cargoo</router-link>
    </div>
    <div class="about-us">
      <h1>O nama!</h1>
      <p>
        Dobrodošli na službenu web stranicu Cargoo, vašeg pouzdanog partnera za transport tereta diljem Hrvatske i šire. 
        U Cargoo-u smo posvećeni pružanju vrhunske usluge prijevoza tereta, uz fokus na sigurnost, pouzdanost i brzinu.
      </p>
      <p>
        Sa bogatim iskustvom u logistici i transportu, naš tim stručnjaka osigurava da vaša roba stigne na odredište sigurno i na vrijeme. 
        Bez obzira trebate li distribuciju po gradovima ili međunarodni transport, Cargoo vam pruža sveobuhvatan i prilagođen pristup koji odgovara vašim potrebama.
      </p>
      <p>
        Naša misija je jednostavna - olakšati vaše poslovanje pružanjem efikasnih transportnih rješenja. S našim modernim vozilima, tehnološkim inovacijama i pažljivo odabranim timom vozača, 
        garantiramo da ćemo vaš teret dostaviti s maksimalnom sigurnošću i minimalnim zakašnjenjima.
      </p>
      <p>
        Ponosimo se našim posvećenim pristupom svakom klijentu, prilagodljivošću prema specifičnim zahtjevima i kontinuiranim unaprjeđenjem usluga kako bismo uvijek bili korak ispred u industriji transporta.
      </p>
      <p>
        Zahvaljujemo vam što ste posjetili našu web stranicu. Za više informacija o našim uslugama ili za postavljanje upita, slobodno nas kontaktirajte. Vaš uspjeh je naša vožnja.
      </p>
    </div>
  </div>
</template>

<style>
body, html {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

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

.about-us {
  padding: 20px;
  margin-top: 60px;
}

.about-us h1 {
  color: #2a3d45;
}

.about-us p {
  margin-bottom: 20px;
}
</style>
