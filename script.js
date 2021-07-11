const buttonCriaCarta = document.querySelector('#criar-carta');
buttonCriaCarta.addEventListener('click', () => {
  let carta = document.querySelector('#carta-texto').value;
  const paragrafo = document.querySelector('#carta-gerada');
  // Zera paragrafo para nao ter acumulo de span:
  paragrafo.innerHTML = '';
  const array = carta.split(' ');
  // Verfica a condicao de o usuário digitar algo diferete de espaço vazio:  
  if (carta !== '' && array[0] !== '') {
    // Cria a tag span para cada palavra:
    for (let index = 0; index < array.length; index += 1) {
      const palavra = document.createElement('span');
      palavra.innerText = array[index];
      paragrafo.appendChild(palavra);
    }
  } else {
    paragrafo.innerText = 'Por favor, digite o conteúdo da carta.';
  }
});
