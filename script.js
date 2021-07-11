const input = document.getElementById('carta-texto');
const inputButton = document.getElementById('criar-carta');
const outputParagraph = document.getElementById('carta-gerada');
const classes = { // An empty string for each class for none class
  style: ['', 'newspaper', 'magazine1', 'magazine2'],
  size: ['', 'medium', 'big', 'reallybig'],
  rotate: ['', 'rotateleft', 'rotateright'],
  inclination: ['', 'skewleft', 'skewright'],
};

function randomClasses() {
  let classesRandomized = '';
  for (const group in classes) {
    classesRandomized += classes[group][Math.floor(Math.random() * (classes[group].length))] + ' ';
  }
  return classesRandomized;
}

function printsLetter(outputArray) {
  for (let index = 0; index < outputArray.length; index += 1) {
    const outputLetter = document.createElement('span');
    outputLetter.innerText = outputArray[index];
    while (outputLetter.classList.length < 2) { // Condition for at least two classes
      outputLetter.className = randomClasses(); // Gets string output
    }
    outputParagraph.appendChild(outputLetter);
  }
}

function generateLetter() {
  inputButton.addEventListener('click', () => {
    if (input.value.trim() === '') { // .trim() removes beginning and endind whitespaces
      outputParagraph.innerText = 'Por favor, digite o conteúdo da carta.';
    } else {
      outputParagraph.innerHTML = ''; // Clears past outputs
      const outputArray = input.value.trim().split(' '); // Turns input into array
      document.getElementById('carta-contador').innerText = `Contagem de palavras: ${outputArray.length}`;
      printsLetter(outputArray);
    }
  });
}
generateLetter();
