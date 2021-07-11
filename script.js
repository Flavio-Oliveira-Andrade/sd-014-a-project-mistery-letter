const letterDisplay = document.querySelector('#carta-gerada');
const writeDown = document.querySelector('#carta-texto');
const inputBtn = document.querySelector('#criar-carta');


// each word in input is put into the letter in individual span tags
function AddRansom() {
  letterDisplay.innerHTML = '';
  if (writeDown.value === '' || writeDown.value === ' ') {
    letterDisplay.innerHTML = 'Por favor, digite o conteúdo da carta.';
    return;
  }
  const rnsmWords = writeDown.value.split(' ');
  for (let i = 0; i < rnsmWords.length; i += 1) {
    const rnsmBlock = document.createElement('span');
    RandomizeStyle(rnsmBlock);
    rnsmBlock.innerText = rnsmWords[i];
    letterDisplay.appendChild(rnsmBlock);
  }
}

function RandomizeStyle(word) {
  let styleRandom = Math.floor(Math.random() * 4);
  let sizeRandom = Math.floor(Math.random() * 4);
  let rotationRandom = Math.floor(Math.random() * 3);
  let skewRandom = Math.floor(Math.random() * 3);
  switch (styleRandom) {
    case 0:
      word.classList.add('newspaper');
      break;
    case 1:
      word.classList.add('magazine1');
      break;
    case 2:
      word.classList.add('magazine2');
      break;
    case 3:
      break;
  }
  switch (sizeRandom) {
    case 0:
      word.classList.add('medium');
      break;
    case 1:
      word.classList.add('big');
      break;
    case 2:
      word.classList.add('reallybig');
      break;
    case 3:
      break;
  }
  switch (rotationRandom) {
    case 0:
      word.classList.add('rotateleft');
      break;
    case 1:
      word.classList.add('rotateright');
      break;
    case 2:
      break;
  }
  switch (skewRandom) {
    case 0:
      word.classList.add('skewleft');
      break;
    case 1:
      word.classList.add('skewright');
      break;
    case 2:
      break;
  }
  console.log(word.classList);
  return word;
}

// add event listener corner
inputBtn.addEventListener('click', AddRansom);
