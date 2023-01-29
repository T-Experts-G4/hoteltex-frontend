<template>
  <nav class="navbar header__nav">
    <router-link to="/">INICIO</router-link>
    <router-link to="/about">NOSSO HOTEL</router-link>
    <router-link to="/acomodacoes">ACOMODAÇÕES</router-link>
    <router-link to="/gastronomia">GASTRONOMIA</router-link>
    <router-link to="/contato">CONTATO</router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComponent'
}
</script>
