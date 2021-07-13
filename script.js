const paragrafoCarta = document.getElementById('carta-gerada');
const btnCriarCarta = document.getElementById('criar-carta');
const inputCarta = document.getElementById('carta-texto');
// const gpEstilo = ['newspaper', 'magazine1', 'magazine2'];
// const gpTamanho = ['medium', 'big', 'reallybig'];
// const gpRotacao = ['rotateleft', 'rotateright'];
// const gpInclinacao = ['skewleft', 'skewright'];

const classEstilos = ['newspaper', 'magazine1', 'magazine2', 'medium', 'big', 'reallybig', 'rotateleft', 'rotateright', 'skewleft', 'skewright'];

console.log(classEstilos)
btnCriarCarta.addEventListener('click', function () {
  if (inputCarta.value === '') {
    paragrafoCarta.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    const separador = inputCarta.value.split(' ');
    for (const inserir of separador) {
      const spanTexto = document.createElement('span');
      spanTexto.innerText = inserir;
      const numRandom = Math.floor(Math.random() * 10);
      spanTexto.classList.add(classEstilos[numRandom]);
      spanTexto.classList.add(classEstilos[numRandom]);
      spanTexto.classList.add(classEstilos[numRandom]);
      spanTexto.classList.add(classEstilos[numRandom]);
      paragrafoCarta.appendChild(spanTexto);
    }
  }
});
