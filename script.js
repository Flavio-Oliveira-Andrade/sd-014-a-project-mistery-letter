const cardButton = document.getElementById('criar-carta');

function gerarCarta() {
  const input = document.getElementById('carta-texto').value;
  const card = document.getElementById('carta-gerada');
  card.innerHTML = '';
  const cartas = input.split(' ');
  for (let index = 0; index < cartas.length; index += 1) {
    const element = document.createElement('span');
    element.innerHTML = cartas[index];
    card.appendChild(element);
  }
}

cardButton.addEventListener('click', gerarCarta);
