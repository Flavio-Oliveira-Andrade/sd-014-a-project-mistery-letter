const cardButton = document.getElementById('criar-carta');

function gerarCarta() {
  const input = document.getElementById('carta-texto').value;
  const card = document.getElementById('carta-gerada');
  card.innerHTML = '';
  if (input.trim() !== '') {
    const cartas = input.split(' ');
    for (let index = 0; index < cartas.length; index += 1) {
      const element = document.createElement('span');
      element.innerHTML = cartas[index];
      card.appendChild(element);
    }
  } else {
    card.innerText = 'Por favor, digite o conteúdo da carta.';
  }
}

cardButton.addEventListener('click', gerarCarta);
