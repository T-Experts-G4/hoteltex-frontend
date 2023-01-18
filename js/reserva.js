const nmUser = document.getElementById('nmUser');

nmUser.innerText = localStorage.getItem('user');

//reservas - resumo
let checkin = '';
let checkout = '';
let adultos = '';
let criancas = '';

let quartoValor = 0.00;
let quartoNome = '';
let total = '';
let dias = '' ;
let resumoApartamento = document.querySelector('#resumoApartamento');

//alimentando o local storage

window.addEventListener('change', function(e) {
  checkin = document.getElementById('checkin').value;
  checkout = document.getElementById('checkout').value;
  adultos = document.getElementById('adultos').value;
  criancas = document.getElementById('criancas').value;
  
  let diff = new Date(checkout) - new Date(checkin);
  dias = diff / (1000*60*60*24);
  

  localStorage.quartoValor = quartoValor;
  localStorage.checkin = checkin;
  localStorage.checkout = checkout;
  localStorage.adultos = adultos;
  localStorage.criancas = criancas;
  localStorage.dias = dias
  
  recebeValorNomeQuarto(e);
  localStorage.quartoValor = quartoValor

  localStorage.total = ((parseInt(localStorage.adultos) + parseInt(localStorage.criancas)) * parseInt(localStorage.quartoValor)).toFixed(2) * dias;

  insereDadosReserva();
});

function recebeValorNomeQuarto(e) {
  e.preventDefault()
 quartoValor = (document.querySelector('input[name="quarto"]:checked').value !== '') ? document.querySelector('input[name="quarto"]:checked').value : null
   // quartoNome = e.target.name;
   //quartoValor = e.target.value;
}


// alimentando o resumo da reserva
// let resumoCheckin = document.querySelector('#resumoCheckin');
// let resumoCheckout = document.querySelector('#resumoCheckout');
// let resumoPessoas = document.querySelector('#resumoPessoas');


function insereDadosReserva() {
    let adultos = parseInt(localStorage.adultos);
    let criancas = parseInt(localStorage.criancas);
    //resumoApartamento.innerText = `R$ ${quartoValor}`;
    resumoApartamento.innerText = `R$ ${localStorage.quartoValor}`;
    resumoCheckin.innerText = localStorage.checkin.split('-').reverse().join('/');
    resumoCheckout.innerText = localStorage.checkout.split('-').reverse().join('/');
    resumoPessoas.innerText = adultos + criancas;
}

//limpando o local storage
window.addEventListener('load', function () {
  localStorage.removeItem('checkin');
  localStorage.removeItem('checkout');
  localStorage.removeItem('adultos');
  localStorage.removeItem('criancas');
  localStorage.removeItem('quartoValor');
  localStorage.removeItem('total');
  localStorage.removeItem('dias');
});

// selecaoInput.forEach(function(item) {
//   item.addEventListener('change', function(e) {
//     console.log(e.target.value);
//     console.log(e.target.name);
//   })
// })
