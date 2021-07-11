const btnCreate = document.getElementById('criar-carta');
const cartaGerada = document.getElementById('carta-gerada');
const textInput = document.getElementById('carta-texto');

function createLetter() {
  const words = textInput.value.split(' ');
  while (cartaGerada.firstChild) {
    cartaGerada.removeChild(cartaGerada.lastChild);
  }
  if (words === [] || textInput.value.trim().length === 0) { // https://stackoverflow.com/questions/10261986/how-to-detect-string-which-contains-only-spaces
    cartaGerada.innerHTML = 'Por favor, digite o conteúdo da carta.';
  } else {
    for (let i = 0; i < words.length; i += 1) {
      const letter = document.createElement('span');
      letter.innerHTML = words[i];
      cartaGerada.appendChild(letter);
    }
  }
}

btnCreate.addEventListener('click', createLetter);
