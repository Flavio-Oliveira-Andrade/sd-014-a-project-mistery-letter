const buttonCriaCarta = document.querySelector('#criar-carta');
buttonCriaCarta.addEventListener('click', () => {
  const carta = document.querySelector('#carta-texto').value;
  const paragrafo = document.querySelector('#carta-gerada');
  paragrafo.innerHTML = '';
  const array = carta.split(' ');
  console.log(carta);
  console.log(array);
  for (let index = 0; index < array.length; index += 1) {
    const palavra = document.createElement('span');
    palavra.innerText = array[index];
    paragrafo.appendChild(palavra);
  }
});
