const user = document.getElementById("user");
const password = document.getElementById("password");
const btnLogin = document.getElementById("btnLogin");
const btnFuncionario = document.getElementById("btnLoginFun");

const funcionario = {user:"admin", password:"admin"};
const cliente = {user:"client", password:"client"};

btnLogin.addEventListener("click", (e) => {
    e.preventDefault();

    if (user.value === cliente.user && password.value === cliente.password) {
        window.location.href = "../../index.html";
        localStorage.setItem('user', cliente.user);
        console.log("Logado");
    }else if (user.value === funcionario.user && password.value === funcionario.password){
        window.location.href = "./admin/home_admin.html";
        localStorage.setItem('user', funcionario.user);
        console.log("Logado");
    }else {
        console.log("Usuario e senha invalida");
    }
})

