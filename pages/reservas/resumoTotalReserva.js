export function resumoTotalReserva(){
    const botaoContinua = document.querySelector('#botaoContinua');
    const modalSection = document.querySelector('.modalSection');
    const fechaModalConfirmar = document.querySelector('#fechaModalConfirmar');

    const quartosModal = document.querySelector('#quartosModal');

    const checkinModal = document.querySelector('#checkinModal');
    const checkoutModal = document.querySelector('#checkoutModal');

    const diasModal = document.querySelector('#diasModal');
    const totalModal = document.querySelector('#totalModal');

    botaoContinua.addEventListener('click', () => {

        modalSection.classList.remove('disable');

        const dados = JSON.parse(localStorage.getItem('resumoReserva'));


        quartosModal.innerHTML = dados.quartos.valor;
        checkinModal.innerHTML = dados.checkin;
        checkoutModal.innerHTML = dados.checkout;

        diasModal.innerHTML =  JSON.parse(localStorage.getItem('valorDiaria'));
        totalModal.innerHTML = JSON.parse(localStorage.getItem('totalReserva'));

        dados.servicos.forEach(servico => {
            let tabela = document.querySelector('#tabela__selecionados_modal-resumo');

            tabela.innerHTML += `
                     <tr>
                     <td>${servico.nome}</td>
                     <td>R$ ${parseFloat(servico.valor)}</td>
                     </tr>
                     `;

                    
        });


    })

    fechaModalConfirmar.addEventListener('click', () => {
        modalSection.classList.add('disable');
    })

}


resumoTotalReserva()