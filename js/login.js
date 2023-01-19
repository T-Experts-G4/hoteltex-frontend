const user = document.getElementById("user");
const password = document.getElementById("password");
const btnConfirma = document.getElementById("btnConfirma");

const funcionario = { user: "admin", password: "admin" };
const cliente = { user: "client", password: "client" };

btnConfirma.addEventListener("click", (e) => {
    e.preventDefault();

    if (user.value === cliente.user && password.value === cliente.password) {
        window.location.href = "./home.html";
        localStorage.setItem('user', cliente.user);
        console.log("Logado");
    }else if (user.value === funcionario.user && password.value === funcionario.password){
        localStorage.setItem('user', funcionario.user);
        window.location.href = "./admin/home_admin.html";

    } else {
        console.log("Usuario e senha invalida");
    }
});