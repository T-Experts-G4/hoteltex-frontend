<template>
  <section class="modal__servicos" style="display: none;">
        <div class="services">
				<div class="service__cabecalho">
					<h2 class="sevice__cabecalho--titulo">Nossos serviços</h2>
					<hr class="service__linha" />
					<p class="service__cabecalho--paragrafo">
						Conheça os serviços que nós oferecemos para os nossos clientes.
					</p>
				</div>
				<div class="container service__itens">
					<div class="cards service">
						<div class="service__imagem">
							<div class="service__imagem-icon">
								<img
									src="../imagens/icon/reservas/almoco.png"
									alt="Almoço"
									srcset=""
								/>
							</div>
						</div>

						<div class="service__info">
							<h3 class="service__info--title">Almoço</h3>
							<hr class="serv-hr s-green" />
							<p class="service__info--paragrafo">
								Almoço para uma experiência mais completa e confortavél
							</p>
							<p class="service__info--paragrafo"><strong>R$ 50,00</strong></p>
							<button  type="button" class="botaoAdicionar" id="1" name="Almoço" value="50.00"></button>
						</div>
					</div>

					<div class="cards service">
						<div class="service__imagem">
							<div class="service__imagem-icon">
								<img
									src="../imagens/icon/reservas/cafe.png"
									alt="Cafe da manhã"
									srcset=""
								/>
							</div>
						</div>

						<div class="service__info">
							<h3 class="service__info--title">Cafe da manhã</h3>
							<hr class="serv-hr s-orange" />
							<p class="service__info--paragrafo">
								Super café da manha para começar o seu dia.
							</p>
							<p class="service__info--paragrafo"><strong>R$ 30,00</strong></p>
							<button  type="button" class="botaoAdicionar" id="2" name="Café da manha" value="30.00"></button>
						</div>
					</div>

					<div class="cards service">
						<div class="service__imagem">
							<div class="service__imagem-icon">
								<img
									src="../imagens/icon/reservas/massagem.png"
									alt="Massagem"
									srcset=""
								/>
							</div>
						</div>

						<div class="service__info">
							<h3 class="service__info--title">Massagem</h3>
							<hr class="serv-hr s-blue" />
							<p class="service__info--paragrafo">
								Massagem com profissionais para um dia perfeito.
							</p>
							<p class="service__info--paragrafo"><strong>R$ 80,00</strong></p>
							<button  type="button" class="botaoAdicionar" id="3" name="Massagem" value="80.00"></button>
						</div>
					</div>

					<div class="cards service">
						<div class="service__imagem">
							<div class="service__imagem-icon">
								<img
									src="../imagens/icon/reservas/notebook.png"
									alt="Aluguel equipamento"
									srcset=""
								/>
							</div>
						</div>

						<div class="service__info">
							<h3 class="service__info--title">Aluguel de equipamentos</h3>
							<hr class="serv-hr s-orange" />
							<p class="service__info--paragrafo">
								Nós temos notebook e smartphone para todos os momentos.
							</p>
							<p class="service__info--paragrafo"><strong>R$ 50,00</strong></p>
							<button  type="button" class="botaoAdicionar" id="4" name="Aluguel de equipamentos" value="50.00">

							</button>
						</div>
					</div>

					<div class="cards service">
						<div class="service__imagem">
							<div class="service__imagem-icon">
								<img
									src="../imagens/icon/reservas/traducao.png"
									alt="Interprete"
									srcset=""
								/>
							</div>
						</div>

						<div class="service__info">
							<h3 class="service__info--title">Interprete</h3>
							<hr class="serv-hr s-blue" />
							<p class="service__info--paragrafo">
								Nós temos Interprete para os momentos mais importantes da sua vida.
							</p>
							<p class="service__info--paragrafo"><strong>R$ 150,00</strong></p>
							<button  type="button" class="botaoAdicionar" id="5" name="Interprete" value="150.00"></button>
						</div>
					</div>

					<div class="cards service">
						<div class="service__imagem">
							<div class="service__imagem-icon">
								<img
									src="../imagens/icon/reservas/transporte.png"
									alt="Traslado"
									srcset=""
								/>
							</div>
						</div>
						<div class="service-info">
							<h3 class="service__info--title">Traslado</h3>
							<hr class="serv-hr" />
							<p class="service__info--paragrafo">
								Nós temos traslado para os principais pontos da cidade.
							</p>
							<p class="service__info--paragrafo"><strong>R$ 50,00</strong></p>
							<button  type="button" class="botaoAdicionar" id="6"  name="Traslado" value="50.00"></button>
						</div>
					</div>
				</div>
				<div class="modalBotaoFechar">
					<button onclick="fechaModalServicos()" type="button" class="botaoFechar" id="botaoFechar" >Fechar</button>
				</div>
        </div>
      </section>
</template>
