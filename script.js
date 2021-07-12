const input = document.querySelector('#carta-texto');
const button = document.querySelector('#criar-carta');
const paragrafo = document.querySelector('#carta-gerada');

function separaPalavras() {
  if (input.value === '' || input.value === ' ') {
    paragrafo.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    const palavras = input.value.split(' ');
    paragrafo.innerText = '';
    for (let i = 0; i < palavras.length; i += 1) {
      const palavra = document.createElement('span');
      palavra.innerText = palavras[i];
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
