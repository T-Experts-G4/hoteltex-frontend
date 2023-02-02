<template>
<HeaderComponent />
<NavbarComponent />
<main>
        <section id="hotel" class="form__container">
            <h1>Cadastro Conta Hospede</h1>
            <p>Preencha seus dados para criar uma nova conta</p>
            <!-- Início do formulário -->
            <form class="form__width">
                <!-- Campo de Nome -->
                <input  type="text" name="nome" id="nome" placeholder="Nome Completo"
                    required>
                <!-- Campo de email -->
                <input type="email" name="email" id="email" placeholder="E-mail"
                    required>
                <!-- Campo de Telefone -->
                <input  type="tel" name="phone" id="phone" placeholder="(xx)9xxxx-xxxx"
                    pattern="\([0-9]{2}\)[9]{1}[0-9]{4}-[0-9]{4}" required>
                <!-- Campo de Senha -->
                <input type="password" name="Senha" id="senha"
                    placeholder="Escolha uma Senha segura" required>
                <input type="password" name="confirma-senha" id="confirma-senha"
                    placeholder="Confirmar Senha" required>
                <!-- Botão para enviar o formulário -->
                <button class="botao__form" type="submit" onsubmit="">Criar Conta</button>
            </form>
        </section>
    </main>
<FooterComponent />
</template>

<script>

import NavbarComponent from '@/components/NavbarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'

export default {
  name: 'GastronomiaView',
  components: {
    NavbarComponent, FooterComponent, HeaderComponent
  }
}
</script>
