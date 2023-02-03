<template>
<AdmHeader />
  <div>
    <div class="slider fullscreen">
        <h2>Página em construção</h2>
  <ul class="slides">
    <li>
      <img src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/factory_dy0a.svg">
      <div class="caption center-align black-text">
        <h5 class="light grey-text text-darken-4">Em breve teremos mais informações</h5>
      </div>
    </li>
  </ul>
</div>
  </div>
<FooterComponent />
</template>

<script>
import AdmHeader from '@/components/AdmHeader.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'EmconstrucaoAdmin',
  components: {
    AdmHeader, FooterComponent
  }
}
</script>
<style scoped>
.slider {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
img {
  width: 80%;
  margin: 0 auto;
}
.black-text a {
  color : #6c63ff;
}
</style>
