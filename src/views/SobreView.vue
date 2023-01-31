<template>
<HeaderComponent />
<NavbarComponent />
<h1>Monte a página sobre escrevendo o html</h1>
<!-- escreva o código aqui abaixo -->
<router-link class="botao_reserva" target="_blank" to="/reservas">
  <i class="fa fa-book"></i>Reserve aqui!
</router-link>
<FooterComponent />
</template>

<script>

import NavbarComponent from '@/components/NavbarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'

export default {
  name: 'GastronomiaView',
  components: {
    NavbarComponent, FooterComponent, HeaderComponent
  }
}
</script>
