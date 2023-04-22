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
            Almoço para uma experiência mais completa e confortavél
          </p>
          <p class="service__info--paragrafo"><strong>R$ ${servico.preco}</strong></p>
          <button type="button" class="botaoAdicionar" id="1" name="Almoço" value="${servico.preco}"></button>
        </div>
      </div>`

      })
    })
}


// Fechar modal
const botaoFecharModal = document.querySelector('#botaoFechar');
function fechaModalServicos() {
  modalServicos.style.display = 'none';
}

//==================================================================================================

// Captura dados servicos
let id = '';
let nome = '';
let valor = '';
let servicos = [];
let botaoAdicionar = document.querySelectorAll('.botaoAdicionar');
for (let i of botaoAdicionar) {
  i.addEventListener('click', function (e) {
    id = e.target.id;
    nome = e.target.name;
    valor = e.target.value;
    servicos.push({ id, nome, valor });
    i.disabled = true;
    i.style.backgroundColor = '#ccc';
    alimentaLocalStorage(servicos);

  });

  // Alimentando o localStorage
function alimentaLocalStorage(servicos) {
  localStorage.setItem('servicos', JSON.stringify(servicos));
  calcularServicos();
}


let totalServicos = 0;
function calcularServicos() {
  let servicosAdicionados = JSON.parse(localStorage.getItem('servicos'));
  let valoresRecebidos = 0;
	let nomeRecebido = '';
  for (let i of servicosAdicionados) {
    valoresRecebidos = parseInt(i.valor);
		nomeRecebido = i.nome;
  }
	totalServicos += valoresRecebidos;
	inserirDadosTabela(nomeRecebido, valoresRecebidos);
}

//Inserindo dados na tabela
let tabela = document.querySelector('#tabela__selecionados');
let tabelaTotal = document.querySelector('#tabela__selecionados_total');
function inserirDadosTabela(nome, valor) {
   tabela.innerHTML += `
			<tr>
			<td>${nome}</td>
			<td>R$ ${valor},00</td>
			</tr>
			`;

			tabelaTotal.innerHTML = `
			<tr>
			<td>Total</td>
      <td>R$ ${totalServicos},00</td>	
			</tr>
			`;
}
}

