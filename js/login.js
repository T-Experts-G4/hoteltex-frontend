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
    
            if (data.usuarioRole === "USUARIO") {
            window.location.href = "./home.html";
            localStorage.setItem('user', data.email);
            console.log("Logado");
            }else if (data.usuarioRole === "ADMIN"){
                localStorage.setItem('user', data.email);
                window.location.href = "./admin/home_admin.html";

            } else {
                console.log("Usuario e senha invalida");
                erroAutentic.classList.remove("d-none")
            }

        }
    );
});