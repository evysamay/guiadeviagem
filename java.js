const elem = document.querySelector('.carrossel');
const flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  autoPlay: true,
  wrapAround: true,
}
);

const schearchWrapper = document.querySelector(".schearch")
const inputBox = schearchWrapper.querySelector("#pesquisa")
const sugestBox = schearchWrapper.querySelector( ".autocomplete")
const icon = schearchWrapper.querySelector("#bnt-submit")
let linkTag = schearchWrapper.querySelector ("a") 
let webLink;

inputBox.onkeyup = (e) => {
  let userData = e.target.value;
  let emptyArray = []

  if(e.key == "Enter"){
    if(userData){
      window.open(`https://www.google.com/search?q=${userData}`, `_blank`)
    }
  }
  if(userData){
    icon.onclick = () =>{
      webLink =`https://www.google.com/search?q=${userData}`
      linkTag.setAttribute(`href`, webLink)
      linkTag.click()
    }
    emptyArray = sugestoes.filter( (data) =>{
      return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase())
    } );
    emptyArray = emptyArray.map((data)=>{
      return data = `<li>${data}</li>`;
    })
    schearchWrapper.classList.add(`active`)
    showSuggestions(emptyArray)
    let allList = sugestBox.querySelectorAll('li')
    for (let i = 0; i < allList.length; i++) {
      allList[i].setAttribute('onclick', 'select(this)')

    }      
    }
  }
  function select(element){
    let selectData = element.textContent
    inputBox.value = selectData
    icon.onclick = () =>{
      webLink =`https://www.google.com/search?q=${selectData}`
      linkTag.setAttribute(`href`, webLink)
      linkTag.click()
    }
    schearchWrapper.classList.remove('active')
  }


function showSuggestions(list){
  let listData
  if(list.length){
    userValue = inputBox.value;
    listData = `<li>${userData}</li>`
  }else{
    listData = list.join('')
  }
  sugestBox.innerHTML = listData


}


const elemAno = document.querySelector(".anonovo")
const paisagemUm = document.querySelector(".paisagem")
const paisagemDois = document.querySelector(".span-family")
const paisagemTres = document.querySelector(".span-coliseu")
const paisagemQuatro = document.querySelector(".span-viagem")
const elemDiv = document.querySelector(".photos")
const buttonA = document.querySelector(".after")
const h2Um = document.querySelector(".noticia")
const h2Dois = document.querySelector(".span-2")
const h2Tres = document.querySelector(".span-3")
const h2Quatro = document.querySelector(".span-4")
const h2Cinco = document.querySelector(".span-5")



let imgAtual = 1;

buttonA.addEventListener("click", trocarImgs);

function trocarImgs() {
 
  if (imgAtual === 1) {
    elemAno.src = "img/natalgramado.jpg";
    paisagemUm.src = "img/mykonos2.jpg";
    paisagemDois.src = "img/italiaaside.webp";
    paisagemTres.src = "img/voo.jpeg";
    paisagemQuatro.src = "img/quiz.jpg";
    h2Um.textContent = "O Natal mais iluminado do Brasil";
    h2Dois.textContent = " Mykonos o paraíso da Grécia";
    h2Tres.textContent = "A beleza das cidades Italianas";
    h2Quatro.textContent = "Melhores companhias aéreas para viajar";
    h2Cinco.textContent = "";


    h2Um.style.left = "15px";
    h2Dois.style.fontSize = "20px";
    h2Dois.style.bottom = "50px";
    h2Tres.style.fontSize = "20px";
    h2Tres.style.bottom = "30px";
    

    imgAtual = 2;
  }  else  {
    elemAno.src = "img/anonovo.webp";
    paisagemUm.src = "img/paisagem5.jpg";
    paisagemDois.src = "img/familiaviagem.jpg";
    paisagemTres.src = "img/coliseu.jpg";
    paisagemQuatro.src = "img/viagem2.jpg";
    
    h2Um.textContent = "Réveillon na praia - Dicas de atrações,praias e muito mais";
    h2Dois.textContent = "Por que viajar faz bem para a saúde?";
    h2Tres.textContent = "Melhores locais para você e sua familia";
    h2Quatro.textContent = "As Sete Maravilhas do Mundo";
    h2Cinco.textContent = "Paisagens mais exóticas do mundo";
    imgAtual = 1;
    h2Tres.style.fontSize = "17px";
    h2Tres.style.rigth = "20px";
    h2Tres.style.bottom = "45px";
    
  }


  
}





