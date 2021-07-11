const criarCarta = document.getElementById('criar-carta');
const cartaTexto = document.getElementById('carta-texto');
const cartaGerada = document.getElementById('carta-gerada');
const cartaContador = document.getElementById('carta-contador');
const listOfClasses = [
  {
    0: 'newspaper',
    1: 'magazine1',
    2: 'magazine2',
  },
  {
    0: 'medium',
    1: 'big',
    2: 'reallybig',
  },
  {
    0: 'rotateleft',
    1: 'rotateright',
  },
  {
    0: 'skewleft',
    1: 'skewright',
  }];

cartaContador.innerText = '0';

const getClasses = () => {
  const classlist = [];
  listOfClasses.forEach((style) => {
    const num = Math.trunc(Math.random() * Object.keys(style).length);
    classlist.push(style[num]);
  });
  return classlist;
};

criarCarta.addEventListener('click', () => {
  let letter = cartaTexto.value.trim();
  if (letter === '') {
    cartaGerada.innerText = 'Por favor, digite o conteúdo da carta.';
    cartaContador.innerText = '0';
  } else {
    letter = letter.split(/[ ]+/);
    cartaContador.innerText = `${letter.length}`;

    cartaGerada.innerHTML = '';
    letter.forEach((word) => {
      const span = document.createElement('span');
      span.innerText = `${word} `;
      span.classList.add(...getClasses());
      cartaGerada.appendChild(span);
    });
  }
});

cartaGerada.addEventListener('click', (event) => {
  const word = event.target;
  if (word.tagName === 'SPAN') {
    const list = word.classList;
    word.classList.remove(...list);
    word.classList.add(...getClasses());
  }
});
