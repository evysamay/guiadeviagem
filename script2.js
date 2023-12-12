const elemMini = document.querySelector(".mini-1")
const elemMinii = document.querySelector(".mini-2")
const elemMiniii = document.querySelector(".mini-3")
const elemMiniiii= document.querySelector(".mini-4")
const elemTitulo = document.querySelector("#tituloDescricao")
const elemTexto1 = document.querySelector("#textoDescricao1")
const elemTexto2 = document.querySelector("#textoDescricao2")
const elemTexto3 = document.querySelector("#textoDescricao3")

const elemImg1 = document.querySelector(".imgcard-1")
const elemImg2 = document.querySelector(".imgcard-2")
const elemImg3 = document.querySelector(".imgcard-3")
const elemImg4 = document.querySelector(".imgcard-4")

elemMini.addEventListener("click", trocarTexto)
  
function trocarTexto() {
    elemTitulo.innerText = "Motivos para visitar Cairo"
    elemTexto1.innerText = "Cairo, a capital do Egito, é uma cidade que merece ser explorada por seus ricos tesouros históricos e culturais. As icônicas Pirâmides de Gizé e a majestosa Esfinge são a atração principal, proporcionando aos visitantes uma visão direta da grandiosidade da antiga civilização egípcia. Essas estruturas antigas, que remontam a milênios, são testemunhas de uma história fascinante e oferecem uma experiência única para quem busca entender a profundidade da cultura egípcia."
    elemTexto2.innerText = "A experiência cairota também se estende aos seus mercados vibrantes, como o famoso Khan El Khalili. Este mercado é um labirinto de vielas repletas de lojas que oferecem desde especiarias exóticas até artesanato local."
    elemTexto3.innerText = "Explorar esses mercados não só proporciona uma visão autêntica da vida cotidiana no Cairo, mas também permite saborear a rica culinária egípcia. Assim, Cairo se revela como uma cidade onde a história se entrelaça com a vida contemporânea, proporcionando uma viagem enriquecedora e memorável."  

    elemImg1.src = "Egito/cairoo2.webp"
    elemImg2.src = "Egito/cairoo.webp"
    elemImg3.src = "Egito/cairoo5.webp"
    elemImg4.src = "Egito/cairoo4.webp"
  }

  elemMinii.addEventListener("click", trocarTexto2)

  function trocarTexto2() {
    elemTitulo.innerText = "Motivos para visitar Luxor"
    elemTexto1.innerText = "Luxor, a antiga Tebas, é uma cidade egípcia que se destaca como um museu ao ar livre repleto de história e monumentos arqueológicos. Às margens majestosas do Rio Nilo, Luxor é especialmente conhecida pelos templos de Luxor e Karnak, ambos testemunhos imponentes da grandiosidade da civilização egípcia"

    elemTexto2.innerText = "O Vale dos Reis, situado nas proximidades, é o local de descanso final de faraós notáveis, como Tutancâmon."

    elemTexto3.innerText = "A atmosfera mística e a riqueza arqueológica fazem de Luxor uma cidade fascinante para os apaixonados pela história antiga, proporcionando uma jornada envolvente pelos vestígios de um passado glorioso."
     elemImg1.src = "Egito/luxor-capa.jpg"
     elemImg2.src = "Egito/luxor4.webp"
     elemImg3.src = "Egito/luxor2.webp"
     elemImg4.src = "Egito/luxor3.webp"
 }
 elemMiniii.addEventListener("click", trocarTexto3)

  function trocarTexto3() {
    elemTitulo.innerText = "Motivos para visitar Alexandria"
    elemTexto1.innerText = "Alexandria, situada às margens do Mar Mediterrâneo, é uma metrópole que respira a fusão única entre a herança egípcia e as influências greco-romanas. A cidade abriga a Biblioteca de Alexandria, uma reconstrução moderna da lendária biblioteca que foi um farol do conhecimento na antiguidade."

    elemTexto2.innerText = "O Farol de Alexandria, uma das Sete Maravilhas do Mundo Antigo, é um lembrete imponente da riqueza histórica da cidade."

    elemTexto3.innerText = "Com suas ruas repletas de história e cultura, Alexandria oferece aos visitantes uma experiência enriquecedora que conecta o passado e o presente de maneira extraordinária."
    elemImg1.src = "Egito/Cidade-de-Alexandria-na-Historia-Biblica.jpg.webp"
    elemImg2.src = "Egito/alee6.jpg"
    elemImg3.src = "Egito/ale3.webp"
    elemImg4.src = "Egito/ale4.webp"
 }

 elemMiniiii.addEventListener("click", trocarTexto4)

  function trocarTexto4() {
    elemTitulo.innerText = "Motivos para visitar Assuã"
    elemTexto1.innerText = "Assuã, localizada no sul do Egito, às margens do Rio Nilo, é uma cidade singular que combina paisagens deslumbrantes com maravilhas arquitetônicas."

    elemTexto2.innerText = "A Represa de Assuã, uma proeza da engenharia moderna, controla as águas do Nilo, fornecendo energia para a região e criando o extenso Lago Nasser. A Pedreira de Granito de Unfinished Obelisk destaca a perícia artesanal dos antigos egípcios, revelando o processo de esculpir os imponentes obeliscos."

    elemTexto3.innerText = "Além de suas atrações monumentais, Assuã oferece uma atmosfera tranquila e acolhedora, tornando-a um refúgio encantador para quem busca uma experiência relaxante à beira do rio."
    elemImg1.src = "Egito/assua9.jpg"
    elemImg2.src = "Egito/assua6.jpg"
    elemImg3.src = "Egito/assua.jpg"
    elemImg4.src = "Egito/assua8.jpg"
 }
