const classes1 = ['newspaper', 'magazine1', 'magazine2'];
const classes2 = ['medium', 'big', 'reallybig'];
const classes3 = ['rotateleft', 'rotateright'];
const classes4 = ['skewleft', 'skewright'];

const paragrafo = document.getElementById('carta-gerada');

function gerarCarta() {
  const input = document.getElementById('carta-texto').value;
  const array = input.split(' ');
  for (let i = 0; i < array.length; i += 1) {
    const span = document.createElement('span');
    span.innerText = array[i];
    const x1 = Math.floor(Math.random() * 3);
    const nomeClasse1 = classes1[x1];
    const x2 = Math.floor(Math.random() * 3);
    const nomeClasse2 = classes2[x2];
    const x3 = Math.floor(Math.random() * 2);
    const nomeClasse3 = classes3[x3];
    const x4 = Math.floor(Math.random() * 2);
    const nomeClasse4 = classes4[x4];
    span.classList.add(nomeClasse1, nomeClasse2, nomeClasse3, nomeClasse4);
    paragrafo.appendChild(span);
  }
  console.log(paragrafo);
}

const criar = document.getElementById('criar-carta');
criar.addEventListener('click', gerarCarta);
