const user = document.getElementById("user");
const password = document.getElementById("password");
const btnConfirma = document.getElementById("btnConfirma");
const erroAutentic = document.getElementById("erroAutentic");

const funcionario = { user: "admin", password: "admin" };
const cliente = { user: "client", password: "client" };

btnConfirma.addEventListener("click", (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: user.value,
            senha: password.value,
        }),

    })
    .then(response => response.json())
    .then((data) => {
        localStorage.setItem('user', data.email);
        localStorage.setItem('userId', data.id);

            if (data.usuarioRole === "USUARIO") {
                window.location.href = "./home.html";
                console.log("Logado");
            }else if (data.usuarioRole === "ADMIN"){
                window.location.href = "./admin/home_admin.html";

            } else {
                console.log("Usuario e senha invalida");
                erroAutentic.classList.remove("d-none")
            }


        }
    );
});