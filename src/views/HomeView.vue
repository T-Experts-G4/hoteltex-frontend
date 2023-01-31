<template>
<HeaderComponent />
<NavbarComponent />
<!-- Monte a página aqui -->
<router-link class="botao_reserva" target="_blank" to="/reservas">
  <i class="fa fa-book"></i>Reserve aqui!
</router-link>
<FooterComponent />
</template>

<script>
// @ is an alias to /src
import NavbarComponent from '@/components/NavbarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'

export default {
  name: 'HomeView',
  components: {
    NavbarComponent, FooterComponent, HeaderComponent
  }
}
</script>
