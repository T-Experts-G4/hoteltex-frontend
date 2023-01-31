<template>
<HeaderComponent />
<NavbarComponent />
  <main>
      <section class="acomodacao">
        <h2 class="acomodacao__titulo">Nossas Acomodações</h2>
        <section class="acomodacao__galeria">
          <div class="acomodacao__galeria-itens">
            <img src="../assets/imagens/acomodacoes/apart01.jpg" alt="Imagem 01" />
            <img src="../assets/imagens/acomodacoes/apart02.jpg" alt="Imagem 02" />
            <img src="../assets/imagens/acomodacoes/apart03.jpg" alt="Imagem 03" />
          </div>
          <div class="acomodacao__galeria-itens">
            <img src="../assets/imagens/acomodacoes/banheira.jpg" alt="Imagem 04" />
            <img src="../assets/imagens/acomodacoes/banheiro.jpg" alt="Imagem 05" />
            <img
              src="../assets/imagens/acomodacoes/quartoBanheira.jpg"
              alt="Imagem 06"
            />
          </div>
          <div class="acomodacao__galeria-itens">
            <img src="../assets/imagens/acomodacoes/piscina.jpg" alt="Imagem 07" />
            <img src="../assets/imagens/acomodacoes/restaurante.jpg" alt="Imagem 08" />
            <img src="../assets/imagens/acomodacoes/lobby.jpg" alt="Imagem 09" />
          </div>
        </section>

        <section class="acomodacao__destaque">
          <h2 class="acomodacao__destaque--titulo">Acomodação em Destaque</h2>
          <div class="acomodacao__destaque--descricao">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, dignissimos exercitationem molestias inventore
              repellendus accusantium repellat dolores quos pariatur ipsa hic
              aspernatur dolorem aliquid magni in error excepturi dolorum
              voluptatum! Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Debitis, numquam laboriosam? Soluta praesentium, debitis
              consequatur dolore, nesciunt, rerum ipsa iste nihil nulla pariatur
              distinctio necessitatibus velit suscipit ad eius quo? Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Deserunt molestias,
              quas, ea inventore fuga vitae consequatur nobis, saepe quibusdam
              soluta est error. Quo omnis similique accusamus tempora iste!
              Perferendis, rerum.
            </p>

            <div class="acomodacao__destaque--imagem">
              <img
                src="../assets/imagens/acomodacoes/lobby02.jpg"
                alt="Imagem Acomodação em Destaque"
              />
            </div>
          </div>
        </section>
      </section>
    </main>
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
