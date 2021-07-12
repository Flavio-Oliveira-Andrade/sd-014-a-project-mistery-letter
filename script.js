const generateLetterBtn = document.querySelector('#criar-carta');
const paragraph = document.querySelector('#carta-gerada');
const input = document.querySelector('#carta-texto');

// Inspiração para Regex: https://stackoverflow.com/questions/10398931/how-to-remove-text-from-a-string

function alertEmptyLetter() {
  const message = input.value.replace(/ /g, '');
  console.log(message);
  if (!input.value || !message) {
    window.alert('Por favor, digite o conteúdo da carta.');
  }
}

function generateLetter() {
  alertEmptyLetter();
  paragraph.innerHTML = '';
  const wordArray = Array.from(input.value.split(' '));
  for (let i = 0; i < wordArray.length; i += 1) {
    const currentWord = document.createElement('span');
    currentWord.innerText = wordArray[i];
    paragraph.appendChild(currentWord);
  }
  console.log(wordArray);
}

generateLetterBtn.addEventListener('click', generateLetter);
