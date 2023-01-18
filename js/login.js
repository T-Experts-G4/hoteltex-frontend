const user = document.getElementById("user");
const password = document.getElementById("password");
const btnLogin = document.getElementById("btnLogin");
const btnFuncionario = document.getElementById("btnLoginFun");

const funcionario = { user: "admin", password: "admin" };
const cliente = { user: "client", password: "client" };

btnLogin.addEventListener("click", (e) => {
    e.preventDefault();

    if (user.value === cliente.user && password.value === cliente.password) {
        localStorage.setItem("user", cliente.user);
        const token = Math.random().toString(32).substring(2);
        localStorage.setItem("token", token);
        window.location.href = "../../index.html";

    } else if (user.value === funcionario.user && password.value === funcionario.password) {
        localStorage.setItem("user", funcionario.user);
        const token = Math.random().toString(32).substring(2);
        localStorage.setItem("token", token);
        window.location.href = "./admin/home_admin.html";

    } else {
        console.log("Usuario e senha invalida");
    }
});

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
