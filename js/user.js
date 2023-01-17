const nmUser = document.getElementById('nmUser');

console.log(localStorage.getItem('user'));
nmUser.innerText = localStorage.getItem('user');
//reservas - resumo
let checkin = '';
let checkout = '';
let adultos = '';
let criancas = '';

let quartoValor = '';
let quartoNome = '';
let resumoApartamento = document.querySelector('#resumoApartamento');

//alimentando o local storage

window.addEventListener('change', function (e) {
  checkin = document.getElementById('checkin').value;
  checkout = document.getElementById('checkout').value;
  adultos = document.getElementById('adultos').value;
  criancas = document.getElementById('criancas').value;

  localStorage.checkin = checkin;
  localStorage.checkout = checkout;
  localStorage.adultos = adultos;
  localStorage.criancas = criancas;

  quartoValor = e.target.value;
  quartoNome = e.target.name;

  insereDadosReserva();
});


// alimentando o resumo da reserva
let resumoCheckin = document.querySelector('#resumoCheckin');
let resumoCheckout = document.querySelector('#resumoCheckout');
let resumoPessoas = document.querySelector('#resumoPessoas');

function insereDadosReserva() {
    let adultos = parseInt(localStorage.adultos);
    let criancas = parseInt(localStorage.criancas);
    console.log(criancas);
    resumoApartamento.innerText = `${quartoNome}  \n R$ ${quartoValor}`;
    resumoCheckin.innerText = localStorage.checkin.split('-').reverse().join('/');
    resumoCheckout.innerText = localStorage.checkout
      .split('-')
      .reverse()
      .join('/');
    resumoPessoas.innerText = adultos + criancas;
}

//limpando o local storage
window.addEventListener('load', function () {
  localStorage.removeItem('checkin');
  localStorage.removeItem('checkout');
  localStorage.removeItem('adultos');
  localStorage.removeItem('criancas');
});

// selecaoInput.forEach(function(item) {
//   item.addEventListener('change', function(e) {
//     console.log(e.target.value);
//     console.log(e.target.name);
//   })
// })
