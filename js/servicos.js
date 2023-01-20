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

let servicosStorage = JSON.parse(localStorage.getItem('servicos'));
let totalServecos = 0;
function calcularServicos() {
  let servicosAdicionados = JSON.parse(localStorage.getItem('servicos'));
  let valoresRecebidos = 0;
  for (let i of servicosAdicionados) {
    valoresRecebidos += parseInt(i.valor);
  }
  totalServecos = valoresRecebidos;
  console.log(totalServecos);
  console.log(servicosAdicionados);
  // document.querySelector('#total__servicos').innerHTML = `R$ ${+total}`;
}

//Inserindo dados na tabela
let tabela = document.querySelector('#tabela__selecionados');
let tabelaTotal = document.querySelector('#tabela__selecionados_total');
function inserirDadosTabela() {
  let servicos = JSON.parse(localStorage.getItem('servicos'));
  console.log(servicos);

  tabela.innerHTML += `
			<tr>
			<td>${i.nome}</td>
			<td>${i.valor}</td>
			</tr>
			`;
  tabelaTotal.innerHTML = `R$ ${+totalServecos}`;
  console.log(totalServecos);
}
