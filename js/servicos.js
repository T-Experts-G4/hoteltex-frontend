let botaoServicos = document.querySelector('#botaoServicos');

botaoServicos.addEventListener('click', function (event) {
  event.preventDefault();
  abreModalServicos();
  console.log('Clicou no botão Serviços');
});

// Abrir modal

let modal = document.querySelector('.modal');
function abreModalServicos() {
  modal.style.display = 'block';   
}

// Fechar modal
let botaoFecharModal = document.querySelector("#botaoFechar");
function fechaModalServicos() {
	modal.style.display = "none";
}
botaoFecharModal.addEventListener("click", fechaModalServicos);

// Adicionar servicos
let id = '';
let nome = '';
let valor = '';
let botaoAdicionar = document.querySelectorAll('.botaoAdicionar');
for(let i of botaoAdicionar){
i.addEventListener("click", function (e) {
	// e.target.classList.toggle("botaoAdicionar--ativo");
	id = e.target.id;
	nome = e.target.name;
	valor = e.target.value;
	console.log(nome);
	// adicionarServicos();
	alimentaLocalStorage(id, nome, valor);
});
console.log(id);
console.log(nome);
console.log(valor);
}

// Alimentando o localStorage

let servicos = [];
function alimentaLocalStorage(id, name, value){	
	servicos.push({id, name, value
	});
	localStorage.setItem('servicos', JSON.stringify(servicos));
}










