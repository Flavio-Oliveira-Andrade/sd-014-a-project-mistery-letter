const paragrafoCarta = document.getElementById('carta-gerada');
const btnCriarCarta = document.getElementById('criar-carta');
const inputCarta = document.getElementById('carta-texto');

btnCriarCarta.addEventListener('click', function () {
  if (inputCarta.value !== String) {
    paragrafoCarta.innerText = 'Por favor, digite o conteúdo da carta.'
  } else {
    const separador = inputCarta.value.split(' ')
    console.log(separador);
    for (const inserir of separador) {
      const spanTexto = document.createElement('span');
      spanTexto.innerText = inserir + ' ';
      paragrafoCarta.appendChild(spanTexto);
    }
  }
});
