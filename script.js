const myInput = document.getElementById('carta-texto');
const inputButton = document.getElementById('criar-carta');
const carta = document.getElementById('carta-gerada');
const cadaPal = document.getElementsByClassName('palavras-separadas');
const classEstilo = ['newspaper', 'magazine1', 'magazine2', 'nada'];
const classTamanho = ['medium', 'big', 'reallybig', 'nada'];
const classRotation = ['rotateleft', 'rotateright', 'nada'];
const classinclination = ['skewleft', 'skewright', 'nada'];

// https://pt.stackoverflow.com/questions/73214/criar-uma-combina%C3%A7%C3%A3o-aleatoria-com-classes-css-utilizando-javascript-ou-jquery
function sorteia(arr) {
  var rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}

function gerarCarta() {
  carta.innerText = '';
  if (myInput.value.trim() === '') {
    carta.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    const arrayTexto = myInput.value.split(' ');
    for (let i = 0; i < cadaPal.length; i += 1) {
      const element = cadaPal[i];
      carta.removeChild(element);
      i -= 1;
    }
    for (let i = 0; i < arrayTexto.length; i += 1) {
      const palInp = document.createElement('span');
      palInp.innerText = arrayTexto[i];
      palInp.classList.add('palavras-separadas');
      palInp.classList.add(sorteia(classEstilo));
      palInp.classList.add(sorteia(classTamanho));
      palInp.classList.add(sorteia(classRotation));
      palInp.classList.add(sorteia(classinclination));
      carta.appendChild(palInp);
    }
  }
}


inputButton.addEventListener('click', gerarCarta);
//inputButton.addEventListener('click', addClasses);