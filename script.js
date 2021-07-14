const paragrafoCarta = document.getElementById('carta-gerada');
const btnCriarCarta = document.getElementById('criar-carta');
const inputCarta = document.getElementById('carta-texto');
const gpEstilo = ['newspaper', 'magazine1', 'magazine2'];
const gpTamanho = ['medium', 'big', 'reallybig'];
const gpRotacao = ['rotateleft', 'rotateright'];
const gpInclinacao = ['skewleft', 'skewright'];

btnCriarCarta.addEventListener('click', function () {
  if (inputCarta.value.trim().length === 0) { // .trim() retorna o texto sem espaços em branco no início e/ou fim da string.
    paragrafoCarta.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    paragrafoCarta.innerHTML = ' '; 
    const separador = inputCarta.value.split(' ');
    const cartaContador = document.getElementById('carta-contador');
    cartaContador.innerText = separador.length;

    for (const inserir of separador) {
      const spanTexto = document.createElement('span');
      spanTexto.innerText = inserir;
      spanTexto.classList.add(gpEstilo[Math.floor(Math.random() * 3)]);
      spanTexto.classList.add(gpTamanho[Math.floor(Math.random() * 3)]);
      spanTexto.classList.add(gpRotacao[Math.floor(Math.random() * 2)]);
      spanTexto.classList.add(gpInclinacao[Math.floor(Math.random() * 2)]);
      paragrafoCarta.appendChild(spanTexto);
    }
  }
});
