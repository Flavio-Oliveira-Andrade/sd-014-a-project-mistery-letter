const input = document.querySelector('#carta-texto');
const title = document.querySelector('#title');
const createLetter = document.querySelector('#criar-carta');
const letterContent = document.querySelector('#carta-gerada');
const countWords = document.querySelector('#carta-contador');

const classes = {
  background: [
    'newspaper',
    'magazine1',
    'magazine2',
  ],
  size: [
    'medium',
    'big',
    'reallybig',
  ],
  rotation: [
    'rotateleft',
    'rotateright',
  ],
  skew: [
    'skewleft',
    'skewright',
  ],
};

function generateStyle() {
  return (
    `${classes.background[Math.round(Math.random() * (classes.background.length - 1))]
    } ${classes.size[Math.round(Math.random() * (classes.size.length - 1))]
    } ${classes.rotation[Math.round(Math.random())]
    } ${classes.skew[Math.round(Math.random())]}`
  );
}

title.innerHTML = `<span class="${generateStyle()
}">Mystery</span><span class="${generateStyle()}">Letter</span>`;

function changeLetter() {
  if (input.value.trim() === '') return 'Por favor, digite o conteúdo da carta.';
  const arr = input.value.split(' ');
  const spans = arr.map((e) => (
    `<span class="${generateStyle()}">${e}</span>`
  ));
  countWords.innerText = input.value.split(' ').length;
  return spans.join('');
}

createLetter.addEventListener('click', () => {
  letterContent.innerHTML = changeLetter();
});

console.log(generateStyle());
