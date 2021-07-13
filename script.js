const inputText = document.getElementById('carta-texto');
const writeButton = document.getElementById('criar-carta');
const misteryLetter = document.getElementById('carta-gerada');
const wordsCount = document.getElementById('carta-contador');

const cssClasses = {
  style: ['newspaper', 'magazine1', 'magazine2'],
  size: ['medium', 'big', 'reallybig'],
  rotate: ['rotateleft', 'rotateright'],
  skew: ['skewleft', 'skewright'],
};

// Fonte e interessante discussão sobre random numbers!
// https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomFrom(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function addRandomClasses(element) {
  let numOfTypesToAdd = randomFrom(2, 4);
  const typeList = Object.keys(cssClasses);
  while (numOfTypesToAdd > 0) {
    const typeIndex = randomFrom(0, typeList.length - 1);
    const chosenType = typeList[typeIndex];
    const classIndex = randomFrom(0, cssClasses[chosenType].length - 1);
    const chosenClass = cssClasses[chosenType][classIndex];
    element.classList.add(chosenClass);
    typeList.splice(typeIndex, 1);
    numOfTypesToAdd -= 1;
  }
}

function writeLetter() {
  if (inputText.value.trim() === '') {
    misteryLetter.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    misteryLetter.innerHTML = '';
    const words = inputText.value.split(' ');
    wordsCount.innerText = words.length;
    words.forEach((word) => {
      const span = document.createElement('span');
      span.innerText = word;
      addRandomClasses(span);
      misteryLetter.append(span);
    });
  }
}

writeButton.addEventListener('click', writeLetter);
