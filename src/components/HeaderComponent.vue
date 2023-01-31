<template>
  <div class="header">
            <div class="header__logo">
                <img src="../assets/imagens/Logo1.png" alt="logo" />
            </div>
            <div class="header__titulo">
                <h1>Hotel T.Ex Beach</h1>
            </div>
            <div class="header__usuario">
            ${validaLogin()}
            <router-link  class="header__usuario--cadastro botao__form" to="/cadastro_hospede.html" id="btnCadastro">Cadastre-se</router-link>
              <router-link  class="header__usuario--login botao__form" to="/LoginView" id="btnLogin">LOGIN<i class="fa fa-sign-in fa-lg" aria-hidden="true"></i></router-link>
              <span id='nmUser'></span>
              <router-link  class="header__usuario--login botao__form" to="/home.html" id="btnLogout">LOGOUT<i class="fa fa-sign-out" aria-hidden="true"></i></router-link>
            </div>
  </div>

</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>
