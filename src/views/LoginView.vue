<template>
    <BotaoLoginJS />
    <HeaderComponent />
    <NavbarComponent />
    <main>
            <div class="estiloLogin imagemPraia">
                <p class="estiloFonte">Login</p>
                <form action="" method="post">
                    <label class="estilo__fonte--input" for="nome_usuario">Email</label>
                    <input class="estiloInput" type="text" name="emailUsuario" id="user">
                    <label class="estilo__fonte--input" for="nome_usuario">Senha</label>
                    <input class="estiloInput " type="password" name="senhaUsuario" id="password">
                    <div class="centralizaBotao">
                        <!-- <button type="button" class="estiloBotao" id="btnConfirma">Confirmar</button> -->
                        <router-link to="/" id="btnConfirma" class="estiloBotao" @click="atualizarPG">Confirmar</router-link>
                    </div>
                </form>
                <div class="centralizaSenha">
                    <div class="estiloSenha">
                        <p><a href="./emConstrucao.html">Esqueceu sua senha?</a></p>
                    </div>
                </div>
            </div>
            <div style="width: 200px;" class="alert alert-danger mx-auto d-none" role="alert" id="erroAutentic">
            <!-- <span class="mx-auto text-justify">Usuario e senha invalida</span> -->
            </div>
        </main>
<FooterComponent />
</template>

<script>

import NavbarComponent from '@/components/NavbarComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import BotaoLoginJS from '@/components/BotaoLoginJS.vue'

export default {
  name: 'LoginView',
  components: { NavbarComponent, HeaderComponent, FooterComponent, BotaoLoginJS },
  methods: {
    atualizarPG () {
      location.reload()
    }
  }
}
</script>
