const hotelGrid = document.querySelector('.hotel__grid');
fetch('http://localhost:8080/hotel/1/listaQuartosDisponiveis', {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },
})
    .then(response => response.json())
    .then(hotels => {
        hotels.forEach(hotel => {
            hotelGrid.innerHTML += `
            <div class="hotel__card">
            <div class="hotel__card_image">
              <img src="../imagens/acomodacoes/apart02.jpg" alt="">
            </div>
            <div>
              <span class="hotel__card_detalhes">
                <span class="hotel__titulo_card">
                  Executive
                </span>
                <span class="texto_card">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed beatae enim praesentium.
                  Molestias illum perspiciatis neque reiciendis! Tempore quod ipsa autem placeat minima
                  consectetur exercitationem praesentium, facilis repudiandae modi quam et quibusdam
                  tempora quaerat voluptatum deserunt atque?
                </span>
                <span class="hotel__quarto_valor">${hotel.preco}</span>
                <input type="radio" name="quarto" value=${hotel.preco} />Selecionar o Apartamento Executive
              </span>
            </div>`
        })
    })