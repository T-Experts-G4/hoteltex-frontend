<template>
  <AdmHeader />
  <div>
        <h1 class="reservas-titulo">Reservas</h1>
        <div class="reservas">
          <div class="container__reservas">
            <ul class="container__reservas-list">
              <li>Check-in:</li>
              <span>01/01/2023</span>
              <li>Check-out:</li>
              <span>...</span>
              <li>Nome:</li>
              <span>Roberto Carlos</span>
              <li>Quarto:</li>
              <span>Executive</span>
              <li><a href="#"><button>Detalhes</button></a></li>
            </ul>
          </div>
          <div class="container__reservas">
            <ul class="container__reservas-list">
              <li>Check-in:</li>
              <span>04/01/2023</span>
              <li>Check-out:</li>
              <span>06/01/2023</span>
              <li>Nome:</li>
              <span>Homer Simpson</span>
              <li>Quarto:</li>
              <span>Classic</span>
              <li><a href="#"><button>Detalhes</button></a></li>
            </ul>
          </div>
          <div class="container__reservas">
            <ul class="container__reservas-list">
              <li>Check-in:</li>
              <span>02/01/2023</span>
              <li>Check-out:</li>
              <span>07/01/2023</span>
              <li>Nome:</li>
              <span>Gloria Maria</span>
              <li>Quarto:</li>
              <span>Premium</span>
              <li><a href="#"><button>Detalhes</button></a></li>
            </ul>
          </div>
          <div class="container__reservas">
            <ul class="container__reservas-list">
              <li>Check-in:</li>
              <span>06/01/2023</span>
              <li>Check-out:</li>
              <span>...</span>
              <li>Nome:</li>
              <span>Fausto Silva</span>
              <li>Quarto:</li>
              <span>Executive</span>
              <li><a href="#"><button>Detalhes</button></a></li>
            </ul>
          </div>
        </div>
      </div>
  <AdmFooter />
</template>

<script>
import AdmHeader from '@/components/AdmHeader.vue'
import AdmFooter from '@/components/AdmFooter.vue'

export default {
  name: 'ReservasAdmin',
  components: { AdmHeader, AdmFooter }
}
</script>
