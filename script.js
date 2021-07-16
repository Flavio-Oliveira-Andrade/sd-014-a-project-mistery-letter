const msg = document.getElementById('carta-texto');
const btnCriar = document.getElementById('criar-carta');
const carta = document.getElementById('carta-gerada');
const estilo = ['newspaper', 'magazine1', 'magazine2'];
const tamanho = ['medium', 'big', 'reallybig'];
const rotacao = ['rotateleft', 'rotateright'];
const inclinacao = ['skewleft', 'skewright'];

function createLetter() {
  const words = msg.value.split(' ');

  if (msg.value.trim().length === 0) {
    carta.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    carta.innerText = '';
    for (let index = 0; index < words.length; index += 1) {
      const word = document.createElement('span');
      word.innerText = words[index];
      word.classList.add(estilo[Math.floor(Math.random() * estilo.length)]);
      word.classList.add(tamanho[Math.floor(Math.random() * tamanho.length)]);
      word.classList.add(rotacao[Math.floor(Math.random() * rotacao.length)]);
      word.classList.add(inclinacao[Math.floor(Math.random() * inclinacao.length)]);
      carta.appendChild(word);
    }
  }
}

btnCriar.addEventListener('click', createLetter);