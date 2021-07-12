// Constantes e Variáveis
const btnCarta = document.querySelector('#criar-carta');
const inputCarta = document.querySelector('#carta-texto');
const pCarta = document.querySelector('#carta-gerada');
// Ao clicar no botão gera a carta
btnCarta.addEventListener('click', () => {
  const texto = inputCarta.value.split(' ');
  function gerarSpan(item) {
    const palavra = document.createElement('span');
    const spanGerado = pCarta.appendChild(palavra);
    spanGerado.innerText = item;
  }
  texto.forEach(gerarSpan);
});
