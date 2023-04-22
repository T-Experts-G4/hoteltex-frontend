const reservas = document.querySelector('.reservas');
fetch('http://localhost:8080/reserva/listar',{
method: "GET",
headers: {
    "Content-Type": "application/json",
}})
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.forEach(reserva => {
            reservas.innerHTML += `
            <div class="container__reservas" id="${reserva.id}">
                <ul class="container__reservas-list" id="${reserva.cliente.usuario.id}">
                    <li>Check-in:</li>
                    <span>${reserva.checkin}</span>
                    <li>Check-out:</li>
                    <span>${reserva.checkout}</span>
                    
                    <li>Nome:</li>
                    <span>${reserva.cliente.nome}</span>

                    <li>Quarto:</li>
                    <span>${reserva.quarto[0].numero}</span>
                        
                    <li>
                        ${
                            reserva.cancelada ? `CANCELADA`
                            : `<button type="button" class="cancelarReserva" >Cancelar</button>`
                        }

                    </li>
                </ul>
            </div>`;
        });

        const cancelarReserva = document.querySelector('.cancelarReserva');
        cancelarReserva.addEventListener('click', function(e){
            const idReserva = e.target.parentElement.parentElement.parentElement.id;
            const idUsuario = e.target.parentElement.parentElement.id;

            fetch('http://localhost:8080/reserva/cancelar',{
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    idReserva: idReserva,
                    idUsuario: idUsuario
                }),
            }).then(response => {
                if(response.status == 200){
                    console.log("Reserva cancelada com sucesso!");
                    location.reload();
                }else{
                    console.log("Erro ao cancelar reserva!");
                }
            })
        });
    });

