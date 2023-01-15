const user = document.getElementById("user");
const password = document.getElementById("password");
const btnLogin = document.getElementById("btnLogin");
const btnFuncionario = document.getElementById("btnLoginFun");
const funcionario = {user:"admin", password:"admin"};
const cliente = {user:"client", password:"client"};



// Teste Local storage

function testeLocal () {
    if (user.value === cliente.user && password.value === cliente.password) {
        localStorage.setItem("userB","cliente");
        window.location.href = "./admin/reservas_admin.html";
    }else if (user.value === funcionario.user && password.value === funcionario.password){
        localStorage.setItem("user","funcionario");
        window.location.href = "./admin/home_admin.html";
    }else {
        alert("Usuario e/ou senha invalida");
    }
}

// Login Home e Reservas

const nomeUsuarioADM = document.getElementById("nome-usuario");
const nomeUsuarioCliente = document.getElementById("nome-usuario-reserva")
const nomeLogadoADM = localStorage.getItem("user");
const nomeLogadoCliente = localStorage.getItem("userB");


nomeUsuarioADM.innerHTML = nomeLogadoADM;
nomeUsuarioCliente.innerHTML = nomeLogadoCliente;





















// btnLogin.addEventListener("click", (e) => {
//     e.preventDefault();
//     if (user.value === cliente.user && password.value === cliente.password) {
//         window.location.href = "./admin/reservas_admin.html";
//         console.log("Logado");
//     }else if (user.value === funcionario.user && password.value === funcionario.password){
//         localStorage.setItem("user","funcionario");
//         window.location.href = "./admin/home_admin.html";
//         console.log("Logado");
//     }else {
//         alert("Usuario e/ou senha invalida");
//     }
// })