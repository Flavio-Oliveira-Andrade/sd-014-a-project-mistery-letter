// create paragraph
const button = document.querySelector('#criar-carta');
const paragraph = document.querySelector('#carta-gerada');
const userInput = document.querySelector('#carta-texto');

function createP() {
  paragraph.innerHTML = '';
  const input = userInput.value;
  const inputSplited = input.split(' ');

  if (input.trim() === '') {
    const errorSpan = document.createElement('span');
    errorSpan.innerText = 'Por favor, digite o conteúdo da carta.';
    paragraph.appendChild(errorSpan);
  }
  for (let i = 0; i < inputSplited.length; i += 1) {
    const span = document.createElement('span');
    span.innerText = inputSplited[i];
    paragraph.appendChild(span);
  }
}

button.addEventListener('click', createP);
