const input = document.getElementById('carta-texto');
const par = document.getElementById('carta-gerada');
const btn = document.getElementById('criar-carta');
const contador = document.getElementById('carta-contador');

let wCount = 0;

contador.innerText = document.getElementsByTagName('span').length;

const estilo = ['newspaper', 'magazine1', 'magazine2', 'rotateleft', 'rotateright'];
const sizegp = ['medium', 'big', 'reallybig', 'skewleft', 'skewright'];
// const rotgp = ['rotateleft', 'rotateright'];
// const skewgp = ['skewleft', 'skewright'];

function checkSpaces() {
  const palavra = input.value;
  if (palavra[0] === ' ') {
    for (const index in palavra) {
      let contaEspaco = 0;
      if (palavra[index] === ' ') {
        contaEspaco += 1;
      }
      if (palavra.length === contaEspaco) {
        return 'close';
      }
    }
  }
}

function checkNull() {
  if (input.value === '') {
    return 'close';
  }
}

function gerar() {
  const palavra = input.value;
  while (par.firstChild) {
    par.removeChild(par.firstChild);
  }

  wCount = 0;
  if (checkSpaces() === 'close' || checkNull === 'close') {
    par.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    let string = '';
    for (const i in palavra) {
      if (input.value[i] !== ' ') {
        string += input.value[i];
      } else {
        // string += ' '
        const span = document.createElement('span');
        span.innerText = string;
        span.className += `${estilo[Math.floor(Math.random() * 5)]} `;
        span.className += sizegp[Math.floor(Math.random() * 5)];
        // span.className += rotgp[Math.floor(Math.random()*2)] + " "
        // span.className += skewgp[Math.floor(Math.random()*2)]
        string = '';
        par.appendChild(span);
        wCount += 1;
        // par.innerText += ' '
      }
    }
    const lastSpan = document.createElement('span');
    lastSpan.className += `${estilo[Math.floor(Math.random() * 5)]} `;
    lastSpan.className += sizegp[Math.floor(Math.random() * 5)];
    // lastSpan.className += rotgp[Math.floor(Math.random()*2)] + " "
    // lastSpan.className += skewgp[Math.floor(Math.random()*2)]
    lastSpan.innerText = string;
    wCount += 1;
    par.appendChild(lastSpan);
  }
  contador.innerText = wCount;
}
btn.addEventListener('click', gerar);
