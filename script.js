const letterDisplay = document.querySelector('#carta-gerada');
const writeDown = document.querySelector('#carta-texto');
const inputBtn = document.querySelector('#criar-carta');

inputBtn.addEventListener('click', AddRansom);

function AddRansom() {
  letterDisplay.innerHTML = '';
  let rnsmWords = writeDown.value.split(' ');
    for (let i = 0; i < rnsmWords.length; i++) {
    let rnsmBlock = document.createElement('span');
    rnsmBlock.innerText = rnsmWords[i];
    letterDisplay.appendChild(rnsmBlock);
  }
};