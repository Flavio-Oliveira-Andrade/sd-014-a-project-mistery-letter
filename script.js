const letterDisplay = document.querySelector('#carta-gerada');
const writeDown = document.querySelector('#carta-texto');
const inputBtn = document.querySelector('#criar-carta');
const wordCount = document.querySelector('#carta-contador');

// style randomizer. Lint HATES it
function RandomizeStyle(word) {
  const styleRandom = Math.floor(Math.random() * 4);
  const sizeRandom = Math.floor(Math.random() * 4);
  const rotationRandom = Math.floor(Math.random() * 3);
  const skewRandom = Math.floor(Math.random() * 3);
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
    default:
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
    default:
    break;
  }
  switch (rotationRandom) {
    case 0:
      word.classList.add('rotateleft');
    break;
    case 1:
      word.classList.add('rotateright');
    break;
    default:
    break;
  }
  switch (skewRandom) {
    case 0:
      word.classList.add('skewleft');
    break;
    case 1:
      word.classList.add('skewright');
    break;
    default:
    break;
  }
  console.log(word.classList);
  return word;
}

// each word in input is put into the letter in individual span tags
function AddRansom() {
  letterDisplay.innerHTML = '';
  if (writeDown.value === '' || writeDown.value === ' ') {
    letterDisplay.innerHTML = 'Por favor, digite o conteúdo da carta.';
    return;
  }
  const rnsmWords = writeDown.value.split(' ');
  wordCount.innerText = rnsmWords.length;
  for (let i = 0; i < rnsmWords.length; i += 1) {
    const rnsmBlock = document.createElement('span');
    RandomizeStyle(rnsmBlock);
    rnsmBlock.innerText = rnsmWords[i];
    letterDisplay.appendChild(rnsmBlock);
  }
}

// add event listener corner
inputBtn.addEventListener('click', AddRansom);
