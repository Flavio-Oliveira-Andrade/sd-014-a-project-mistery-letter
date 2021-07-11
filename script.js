const letterDisplay = document.querySelector('#carta-gerada');
const writeDown = document.querySelector('#carta-texto');
const inputBtn = document.querySelector('#criar-carta');

// each word in input is put into the letter in individual span tags
function AddRansom() {
  letterDisplay.innerHTML = '';
  if (writeDown.value === '' || writeDown.value === ' ') {
    letterDisplay.innerHTML = 'Por favor, digite o conteúdo da carta.';
    return;
  }
  let rnsmWords = writeDown.value.split(' ');
  for (let i = 0; i < rnsmWords.length; i+=1) {
    const rnsmBlock = document.createElement('span');
    rnsmBlock.innerText = rnsmWords[i];
    letterDisplay.appendChild(rnsmBlock);
  }
}

// add event listener corner
inputBtn.addEventListener('click', AddRansom);
