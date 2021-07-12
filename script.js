const inputText = document.getElementById('carta-texto');
const writeButton = document.getElementById('criar-carta');
const misteryLetter = document.getElementById('carta-gerada');

function writeLetter() {
  misteryLetter.innerHTML = '';
  const words = inputText.value.split(' ');
  words.forEach((word) => {
    const span = document.createElement('span');
    span.innerText = word;
    misteryLetter.append(span);
  });
}

writeButton.addEventListener('click', writeLetter);
