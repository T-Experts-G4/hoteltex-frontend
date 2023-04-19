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
                <ul class="container__reservas-list">
                <li>Check-in:</li>
                <span>${reserva.checkin}</span>
                <li>Check-out:</li>
                <span>${reserva.checkout}</span>
                <li>Nome:</li>
                <span>${reserva.cliente.nome}</span>
                <li>Quarto:</li>
                <span>${reserva.quarto[0].numero}</span>
                <li><a href="#"><button>Detalhes</button></a></li>
                </ul>
            </div>`;
        });
    });