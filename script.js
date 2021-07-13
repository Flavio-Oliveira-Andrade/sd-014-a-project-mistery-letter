const getButton = document.getElementById("criar-carta");
const getParagraph = document.getElementById("carta-gerada");
const getInput = document.getElementById("carta-texto");
const getCont = document.getElementById("carta-contador")

function verifyInput() {
  // Condição retirada do Stack Overflow https://pt.stackoverflow.com/questions/58498/se-input-tiver-apenas-espa%C3%A7os-em-branco-n%C3%A3o-fazer-nada
  if (getInput.value.match(/^(\s)+$/)) {
    return true;

  }
}

function makeLetter() {

  getButton.addEventListener("click", function (event) {
    getParagraph.innerText = " ";
    if (!getInput.value) {
      getParagraph.innerText = "Por favor, digite o conteúdo da carta."
    } else if (verifyInput() === true) {
      getParagraph.innerText = "Por favor, digite o conteúdo da carta."
    } else {

      let array = getInput.value.split(" ");
      getCont.innerHTML = "Número de Palavras: " + array.length;


      for (let index = 0; index < array.length; index += 1) {
        let makeSpan = document.createElement("span");
        makeSpan.className += addClassStyle() + ' ';
        makeSpan.className += addClassTam() + ' ';
        makeSpan.className += addClassRot() + ' ';
        makeSpan.className += addClassInc();


        makeSpan.innerHTML = array[index];
        getParagraph.appendChild(makeSpan);
      }


    }
  })

}
makeLetter();

function addClassStyle() {
  let style = ['newspaper', 'magazine1', 'magazine2'];
  let aleat = Math.floor(Math.random() * 3);


  return style[aleat];
}

function addClassTam() {
  let tamanho = ['medium', 'big', 'reallybig'];
  let aleat = Math.floor(Math.random() * 3);


  return tamanho[aleat];
}

function addClassRot() {
  let rot = ['rotateleft', 'rotateright'];
  let aleat = Math.floor(Math.random() * 2);


  return rot[aleat];
}

function addClassInc() {
  let inc = ['skewleft', 'skewright'];
  let aleat = Math.floor(Math.random() * 2);


  return inc[aleat];

}
