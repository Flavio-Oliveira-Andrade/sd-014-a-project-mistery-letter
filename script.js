const btnCreate = document.getElementById('criar-carta');
const cartaGerada = document.getElementById('carta-gerada');
const textInput = document.getElementById('carta-texto');






function createLetter() {
  const letter = document.createElement('span');
  const word = textInput.value;
  letter.innerHTML = word;
  cartaGerada.appendChild(letter);

}

btnCreate.addEventListener('click', createLetter);
