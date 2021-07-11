// Add classList de forma aleatoria:
function estilizar(tagSpan) {
  const grupoEstilo = ['newspaper', 'magazine1', 'magazine2'];
  const grupoTamanho = ['medium', 'big', 'reallybig'];
  const grupoRotacao = ['rotateleft', 'rotateright'];
  const grupoInclinacao = ['skewleft', 'skewright'];
  tagSpan.classList.add(grupoEstilo[Math.floor(Math.random() * 3)]);
  tagSpan.classList.add(grupoTamanho[Math.floor(Math.random() * 3)]);
  tagSpan.classList.add(grupoRotacao[Math.floor(Math.random() * 2)]);
  tagSpan.classList.add(grupoInclinacao[Math.floor(Math.random() * 2)]);
  tagSpan.classList.add('block');
}

const buttonCriaCarta = document.querySelector('#criar-carta');
buttonCriaCarta.addEventListener('click', () => {
  const carta = document.querySelector('#carta-texto').value;
  const paragrafo = document.querySelector('#carta-gerada');
  // Zera paragrafo para nao ter acumulo de span:
  paragrafo.innerHTML = '';
  const array = carta.split(' ');
  if (carta !== '' && array[0] !== '') {
    // Cria a tag span para cada palavra:
    for (let index = 0; index < array.length; index += 1) {
      const palavra = document.createElement('span');
      estilizar(palavra);
      palavra.innerText = array[index];
      paragrafo.appendChild(palavra);
    }
  } else {
    paragrafo.innerText = 'Por favor, digite o conteúdo da carta.';
  }
  const contadorDePalavras = document.querySelector('#carta-contador');
  contadorDePalavras.innerText = array.length;
});
