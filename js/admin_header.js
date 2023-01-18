let header = `<div class="header">
    <div class="header__logo">
        <img src="../../imagens/Logo1.png" alt="logo" />
    </div>
    <div class="header__titulo">
        <h1>Hotel T.Ex Beach</h1>
    </div>
    <div class="header__usuario">
    <span id='nmUser'></span>
    <a class="header__usuario--login botao__form" href="../home.html" id="btnLogout">LOGOUT<i class="fa fa-sign-out" aria-hidden="true"></i></a>
    </div>
</div>
<div class="header__nav">
    <nav class="navbar">
        <a href="/">Inicio</a>
        <a href="/pages/sobre.html">Nosso Hotel</a>
        <a href="/pages/acomodacao.html">Acomodações</a>
        <a href="/pages/gastronomia.html">Gastronomia</a>
        <a href="/pages/contato.html">Contato</a>
    </nav>
</div>`

document.querySelector("header").insertAdjacentHTML("afterbegin", header);
let btnLogout = document.getElementById("btnLogout");

btnLogout.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem('user');
    window.location.href = "../home.html";
})