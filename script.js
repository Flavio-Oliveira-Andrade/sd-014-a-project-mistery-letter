const input = document.getElementById('carta-texto');
const par = document.getElementById('carta-gerada');
const btn = document.getElementById('criar-carta');
const contador = document.getElementById('carta-contador');

contador.innerText = document.getElementsByTagName('span').length;

const estilo = ['newspaper', 'magazine1', 'magazine2', 'rotateleft', 'rotateright'];
const sizegp = ['medium', 'big', 'reallybig', 'skewleft', 'skewright'];

function checkNull() {
  if (input.value === '') {
    par.innerText = 'Por favor, digite o conteúdo da carta.';
    return 'close';
  }
}

function checkSpaces() {
  const palavra = input.value;
  let textual = '';

  for (let t = 0; t < palavra.length; t += 1) {
    textual += ' ';
  }

  if (textual === palavra) {
    par.innerText = 'Por favor, digite o conteúdo da carta.';
    return 'close';
  }
  checkNull();
}

function wcount() {
  contador.innerText = document.getElementsByTagName('span').length;
}
function clear() {
  while (par.firstChild) {
    par.removeChild(par.firstChild);
  }
}
function String(texting) {
  const span = document.createElement('span');
  span.innerText = texting;
  span.className += `${estilo[Math.floor(Math.random() * 5)]} `;
  span.className += sizegp[Math.floor(Math.random() * 5)];
  par.appendChild(span);
}
function lastString(texting) {
  const lastSpan = document.createElement('span');
  lastSpan.className += `${estilo[Math.floor(Math.random() * 5)]} `;
  lastSpan.className += sizegp[Math.floor(Math.random() * 5)];
  lastSpan.innerText = texting;
  par.appendChild(lastSpan);
}

function gerar() {
  const palavra = input.value;
  clear();
  if (checkSpaces() !== 'close') {
    let string = '';
    for (let i = 0; i < palavra.length; i += 1) {
      if (input.value[i] !== ' ') {
        string += input.value[i];
      } else {
        String(string);
        string = '';
      }
    }
    lastString(string);
  }
  wcount();
}

btn.addEventListener('click', gerar);
