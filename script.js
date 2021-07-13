const btnCreate = document.querySelector('#criar-carta');
const letterResult = document.querySelector('#carta-gerada');
const letterInput = document.querySelector('#carta-texto');
const classes = {
  0: {
    0: 'newspaper',
    1: 'magazine1',
    2: 'magazine2',
  },
  1: {
    0: 'medium',
    1: 'big',
    2: 'reallybig',
  },
  2: {
    0: 'rotateleft',
    1: 'rotateright',
  },
  3: {
    0: 'skewleft',
    1: 'skewright',
  },
};
const wordCounter = document.querySelector('#carta-contador');

const allF = {
  create: function newLetter(string, result) {
    const words = string.split(' ');
    for (let index = 0; index < words.length; index += 1) {
      const wordSpace = document.createElement('span');
      result.appendChild(wordSpace);
      wordSpace.innerText = `${words[index]}`;
    }
  },
  checker: function checkText(string) {
    if (string.split(' ').every((x) => x === '')) {
      letterResult.innerText = 'por favor, digite o conteúdo da carta.';
    }
  },
  clearLetter: function clear() {
    letterResult.innerHTML = '';
  },
  randomizer: function randomStyles(param, class1) {
    const toStyle = document.querySelectorAll(param);
    for (let index = 0; index < toStyle.length; index += 1) {
      const a1 = Math.floor(Math.random() * 2);
      const a2 = Math.floor(Math.random() * 3);
      const b1 = Math.floor(Math.random() * 2);
      const b2 = Math.floor(Math.random() * 2);
      toStyle[index].classList.add(class1[a1][a2]);
      toStyle[index].classList.add(class1[b1][b2]);
    }
  },
  wordCount: function words(params) {
    wordCounter.innerText = document.querySelectorAll(params).length;
  },
};

// Event Listener
// Ao clicar criar a carta
btnCreate.addEventListener('click', () => {
  allF.clearLetter();
  allF.checker(letterInput.value);
  allF.create(letterInput.value, letterResult);
  allF.randomizer('span', classes);
  allF.wordCount('span');
});
