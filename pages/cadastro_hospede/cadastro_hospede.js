function cadastroHospede(){
    const name = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const telefone = document.getElementById('telefone').value;

    // Endereço
    const cep = document.getElementById('cep').value;
    const logradouro = document.getElementById('logradouro').value;
    const complemento = document.getElementById('complemento').value;
    const bairro = document.getElementById('bairro').value;
    const localidade = document.getElementById('localidade').value;
    const uf = document.getElementById('uf').value;

    // Dados do Usuario
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const cliente = {
        nome: name,
        cpf: cpf,
        telefone: telefone,
        endereco: {
            cep: cep,
            logradouro: logradouro,
            complemento: complemento,
            bairro: bairro,
            localidade: localidade,
            uf: uf
        },
        usuario: {
            email: email,
            senha: senha
        }
    }

    fetch('http://localhost:8080/cliente/cadastra', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cliente)
    })
    .then(response => {
        if(response.ok){
            alert('Usuário cadastrado com sucesso!');
        }else{
            throw new Error('Não foi possível cadastrar o usuário');
        }
    })

}

const buttonCriarConta = document.getElementById('criarConta');

buttonCriarConta.addEventListener('click', cadastroHospede);