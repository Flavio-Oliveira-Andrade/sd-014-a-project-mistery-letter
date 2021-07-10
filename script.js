const criarCarta = document.getElementById('criar-carta');
const cartaTexto = document.getElementById('carta-texto');
const cartaGerada = document.getElementById('carta-gerada');

criarCarta.addEventListener('click', () => {
  let letter = cartaTexto.value.trim();
  if (letter === '') {
    cartaGerada.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    letter = letter.split(/[ ]+/);
    cartaGerada.innerHTML = '';
    letter.forEach((word) => {
      const span = document.createElement('span');
      span.innerText = `${word} `;
      cartaGerada.appendChild(span);
    });
  }
});
