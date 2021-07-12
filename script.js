const btnCreate = document.getElementById('criar-carta');
const cartaGerada = document.getElementById('carta-gerada');
const textInput = document.getElementById('carta-texto');
const contador = document.getElementById('carta-contador');

const estilo = ['newspaper', 'magazine1', 'magazine2'];
const tamanho = ['medium', 'big', 'reallybig'];
const rotacao = ['rotateleft', 'rotateright'];
const inclinacao = ['skewleft', 'skewright'];

function rdn(array) {
  return array[Math.floor(Math.random() * array.length)];
  // https://stackoverflow.com/questions/9286473/whats-the-equivalent-of-sample-in-javascript
}

function createLetter() {
  const words = textInput.value.split(' ');
  contador.innerHTML = words.length;
  while (cartaGerada.firstChild) {
    cartaGerada.removeChild(cartaGerada.lastChild);
  }
  if (words === [] || textInput.value.trim().length === 0) { // https://stackoverflow.com/questions/10261986/how-to-detect-string-which-contains-only-spaces
    cartaGerada.innerHTML = 'Por favor, digite o conteúdo da carta.';
  } else {
    for (let i = 0; i < words.length; i += 1) {
      const letter = document.createElement('span');
      letter.innerHTML = words[i];
      letter.className = [rdn(estilo), rdn(tamanho), rdn(rotacao), rdn(inclinacao)].join(' ');
      cartaGerada.appendChild(letter);
      
    }
  }
}

btnCreate.addEventListener('click', createLetter);

function changeStyle(event) {
  event.target.className = [rdn(estilo), rdn(tamanho), rdn(rotacao), rdn(inclinacao)].join(' ');
}

cartaGerada.addEventListener('click', changeStyle);
