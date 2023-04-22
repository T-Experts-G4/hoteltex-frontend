export function resumoServicos(){
    const btnServicos = document.querySelectorAll('.botaoAdicionar');
    const listaServicos = [];

    btnServicos.forEach(btn => {
        btn.addEventListener('click', (e) => {
            listaServicos.push(
                {
                    "id": parseInt(e.target.id),
                    "nome": e.target.name,
                    "valor": parseInt(e.target.value)
                }
            );
            
            localStorage.setItem('listaServicos', JSON.stringify(listaServicos));

            let resumoReserva = JSON.parse(localStorage.getItem('resumoReserva'));

            resumoReserva.servicos = listaServicos;

            localStorage.setItem('resumoReserva', JSON.stringify(resumoReserva));
        })
    })
}