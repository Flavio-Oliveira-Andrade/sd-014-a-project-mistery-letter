const input = document.querySelector('#carta-texto');
const button = document.querySelector('#criar-carta');
const paragrafo = document.querySelector('#carta-gerada');

function excluiSpans() {
  const span = paragrafo.children;
  if (span.length > 0) {
    for (let i = span.length - 1; i >= 0; i -= 1) {
      paragrafo.removeChild(span[i]);
    }
  }
  separaPalavras();
}

function separaPalavras() {
  if (input.value === '' || input.value == ' ') {
    paragrafo.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    const palavras = input.value.split(' ');
    paragrafo.innerText = '';
    for (let i of palavras) {
      const palavra = document.createElement('span');
      palavra.innerText = i;
      paragrafo.appendChild(palavra);
    }
  }
  console.log(paragrafo);
}
button.addEventListener('click', excluiSpans);
