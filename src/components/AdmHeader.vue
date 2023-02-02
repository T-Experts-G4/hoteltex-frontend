<template>
  <div class="header">
    <div class="header__logo">
      <img src="../assets/imagens/Logo1.png" alt="logo" />
    </div>
    <div class="header__titulo">
      <h1>Hotel T.Ex Beach</h1>
    </div>
    <div class="header__usuario">
      <span id="nmUser"></span>
      <router-link v-if="showUser"
        class="header__usuario--login botao__form"
        to="/home.html"
        id="btnLogout"
        >LOGOUT<i class="fa fa-sign-out" aria-hidden="true"></i
      ></router-link>
    </div>
  </div>
  <div class="header__nav">
    <nav class="navbar">
      <router-link
        class="header__usuario--login botao__form"
        to="../admin/home_admin.html"
        >Inicio</router-link
      >
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
    }
  }
}
</script>
