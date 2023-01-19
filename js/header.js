let login = `
<a class="header__usuario--cadastro botao__form" href="./cadastro_hospede.html" id="btnCadastro">Cadastre-se</a>
<a class="header__usuario--login botao__form" href="../pages/login.html" id="btnLogin">LOGIN<i class="fa fa-sign-in fa-lg" aria-hidden="true"></i></a>
`
let logout = `
<span id='nmUser'></span>
<a class="header__usuario--login botao__form" href="./home.html" id="btnLogout">LOGOUT<i class="fa fa-sign-out" aria-hidden="true"></i></a>
`

let header = `<div class="header">
    <div class="header__logo">
        <img src="../imagens/Logo1.png" alt="logo" />
    </div>
    <div class="header__titulo">
        <h1>Hotel T.Ex Beach</h1>
    </div>
    <div class="header__usuario">
    ${validaLogin()}
    </div>
</div>
<div class="header__nav">
    <nav class="navbar">
        <a href="./home.html">Inicio</a>
        <a href="./sobre.html">Nosso Hotel</a>
        <a href="./acomodacao.html">Acomodações</a>
        <a href="./gastronomia.html">Gastronomia</a>
        <a href="./contato.html">Contato</a>
    </nav>
</div>`


function validaLogin() {
    if (localStorage.getItem("user") != null) {
        return logout;
    }
    return login;
}

document.querySelector("header").insertAdjacentHTML("afterbegin", header);
let btnLogout = document.getElementById("btnLogout");

btnLogout.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem('user');
    window.location.href = "../pages/home.html";
})