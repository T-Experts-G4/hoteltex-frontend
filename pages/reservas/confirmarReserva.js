export function confirmarReserva(){
    const confirmarReserva = document.querySelector('.confirmarReserva');

    confirmarReserva.addEventListener('click', () => {
        const dados = JSON.parse(localStorage.getItem('resumoReserva'));

        const reserva = {
            "checkin": dados.checkin,
            "checkout": dados.checkout,
            "quartos": [dados.quartos.id],
            "servicos": [
                dados.servicos.forEach(servico => {
                    return servico.id;
                })
            ],
            "idCliente": JSON.parse(localStorage.getItem('userId')),
            "idFuncionario": 1,
        }

        fetch('http://localhost:8080/reserva/cadastra', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reserva),
        })
        .then(resposta => {
            if(resposta.ok){
                alert('Reserva realizada com sucesso!');
                location.reload();
            }
        })
    })
}

confirmarReserva()