const allAccount = document.querySelector(".all-account")
const iconLogin = document.querySelector(".login-icon")
const bntPesquisa = document.querySelector("#pesquisa")
const bntSubmit = document.querySelector("#bnt-submit")

iconLogin.addEventListener ("click",showForm)

function showForm(){
  allAccount.style.display = allAccount.style.display === "block" ? "none" : "block";
  
  const formVisible = allAccount.style.display === "block";
   bntSubmit.style.display = formVisible ? "none" : "block"; 
   bntPesquisa.style.display = formVisible ? "none" : "block";
 
} 

const iconMenu = document.querySelector(".bx bx-menu")
const divMenu = document.querySelector (".menu-hamburguer")


iconMenu.addEventListener ("click", showMenu)
function showMenu(){

  
}












// buttonA.addEventListener("click",trocarImgs)
// buttonB.addEventListener("click", reverterImgs)
// let imgAtual = 1
// let imgdoisAtual = 2
// let imgtresAtual = 3
// let imgquatroAtual = 4
// let imgcincoAtual = 5 
// let paragrafoAtual = "um";
// let paragrafoDois = "dois";
// let paragrafoTres = "tres";
// let paragrafoQuatro = "quatro";
// let paragrafoCinco = "cinco";
// function trocarImgs() { 
//   if ( imgAtual = 1 && 
//     imgdoisAtual == 2 && 
//     imgtresAtual == 3 &&
//      imgquatroAtual == 4 &&
//       imgcincoAtual == 5 && 
//       paragrafoAtual === "um" &&
//     paragrafoDois === "dois" &&
//     paragrafoTres === "tres" &&
//     paragrafoQuatro === "quatro" &&
//     paragrafoCinco === "cinco"
//   )
//   {
//     elemAno.src = "img/natalgramado.jpg"
//     paisagemUm.src = "img/mykonos2.jpg"
//     paisagemDois.src = "img/italiaaside.webp"
//     paisagemTres.src = "img/voo.jpeg"
//     paisagemQuatro.src = "img/quiz.jpg"
//     h2Um.textContent = "O Natal mais iluminado do Brasil"
//     h2Dois.textContent = " Mykonos o paraíso da Grécia"
//     h2Tres.textContent = "A beleza das cidades Italianas"
//     h2Quatro.textContent = "Melhores companhias aéreas para viajar"
//     h2Cinco.textContent = ""

//     h2Um.style.left = "15px"
//     h2Um.style.fontSize = "30px"
//     h2Dois.style.fontSize = "20px"
//     h2Dois.style.bottom = "25px"
//     h2Dois.style.left = "15px"
//     h2Tres.style.fontSize = "20px"
//     h2Quatro.style.fontSize = "22px"
//     h2Quatro.style.bottom = "50px"
//     h2Quatro.style.right = "15px"
//     h2Quatro.style.left = "20px"
  
//   }
//  }

//    function reverterImgs() {
//     if (imgAtual === 2) {
//       elemAno.src = "img/anonovo.webp";
//       paisagemUm.src = "img/paisagem5.jpg";
//       paisagemDois.src = "img/familiaviagem.jpg";
//       paisagemTres.src = "img/coliseu.jpg";
//       paisagemQuatro.src = "img/viagem2.jpg";
  
//       imgAtual = 1;
    
//     }
//   }


// const elemAno = document.querySelector(".anonovo");
// const paisagens = document.querySelectorAll(".paisagem, .span-family, .span-coliseu, .span-viagem");
// const elemDiv = document.querySelector(".photos");
// const buttonA = document.querySelector(".after");
// const h2 = document.querySelector(".noticia");

// buttonA.addEventListener("click", trocarImgs);

// let currentIndex = 0;

// const imagens = ["img/voo.jpeg", "img/japan3.jpg", "img/japan3.jpg", "img/japan3.jpg", "img/japan3.jpg"];
// const textos = ["Novo Texto", "Texto 2", "Texto 3", "Texto 4", "Texto 5"];
// const estilos = [{ color: "red", fontWeight: "bold" }, {}, {}, {}, {}];

// function trocarImgs() {
//   if (currentIndex < imagens.length) {
//     elemAno.src = imagens[currentIndex];
//     paisagens.forEach(paisagem => paisagem.src = imagens[currentIndex]);
//     h2.textContent = textos[currentIndex];

//     const estiloAtual = estilos[currentIndex];
//     for (const propriedade in estiloAtual) {
//       h2.style[propriedade] = estiloAtual[propriedade];
//     }

//     currentIndex++;
//   }
// }