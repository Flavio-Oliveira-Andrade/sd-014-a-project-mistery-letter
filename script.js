const btnCarta = document.querySelector('#criar-carta');
const inputCarta = document.querySelector('#carta-texto');
const pCarta = document.querySelector('#carta-gerada');

btnCarta.addEventListener('click', () => {
  const texto = inputCarta.value;
  const textoDividido = texto.split(' ');

  textoDividido.forEach(gerarSpan);

  function gerarSpan(item) {
    const palavra = document.createElement('span');
    const spanGerado = pCarta.appendChild(palavra);
    spanGerado.innerText = item;
  }
});
