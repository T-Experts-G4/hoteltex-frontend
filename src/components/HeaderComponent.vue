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
            <a class="header__usuario--cadastro botao__form" href="./cadastro_hospede.html" id="btnCadastro">Cadastre-se</a>
              <a class="header__usuario--login botao__form" href="./LoginPage.vue" id="btnLogin">LOGIN<i class="fa fa-sign-in fa-lg" aria-hidden="true"></i></a>
              <span id='nmUser'></span>
              <a class="header__usuario--login botao__form" href="./home.html" id="btnLogout">LOGOUT<i class="fa fa-sign-out" aria-hidden="true"></i></a>
            </div>
  </div>

</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>
