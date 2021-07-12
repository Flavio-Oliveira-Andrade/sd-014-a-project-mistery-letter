// Espaço para criação de elementos
const main = document.querySelector('main');

const form = document.createElement('form');
main.appendChild(form);
const divCarta = document.createElement('div');
divCarta.id = 'carta-container';
main.appendChild(divCarta);

const label = document.createElement('label');
label.id = 'label-input';
label.htmlFor = 'carta-texto';
label.innerHTML = 'Insira um texto';
const input = document.createElement('input');
input.id = 'carta-texto';
const button = document.createElement('button');
button.id = 'criar-carta';
button.innerHTML = 'Gerar carta';
const pElement = document.createElement('p');
pElement.id = 'carta-gerada';

form.appendChild(label);
form.appendChild(input);
form.appendChild(button);
divCarta.appendChild(pElement);

// Espaço de funções e elementos
// https://cursos.alura.com.br/forum/topico-como-fazer-para-o-input-manter-o-valor-apos-a-submissao-84096
form.addEventListener('submit', function (e) {
  e.preventDefault();
});

function verificaInput() {
  if (input.value.startsWith('') && input.value.endsWith(' ')) {
    return true;
  }
  return false;
}

button.addEventListener('click', function () {
  pElement.innerHTML = '';
  const arr = input.value.split(' ');
  const arrLength = arr.length;
  if (verificaInput()) {
    pElement.innerHTML = 'Por favor, digite o conteúdo da carta.';
  } else {
    for (let i = 0; i < arrLength; i += 1) {
      const span = document.createElement('span');
      span.innerHTML = arr[i];
      pElement.appendChild(span);
    }
  }
});
