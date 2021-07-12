const createLetterBtn = document.getElementById('criar-carta');
const inputTxt = document.getElementById('carta-texto');
const generatedLetter = document.getElementById('carta-gerada');
const wordsCounter = document.getElementById('carta-contador');

function addStyleClass(span) {
  const random = Math.random();
  if (random < 0.33) {
    span.classList.add('newspaper');
  } else if (random < 0.66) {
    span.classList.add('magazine1');
  } else {
    span.classList.add('magazine2');
  }
}

function addSizeClass(span) {
  const random = Math.random();
  if (random < 0.33) {
    span.classList.add('medium');
  } else if (random < 0.66) {
    span.classList.add('big');
  } else {
    span.classList.add('reallybig');
  }
}

function addRotationClass(span) {
  const random = Math.random();
  if (random < 0.5) {
    span.classList.add('rotateleft');
  } else {
    span.classList.add('rotateright');
  }
}

function addInclinationClass(span) {
  const random = Math.random();
  if (random < 0.50) {
    span.classList.add('skewleft');
  } else {
    span.classList.add('skewright');
  }
}

function crazyClasses(span) {
  addStyleClass(span);
  addSizeClass(span);
  addRotationClass(span);
  addInclinationClass(span);
}

createLetterBtn.addEventListener('click', () => {
  generatedLetter.innerHTML = '';
  if (!inputTxt.value.replace(/\s/g, '').length) {
    generatedLetter.innerText = 'Por favor, digite o conteúdo da carta.';
    wordsCounter.innerText = '0';
  } else {
    const array = inputTxt.value.split(' ');
    wordsCounter.innerText = array.length;
    for (let index = 0; index < array.length; index += 1) {
      const word = document.createElement('span');
      word.innerText = array[index];
      crazyClasses(word);
      generatedLetter.appendChild(word);
    }
  }
});
