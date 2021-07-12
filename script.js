const input = document.querySelector('#carta-texto');
const createLetter = document.querySelector('#criar-carta');
const letterContent = document.querySelector('#carta-gerada');
const countWords = document.querySelector('#carta-contador');
const classes = [
  'newspaper',
  'magazine1',
  'magazine2',
  'medium',
  'big',
  'reallybig',
  'rotateleft',
  'rotateright',
  'skewleft',
  'skewright',
];

function changeLetter() {
  if (input.value.trim() === '') return 'Por favor, digite o conteúdo da carta.';
  const arr = input.value.split(' ');
  const spans = arr.map((e) => (
    `<span class="${classes[Math.round(Math.random() * (classes.length - 1))]}">${e}</span>`
  ));
  countWords.innerText = input.value.split(' ').length;
  return spans.join('');
}

createLetter.addEventListener('click', () => {
  letterContent.innerHTML = changeLetter();
});
