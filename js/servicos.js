// Abrir modal
let modalServicos = document.querySelector('.modal__servicos');
function abreModalServicos() {
  modalServicos.style.display = 'block';
	   console.log('Clicou no botão Serviços');
}

// Fechar modal
let botaoFecharModal = document.querySelector("#botaoFechar");
function fechaModalServicos() {
	modalServicos.style.display = "none";
}

// Captura dados servicos
let id = '';
let nome = '';
let valor = '';
let servicos = [];
let botaoAdicionar = document.querySelectorAll('.botaoAdicionar');
for(let i of botaoAdicionar){
i.addEventListener("click", function (e) {
  id = e.target.id;
  nome = e.target.name;
  valor = e.target.value;
  servicos.push({id, nome, valor});
	verificaServicoJaAdicionado(id, nome, valor);
});
}

// Alimentando o localStorage

function alimentaLocalStorage(id, name, value){
	verificaServicoJaAdicionado(id, name, value);
	calcularServicos();
}

let servicosStorage = JSON.parse(localStorage.getItem('servicos'));

function verificaServicoJaAdicionado(id, name, value) {
	if(!servicos.includes(id)){
		console.log(id)
		console.log('Serviço já adicionado');
		console.log(servicos)
		localStorage.setItem('servicos', JSON.stringify(servicos));
	} else {
		// servicos.push({id, name, value});
	}
}

function calcularServicos(){
	let servicos = JSON.parse(localStorage.getItem('servicos'));	
}

//Inserindo dados na tabela
let tabela = document.querySelector('#tabela__selecionados');
let tabelaTotal = document.querySelector('#tabela__selecionados_total');
function inserirDadosTabela(){
	let servicos = JSON.parse(localStorage.getItem('servicos'));
	let total = 0;
	console.log(servicos);
	for(let i of servicos){
		if(i.id == id){
			tabela.innerHTML += `
			<tr>
			<td>${i.name}</td>
			<td>${i.value}</td>
			</tr>
			`;
			total += parseInt(i.value);
			tabelaTotal.innerHTML = `R$ ${+total}`	
			console.log(total)
		} else {
			console.log('Serviço já adicionado');
		}
	}
}











