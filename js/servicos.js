import { resumoServicos } from "../pages/reservas/resumoServicos.js";
import { totalReserva } from "../pages/reservas/totalReserva.js";

const botaoServicos = document.querySelector('#botaoServicos');
botaoServicos.addEventListener('click', abreModalServicos);

document.querySelector('#botaoFechar').addEventListener('click', fechaModalServicos);

// Abrir modal
const modalServicos = document.querySelector('.modal__servicos');
const listaServicos = document.querySelector('#listaServicos');

function abreModalServicos() {
  modalServicos.style.display = 'block';
  fetch('http://localhost:8080/servicos',{
  method: "GET",
  headers: {
      "Content-Type": "application/json",
  }
})
  .then(function (resposta) {
    return resposta.json();
  }
    ).then(function (servicos) {
      listaServicos.innerHTML = '';
      
      servicos.forEach(function (servico) {
        listaServicos.innerHTML += `
        <div class="cards service">
        <div class="service__imagem">
          <div class="service__imagem-icon">
            <img src="../imagens/icon/reservas/${servico.nome}.png" alt="${servico.nome}" srcset="" />
          </div>
        </div>

        <div class="service__info">
          <h3 class="service__info--title">${servico.nome}</h3>
          <hr class="serv-hr s-green" />
          <p class="service__info--paragrafo">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
          <p class="service__info--paragrafo"><strong>R$ ${servico.preco}</strong></p>
          <button type="button" class="botaoAdicionar" id="${servico.id}" name="${servico.nome}" value="${servico.preco}"></button>
        </div>
      </div>`

      })

      resumoServicos();
    })
}


// Fechar modal
function fechaModalServicos() {
  modalServicos.style.display = 'none';
  calcularServicos();
  totalReserva();
}


let totalServicos = 0;
let listaValores = [];

function calcularServicos() {
  let servicosAdicionados = JSON.parse(localStorage.getItem('listaServicos'));
  let valoresRecebidos = 0;
	let nomeRecebido = '';

  for (let i of servicosAdicionados) {
    valoresRecebidos = parseInt(i.valor);
    listaValores.push(valoresRecebidos);
		nomeRecebido = i.nome;
    inserirDadosTabela(nomeRecebido, valoresRecebidos);
  }

  for (let i = 0; i < listaValores.length; i++) {
    totalServicos += listaValores[i];
    inserirDadosTabelaTotal(totalServicos);
  }
}

//Inserindo dados na tabela


function inserirDadosTabela(nome, valor) {
  let tabela = document.querySelector('#tabela__selecionados');

   tabela.innerHTML += `
			<tr>
			<td>${nome}</td>
			<td>R$ ${valor},00</td>
			</tr>
			`;
}

function inserirDadosTabelaTotal(total) {
  let tabelaTotal = document.querySelector('#tabela__selecionados_total');
  tabelaTotal.innerHTML = `
    <tr>
    <td>Total</td>
    <td>R$ ${total},00</td>
    </tr>
    `;
}

