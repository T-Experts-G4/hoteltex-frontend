<template>
<HeaderComponent />
<NavbarComponent />
  <main>
    <section>
          <article>
            <div class="hotel__minha-reserva">
              <div class="hotel__minha-reserva2">
                <h2>Minha Reserva</h2>
                <!--primeira parte-->
                <form action="./EmconstrucaoView.vue" method="get" target="_blank">
                  <fieldset>
                    <ul class="hotel__minha-reserva_campos" id="hotel-form">
                      <li>
                        <label for="">Check-In:</label>
                        <input type="date" name="check-in" id="checkin" v-model="checkin" />
                      </li>
                      <li>
                        <label for="">Check-Out:</label>
                        <input type="date" name="check-out" id="checkout" v-model="checkout"/>
                      </li>
                      <li>
                        <label for="">Adultos:</label>
                        <select class="numero_adultos" id="adultos" v-model="adultos">
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                        </select>
                      </li>
                      <li>
                        <label for="">Crianças:</label>
                        <select class="numero_criancas" id="criancas" v-model="criancas">
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                        </select>
                      </li>
                    </ul>

                    <!--Quartos do hotel-->
                  <div class="hotel__container-quarto-resumo">
                    <div class="hotel__lado_quartos">
                      <ul>
                        <li>
                          <label class="hotel__lado_quarto_titulo" for="quarto">Escolha o seu quarto abaixo</label>
                          <hr class="hotel__linha_horizontal" />
                          <div class="hotel__grid" name="quarto">
                              <label class="hotel__card">
                                  <div class="hotel__card_image">
                                      <img src="../assets/imagens/acomodacoes/apart02.jpg" alt="">
                                  </div>
                                  <div>
                                    <span class="hotel__card_detalhes">
                                      <span class="hotel__titulo_card">
                                          Executive
                                      </span>
                                      <span class="texto_card">
                                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed beatae enim praesentium. Molestias illum perspiciatis neque reiciendis! Tempore quod ipsa autem placeat minima consectetur exercitationem praesentium, facilis repudiandae modi quam et quibusdam tempora quaerat voluptatum deserunt atque?
                                      </span>
                                      <span class="hotel__quarto_valor">
                                          R$ 197,89
                                      </span>
                                      <input type="radio" name="quarto" value="197.89"/>Selecionar o Apartamento Executive
                                    </span>
                                  </div>
                                <div class="hotel__linha_vertical-reservas">
                                  <span></span>
                                </div>
                              </label>
                              <hr class="hotel__linha_horizontal" />
                              <label class="hotel__card">
                                  <div class="hotel__card_image">
                                      <img src="../assets/imagens/acomodacoes/apart03.jpg" alt="">
                                  </div>
                                  <div>
                                  <span class="hotel__card_detalhes">
                                      <span class="hotel__titulo_card">
                                          Classic
                                      </span>
                                      <span class="texto_card">
                                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed beatae enim praesentium. Molestias illum perspiciatis neque reiciendis! Tempore quod ipsa autem placeat minima consectetur exercitationem praesentium, facilis repudiandae modi quam et quibusdam tempora quaerat voluptatum deserunt atque?
                                      </span>
                                      <span class="hotel__quarto_valor">
                                          R$ 298,93
                                      </span>
                                      <input type="radio" name="quarto" value="298.93"/>Selecionar o Apartamento Classic
                                    </span>
                                  </div>
                              </label>
                              <hr class="hotel__linha_horizontal" />
                              <label class="hotel__card">
                                  <div class="hotel__card_image">
                                      <img src="../assets/imagens/acomodacoes/apart01.jpg" alt="">
                                  </div>
                                  <div>
                                  <span class="hotel__card_detalhes">
                                      <span class="hotel__titulo_card">
                                          Premium
                                      </span>
                                      <span class="texto_card">
                                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed beatae enim praesentium. Molestias illum perspiciatis neque reiciendis! Tempore quod ipsa autem placeat minima consectetur exercitationem praesentium, facilis repudiandae modi quam et quibusdam tempora quaerat voluptatum deserunt atque?
                                      </span>
                                      <span class="hotel__quarto_valor">
                                          R$ 399,87
                                      </span>
                                      <input type="radio" name="quarto" value="399.87"/>Selecionar o Apartamento Premium
                                  </span></div>

                              </label>

                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="hotel__lado_resumo">
                      <h3>RESUMO DA RESERVA</h3>
                      <div class="hotel__lado_resumo-info">
                          <span>Apartamento:</span>
                          <span id="resumoApartamento"></span>
                          <span>CheckIn:</span>
                          <span id="resumoCheckin"> {{ checkin }}</span>
                          <span>CheckOut:</span>
                          <span id="resumoCheckout"> {{ checkout }}</span>
                          <span>Pessoas:</span>
                          <span id="resumoPessoas"> {{ adultos }} </span>
                      </div>
                      <div class="hotel__lado_resumo-servicos">
                        <span>Serviços adicionados</span>
                        <table>
                          <thead>
                            <tr>
                              <th>Descrição</th>
                              <th>Valor</th>
                            </tr>
                          </thead>
                          <tbody id="tabela__selecionados">
                          </tbody>
                          <tbody id="tabela__selecionados_total">
                          </tbody>
                        </table>
                      </div>

                      <div class="reserva__botoes">
                        <span>Adicione mais serviços</span>
                      <button class="reserva__botao botao--servico" id="botaoServicos" onclick="abreModalServicos()"><a href="#">+ SERVIÇOS</a></button>
                      <button class="reserva__botao botao--continua" type="button" onclick="modal(), adicionaitensNoHTML()">Continuar</button>
                    </div>
                    </div>
                  </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </article>
        </section>
        <section class="modalLogin" style="display: none;">
          <div class="estiloLogin imagemPraia">
            <p class="estiloFonte">Login</p>
            <form action="" method="post">
                <label class="estilo__fonte--input" for="nome_usuario">Email</label>
                <input class="estiloInput" type="text" name="emailUsuario" id="user">
                <label class="estilo__fonte--input" for="nome_usuario">Senha</label>
                <input class="estiloInput " type="password" name="senhaUsuario" id="password">
                <div class="centralizaBotao">
                    <button type="button" class="estiloBotao" id="btnConfirma">Confirmar</button>
                </div>
            </form>
            <div class="centralizaSenha">
                <div class="estiloSenha">
                    <p><router-link to="/construcao">Esqueceu sua senha?</router-link></p>
                </div>
            </div>
        </div>
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
    HeaderComponent, NavbarComponent, FooterComponent
  },
  data () {
    return {
      checkin: '',
      checkout: '',
      adultos: '',
      criancas: '',
      quartoValor: 0.0,
      quartoNome: '',
      total: '',
      dias: '',
      resumoApartamento: document.querySelector('#resumoApartamento'),
      resumoCheckin: '',
      resumoCheckout: '',
      resumoPessoas: this.adultos + this.criancas,
      diff: ''
    }
  },
  mouted () {
    window.addEventListener('change', function (e) {
      this.checkin = document.getElementById('checkin').value
      this.checkout = document.getElementById('checkout').value
      this.adultos = document.getElementById('adultos').value
      this.criancas = document.getElementById('criancas').value

      this.diff = new Date(this.checkout) - new Date(this.checkin)
      this.dias = this.diff / (1000 * 60 * 60 * 24)

      localStorage.quartoValor = this.quartoValor
      localStorage.checkin = this.checkin
      localStorage.checkout = this.checkout
      localStorage.adultos = this.adultos
      localStorage.criancas = this.criancas
      localStorage.dias = this.dias

      this.recebeValorNomeQuarto(e)
      localStorage.quartoValor = this.quartoValor

      localStorage.total =
          (
            (parseInt(localStorage.adultos) + parseInt(localStorage.criancas)) *
              parseInt(localStorage.quartoValor)
          ).toFixed(2) * this.dias
      this.insereDadosReserva()
    })
  },
  methods: {
    recebeValorNomeQuarto (e) {
      e.preventDefault()
      this.quartoValor = document.querySelector('input[name="quarto"]:checked')
        ? document.querySelector('input[name="quarto"]:checked').value
        : ''
    },
    insereDadosReserva () {
      this.adultos = parseInt(localStorage.adultos)
      this.criancas = parseInt(localStorage.criancas)
      this.resumoApartamento = `R$ ${localStorage.quartoValor}`
      this.resumoCheckin = localStorage.checkin.split('-').reverse().join('/')
      this.resumoCheckout = localStorage.checkout.split('-').reverse().join('/')
      this.resumoPessoas = this.adultos + this.criancas
    }
  }

}
</script>
