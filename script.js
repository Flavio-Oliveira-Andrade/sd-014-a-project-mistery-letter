const btnCreate = document.querySelector('#criar-carta');
const letterResult = document.querySelector('#carta-gerada');

const allF = {
  create: function newLetter(string, result) {
    if (string.value === '') {
      return alert('Por favor, digite o conteúdo da carta.');
    }
    const words = string.split(' ');
    for (let index = 0; index < words.length; index += 1) {
      const word = `${words[index]} `;
      const wordSpace = document.createElement('span');
      result.appendChild(wordSpace);
      wordSpace.innerText = word;
    }
  },
};

// Event Listener
// Ao clicar criar a carta
btnCreate.addEventListener('click', () => {
  allF.create(document.querySelector('#carta-texto').value, letterResult);
});
