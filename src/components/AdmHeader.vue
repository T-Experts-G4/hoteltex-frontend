<template>
  <div class="header">
    <div class="header__logo">
      <img src="../assets/imagens/Logo1.png" alt="logo" />
    </div>
    <div class="header__titulo">
      <h1>Hotel T.Ex Beach</h1>
    </div>
    <div class="header__usuario" v-on="validaLogin()">
      <span id="nmUser">Olá, {{ showUser }}</span>
      <router-link v-if="showUser"
        class="header__usuario--login botao__form"
        id="btnLogout"
        @click="logout"
        to="/"
        >LOGOUT<i class="fa fa-sign-out" aria-hidden="true"></i
      ></router-link>
    </div>
  </div>
  <div class="header__nav">
    <nav class="navbar">
      <router-link
        class="header__usuario--login botao__form"
        to="/HomeAdmin"
        >Inicio</router-link
      >
      <router-link
        class="header__usuario--login botao__form"
        to="/EmconstrucaoAdmin"
        >Reservas</router-link>
        <router-link
        class="header__usuario--login botao__form"
        to="/EmconstrucaoAdmin"
        >Ocupação</router-link>
        <router-link
        class="header__usuario--login botao__form"
        to="/EmconstrucaoAdmin"
        >Financeiro</router-link>
        <router-link
        class="header__usuario--login botao__form"
        to="/EmconstrucaoAdmin"
        >Ocorrências</router-link>
        <router-link
        class="header__usuario--login botao__form"
        to="/EmconstrucaoAdmin"
        >Suporte</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'AdmHeader',
  data () {
    return {
      showUser: ''
    }
  },
  methods: {
    validaLogin () {
      this.showUser = localStorage.getItem('user')
      console.log(this.showUser)
      return this.showUser
    },
    logout () {
      localStorage.removeItem('user')
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 15rem;
  background-color: var(--laranja-claro);
}

.header__logo {
  width: 30%;
}

.header__logo img {
  width: 20rem;
}

.header__titulo {
  width: 40%;
  text-align: center;
  color: var(--laranja);
}

.header__titulo h1 {
  font-size: 4.8rem;
  font-weight: 700;
}

.header__usuario {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 30%;
  padding: 0 2rem;
}

.header__usuario--login img {
  width: 1.5rem;
  margin-left: 0.5rem;
}

.header__usuario--login {
  display: flex;
  justify-content: center;
  align-items: center;
}

.header__nav {
  background-color: var(--yellow);
  text-align: center;
}

.navbar {
  height: 5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem 0;
  margin-bottom: 3rem;
}

.navbar a {
  position: relative;
  text-decoration: none;
  color: rgb(15, 93, 176);
  font-size: 1.8rem;
  padding: 1rem;
}

.navbar a::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 0.2rem;
  bottom: 0;
  left: 0;
  color: var(--laranja);
  background-color: var(--laranja);
  visibility: hidden;
  transform: scaleX(0);
  transition: all 0.3s ease-in-out 0s;
}

.navbar a:hover::before {
  visibility: visible;
  transform: scaleX(1);
}

.botao__form {
  margin: 10px;
  padding: 15px;
  font-size: 1em;
  border-radius: 12px;
  border: 1px solid #CCBBFF;
  box-sizing: border-box;
  background-color: #fc5d01;
  color: #fff;
  cursor: pointer;
}
</style>
