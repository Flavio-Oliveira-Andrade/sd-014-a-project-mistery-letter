const input = document.getElementById('carta-texto');
const inputButton = document.getElementById('criar-carta');
const outputParagraph = document.getElementById('carta-gerada');
const wordCounter = document.getElementById('carta-contador');
const classes = [ // An empty string for each class for none class
  ['newspaper', 'magazine1', 'magazine2'],
  ['medium', 'big', 'reallybig'],
  ['rotateleft', 'rotateright'],
  ['skewleft', 'skewright'],
];

function randomClasses() {
  let classesRandomized = '';
  for (const group in classes) {
    classesRandomized += `${classes[group][Math.floor(Math.random() * (classes[group].length))]} `;
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
      wordCounter.innerText = outputArray.length;
      printsLetter(outputArray);
    }
  });
}
generateLetter();
