<template>
<HeaderComponent />
<NavbarComponent />
  <div class="about">
    <h1>CONTATO</h1>
    <span>trabalhar na tela de contato</span>
  </div>
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
