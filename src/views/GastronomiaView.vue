<template>
<HeaderComponent />
<NavbarComponent />
 <main>
      <section>
        <h2 class="gastronomia_titulo">Gastronomia</h2>
        <div class="gastronomia_img">
            <div>
                <img src="../assets/imagens/gastronomia/gastronomia.jpg" alt="">
            </div>
            <div>
                <img src="../assets/imagens/gastronomia/drink.jpg" alt="">
            </div>
            <div>
                <img src="../assets/imagens/gastronomia/gastronomia04.jpg" alt="">
            </div>
        </div>
        <div class="gastronomia_container01">
            <div>
                <img src="../assets/imagens/gastronomia/restaurante02.jpg" alt="">
            </div>
            <div class="gastronomia_box01">
                <p>ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem accusamus non facilis nemo necessitatibus at eveniet sapiente dolorem provident? Libero, odit. Officia rem laborum, deserunt, laboriosam quidem temporibus dolores quaerat quas maxime tenetur aliquid cupiditate, voluptatum itaque deleniti similique.</p>
            </div>
        </div>
        <div class="gastronomia_container01">
            <div>
               <img src="../assets/imagens/gastronomia/bar.jpg" alt="">
            </div>
            <div class="gastronomia_box01">
                ipsum dolor sit amet consectetur adipisicing elit. Quam laboriosam quisquam iusto quia debitis cumque necessitatibus nisi accusamus vero, assumenda quibusdam recusandae sed accusantium ad dolor quo quas qui sunt aut aliquid est error vel sint! Voluptatum voluptatibus fugit quae?
            </div>
        </div>
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
