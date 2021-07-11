const input = document.getElementById('carta-texto');
const inputButton = document.getElementById('criar-carta');

function generateLetter() {
  inputButton.addEventListener('click', () => {
    if (input.value.trim() === '') { // .trim() removes beginning and endind whitespaces
      alert('Por favor, digite o conteúdo da carta.');
    }
  });
}
generateLetter();
