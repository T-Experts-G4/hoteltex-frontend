<template>
<div class="modalSection disable">
                        <h2>Confirmar a reserva ?</h2>
                        <div class="ajustaModal">
                          <div class="botaoFechaModal">
                            <div class="ajustaFechaModal">
                              <button type="button" onclick="modal()">X</button>
                            </div>
                          </div>
                          <div class="alinhaSaidas">
                            <div class="ajustaInfoSaida">
                              <div class="primeiraColuna">
                                <h4>Preço Apartamento:</h4>
                                <p id="quartosModal"></p>
                                <h4>Check-In:</h4>
                                <p id="checkinModal"></p>
                                <h4>Check-Out:</h4>
                                <p id="checkoutModal"></p>
                                <h4>Adultos:</h4>
                                <p id="adultoModal"></p>
                              </div>
                              <div class="hotel__lado_resumo-servicos primeiraColuna">
                        <span>Serviços adicionados</span>
                        <table id="tabela__selecionados_modal-resumo">

                        </table>
                        <table id="tabela__selecionados_modal-resumo-total">

                        </table>
                      </div>
                              <div class="segundaColuna">
                                <h4>Crianças:</h4>
                                <p id="criancaModal"></p>
                                <h4>Total de dias:</h4>
                                <p id="diasModal"></p>
                                <h4>Valor total:</h4>
                                <p id="totalModal">R$</p>
                              </div>
                              <div class="terceiraColuna">
                                <h2>Acomodação</h2>
                                <img src="" id="imagensQuarto">
                              </div>
                            </div>
                          </div>
                          <div class="botaoModal">
                              <button type="submit">Confirmar</button>
                          </div>
                        </div>
                      </div>
</template>
