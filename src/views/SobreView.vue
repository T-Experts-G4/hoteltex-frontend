<template>
<HeaderComponent />
<NavbarComponent />
<main>
      <section class="container sobre">
        <article>
          <h2 class="sobre__titulo">Nosso hotel</h2>
          <div class="sobre__conteudo">
            <div class="sobre__conteudo-imagem">
              <img
                src="../assets/imagens/acomodacoes/fachada.jpg"
                alt="Parte externa do hotel com pescina"
              />
            </div>
            <div class="sobre__conteudo-texto">
              <p class="sobre__conteudo-texto-descricao">
                Estamos localizados em uma área privilegiada, com uma vista
                maravilhosa para o mar, e a 5 minutos do centro da cidade. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Numquam
                similique quos sint distinctio voluptate deleniti Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Numquam inventore
                incidunt similique laboriosam ad cupiditate molestiae quaerat
                aliquam explicabo alias aliquid blanditiis pariatur
                exercitationem excepturi fugiat illo delectus aspernatur, sunt
                nostrum culpa non ullam! Ad provident ut, exercitationem,
                tempore dicta et illo harum possimus dolor suscipit aliquam eos
                ea similique!
              </p>
            </div>
          </div>
          <div class="sobre__carrossel">
            <h3 class="sobre__carrossel-titulo">
              Veja algumas imagens do nosso hotel
            </h3>
            <div class="sobre__carrossel-conteudo">
              <img
                src="../assets/imagens/acomodacoes/apart01.jpg"
                alt=""
                class="sobre__carrossel-conteudo-imagem"
              />

              <img
                src="../assets/imagens/acomodacoes/apart02.jpg"
                alt=""
                class="sobre__carrossel-conteudo-imagem"
              />

              <img
                src="../assets/imagens/acomodacoes/lobby.jpg"
                alt=""
                class="sobre__carrossel-conteudo-imagem"
              />
            </div>
          </div>
        </article>
        <a class="botao_reserva" href="../pages/reservas.html" target="_blank">
          <i class="fa fa-book"></i>Reserve aqui!
        </a>
      </section>
    </main>
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
  name: 'SobreView',
  components: {
    NavbarComponent, FooterComponent, HeaderComponent
  }
}
</script>
