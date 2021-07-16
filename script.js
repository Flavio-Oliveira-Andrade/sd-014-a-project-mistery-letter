const msg = document.getElementById('carta-texto');
const btnCriar = document.getElementById('criar-carta');
const carta = document.getElementById('carta-gerada');

function createLetter() {
  const words = msg.value.split(' ');

  if (msg.value.trim().length === 0) {
    carta.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    carta.innerText = '';
    for (let index = 0; index < words.length; index += 1) {
      const word = document.createElement('span');
      word.innerText = words[index];
      carta.appendChild(word);
    }
  }

}
btnCriar.addEventListener('click', createLetter);