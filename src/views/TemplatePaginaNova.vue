<template>
<HeaderComponent />
<NavbarComponent />
  <!-- Escreva aqui o html da página -->
  <!-- Apenas o navbar e o footer foram importados -->
<FooterComponent />
</template>

<script>

import NavbarComponent from '@/components/NavbarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
export default {
  components: {
    NavbarComponent, FooterComponent, HeaderComponent
  }
}
</script>
