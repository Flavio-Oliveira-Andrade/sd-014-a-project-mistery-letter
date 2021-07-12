const button = document.querySelector('#criar-carta');
const paragrafo = document.querySelector('#carta-gerada');
const classes = ['newspaper', 'magazine1', 'magazine2', 'medium', 'big', 'reallybig', 'rotateleft', 'rotateright', 'skewleft', 'skewright'];
const contador = document.querySelector('#carta-contador');

function geraCarta() {
  const input = document.querySelector('#carta-texto');
  const regex = /\w/g;
  if (!regex.test(input.value)) {
    paragrafo.innerText = 'Por favor, digite o conteúdo da carta.';
    input.value = '';
    return;
  }
  const arrayInput = input.value.split(' ');
  console.log(arrayInput);
  paragrafo.innerText = '';
  for (const i of arrayInput) {
    const index = Math.ceil(Math.random() * classes.length) - 1;
    const span = document.createElement('span');
    span.innerText = i;
    span.className = classes[index];
    paragrafo.appendChild(span);
  }
  contador.innerText = arrayInput.length;
}

button.addEventListener('click', geraCarta);
