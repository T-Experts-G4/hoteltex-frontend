export function totalReserva(){
    const totalGeral = document.querySelector('#totalGeral');
    let valorServico = 0;
    const valorDiaria = localStorage.getItem('valorDiaria');
    const listaServicos = localStorage.getItem('listaServicos') ? JSON.parse(localStorage.getItem('listaServicos')) : [];
    
    listaServicos.forEach(servico => {
        valorServico += servico.valor;
    })


    const totalReserva = parseFloat(valorDiaria) + parseFloat(valorServico);

    totalGeral.innerHTML = totalReserva;
    localStorage.setItem('totalReserva', totalReserva);
    
}