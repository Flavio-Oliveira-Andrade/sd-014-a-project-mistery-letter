const generateLetterBtn = document.querySelector('#criar-carta');
const paragraph = document.querySelector('#carta-gerada');
const input = document.querySelector('#carta-texto');

// Inspiração para Regex: https://stackoverflow.com/questions/10398931/how-to-remove-text-from-a-string

function createLetter() {
  paragraph.innerHTML = '';
  if (input.value.replace(/ /g, '') === '') {
    paragraph.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    const wordArray = Array.from(input.value.split(' '));
    for (let i = 0; i < wordArray.length; i += 1) {
      const word = document.createElement('span');
      word.innerText = wordArray[i];
      paragraph.appendChild(word);
    }
  }
}

generateLetterBtn.addEventListener('click', createLetter);