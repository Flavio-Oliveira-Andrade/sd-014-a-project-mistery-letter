const paragrafoCarta = document.getElementById('carta-gerada');
const btnCriarCarta = document.getElementById('criar-carta');
const inputCarta = document.getElementById('carta-texto');

btnCriarCarta.addEventListener('click', function () {

  const separador = inputCarta.value.split(' ')
  console.log(separador);
  for (const inserir of separador) {
    const spanTexto = document.createElement('span');
    spanTexto.innerText = inserir;
    paragrafoCarta.appendChild(spanTexto);
  }
});
