// create paragraph
const button = document.querySelector('#criar-carta');
const paragraph = document.querySelector('#carta-gerada');
const userInput = document.querySelector('#carta-texto');
const countP = document.querySelector('#carta-contador');

function createP() {
  paragraph.innerHTML = '';
  const input = userInput.value;
  const inputSplited = input.split(' ');

  if (input.trim() === '') {
    const errorSpan = document.createElement('span');
    errorSpan.innerText = 'Por favor, digite o conteúdo da carta.';
    paragraph.appendChild(errorSpan);
  }
  for (let i = 0; i < inputSplited.length; i += 1) {
    const span = document.createElement('span');
    span.innerText = inputSplited[i];
    paragraph.appendChild(span);
  }
  // counter
  countP.innerText = inputSplited.length;
}
button.addEventListener('click', createP);

// set random classe
const styleArray = ['newspaper', 'magazine1', 'magazine2'];
const sizeArray = ['medium', 'big', 'reallybig'];
const rotArray = ['rotateleft', 'rotateright'];
const skewArray = ['skewleft', 'skewright'];

function randomSpan() {
  const allSpan = document.querySelectorAll('span');
  for (let i = 0; i < allSpan.length; i += 1) {
    const sR = Math.floor(Math.random() * styleArray.length);
    const siR = Math.floor(Math.random() * sizeArray.length);
    const rR = Math.floor(Math.random() * rotArray.length);
    const skR = Math.floor(Math.random() * skewArray.length);
    allSpan[i].classList.add(styleArray[sR], sizeArray[siR], rotArray[rR], skewArray[skR]);
  }
}

button.addEventListener('click', randomSpan);

// change only one word

function changeWord(e) {
  const event = e.target;
  const sR = Math.floor(Math.random() * styleArray.length);
  const siR = Math.floor(Math.random() * sizeArray.length);
  const rR = Math.floor(Math.random() * rotArray.length);
  const skR = Math.floor(Math.random() * skewArray.length);

  event.className = '';
  event.classList.add(styleArray[sR], sizeArray[siR], rotArray[rR], skewArray[skR]);
}
paragraph.addEventListener('click', changeWord);
