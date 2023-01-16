const nmUser = document.getElementById("nmUser");

console.log(localStorage.getItem('user'));
nmUser.innerText = localStorage.getItem('user');

//reservas - resumo
var checkin = document.getElementById('checkin')
var checkout = document.getElementById('checkout')
var adultos = document.getElementById('adultos')
var criancas = document.getElementById('criancas')
var quarto = document.getElementsByName('quarto')

//alimentando o local storage
document.getElementById('checkin').addEventListener('change',function(){localStorage.checkin  = checkin.value; });
document.getElementById('checkout').addEventListener('change',function(){localStorage.checkout = checkout.value; });
document.getElementById('adultos').addEventListener('change',function(){localStorage.adultos  = adultos.value; });
document.getElementById('criancas').addEventListener('change',function(){localStorage.criancas = criancas.value;});

console.log(quarto.value)

// alimentando o resumo da reserva
resumoCheckin.innerText = localStorage.checkin.split('-').reverse().join('/')
resumoCheckout.innerText = localStorage.checkout.split('-').reverse().join('/')
resumoPessoas.innerText = parseInt(localStorage.adultos) + parseInt(localStorage.criancas)