const generateLetterBtn = document.querySelector('#criar-carta');
const paragraph = document.querySelector('#carta-gerada');
const input = document.querySelector('#carta-texto');

function generateLetter() {
  const wordArray = Array.from(input.value.split(' '));
  for (let i = 0; i < wordArray.length; i += 1) {
    const currentWord = document.createElement('span');
    currentWord.innerText = wordArray[i];
    paragraph.appendChild(currentWord);
  }
}

generateLetterBtn.addEventListener('click', generateLetter);
