import {totalReserva} from "./totalReserva.js";

setTimeout(() => {
    const valorDiarias = document.getElementById('diarias');
    const resumoApartamento = document.querySelector('.resumoApartamento');
    const quartoSelecionado = document.querySelectorAll('.selecione_quarto');
    const checkin = document.querySelector('.check-in');
    const checkout = document.querySelector('.check-out');

    const resumoCheckin = document.getElementById('resumoCheckin');
    const resumoCheckout = document.getElementById('resumoCheckout');

    quartoSelecionado.forEach(quarto => {
        quarto.addEventListener('change',(e) => {
            resumoApartamento.innerHTML = parseFloat(e.target.value).toFixed(2);
            
            calcularDiarias();
            totalReserva();

            let resumoReserva = {
                "checkin": checkin.value,
                "checkout": checkout.value,
                "quartos": {
                    "id": e.target.id,
                    "nome": e.target.name,
                    "valor": e.target.value,
                },
            }

            localStorage.setItem('resumoReserva', JSON.stringify(resumoReserva));
        })
    });

    checkin.addEventListener('change', (e) => {
        if(e.target.value == null) {
            return;
        }

        calcularDiarias();
        resumoCheckin.innerHTML = e.target.value;

    })

    checkout.addEventListener('change', (e) => {
        if(e.target.value == null) {
            return;
        }

        calcularDiarias();
        resumoCheckout.innerHTML = e.target.value;
    })

    function calcularDiarias(){
        const d1 = checkin.value == null ? new Date.now() : checkin.value;
        const d2 = checkout.value == null ? new Date.now() : checkout.value;
        const valorQuarto = resumoApartamento.innerHTML == '' ? 0 : resumoApartamento.innerHTML;

        const diffInMs = new Date(d2) - new Date(d1)
        let diffInDays = diffInMs / (1000 * 60 * 60 * 24);

        if(diffInDays == 0) {
            diffInDays = 1;
        }

        const valorTotal = diffInDays * valorQuarto;

        valorDiarias.innerHTML = isNaN(valorTotal) ? 0 : valorTotal.toFixed(2);

        if(!isNaN(valorTotal)) {
            localStorage.setItem('valorDiaria', valorTotal.toFixed(2));
        }   
    }

}, 1000)







