const input = document.getElementById('carta-texto');
const inputButton = document.getElementById('criar-carta');
const outputParagraph = document.getElementById('carta-gerada');

function generateLetter() {
  inputButton.addEventListener('click', () => {
    if (input.value.trim() === '') { // .trim() removes beginning and endind whitespaces
      alert('Por favor, digite o conteúdo da carta.');
    } else {
      const outputArray = input.value.split(' '); // Turns input into array

      for (let index = 0; index < outputArray.length; index += 1) {
        const outputLetter = document.createElement('span');

        outputLetter.innerText = outputArray[index];

        outputParagraph.appendChild(outputLetter);
      }
    }
  });
}
generateLetter();
