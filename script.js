const input = document.querySelector('#carta-texto');
const button = document.querySelector('#criar-carta');
const paragrafo = document.querySelector('#carta-gerada');
const estilo = ['newspaper', 'magazine1', 'magazine2'];
const tamanho = ['medium', 'big', 'reallybig'];
const rotacao = ['rotateleft', 'rotateright'];
const inclinacao = ['skewleft', 'skewright'];
const grupos = [estilo, tamanho, rotacao, inclinacao];

function classes() {
  const grupo1 = Math.floor(Math.random() * 4);
  let grupo2 = Math.floor(Math.random() * 4);
  if (grupo1 === grupo2) {
    if (grupo2 === 0) {
      grupo2 += 1;
    } else if (grupo2 <= 3) {
      grupo2 -= 1;
    }
  }
  const index1 = Math.floor(Math.random() * grupos[grupo1].length);
  const index2 = Math.floor(Math.random() * grupos[grupo2].length);
  let classe1 = grupos[grupo1];
  classe1 = classe1[index1];
  let classe2 = grupos[grupo2];
  classe2 = classe2[index2];
  return (classe1, classe2);
  // console.log(classe1);
  // console.log(classe2);
}

function separaPalavras() {
  if (input.value === '' || input.value === ' ') {
    paragrafo.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    const palavras = input.value.split(' ');
    paragrafo.innerText = '';
    for (let i = 0; i < palavras.length; i += 1) {
      const palavra = document.createElement('span');
      palavra.innerText = palavras[i];
      palavra.classList.add(classes());
      palavra.classList.add(classes());
      paragrafo.appendChild(palavra);
    }
  }
  console.log(paragrafo);
}

function excluiSpans() {
  const span = paragrafo.children;
  if (span.length > 0) {
    for (let i = span.length - 1; i >= 0; i -= 1) {
      paragrafo.removeChild(span[i]);
    }
  }
  separaPalavras();
}

button.addEventListener('click', excluiSpans);
