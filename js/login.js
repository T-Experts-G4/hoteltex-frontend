const user = document.getElementById("user");
const password = document.getElementById("password");
const btnConfirma = document.getElementById("btnConfirma");

const funcionario = {user:"admin", password:"admin"};
const cliente = {user:"client", password:"client"};

btnConfirma.addEventListener("click", (e) => {
    e.preventDefault();

    if (user.value === cliente.user && password.value === cliente.password) {
        window.location.href = "../pages/home.html";
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