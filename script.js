const input = document.querySelector('#carta-texto');
const createLetter = document.querySelector('#criar-carta');
const letterContent = document.querySelector('#carta-gerada');

function changeLetter() {
  if (input.value.trim() === '') return 'Por favor, digite o conteúdo da carta.';
  const arr = input.value.split(' ');
  const spans = arr.map((e) => (
    `<span>${e}</span>`
  ));
  return spans.join('');
}

createLetter.addEventListener('click', () => {
  letterContent.innerHTML = changeLetter();
});
