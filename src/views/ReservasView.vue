<template>
<HeaderComponent />
<NavbarComponent />
  <div class="about">
    <h1>This is an about page</h1>
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
    HeaderComponent, NavbarComponent, FooterComponent
  }
}
</script>
