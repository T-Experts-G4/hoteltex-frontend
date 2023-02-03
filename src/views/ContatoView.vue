<template>
<HeaderComponent />
<NavbarComponent />
 <main>
        <section id="hotel" class="form__container">
            <h1>Contato</h1>
            <p>Deseja saber algo sobre o Hotel T.EX? Preencha os campos abaixo e envie sua mensagem.</p>
            <p>Em breve, alguém da nossa equipe entrará em contato. Muito obrigado.</p>
            <!-- Início do formulário -->
            <form class="form__width">
                <!-- Campo do nome-->
                <input type="text" name="nome" id="nome" placeholder="Nome Completo" required>

                <!-- Campo de email -->
                <input type="email" name="email" id="email" placeholder="E-mail" required>

                <!-- Campo de Telefone -->
                <input  type="tel" name="phone" id="phone" placeholder="(xx)9xxxx-xxxx"
                    pattern="\([0-9]{2}\)[9]{1}[0-9]{4}-[0-9]{4}" required>

                <!-- Campo de assunto -->
                <select name="assunto" id="assunto" required>
                    <option selected disabled value="">Selecione</option>
                    <option>Financeiro</option>
                    <option>Comercial</option>
                    <option>Sac</option>
                </select>

                <!-- Caixa de texto -->
                <textarea  rows="6" id="mensagem" name="mensagem" placeholder="Escreva sua mensagem..."></textarea>

                <!-- Botão para enviar o formulário -->
                <button class="botao__form" type="submit" onsubmit="">Enviar Contato</button>
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
  name: 'ContatoView',
  components: {
    NavbarComponent, FooterComponent, HeaderComponent
  }
}
</script>
