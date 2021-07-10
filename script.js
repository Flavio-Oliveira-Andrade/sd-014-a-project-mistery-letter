const criarCarta = document.getElementById('criar-carta');
const cartaTexto = document.getElementById('carta-texto');
const cartaGerada = document.getElementById('carta-gerada');
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

const getClasses = () => {
  const classlist = [];
  listOfClasses.forEach((style) => {
    const num = Math.trunc(Math.random() * style.length);
    classlist.push(style[num]);
  });
  return classlist;
};

criarCarta.addEventListener('click', () => {
  let letter = cartaTexto.value.trim();
  if (letter === '') {
    cartaGerada.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    letter = letter.split(/[ ]+/);
    cartaGerada.innerHTML = '';
    letter.forEach((word) => {
      const span = document.createElement('span');
      span.innerText = `${word} `;
      span.classList = getClasses();
      cartaGerada.appendChild(span);
    });
  }
});
