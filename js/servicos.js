// Abrir modal
let modalServicos = document.querySelector('.modal__servicos');
function abreModalServicos() {
  modalServicos.style.display = 'block';
  console.log('Clicou no botão Serviços');
}

// Fechar modal
let botaoFecharModal = document.querySelector('#botaoFechar');
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
    // localStorage.setItem('id', JSON.stringify(id));
    // localStorage.setItem('nome', JSON.stringify(nome));
    // localStorage.setItem('valor', JSON.stringify(valor));
  });
}

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
