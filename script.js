const btn = document.querySelector('#criar-carta');
const input = document.querySelector('#carta-texto');
const carta = document.querySelector('#carta-gerada');
const errorMessage = 'Por favor, digite o conteúdo da carta.';

function criarCarta() {
  carta.innerText = '';
  const texto = input.value.split(' ');
  function gerarCarta(item) {
    const palavra = document.createElement('span');
    carta.appendChild(palavra).innerText = item;
  }
  texto.forEach(gerarCarta);
}
// Botão executa função de criar carta
btn.addEventListener('click', () => {
  if (input.value && input.value.trim()) {
    criarCarta();
  } else {
    carta.innerText = errorMessage; 
  }
});
// Enter executa função de criar carta
input.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') { 
    if (input.value && input.value.trim()) {
      criarCarta();
    } else {
      carta.innerText = errorMessage; 
    }
  }
});
