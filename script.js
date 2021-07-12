const myInput = document.getElementById('carta-texto');
const inputButton = document.getElementById('criar-carta');
const carta = document.getElementById('carta-gerada');
const cadaPal = document.getElementsByClassName('palavras-separadas');

function gerarCarta() {
  const arrayTexto = myInput.value.split(' ');
  for (let i = 0; i < cadaPal.length; i += 1){
    const element = cadaPal[i];
    carta.removeChild(element);
    i -= 1;
  }
  for (let i = 0; i < arrayTexto.length; i += 1) {
    const palInp = document.createElement('span');
    palInp.innerText = arrayTexto[i];
    palInp.classList.add('palavras-separadas');
    carta.appendChild(palInp);
  }
}

inputButton.addEventListener('click', gerarCarta);