// const elementoImg = document.querySelector(".city-img")

// elementoImg.addEventListener("click", function() {
//     trocarTexto('Novo Título', 'Novo Texto');
//   });

// function trocarTexto(titulo, texto) {
//     document.getElementById('tituloDescricao').innerText = titulo;
//     document.getElementById('textoDescricao').innerText = texto;
//   }

const elemMini1 = document.querySelector(".mini1")
const elemMini2 = document.querySelector(".mini2")
const elemMini3 = document.querySelector(".mini3")
const elemMini4 = document.querySelector(".mini4")
const elemTitulo = document.querySelector("#tituloDescricao")
const elemTexto1 = document.querySelector("#textoDescricao1")
const elemTexto2 = document.querySelector("#textoDescricao2")
const elemTexto3 = document.querySelector("#textoDescricao3")

const elemImg1 = document.querySelector(".imgcard1")
const elemImg2 = document.querySelector(".imgcard2")
const elemImg3 = document.querySelector(".imgcard3")
const elemImg4 = document.querySelector(".imgcard4")

elemMini1.addEventListener("click", trocarTexto)
  
function trocarTexto() {
    elemTitulo.innerText = "Motivos para visitar Barcelona"
    elemTexto1.innerText = "É a capital da comunidade autônoma da Catalunha, Espanha, bem como o segundo município mais populoso do país, com uma população de 1,6 milhōes dentro dos limites da cidade."
    elemTexto2.innerText = "A sua área urbana se estende para além dos limites administrativos da cidade com uma população de cerca de 4,7 milhões de pessoas,"
    elemTexto3.innerText = "sendo a sexta área urbana mais populosa da União Europeia, depois de Paris, Londres, Madri, Ruhr e Milão.É a maior metrópole do Mar Mediterrâneo, localizada na costa entre as foz dos rios Llobregat e Besòs, e limitada ao oeste pela Serra de Collserola, cujo pico mais alto é de 512 metros de altura"  
    elemImg1.src = "imgs/barcelona/barca1.jpg"
    elemImg2.src = "imgs/barcelona/barca4.jpg"
    elemImg3.src = "imgs/barcelona/barca3.jpg"
    elemImg4.src = "imgs/barcelona/barcelona-praia2-850x514.jpg"
  }

  elemMini2.addEventListener("click", trocarTexto2)

  function trocarTexto2() {
    elemTitulo.innerText = "Motivos para visitar Madrid"
    elemTexto1.innerText = "Madrid, a capital espanhola, encanta visitantes por sua rica história, cultura vibrante e experiências gastronômicas únicas. "
    elemTexto2.innerText = "Os icônicos pontos turísticos, como o Palácio Real e a Puerta de Alcalá, revelam a grandiosidade arquitetônica da cidade. Além disso, os museus renomados, como o Prado, e a animada vida noturna com bares de tapas e flamenco fazem de Madrid um destino culturalmente enriquecedor."
    elemTexto3.innerText = "A culinária local, presente em mercados como o de San Miguel, oferece uma deliciosa imersão na rica tradição gastronômica espanhola. Em resumo, Madrid é uma combinação cativante de patrimônio, cultura e sabores autênticos."
     elemImg1.src = "imgs/Madrid/madrid.jpg"
     elemImg2.src = "imgs/Madrid/madrid4.jpg"
     elemImg3.src = "imgs/Madrid/madrid8.jpg"
     elemImg4.src = "imgs/Madrid/madrid5.jpg"
 }
 elemMini3.addEventListener("click", trocarTexto3)

  function trocarTexto3() {
    elemTitulo.innerText = "Motivos para visitar Monstserrat"
    elemTexto1.innerText = "Montserrat, situada perto de Barcelona, é um destino espanhol notável por suas paisagens espetaculares e significado espiritual. O destaque é a formação rochosa única, oferecendo vistas panorâmicas incríveis."
    elemTexto2.innerText = "No Mosteiro de Montserrat, os visitantes podem explorar a história religiosa e apreciar apresentações do coro de meninos da Escolania de Montserrat."
    elemTexto3.innerText = "A região também é ideal para caminhadas, proporcionando uma escapada tranquila que une natureza, cultura e espiritualidade em um só lugar."
    elemImg1.src = "imgs/Montserrat/mont6.jpg"
    elemImg2.src = "imgs/Montserrat/monte2.jpg"
    elemImg3.src = "imgs/Montserrat/mont10.jpg"
    elemImg4.src = "imgs/Montserrat/mont11.jpg"
 }

 elemMini4.addEventListener("click", trocarTexto4)

  function trocarTexto4() {
    elemTitulo.innerText = "Motivos para visitar Toledo"
    elemTexto1.innerText = "Toledo, uma cidade espanhola repleta de encanto, é um destino imperdível por suas ricas tradições históricas e arquitetônicas. Situada às margens do rio Tejo, a cidade é conhecida por sua impressionante mistura de influências cristãs, judaicas e muçulmanas."
    elemTexto2.innerText = " O motivo primordial para visitar Toledo é o seu centro histórico, declarado Patrimônio Mundial pela UNESCO, onde os visitantes podem explorar ruas de paralelepípedos, praças encantadoras e monumentos históricos, como a catedral gótica e o Alcázar medieval."
    elemTexto3.innerText = "Além disso, Toledo é famosa por sua tradição artesanal na produção de aço damasquino e em seus produtos de marcenaria. Os visitantes podem passear pelos mercados locais para apreciar e adquirir artesanato tradicional, tornando a visita uma experiência cultural única. Com sua rica herança cultural e vistas deslumbrantes, Toledo oferece uma jornada cativante ao passado da Espanha, proporcionando aos visitantes uma experiência enriquecedora e autêntica."
    elemImg1.src = "imgs/Toledo/toledo4.jpg"
    elemImg2.src = "imgs/Toledo/toledo.jpg"
    elemImg3.src = "imgs/Toledo/toledo7.jpg"
    elemImg4.src = "imgs/Toledo/toledo5.jpg"
 }
