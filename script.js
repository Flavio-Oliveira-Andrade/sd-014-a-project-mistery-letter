const letterContainer = document.getElementById('carta-gerada');

function createLetter() {
  const button = document.getElementById('criar-carta');
  button.addEventListener('click', () => {
    const text = document.getElementById('carta-texto').value;
    const words = text.split(' ');
    if (!text || /^\s+$/.test(text)) words[0] = 'Por favor, digite o conteúdo da carta.'
    letterContainer.innerHTML = '';
    for (let word of words) {
      const newSpan = document.createElement('span');
      newSpan.innerText = word;
      letterContainer.appendChild(newSpan);
    }
  });
}
createLetter();