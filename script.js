const input = document.querySelector('#carta-texto');
const button = document.querySelector('#criar-carta');
const paragrafo =document.querySelector('#carta-gerada');

function separaPalavras() {
  const palavras = input.value.split(" ");
  for (let i of palavras) {
    const palavra = document.createElement('span');
    palavra.innerText = i;
    paragrafo.appendChild(palavra);
  }
  console.log(paragrafo);
}
button.addEventListener('click', separaPalavras);