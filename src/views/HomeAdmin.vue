<template>
  <AdmHeader />
  <div class="cards">
    <div class="card">
      <div class="card__titulo">
        <h2>Reservas</h2>
      </div>
      <div class="card__conteudo">
        <p>Próximas reservas</p>
        <p id="info_reservas"></p>
      </div>
      <div class="card__detalhes">
        <a href="../admin/reservas_admin.html">Ver detalhes</a>
      </div>
    </div>
    <div class="card">
      <div class="card__titulo">
        <h2>Ocupação</h2>
      </div>
      <div class="card__conteudo">
        <p>Ocupação atual</p>
        <p id="info_ocupacao"></p>
      </div>
      <div class="card__detalhes">
        <a href="../emConstrucao.html">Ver detalhes</a>
      </div>
    </div>
    <div class="card">
      <div class="card__titulo">
        <h2>Financeiro</h2>
      </div>
      <div class="card__conteudo">
        <p>Financeiro</p>
        <p id="info_financeiro"></p>
      </div>
      <div class="card__detalhes">
        <a href="../emConstrucao.html">Ver detalhes</a>
      </div>
    </div>
    <div class="card">
      <div class="card__titulo">
        <h2>Ocorrências</h2>
      </div>
      <div class="card__conteudo">
        <p>Ocorrências</p>
        <p id="info_ocorrencias"></p>
      </div>
      <div class="card__detalhes">
        <a href="../emConstrucao.html">Ver detalhes</a>
      </div>
    </div>
    <div class="card">
      <div class="card__titulo">
        <h2>Suporte</h2>
      </div>
      <div class="card__conteudo">
        <p>Chamados</p>
        <p id="info_chamado"></p>
      </div>
      <div class="card__detalhes">
        <a href="../emConstrucao.html">Ver detalhes</a>
      </div>
    </div>
  </div>
  <AdmFooter />
</template>

<script>
import AdmHeader from '@/components/AdmHeader.vue'
import AdmFooter from '@/components/AdmFooter.vue'

export default {
  name: 'HomeAdmin',
  components: { AdmHeader, AdmFooter }
}
</script>
