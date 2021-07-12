const btnCreate = document.querySelector('#criar-carta');
const letterResult = document.querySelector('#carta-gerada');
const letterInput = document.querySelector('#carta-texto');

const allF = {
  create: function newLetter(string, result) {
    allF.clearLetter();
    allF.checker(letterInput.value);
    const words = string.split(' ');
    for (let index = 0; index < words.length; index += 1) {
      const wordSpace = document.createElement('span');
      result.appendChild(wordSpace);
      wordSpace.innerText = `${words[index]}`;
    }
  },
  checker: function checkText(string) {
    if (string.split(' ').every((x) => x === '')) {
      letterResult.innerText = 'por favor, digite o conteúdo da carta.';
    }
  },
  clearLetter: function clear() {
    letterResult.innerHTML = '';
  },
};

// Event Listener
// Ao clicar criar a carta
btnCreate.addEventListener('click', () => {
  allF.create(letterInput.value, letterResult);
});
